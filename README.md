# hugo-bin-extended [![npm version](https://img.shields.io/npm/v/hugo-bin-extended.svg)](https://www.npmjs.com/package/hugo-bin-extended) [![Build Status](https://img.shields.io/github/workflow/status/MarlonLuan/hugo-bin-extended/CI/main)](https://github.com/MarlonLuan/hugo-bin-extended/actions?query=workflow%3ACI+branch%3Amain)

> Binary wrapper for [Hugo](https://gohugo.io/)

## Install

```sh
npm install hugo-bin-extended --save-dev
```

For usage within corporate networks or behind corporate proxies, the download repository can be overwritten, see [Installation options](#installation-options) for more details.

## Usage

### API

```js
import { execFile } from 'node:child_process';
import hugo from 'hugo-bin-extended';

execFile(hugo, ['version'], (error, stdout) => {
  if (error) {
    throw error;
  }

  console.log(stdout);
});
```

### CLI

```sh
$(npm bin)/hugo --help
npm run create -- post/my-new-post.md # see below 'npm run-script'
```

or on Windows:

```bat
for /f "delims=" %F in ('npm bin') do call "%F\hugo" help
rem see below 'npm run-script'
npm run create -- post/my-new-post.md
```

### npm run-script

```json
{
  "scripts": {
    "build": "hugo",
    "create": "hugo new",
    "serve": "hugo server"
  }
}
```

See the [Hugo Documentation](https://gohugo.io/) for more information.

## Installation options

hugo-bin-extended supports options to change the variation of Hugo binaries and to overwrite the download repository.

Each option can be configured in the `hugo-bin-extended` section of your `package.json`:

```json
{
  "name": "your-package",
  "version": "0.0.1",
  "hugo-bin-extended": {
    "downloadRepo" : "https://some.example.com/artifactory/github-releases"
  }
}
```

Also as local or global [.npmrc](https://docs.npmjs.com/files/npmrc) configuration file:

```ini
hugo_bin_extended_download_repo = "https://some.example.com/artifactory/github-releases"
```

Also as an environment variable:

```sh
export HUGO_BIN_EXTENDED_DOWNLOAD_REPO="https://some.example.com/artifactory/github-releases"
```

**Note that you have to run `npm install hugo-bin-extended` to re-install hugo-bin-extended itself, if you change any of these options.**

### Options

#### downloadRepo

Default: `"https://github.com"`

Set it to your corporate proxy url to download the hugo binary from a different download repository.

## Supported versions

See [the package.json commit history](MarlonLuan/hugo-bin-extended/commits/main/package.json).

## Super Inspired By

- [mastilver/apex-bin](https://github.com/mastilver/apex-bin)
- [imagemin/jpegtran-bin](https://github.com/imagemin/jpegtran-bin)
- [fenneclab/hugo-bin](https://github.com/fenneclab/hugo-bin)

## License

MIT © [Marlon Luan](https://www.MarlonLuan.com/)
