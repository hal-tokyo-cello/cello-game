# CELLO Game

## CONTRIBUTE

Get started with following command.

```sh
git clone git@github.com:hal-tokyo-cello/cello-game.git
npm install
```

Start dev server

```sh
npx vite
```

Test code

```sh
npx jest test
```

### vscode

Recommended extensions other than workspace recommendation.

- `oderwat.indent-rainbow`

Recommended user settings

```json
{
    "files.autoSave": "onFocusChange",
    "files.exclude": {
        "**/.git": true,
        "**/node_modules": true
    },
    "explorer.fileNesting.enabled": true,
    "explorer.fileNesting.patterns": {
        "*.vue": "${capture}.test.ts, ${capture}.test.js",
        "*.ts": "${capture}.js, ${capture}.js.map, ${capture}.d.ts",
        "tsconfig.json": "tsconfig.*.json",
        "package.json": "package-lock.json, yarn.lock, pnpm-lock.yaml"
    },
    "conventionalCommits.autoCommit": false,
    "jest.autoRun": "off"
}
```