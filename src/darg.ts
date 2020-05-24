import { DargArgumentValue, DargConfig } from "./types.ts";
import { _darg_get_deno_arg } from "./args.ts";

export class Darg {
  private value: DargArgumentValue;

  constructor() {}

  parse(arg: string, is_required?: boolean): Darg {
    let v = _darg_get_deno_arg(arg, is_required);
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
}
