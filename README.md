# darg
> `Deno ARGs` - argument parser for Deno

<!-- BEGIN mktoc -->
- [Usage](#usage)
  - [Default value](#default-value)
  - [Required values](#required-values)
  - [Check if help flag is set](#check-if-help-flag-is-set)
- [License](#license)
<!-- END mktoc -->

Minimal effort arg parser, just enough to get [https://github.com/kevingimbel/license-cli](https://github.com/kevingimbel/license-cli) working. You probably do not want to use this in your scripts.

## Usage

Import Darg and create new instance
```ts
import { Darg } from "https://raw.githubusercontent.com/kevingimbel/darg/master/src/mod.ts"

const darg = new Darg();
```
Get a cli value. `unwrap()` retrieves the value
```ts
// Searches for `-u`, `-user` and `--user`
// So these three are all the same
// mycli -u kevin
// mycli -user kevin
// mycli --user kevin
let user = darg.parse("user").unwrap();
// user => "kevin"
```

### Default value
Use `unwrap_or()` to assign a default value
```ts
// Default value
// mycli -v -n 1 
let user = darg.parse("user").unwrap_or("jane");
// user => "jane"
```

### Required values

Set the second parameter to `true` to validate the argument exists - exits with error code `1` and logs `"Argument -xxx (or -x, --xxx) is required`
```ts
// Required value
// mycli -v -n 1
let user = darg.parse("user", true);
// => "Argument -user (or -u, --user) is required"
```

### Check if help flag is set
```ts
// check if a help flag is present anywhere in the args
// mycli --help 
// mycli list --help
// mycli subcommand subcommand -h
darg.is_help();
```

## License

See LICENSE file