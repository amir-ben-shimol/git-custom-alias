"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitCustomCommand = void 0;
const fs = __importStar(require("fs"));
class GitCustomCommand {
    constructor() {
        this.config = this.loadCustomConfig();
        this.generateAliasScript();
    }
    loadCustomConfig() {
        try {
            const configFile = fs.readFileSync(".custom-alias.json", "utf-8");
            return JSON.parse(configFile);
        }
        catch (error) {
            console.error(`Error loading custom config: ${error.message}`);
            return {};
        }
    }
    generateAliasScript() {
        const aliasScript = Object.entries(this.config)
            .map(([alias, commands]) => `git config alias.${alias} "!git ${commands.join(" && git ")}"`)
            .join("\n");
        fs.writeFileSync("set-git-aliases.sh", aliasScript);
        console.log("Generated alias setup script (set-git-aliases.sh )");
    }
}
exports.GitCustomCommand = GitCustomCommand;
new GitCustomCommand();
