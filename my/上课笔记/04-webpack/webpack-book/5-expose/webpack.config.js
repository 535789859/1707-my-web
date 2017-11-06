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
                test: require.resolve('jquery'),
                loader: 'expose?jQuery!expose?$'
            }
        ]
    }
};