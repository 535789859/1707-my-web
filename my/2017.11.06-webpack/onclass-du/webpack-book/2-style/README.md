# JS包含样式


---

上一章 [像 nodejs 一样模块化开发](../1-modules/)

---

[在线预览构建结果页面](http://nimojs.github.io/webpack-book/2-style/)

安装时间可能会比较久
```shell
# 安装所需 style-loader 和 css-loader
npm install css-loader style-loader -D

# less 和 less-loader 可以选择不安装 （如果安装了请去掉 index.js 中引入 less 的注释）
npm install less-loader -D
npm install less -g
```
```shell
webpack --watch
```


```js
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
```

`module.loaders` 定义 `require` 的模块代码会被如何编译。 [官方文档 using-loaders](http://webpack.github.io/docs/using-loaders.html)

## module.loaders[].test

`test` 参数是一个正则表达式，用于匹配模块。`'./index.css'.test(/\.css&/)`

## module.loaders[].loader

`loader` 参数定义被 `test` 匹配到的模块会执行哪些构建操作

本例中 .css 后缀的文件会被 `style-loader` 和 `css-loader` 构建


## require 时配置 loader

如果你不想在 webpack.config.js 配置，你还可以在 require 时单独定义一个文件会使用哪些 loader

```js
require('!style!css!./index.css')
```

## 被嵌入 `<head>`

查看 [在线预览构建结果页面](http://nimojs.github.io/webpack-book/2-style/) 源码可以看到样式通过 JS 嵌入到 `<head>` 中使用的
```html
<head>
<style type="text/css">body {
    background-color:#ABCDEF;
}</style>
</head>
```

---

上一章 [像 nodejs 一样模块化开发](../1-modules/)  
下一章 [JS包含图片](../3-url-loader/)

---