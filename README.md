# hugo-bin-extended [![npm version](https://img.shields.io/npm/v/hugo-bin-extended?logo=npm&logoColor=fff)](https://www.npmjs.com/package/hugo-bin-extended) [![Build Status](https://img.shields.io/github/actions/workflow/status/MarlonLuan/hugo-bin-extended/ci.yml?branch=main&label=CI&logo=github)](https://github.com/MarlonLuan/hugo-bin-extended/actions?query=workflow%3ACI+branch%3Amain)

> Binary wrapper for [Hugo](https://github.com/gohugoio/hugo)

- hugo-bin supports the [Extended Hugo version](https://github.com/gohugoio/hugo/releases/tag/v0.43)
- For usage within corporate networks or behind corporate proxies, the download repository can be overwritten

See [Installation options](#installation-options) for more details.

## Install

```sh
npm install hugo-bin-extended --save-dev
```

## Usage

### API

```js
import { execFile } from 'node:child_process';
import hugoPath from 'hugo-bin-extended';

execFile(hugoPath, ['version'], (error, stdout) => {
  if (error) {
    throw error;
  }

  console.log(stdout);
});
```

### CLI

#### Unix

```sh
# older npm
$(npm bin)/hugo --help
# newer npm (v9+)
npm exec hugo help
npm run create -- post/my-new-post.md # see below 'npm run-script'
```

#### Windows

```bat
rem older npm
for /f "delims=" %F in ('npm bin') do call "%F\hugo" help
rem newer npm (v9+)
npm exec hugo help
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

Each option can be configured in one of the following ways:

### The `hugo-bin-extended` section of your `package.json`

```json
{
  "name": "your-package",
  "version": "0.0.1",
  "hugo-bin-extended": {
    "downloadRepo": "https://some.example.com/artifactory/github-releases"
  }
}
```

### As local or global [.npmrc](https://docs.npmjs.com/files/npmrc) configuration file

```ini
hugo_bin_download_repo = "https://some.example.com/artifactory/github-releases"
```

### As environment variables

```sh
export HUGO_BIN_DOWNLOAD_REPO="https://some.example.com/artifactory/github-releases"
```

**Note that you have to run `npm install hugo-bin-extended` to re-install hugo-bin-extended itself, if you change any of these options.**

### Options

#### downloadRepo

Default: `"https://github.com"`

Set it to your proxy URL to download the hugo binary from a different download repository.

## Super Inspired By

- [mastilver/apex-bin](https://github.com/mastilver/apex-bin)
- [imagemin/jpegtran-bin](https://github.com/imagemin/jpegtran-bin)
- [fenneclab/hugo-bin](https://github.com/fenneclab/hugo-bin)

## License

[MIT](LICENSE) © [Marlon Luan](https://www.MarlonLuan.com/)
