import { execSync } from "child_process";

export function validateGitCommands(commands: string[]): boolean {
  return commands.every((cmd) => {
    try {
      execSync(`git ${cmd}`, { stdio: "ignore" });
      return true;
    } catch {
      return false;
    }
  });
}
