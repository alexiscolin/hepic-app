const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
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
        routes: [ '/', '/user' ],
      })
    ]
  }
}
