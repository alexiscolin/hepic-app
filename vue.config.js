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

  pwa: {
    name: 'Hepic',
    msTileColor: '#FFFFFF',
    workboxPluginMode: 'InjectManifest'
  }
}
