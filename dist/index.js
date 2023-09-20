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
// src/index.ts
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class GitCustomCommand {
    constructor() {
        this.config = this.loadCustomConfig();
        this.createGitAliases();
    }
    loadCustomConfig() {
        try {
            const configFile = fs.readFileSync('.custom-command.json', 'utf-8');
            return JSON.parse(configFile);
        }
        catch (error) {
            console.error(`Error loading custom config: ${error.message}`);
            return {};
        }
    }
    createGitAliases() {
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
exports.GitCustomCommand = GitCustomCommand;
