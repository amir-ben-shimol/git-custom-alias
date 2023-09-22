import * as fs from "fs";

type GitCommands = Record<string, string[]>;

export class GitCustomCommand {
	private config: GitCommands;

	constructor() {
		this.config = this.loadCustomConfig();
		this.generateAliasScript();
	}

	private loadCustomConfig(): GitCommands {
		try {
			const configFile = fs.readFileSync(".custom-command.json", "utf-8");
			return JSON.parse(configFile);
		} catch (error: any) {
			console.error(`Error loading custom config: ${error.message}`);
			return {};
		}
	}

	private generateAliasScript() {
		const aliasScript = Object.entries(this.config)
			.map(([alias, commands]) => `git config alias.${alias} "!git ${commands.join(" && !git ")}"`)
			.join("\n");

		fs.writeFileSync("set-git-aliases.sh", aliasScript);
		console.log("Generated alias setup script (set-git-aliases.sh)");
	}
}

new GitCustomCommand();
