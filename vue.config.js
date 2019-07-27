const fs = require('path');
module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#8EBE3C',
                    'link-color': '#8EBE3C',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
}