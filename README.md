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
4. `yarn add -D prettier` to add prettier dependency on project.
