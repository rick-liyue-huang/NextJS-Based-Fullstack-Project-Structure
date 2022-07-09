## NextJS Based Fullstack Project Structure 

I create one common project structure used in my future project whenever the project is based on NextJS.

1. add '.nvmrc' file to control the node version available from 16;
2. add '.npmrc' file to control the npm usage in this project, in which it matchs with code, thus, I only use 'yarn' to install the package in this project;
```
  "engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  }
```
3. I use eslint to confirm the project coding consistency between the different developers, by which I code in '.eslintrc.json', and then I can run `yarn lint` to check the file '.eslintrc.json' working or not;
4. `yarn add --dev --exact prettier` to add prettier dependency on project, and then code `echo {}> .prettierrc.json` to create '.prettierrc.json', in which I code 
```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
``` 
5. I add 'husky' to deal with git hooks by running `yarn add -D husky` and then `npx husky install`. In order to realize the husky for pre-commit and pre-build, I run `npx husky add .husky/pre-commit "yarn lint"
   ` and `npx husky add .husky/pre-push "yarn build"` to get two files under .husky directory.

6. I run `yarn add -D @commitlint/cli @commitlint/config-conventional` and `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'` to lint your commit messages and makes sure they follow a set of rules. It runs as a husky pre-commit hook, that is, it runs before the code is committed and blocks the commit in case it fails the lint checks. I create file named 'commentlint.config.js' to define the comment lint rules;
7. for the developers using vscode, I create '.vscode/setting.json' and '.vscode/launch.json' to config in vscode, and also add 'cross-env NODE_OPTIONS='--inspect' next dev' to set the server side logs;
8. add storybook to create some component conveniently by coding `npx sb init --builder webpack5` to create the stroybook configuration directories, here note to add `yarn add util` to polyfill the webpack5 
9. 
