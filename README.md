# My personal Web Page

[![Website](https://img.shields.io/website?up_message=noelmace.com&url=https%3A%2F%2Fnoelmace.com)](https://noelmace.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c79fd5e-63f1-4790-a751-9ab1536ab793/deploy-status)](https://app.netlify.com/sites/noelmace-page/deploys)

## Theming

Support [prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme) and [toggle](https://github.com/GoogleChromeLabs/dark-mode-toggle).

### Light Theme

[![capture](/docs/capture-light.png)](https://noelmace.com/)

### Dark Theme

[![capture dark theme](/docs/capture-dark.png)](https://noelmace.com/?theme=dark)

## Minification

Minifying would be overkill given the size of the code files. Also, lots of modern hosting solutions (e.g. Netlify) can even directly minify your resources without needing any build system.

However, there still is a minification system here, as an example, just because.

It uses:

- [@bazel/terser](https://www.npmjs.com/package/@bazel/terser) to minify the js directory (cf. [comment](https://github.com/bazelbuild/rules_nodejs/blob/c764d5caab64db2bd7b1887e11046cd2407136b9/packages/terser/index.js#L2-L8))
- [html-minifier-terser](https://github.com/DanielRuf/html-minifier-terser) for HTML
- and [cssnano](http://cssnano.co) for CSS

Loading differences are only perceptible below GPRS connection performance (~2s with 1/5 of GPRS, i.e. with DL 10kb/s UP 4kb/s Latency 100ms). When I said overkill...
Run `npm start` alongside `npm run serve` to see by yourself.
