var webpack = require('webpack')
// CommonsChunkPlugin 会分析所有入口文件共同依赖的js,并将他们存放在 common.b.js 。
// 这样在页面单独引用 common.b.js  index b c 入口都存在 jquery, comomn.b.js 中会存在 jquery,可以看看 common.b.js 的代码
var chunk = new webpack.optimize.CommonsChunkPlugin("common.b.js")
module.exports = {
    entry: {
        'index': './index.js',
        'b': './b.js',
        'c': './c.js'
    },
    output: {
        path: './',
        filename: "[name].b.js"
    },
    plugins: [
        chunk
    ]
};