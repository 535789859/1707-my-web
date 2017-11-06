module.exports = {
    entry: {
        'index': './index.js'
    },    
    output: {
        path: './',
        filename: "[name].b.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};