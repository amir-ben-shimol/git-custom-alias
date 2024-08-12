import * as fs from "fs";
import * as path from "path";

export interface GitAliasConfig {
  [key: string]: string[];
}

export function loadConfig(configFileName: string = "git-alias.config.json"): GitAliasConfig {
  const configPath = path.resolve(process.cwd(), configFileName);
  if (!fs.existsSync(configPath)) {
    throw new Error(`Config file ${configFileName} not found`);
  }
  const configContent = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(configContent) as GitAliasConfig;
}
