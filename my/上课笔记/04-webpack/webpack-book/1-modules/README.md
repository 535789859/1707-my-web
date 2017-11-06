# 像 nodejs 一样模块化开发

---

下一章 [嵌入 CSS](../2-style/)

---

[在线预览构建结果页面](http://nimojs.github.io/webpack-book/1-modules/)

```shell
webpack --watch
```
![shell log](https://cloud.githubusercontent.com/assets/3949015/13722317/59dc1180-e87c-11e5-9d03-af475539bfea.png)

```js
// webpack.config.js
module.exports = {
    // 入口
    entry: {
        'index': './index.js'
    },
    // 输出
    output: {
        path: './',
        /*
            [name] 是 entry 中的 key
            entry: {
                key: value
            }
        */
        filename: "[name].b.js"
    }
};
```
module.exports 是 CommonJS 规范中定义一个文件对外接口的语法，[webpack.config.js](webpack.config.js) 文件对外的接口是一个 object ，其中定义了一些配置参数。


## entry

最初 webpack 是为了构建 SPA (Single Page Application) ，`entry` 是『入口』配置。在 `entry` 中的文件才会被编译。

## output

`output` 控制构建后的文件的存放位置和命名。 `path` 定义所有构建后文件的所在目录，本例中构建到当前文件夹。

## filename
`filename` 控制构建后文件的文件名

## 源码和构建结果

```js
// index.js
var content = require("./content.js")

document.body.innerHTML = document.body.innerHTML + content
```
```js
// content.js
module.exports = "some string"
```

```html
<body>
<a target="_blank" href="https://github.com/nimojs/webpack-book/blob/gh-pages/1-modules/README.md">本例说明</a>
<script src="index.b.js"></script>
</body>
```

建议尽量理解构建后的代码，这样有助于理解 webpack

```js
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var content = __webpack_require__(1)

	document.body.innerHTML = document.body.innerHTML + content

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "some string"

/***/ }
/******/ ]);
```

前面带 /******/ 的代码都是 webpack 的模块化代码，它内置了一个模块加载器

模块 0 是 `index.js` 的代码，模块 1 是 `require("./content.js")` 的代码。如果你再  `require` 一个模块那么就会有模块 3。


---

下一章 [JS包含样式](../2-style/)

---