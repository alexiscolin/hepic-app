<p align="center"><img src="http://files.de-jaune-et-de-bleu.com/img/github/hepic.png" width="50%"></p>
<p>&nbsp;</p>

# 🥇 Hepic App

> Hepic app is made with ♡ by de jaune et de bleu

App available on Netlify - https://hepic-app.netlify.com/

## Informations

This app is created by using [VueJS](https://vuejs.org/) in order to build user interfaces and makes a big use of VueJS dependencies library as [Vue-router](https://router.vuejs.org/) that controls every routing management or [VueX](https://vuex.vuejs.org/) that is a pattern for state management.

Furthermore, Hepic app is generated by [Webpack](https://webpack.js.org/) as asset pipeline. This bundle manager is a modified version of the one generated by [VueCli](https://cli.vuejs.org/).
Webpack is setup to use [LESS](http://lesscss.org/) for CSS and [Babel](https://babeljs.io/) for JavaScript compiling/transpiling and [Pug - Jade](https://pugjs.org/api/getting-started.html) for templating generation.

### development
#### Frameworks & preprocessors
This project is written using frameworks and libraries and various preprocessors for HTML, JS and CSS

* VueJS (js ES6 -> VueX / VueRouter / Axios)
* Axios (RESTfull APIs)
* Colcade library (grid style)
* LESS (Atomic CSS - BEM style)
* PUG/Jade (Web Components OOP)
* HelloJS (Social Login)


#### Tools
This project requires some Tools

* Webpack (assets management)
* Babel (transpiling)
* EsLint (js correction -> airBnB rules)
* PostCSS (not directly used here)
* Puppeteer (Prerender SPA Plugin)
* Jest (Unit Test)
* Nightwatch (Automated testing)
* Git (Github Flow -> Netlify CI connection)
* Slack (deployment notification)

##Usage
###Prerequisites
You need to have the latest/LTS node, yarn and Vue CLI(v3) versions installed in order to use Hepic app under Vue.js.

Next step, clone this repository and run:

``` bash
yarn install
```

This will take some time and will install all packages necessary to run Hepic App and its tasks.

Then, look at the **Build Setup** section below in order to get more information about common use of Hepic App accross Vue CLI.

## Hepic Structure
main
### API
### Components
#### generals
#### Architecture
### Utils
### Store



## Assets management

### Src > assets folder

This folder is the basic one that you should use by default for your assets. Webpack process all assets in order to improve app performance:

* small images are converted to data URL in base64 to  avoid extra network requests.
* result filenames include hashes, in this way we will have the same URL as long as the content is the same. So you don’t need to worry about browser caching their old versions.

#### Architecture

### Public folder

Static folder manage all asset that will not be processed by Webpack and require an absolute URL: useful for these situations:

* You need a file with a specific name in the build output.
* You have thousands of images and need to dynamically reference their paths.
* Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>` tag.

#### Architecture

### Root folder (depreciated)

<s>All assets localised in `root` folder will be copied at the root of the `dist` folder. It's a usefull system to manage asset that are required for environement and should avoid be processed by Webpack. It's a modification from VueCLi boilerplate. Hepic may use it for Netlify redir as exemple.</s>

## Router

## Store

Hepic app store management is made by following one rule: **all that need to be share between two components (excepts for direct linking from a child) needs to be coded inside the store**. This allows us to ensure the constent reliability on data across all components and let us create a two way binding simulation.

Here, the store is built thanks to VueX store modules.

## SSL & tests
### EsLint


## Build Setup

The Hepic project is served by Yarn package manager.

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run serve

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run lint

# run unit tests
yarn run test:unit

# run e2e tests
yarn run test:e2e

```

Then visit http://localhost:8080/ - or a new browser windows popped-up already - to preview your new App. Webpack will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.


## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.
Then if you have created a Slack Bot, you will get a notification on the dedicated slack channel.

##Enjoy!! 😸
