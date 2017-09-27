
#//JS3
#代码风格
##代码是给人阅读的，只是偶尔让计算机执行一下
图

为什么不用C写，不易写和读

##代码风格
- 代码的格式（包括缩进、大括号、分号、换行、空行、空格）
- 广义的：
  - 目录结构和文件名
  - 变量命名
  - 文档规范
六种常见的代码风格
http://geek.csdn.net/news/detail/3394

##一起遵守规则
###The Rules
- `2 spaces` - for indentation
- `Single quotes for strings` - except to avoid escaping(通常html标签里面是双引号)
- `No unused variables` - this one catches tons of bugs!
- `No semicolons` - It's fine. Really!
- `Never start a line with (, [, or ``
  - This is the only gotcha with omitting semicolons - automatically checked for you!
- `Space after keywords` if (condition) { ... }
- `Space after function name` function name (arg) { ... }
- Always use === instead of == - but obj == null is allowed to check null || undefined.
- Always handle the node.js err function parameter
- Always prefix browser globals with window - except document and navigator are okay
  - Prevents accidental use of poorly - named browser globals like open, length, event, and name.
- And more goodness - give standard a try today!

##同一个项目的代码风格应保持一致
图

##学习代码风格的最好方式是读代码
https://github.com/stevemao/left-pad/blob/master/index.js
https://github.com/expressjs/body-parser/blob/master/index.js
https://github.com/75team/mixin.js/blob/master/mixin.js

##一些特殊的JS"风格"
- IIFE(Immediately-Invoked Function Expression)
- 严格模式（use strict）
- 模块

##IIFE 与 依赖注入
(function(global, doc, $){//依赖注入
  'use strict';//严格模式

  var image = new Image();
  $(image).attr('src', 'https://p4.ssl.qhimg.com/t0144189b90adbc');
  $('body').append(image);
})(this, document, jQuery);

##AMD模块管理

##SystemJS模块管理
SystemJS.import('underscore.js/1.8.3/underscore.js')
  .then((...) => {
  console.log(_.map([1,2,3], num => num * 3));
});

##代码风格检查工具
- ESLint
- standard
- semistandard 和标准基本一致，就只有分号这一块是允许的

一种是IDE的插件来检查，当我们保存代码的时候
在git的钩子pre-commit，写一下代码

##课后作业
- Github 上找几个不同的项目，观察它们的代码风格，写一篇短文，介绍它们并谈一谈你喜欢哪一种代码风格，为什么？
- 2.模块NPM模块，与一个简单的JavaScript功能模块，用上自己喜欢的风格，提交到github
- 对自己写的模块应用上代码风格检查工具，可以选择ESLint，
或其它代码检查工具
