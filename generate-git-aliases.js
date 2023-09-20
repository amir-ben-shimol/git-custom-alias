const fs = require('fs');
const path = require('path');

const customCommands = require('./.custom-command.json'); // Load custom commands from the JSON file

for (const alias in customCommands) {
  const commands = customCommands[alias];
  const aliasScript = `git ${commands.join(' && ')}`;

  fs.writeFileSync(path.join('.git', 'git-aliases'), `#!/bin/sh\n${alias}='!${aliasScript}'\n`, { flag: 'a' });
}
