const path = require('path');
const fs = require('fs');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./ssl/server.key'),
  //     cert: fs.readFileSync('./ssl/server.crt'),
  //     ca: fs.readFileSync('./ssl/rootCA.pem'),
  //   },
  //   hot: true,
  // },

  pwa: {
    themeColor: '#ec6730',
    msTileColor: '#FFFFFF',
    name: 'Hepic',
    navigateFallback: '/',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/(api|cdn)\.hepic\.fr\//,
          handler: 'cacheFirst'
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 60,
            },
          },
        },
      ]
    },
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
        staticDir: path.join(__dirname, 'dist'),  // Required - le chemin de création du prérendu.
        routes: [ '/' ], // Required - Routes vers le rendu.
      })
    ]
  }
}
