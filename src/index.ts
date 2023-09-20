import * as fs from 'fs';
import * as path from 'path';

type GitCommands = Record<string, string[]>;

export class GitCustomCommand {
  private config: GitCommands;

  constructor() {
    this.config = this.loadCustomConfig();
    this.createGitAliases();
  }

  private loadCustomConfig(): GitCommands {
    try {
      const configFile = fs.readFileSync('.custom-command.json', 'utf-8');
      return JSON.parse(configFile);
    } catch (error: any) {
      console.error(`Error loading custom config: ${error.message}`);
      return {};
    }
  }

  private createGitAliases() {
    const gitConfigPath = path.join('.git', 'config');
    const gitAliases = [];

    for (const alias in this.config) {
      const commands = this.config[alias];
      const aliasScript = `!sh -c "git ${commands.join(' && ')}"`;
      gitAliases.push(`[alias]\n  ${alias} = ${aliasScript}`);
    }

    fs.writeFileSync(gitConfigPath, gitAliases.join('\n\n'), { flag: 'a' });
  }
}
