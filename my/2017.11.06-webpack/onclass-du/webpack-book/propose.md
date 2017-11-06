## Q&A

### webpack 用哪个版本?

1. 需要兼容IE8用 `webpack@1.13.2`  [support-ie8](https://github.com/fast-flow/support-ie8)
2. 之前没有了解过 webpack 用最新的 webpack
3. 基本了解webpack后，能满足目前需求就用当前了解的版本。（webpack2出来时很多人还没完全熟悉，webpack3就已经发布了）

### 用什么方式使用 webpack

1. 开发阶段使用 `webpack-dev-middleware` `webpack-hot-middleware` 速度最快体验最好
2. 使用 gulp/fis 搭配 webpack 速度非常慢，编译阶段可以尝试直接通过webpack编译。
