---
description: Create a commit message by analyzing the changes in the code.
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*)
---
# Your task

Analyze the git diff and create a concise and descriptive commit message following conventional commits standards (https://www.conventionalcommits.org/en/v1.0.0/)
## Run these commands

```bash
git status
git diff --staged
```

## Commit types with emojis
Only use the following emojis:

- feat: :sparkles: - New Feature
- fix: :bug: - Bug Fix
- chore: :wrench: - Chore
- docs: :memo: - Documentation
- design: :art: - Design 
- design-ux: :nail_care: - UX Design
- refactor: :recycle: - Refactoring
- style: :lipstick: - Styling
- test: :white_check_mark: - Testing

## format
Use the following format:
```
<emoji> <type>: <description>
<optional_body_explaining_why>
```
## Output
1. Shows summary of changes currently staged
2. Shows the commit message with emoji
3. Aks for confirmation before committing


DO NOT auto-commit, wait for user confirmation.