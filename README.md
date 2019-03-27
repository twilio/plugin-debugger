@twilio/plugin-debugger
========================

Access and stream your Twilio debugger logs.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @twilio/plugin-debugger
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@twilio/plugin-debugger/0.0.1 darwin-x64 node-v11.12.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example debugger:logs:list`](#oclif-example-debuggerlogslist)

## `oclif-example debugger:logs:list`

Show a list of log events generated for the account

```
USAGE
  $ oclif-example debugger:logs:list

OPTIONS
  -l, --log-level=(debug|info|warn|error|none)  [default: info] Level of logging messages
  -o, --output-format=(columns|json|tsv)        [default: columns] Format of command output
  -p, --project=project                         [default: default] Shorthand identifier for your Twilio project
  -s, --streaming                               Continuously stream incoming log events
  --end-date=end-date                           Only show log events on or before this date

  --properties=properties                       [default: dateCreated, logLevel, errorCode, alertText] The event
                                                properties you would like to display (JSON output always shows all
                                                properties)

  --start-date=start-date                       Only show log events on or after this date

DESCRIPTION
  Argg, this is only a subset of the log events and live tailing isn't quite ready! Think this is a killer feature? 
  Email aroach@twilio.com and tell him.
```

_See code: [src/commands/debugger/logs/list.js](https://github.com/twilio/plugin-debugger/blob/v0.0.1/src/commands/debugger/logs/list.js)_
<!-- commandsstop -->
