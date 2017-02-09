## simple node project steps:

1. create a project folder (`mkdir my-project && cd my-project`)
2. `lib` and `test` folders (`> mkdir lib test`)
3. `npm init` to create a `package.json`
4. `.eslintrc` to enforce lint rules
5. `npm i mocha chai eslint -D` to put in testing libraries

## create a repo after the fact:

1. locally:
    * `git init`
    * `git add . && git commit -m 'initial commmit'`
2. on github:
    * Create new repo
    * Copy repo url
3. locally:
    * `git remote add origin <url-of-new-repository>`
    * `git push -u origin master`