# Search user and user's repositories in GitHub
Allow searching GitHub users and their repositories.


## Live Demo
[MVST-TASK](https://mvst-task.vercel.app/)

## Installation
Clone the source code:
```bash
git clone https://github.com/gokhansisman/mvst-task.git
```
### Project dependencies
After clone the repository change to the directory:
```bash
cd mvst-task
```
Then install dependencies
```bash
yarn install or npm install
```
### Starting the app
Run `yarn dev` to start the application.

### Configure .env variable
Rename `example.env` and set `YOUR_GITHUB_TOKEN`
Check [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) how to create personal tokens for GitHub
Otherwise you can not query without personal token

### Testing
Run `yarn test` to test suite.

### Tech stack
- `React`
- `TypeScript`
- `GraphQL`

### Future improvements
- Improve test cases
- Extend query and make bigger UI
- Improve storybook, writing mdx files
- GitHub login

### Feedback

Everything was great, I really like the GitHub GraphQL Explorer. I did not know before. 
Task revealed in which topics I need to improve myself more.