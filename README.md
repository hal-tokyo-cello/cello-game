# CELLO Game

General Info

![GitHub](https://img.shields.io/github/license/hal-tokyo-cello/cello-game)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/hal-tokyo-cello/cello-game)

Release Info

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/hal-tokyo-cello/cello-game?sort=semver)
[![Deploy to GitHub Pages](https://github.com/hal-tokyo-cello/cello-game/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/hal-tokyo-cello/cello-game/actions/workflows/deploy.yml)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fwww.cellolearn.net%2F)

Development Info

![GitHub language count](https://img.shields.io/github/languages/count/hal-tokyo-cello/cello-game)
![GitHub top language](https://img.shields.io/github/languages/top/hal-tokyo-cello/cello-game)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/hal-tokyo-cello/cello-game/vue)

Try it out on [CELLO Learn](https://www.cellolearn.net/)!

## Contribution

Get started with following command.

```sh
git clone git@github.com:hal-tokyo-cello/cello-game.git
npm install
```

Start dev server

```sh
npx run dev
```

Test code

```sh
npx run test
```

### vscode

Recommended workspace settings

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

## Usage

Run the following to build the project.

```sh
npm run build
```

## Behaviour

### Configuration

To build or run dev server, it need the following environment variable. You can utilize `.env` file while in development.

- `CELLO_API_SERVER`: URL to the API server
