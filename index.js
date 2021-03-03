const fork = require('child_process').fork;
const execSync = require('child_process').execSync;

const cliTarget = process.argv[2];
if (cliTarget) {
  const cliScriptPath = execSync(`which ${cliTarget}`).toString().replace(/[\r\n]+/, '');
  fork(cliScriptPath, process.argv.slice(3), { execArgv: ['--inspect-brk'] });
}