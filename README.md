## git-custom-command

Git Custom Command is an npm package that allows you to define and run custom Git commands easily. You can create a custom-command.json file to specify your custom Git commands, and this package will execute them for you.

## Installation

To install Git Custom Command, run the following command in your project directory:

```bash
npm install -g git-custom-command
```

## Getting Started

Create a custom-command.json file in your project directory with your custom Git commands. Here's an example configuration:

```json
{
	"my-custom-command": ["git fetch", "git merge origin/dev", "git push"],
	"fast-push": ["git add .", "git push"]
}
```

## Execute Custom Commands

Execute your custom Git commands by running:

```json
git <command-name> -m "your commit message"
```

Replace with the name of the custom command you defined in your .customcommand file.

## Contributing

Amir Ben Shimol - Lead Developer
