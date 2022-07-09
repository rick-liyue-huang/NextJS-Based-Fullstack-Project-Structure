## NextJS Based Fullstack Project Structure 

I create one common project structure used in my future project whenever the project is based on NextJS.

1. add '.nvmrc' file to control the node version available from 16.
2. add '.npmrc' file to control the npm usage in this project, in which it matchs with code
```json
  "engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
```, 
thus, I only use 'yarn' to install the package in this project.
