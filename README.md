# hugo-bin-extended [![npm version](https://img.shields.io/npm/v/hugo-bin-extended.svg)](https://www.npmjs.com/package/hugo-bin-extended) [![Build Status](https://img.shields.io/github/workflow/status/MarlonLuan/hugo-bin-extended/CI/master)](https://github.com/MarlonLuan/hugo-bin-extended/actions?query=workflow%3ACI+branch%3Amaster) [![dependencies Status](https://img.shields.io/david/MarlonLuan/hugo-bin-extended.svg)](https://david-dm.org/MarlonLuan/hugo-bin-extended) [![devDependencies Status](https://img.shields.io/david/dev/MarlonLuan/hugo-bin-extended.svg)](https://david-dm.org/MarlonLuan/hugo-bin-extended?type=dev)

> Binary wrapper for [Hugo](https://gohugo.io/)

## Install

```sh
npm install hugo-bin-extended --save-dev
```

## Usage

### API

```js
const { execFile } = require('child_process');
const hugo = require('hugo-bin-extended');

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

## Supported versions

See [the package.json commit history](https://github.com/MarlonLuan/hugo-bin-extended/commits/master/package.json).

## Super Inspired By

- [mastilver/apex-bin](https://github.com/mastilver/apex-bin)
- [imagemin/jpegtran-bin](https://github.com/imagemin/jpegtran-bin)
- [fenneclab/hugo-bin](https://github.com/fenneclab/hugo-bin)

## License

MIT © [Marlon Luan](https://www.MarlonLuan.com/)
