const { expect, test } = require('@twilio/cli-test');
const { Config, ConfigData } = require('@twilio/cli-core').services.config;
const DebuggerLogsList = require('../../../../src/commands/debugger/logs/list');

describe('debugger:logs:list', () => {
  test
    .stdout()
    .twilioFakeProject(ConfigData)
    .twilioCliEnv(Config)
    .twilioCreateCommand(DebuggerLogsList, [])
    .it('actually runs IRL', async ctx => {
      await ctx.testCmd.run();

      expect(ctx.stdout).to.contain('Hello, world!');
    });
});
