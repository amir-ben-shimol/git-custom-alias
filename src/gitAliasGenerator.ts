import { GitAliasConfig } from "./config";
import { validateGitCommands } from "./utils/validate";

export function generateGitAliasCommands(config: GitAliasConfig): string {
  let gitAliasContent = "[alias]\n";

  for (const [alias, commands] of Object.entries(config)) {
    // Validate the commands before generating the alias
    if (!validateGitCommands(commands)) {
      throw new Error(`Invalid git command in alias "${alias}"`);
    }

    const joinedCommands = commands.map((cmd) => `git ${cmd}`).join(" && ");
    gitAliasContent += `  ${alias} = "!${joinedCommands}"\n`;
  }

  return gitAliasContent;
}
