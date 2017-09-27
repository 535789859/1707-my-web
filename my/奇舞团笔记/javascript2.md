

#//JS2
#JavaScript概览
##JavaScript简史
图片

##ECMAScript Past
图片

##JavaScript的特点
语言动态类型，静态类型，强类型，弱类型
- 动态 + 弱类型
- 解释型或实时编译（JIT）型语言
- 面向对象（ES5之前是有prototype,能够继承；ES6之后有class定义类）
- 函数式特征
- 灵活和可扩展性
- 反射与元编程（元编程，对象的属性可以定制和改变，可以写属性的一些高级特征，定义成getter,setter,可删除的）
- 高性能
- 单线程异步非阻塞(充分利用单核CPU的能力)

##JavaScript主要能做什么
- （通过DOM）改变网页文档元素和属性
- （通过BOM）操作浏览器API
- （事件机制）响应用户行为
- （XHR、Fetch、WS）发送和接收数据
- （Storage）保存数据和状态
- （Timer、Promise）执行异步任务
- （ArrayBuffer、TypedArray）处理数据（set,map）
- （File Api）操作文件
- ....

##JavaScript系语言
流行的新语言,在JS基础上发展的，最终生成js, coffeescript, typescript, dart; typescript发展的比较好；coffeescript快挂了，不过他的思想都融到了ES6

##认证在使用JavaScript
浏览器，nodejs（后端）, mongodb（数据库）, couchdb(文档数据库), react native（移动端）, cocos（游戏）, 数莓派（智能硬件）， ruff（智能硬件）

JAVA的梦想是一处编写到处使用
其实JS更快，能够在更多的领域使用JS

##本课程主要讲什么
- 符合ECMA-262最新规范的JavaScript，不回避新特性
- 基本类型、原生类型、浏览器API、NodeApi
- 大部分语言特性（特别是ES5及之前的版本在chrome40以上已完全支持）
- 重点讲JavaScript的独有特性及其应用场景，以实际工作常见和常用的为主
- 重点讲函数、面向对象、过程抽象和函数式，总之能发挥JS动态特性的常见模式
- 会涉及到语言基础、运行环境（比如浏览器环境、Node）
- 会涉及到部分后端、HTTP请求相关内容，这些内容对前端工程师高质量完成工作也是很有必要的。（页面上的所有东西都是通过HTTP通信的，许多优化都是建立在这个协议上的，了解到协议的本质才能知道为什么要做这样的优化）

##本课程不讲的内容
- 过时的不符合规范的特性，比如ES3和之前版本里被废弃和修正的部分
- 基础通用的编程语言特性，比如常见的基本if、for、while、switch语句
- 一些稍微不那么复杂，可以自学，工作中也会用到的内置类型，比如 Date
- 具体框架的使用，课程中例子可能会用到，但不会系统讲，因为这部分内容可以看文档
- 其他一些因为时间限制不可能面面俱到的细节，建立阅读 MDN文档 或者相关教程（JavaScript高级程序设计3，JavaScript权威指南）

##兼容性怎么办？
速查：http://kangax.github.io/compat-table/es5/
- 方案1：shim & polyfill
  https://github.com/es-shims/es5-shim
  https://github.com/es-shims/es6-shim
  https://polyfill.io
- 方案2：Library
  实际项目里对于兼容IE8以下浏览器建议使用jQuery,要兼容旧的浏览器的时候用jQuery比较好
- 方案3：Babel/JSX/TypeScript....

##总结
JavaScript你值得拥有
