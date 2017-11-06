# 暴露全局变量

> 有些模块依赖全局变量 `windows.jQuery` 才能使用，可以通过 [expose-loader](https://github.com/webpack/expose-loader) 暴露全局变量

```shell
npm install jquery --save
npm install expose-loader -D
```

```shell
webpack -w
```