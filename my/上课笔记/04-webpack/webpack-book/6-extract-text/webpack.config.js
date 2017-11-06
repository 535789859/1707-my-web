var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        'index': './index.js',
        'login': './login.js'
    },
    output: {
        path: './',
        filename: "[name].b.js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].b.css", {
            allChunks: true
        })
        ,
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin()
    ]
};