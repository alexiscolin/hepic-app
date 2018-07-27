const path = require('path');
const fs = require('fs');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  // assetsDir: '/',
  //
  devServer: {
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
      ca: fs.readFileSync('./rootCA.pem'),
    },
  },
  pwa: {
    appleMobileWebAppCapable: 'yes',
  },
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
