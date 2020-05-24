function _darg_log_arg_required(arg: string) {
  console.error(`Error: Argument ${arg} (or -${arg[0]}, --${arg}) is required`);
}

export function _darg_get_deno_arg(
  arg: string,
  required?: boolean,
): string {
  let arg_index: number | undefined = Deno.args.indexOf(arg);
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
    _darg_log_arg_required(arg);
    Deno.exit(1);
  }

  return argument_value;
}
