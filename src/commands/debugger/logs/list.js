const { TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

class DebuggerLogsList extends TwilioClientCommand {
  async run() {
    await super.run();

    this.output({ message: 'Hello, world!' });
  }
}

DebuggerLogsList.PropertyFlags = {};

DebuggerLogsList.flags = Object.assign(
  {},
  DebuggerLogsList.PropertyFlags,
  TwilioClientCommand.flags
);

module.exports = DebuggerLogsList;
