// const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changorigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    // config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
  }
}
