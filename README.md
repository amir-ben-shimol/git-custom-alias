## git-custom-alias

Git Custom alias is an npm package that allows you to define and run custom Git commands easily. You can create a `.custom-alias.json` file to specify your custom Git commands, and this package will execute them for you.

## Installation

To install Git Custom alias, run the following command in your project directory:

```bash
npm install -g git-custom-alias
```

## Getting Started

Create a custom-alias.json file in your project directory with your custom Git commands. Here's an example configuration:

```json
{
	"update": ["fetch", "pull", "merge origin/main"],
	"fixed-ui": ["add .","commit -m 'Fixed general UI issues'", "push"]
}
```

## Execute Custom aliases

Execute your custom Git aliases by running:

```bash
git <alias-name>
```

Replace with the name of the custom alias you defined in your .custom-alias.json file.

## Contributing

Amir Ben Shimol - Lead Developer
