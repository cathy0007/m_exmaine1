const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  productionSourceMap: false,
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
    proxy: {
      '/api': {
        // target: 'http://47.121.191.229',
        // target:  'http://10.116.240.134:8080',
        target: 'http://192.168.1.80:3009',

        pathRewrite: {
          '^/api':' '
        },
        changeOrigin: true,
      },
    }
  }


})
