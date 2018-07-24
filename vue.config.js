const path = require('path');

module.exports = {
  css: {
    sourceMap: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@@': path.resolve('src/assets/style'),
      }
    }
  }
}
