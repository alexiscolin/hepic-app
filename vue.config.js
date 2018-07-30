const path = require('path');
const fs = require('fs');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  // assetsDir: '/',
  //
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./ssl/server.key'),
  //     cert: fs.readFileSync('./ssl/server.crt'),
  //     ca: fs.readFileSync('./ssl/rootCA.pem'),
  //   },
  //   hot: true,
  // },
  pwa: {
    // appleMobileWebAppCapable: 'no',
    themeColor: '#ec6730',
    msTileColor: '#FFFFFF',
  },
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://hepic-app.netlify.com/' : '/',

  css: {
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.resolve('src/assets/style'),
      }
    },

    plugins: [
      new PrerenderSpaPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/' ],
      })
    ]
  }
}
