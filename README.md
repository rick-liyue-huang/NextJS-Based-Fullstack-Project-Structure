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


