# 提取单独样式文件

有时候我们需要编译单独的 CSS 文件，这就需要 [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) 插件


```shell
npm install extract-text-webpack-plugin -D
npm install style-loader css-loader -D
```

```shell
webpack -w
```