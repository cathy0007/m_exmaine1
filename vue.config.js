const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  productionSourceMap: true,
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    },
    resolve: {
      alias: {
        'views': '@/views',
        'common': '@/components/common',
        'assets': '@/assets',
        'utils': '@/utils',
        'api': '@/api',
        'less': '@/assets/less',
      }
    }
  },
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        // target: 'http://47.121.191.229',
        // target: 'http://192.168.1.80:3009',
        target: 'http://172.20.10.4:3009',

        pathRewrite: {
          '^/api':' '
        },
        changeOrigin: true,
      },
    }
  }


})
