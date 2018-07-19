# 🥇 Hepic App

> Hepic app is made with ♡ by de jaune et de bleu thanks to VueJS + WebPack + LESS + Pug(Jade)

App available on Netlify - https://hepic-app.netlify.com/

## Assets management

### Src > assets folder

This folder is the basic one that you should use by default for your assets. Webpack process all assets in order to improve app performance:

* small images are converted to data URL in base64 to  avoid extra network requests.
* result filenames include hashes, in this way we will have the same URL as long as the content is the same. So you don’t need to worry about browser caching their old versions.

### Root folder

All assets localised in `root` folder will be copied at the root of the `dist` folder. It's a usefull system to manage asset that are required for environement and should avoid be processed by Webpack. It's a modification from VueCLi boilerplate. Hepic may use it for Netlify redir as exemple.

### Static folder

Static folder manage all asset that will not be processed by Webpack and require an absolute URL: useful for these situations:

* You need a file with a specific name in the build output.
* You have thousands of images and need to dynamically reference their paths.
* Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>` tag.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
