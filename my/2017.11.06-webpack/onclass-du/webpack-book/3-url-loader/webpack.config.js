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
            }
            ,
            {
                test: /\.(png|jpg)$/,
                // 小于 8k 的图片将以 base64 的方式嵌入在 css 中
                loader: 'url?limit=8192'
            }
        ]
    }
};