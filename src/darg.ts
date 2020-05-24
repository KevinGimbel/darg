import { DargArgumentValue } from "./types.ts";

export class Darg {
  private value: DargArgumentValue;

  constructor() {}

  parse(arg: string, is_required?: boolean): Darg {
    let v = this.get_deno_arg(arg, is_required);
    this.value = v;
    return this;
  }

  unwrap(): any {
    return this.value;
  }

  unwrap_or(defaultValue: any): any {
    return this.value != "" ? this.value : defaultValue;
  }

  is_help(): boolean {
    return (Deno.args.indexOf("-h") >= 0 || Deno.args.indexOf("--help") >= 0 ||
      Deno.args.indexOf("help") >= 0);
  }

  private get_deno_arg(
    arg: string,
    required?: boolean,
  ): string {
    let wanted: any[] = [arg, `-${arg[0]}`, `--${arg}`];
    let argument_value = "";

    for (let a in wanted) {
      let index = Deno.args.indexOf(wanted[a]);
      if (index >= 0) {
        argument_value = Deno.args[index + 1];
        break;
      }
    }

    if (required && argument_value == "") {
      // Don't log and exit if help was requested
      if (!this.is_help()) {
        this.log_arg_required(arg);
        Deno.exit(1);
      }
    }

    return argument_value;
  }

  private log_arg_required(arg: string) {
    console.error(
      `Error: Argument ${arg} (or -${arg[0]}, --${arg}) is required`,
    );
  }
}
