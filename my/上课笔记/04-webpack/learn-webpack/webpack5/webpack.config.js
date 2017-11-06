var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",
        port: 8080,
        inline: true,
        colors: true,
        historyApiFallback: true,
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new webpack.BannerPlugin("Copyright Flying inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};