# TypeScript

### Introduction

TypeScript is a programming language that builds on JavaScript by adding types. This means you can tell the computer what kind of data (like numbers or text) you expect in your code, which helps catch mistakes before running the program. TypeScript code gets turned into regular JavaScript that works in browsers, making it easier to write safer and more reliable code.

### Installation

##### TypeScript in Your Project
Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently.

`npm install typescript --save-dev`

##### Globally Installing TypeScript
It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.

`npm install -g typescript`

##### Use ts-node with CommonJS

`npm i -g ts-node`

##### Add a simple tsconfig.json

`npx tsc --init`

Then you can now run the code using code runner.