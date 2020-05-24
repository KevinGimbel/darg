# darg
> `Deno ARGs` - argument parser for Deno

<!-- BEGIN mktoc -->
- [Usage](#usage)
- [License](#license)
<!-- END mktoc -->

Minimal effor arg parser, just enough to get [https://github.com/kevingimbel/license-cli](https://github.com/kevingimbel/license-cli) working. You probably do not want to use this in your scripts.

## Usage

```ts
import { Darg } from "https://raw.githubusercontent.com/kevingimbel/darg/master/src/mod.ts"

const darg = Darg({log_required_values: true})
// Searches for `-u`, `-user` and `--user`
// So these three are all the same
// mycli -u kevin
// mycli -user kevin
// mycli --user kevin
let user = darg.parse("user").unwrap();

// Default value
// mycli -v -n 1 // => user = jane
let user = darg.parse("user").unwrap_or("jane");

// Required value
// mycli -v -n 1 // => exits with 1 and logs "Argument user (or -u, --user) is required"
let user = darg.parse("user", true);

// check if a help flag is present anywhere in the args
// mycli --help 
// mycli list --help
// mycli subcommand subcommand -h
darg.is_help();
```

## License

See LICENSE file