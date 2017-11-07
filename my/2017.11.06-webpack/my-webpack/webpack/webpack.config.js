/**
 * Created by DELL- on 2017/11/6.
 */
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000, // 服务端口
        publicPath: "/dist/" // 打包后资源路径，后面会详细解释
    }
};