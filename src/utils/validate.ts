import { execSync } from "child_process";

export function validateGitCommands(commands: string[]): boolean {
  try {
    // Join all commands into one string and validate as a batch
    const commandString = commands.map((cmd) => `git ${cmd}`).join(" && ");
    execSync(commandString, { stdio: "ignore" });
    return true;
  } catch (error) {
    console.error(`Validation failed: ${error}`);
    return false;
  }
}
