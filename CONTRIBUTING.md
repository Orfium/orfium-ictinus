# Branch Creation

You can create a new branch by getting the latest from the working repository (master).

Example:
`git checkout -b feature/new-feature`

# Pull Requests

Make a pull request as soon as you can and mark the title with a "[WIP]" if its under development. You can create a draft pull request as well.

Creating a PR with necessary information.

- Describe your change in detail. Too much detail is better than too little. Keep in mind that you must describe your changes as the person who will read it to fully understand it without any further communication (if possible).
- Describe how you tested your change.
- Provide usefull screenshots of the change.

### PR Title and commit msg

Your commit messages must meet the [conventional commit format](https://conventionalcommits.org/) as it will help reviewers go in to the PR and understand what you were doing exactly.
However, the Pull Requests are get squashed and merged to master repository so commits will not show and only PR title will be shown.

#### Examples

**Good PR Titles** ✅<br/>

- chore(docs): Fix datepicker documentation when selecting
- feat(TextField): Add support for keyboard navigation

**Bad PR Titles** ❌<br/>

- new tests
- fixing a bug

#### Who can merge a PR?

PRs will only be merged by the creator of the Pull Request (if it is a member of the core team) or in special cases another member of the core team.

# Code Guidelines

Write comprehensive and robust tests that cover the changes you've made in your work. This is not to specify type of testing.

- Follow the appropriate code style standards based on the project.
- Write readable code – keep functions small and modular and name variables descriptively.
- Document your code thoroughly.
- Make sure all the existing tests pass.
