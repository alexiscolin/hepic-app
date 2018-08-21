<p align="center"><img src="http://files.de-jaune-et-de-bleu.com/img/github/hepic.png" width="50%"></p>
<p>&nbsp;</p>

# 🥇 Hepic App

> Hepic app is made with ♡ by de jaune et de bleu

App available on Netlify (de jaune et de bleu's account)- https://hepic-app.netlify.com/

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

## Usage

### Prerequisites

You need to have the latest/LTS node, yarn and Vue CLI(v3) versions installed in order to use Hepic app under Vue.js.

Next step, clone this repository and run:

``` bash
yarn install
```

This will take some time and will install all packages necessary to run Hepic App and its tasks.

Then, look at the **Build Setup** section below in order to get more information about common use of Hepic App accross Vue CLI.

Every tools listed above are managed by customed runtime control `.rc` files and `vue.config.js` file. 

### Build Setup

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

## Hepic Structure

Hepic app structure is based on vue components system. The entire architecture follow the principle of functional modules. Notation, file name and composition is structured by the Vue.js style guide and the global architecture is proposed by VueCli, <s>following the PWA methods (vue-cli 2 and PWA template)</s> following the PWA plugin. Some of the code has been modified in order to shape the Hepic challenge.

Hepic app is structured around distinct groups over the components, api and store:

- Connexion
- contests
- photo
- user
- vote

Hepic features and design have created this distinction of methods accross behavior. Those groups follow them and make them easier to maintain and scale.
Those groups rule the structure all over the App.

### APIs

All apis are located inside the `api` folder. This foldeer contains pure API, ie nothing else than request to [api.hepic.fr](https://api.hepic.fr).

```
|--src                    // Everything in here will be built with Vue.js
|  |--api                 // API folder - all requests to api.hepic.fr are here
|  |  |--api.config.js    // API configuration - list of URLs to request
|  |  |--connexion.js     // Pure API request made for connexion
|  |  |--contests.js      // Pure API request made for contests
|  |  |--photo.js         // Pure API request made for connexion
|  |  |--user.js          // Pure API request made for user
|  |  |--vote.js          // Pure API request made for vote
```

### Components

#### generals

#### Architecture

```
|--src                               // Everything in here will be built with Vue.js
|  |--components                     // Components folder - all components modules are here
|  |  |--AppLayout                   // List of general components - components shared accross the entire app
|  |  |  |--AppContestInfos          // Display info about a contest
|  |  |  |  |--index.vue             // Module heart of the component (find it inside every modules)
|  |  |  |  |--script.js             // Logical system of the component (find it inside every modules)
|  |  |  |  |--template.pug          // Template of the component (find it inside every modules)
|  |  |  |  |--style.less            // Style of the component that are not ruled by atomic CSS -> BEM inside (find it inside many modules)
|  |  |  |  |--config.json           // JSON data to configure the components (find it inside few modules)
|  |  |  |--AppSvg                   // SVG sprite
|  |  |  |--LayerOptin               // Layer validation system
|  |  |  |--LayerPopin               // Layer popin wrapper
|  |  |  |--TheFooter                // App footer
|  |  |  |--TheHeader                // App header
|  |  |  |  |--SearchBar             // SearchBar for contest (use vue-colcade to interact with the flux component)
|  |  |  |--TheShell                 // App general shell wrapper
|  |  |--RouteCallback               // Route used to host the loggin callback
|  |  |--RouteContest                // Route for contests
|  |  |  |--AppContestLayout         // Contest information wrapper (banner, logo...)
|  |  |  |--ContestRulesValidation   // Contest rules apply system
|  |  |  |--ContestUpload            // Upload file system
|  |  |--RouteFlux                   // Route for the general flux
|  |  |  |--TileContest              // Basic contest tile
|  |  |  |--TilePodium               // Podium tile to display contest winners
|  |  |--RouteIndex                  // Route for connexion index
|  |  |  |--IndexInstallBtn          // Installation button
|  |  |  |--IndexSocialBtn           // Loggin social buttons
|  |  |--RouteNotFound               // Route for 404
|  |  |--RoutePhoto                  // Route for photo view (zoom mode)
|  |  |  |--InfoPopin                // Informations about the photo
|  |  |--RouteUser                   // Route for specific user account
|  |  |  |--UserContent              // Display user's pictures
|  |  |  |--UserNotification         // Display notification
|  |  |  |--UserProfile              // Display user information (user picture, name...)
|  |  |  |--UserSettings             // Display private user settings (your own account)
|  |  |  |--UserSettingsRoutes       // Display routes to user settings
|  |  |--RouteVote                   // Route for vote
|  |  |  |--SharePopin               // Sharing system popin
```

### Utils

This `utils` folder contains some of usefull function that are needed accross the whole App. Those functions are built as Js modules imported by WebPack where they are asked.

### Store

The store is configured throught Vuex modules. Modules are not namespaced.

```
|--src                          // Everything in here will be built with Vue.js
|  |--store                     // Store folder - all Vuex files (commit, dispatch, state) are here
|  |  |--index.js               // Store configuration - export differents store modules
|  |  |--modules                // List of store modules
|  |  |  |--call-contest.js     // Store related to contests APIs
|  |  |  |--call-photo.js       // Store related to photo APIs
|  |  |  |--call-user.js        // Store related to user APIs
|  |  |  |--call-vote.js        // Store related to vote APIs
|  |  |  |--connexion.js        // Store related to connexion settings
|  |  |  |--contest-entry.js    // Store managing contests rules validation
|  |  |  |--layer-optin.js      // Store managing optin displayed functions
|  |  |  |--popin.js            // Store managing popin display functions
```


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

Hepic app router is managed by official plugin vue-router. The `router` folder hosts the routing management system. It follows the HTML5 history mode and all the Auth check methods inside navigation guards.

## Store

Hepic app store management is made by following one rule: **all that need to be share between two components (excepts for direct linking from a child) needs to be coded inside the store**. This allows us to ensure the constent reliability on data across all components and let us create a two way binding simulation.

Here, the store is built thanks to VueX store modules.

## SSL & tests

### SSL

Some exemple or test in localhost may require SSL connexion. `ssl` folder contains mandatories files and keys to generate private ssl certificate. This is a flow created by de jaune et de bleu, so other users must replace them by creating a new certificate.
SSL configuration should be loaded by `https` protocol, so use the `devServer` field in `vue.config.js` file to activate it.

``` javaScript
 devServer: {
   https: {
     key: fs.readFileSync('./ssl/server.key'),
     cert: fs.readFileSync('./ssl/server.crt'),
     ca: fs.readFileSync('./ssl/rootCA.pem'),
   },
   hot: true,
 },
```

### ESLint

All code is linted by eslint using modified [Airbnb style guide](https://github.com/airbnb/javascript).
Every modification is located inside the vue configuration file `.eslintrc.js`. **Modifications must be made to follow some of Vue.js libraries rules**.

### Units and end2end tests

Those tests are not configured to be used by de jaune et de bleu. So, you have to edit them in order to use them. Remember that they make a big use of Jest (unit), Puppeteer and Nightwatch (e2e). All preconf files are already loaded and ready for use.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.
Then if you have created a Slack Bot, you will get a notification on the dedicated slack channel.

## Enjoy!! 😸
