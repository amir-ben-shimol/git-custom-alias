import * as fs from "fs";
import * as path from "path";
import { loadConfig } from "./config";
import { generateGitAliasCommands } from "./gitAliasGenerator";
import { execSync } from "child_process";

function updateGitConfig(tempConfigContent: string): void {
  const tempConfigPath = path.resolve(process.cwd(), ".gitconfig_temp");
  fs.writeFileSync(tempConfigPath, tempConfigContent);
  try {
    execSync(`git config --global --remove-section alias`, { stdio: "ignore" });
  } catch (error) {
    // Alias section might not exist, ignore this error
  }
  execSync(`git config --global --add include.path ${tempConfigPath}`);
  fs.unlinkSync(tempConfigPath);
}

function main() {
  try {
    const config = loadConfig();

    const gitAliasContent = generateGitAliasCommands(config);
    console.log(gitAliasContent);
    updateGitConfig(gitAliasContent);
    console.log("Git aliases have been successfully created/updated.");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
