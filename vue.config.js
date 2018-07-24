const path = require('path');

module.exports = {
  css: undefined,

  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.resolve('src/assets/style'),
      }
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  org: {
    vue: {
      pwa: {
        name: 'Hepic',
        themeColor: '#ec6730',
        msTileColor: '#FFFFFF'
      }
    }
  }
}
