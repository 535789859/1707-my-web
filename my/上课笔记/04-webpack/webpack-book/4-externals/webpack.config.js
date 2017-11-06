module.exports = {
    // 入口
    entry: {
        'index': './index.js'
    },
    // 输出
    output: {
        path: './',
        /*
            [name] 是 entry 中的 key
            entry: {
                key: value
            }
        */
        filename: "[name].b.js"
    },
    externals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': 'jQuery',
        // var _ = require('underscore') 等于 var _ = window._
        'underscore': '_'
    }
};