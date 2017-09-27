
#//12
#兼容性
##浏览器的兼容性
##CSS中的兼容性问题
- 浏览器不支持该特性
- 某些特定条件下触发浏览器bug

##浏览器特性支持
##了解浏览器支持情况
- caniuse.com   http://caniuse.com/#search=box-shadow
- MDN CSS Reference https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
- Codrops CSS Reference https://tympanus.net/codrops/css_reference/
- QuirksMode.org CSS https://www.quirksmode.org/css/css2/

##你需要兼容哪些浏览器？
- 根据用户群体决定
  - 面向普通用户：IE8+、Chrome、Firefox
  - 企业级产品： IE9+、Chrome、Firefox
- 了解浏览器市场份额
  - 日志分析
  - 百度统计、NetMarketShare(全球的，意义较小) http://tongji.baidu.com/data/browser  https://www.netmarketshare.com/browser-market-share.aspx

##浏览器不支持时怎么办？优雅降级
- 如果低版本浏览器没有这个特性可以接受吗？
  - border-radius 不支持时，没有圆角
  - box-shadow 不支持时，没有阴影
- 可以使用效果稍微差一些的替代方案吗？
  - min-height: 100vh, 用min-height: 800px
- 可以使用一些替代方案吗？
  - opacity: 0.5在IE下用filter: alpha(opacity=50)
- 可以使用JavaScript让浏览器支持吗？
  - 使用 html5shim.js 让IE6~8支持新标签
  - 使用DD_belatedPNG.js让IE6支持半透明png图片
- 更换实现方式，不要使用这种属性

##不同浏览器使用不同的样式
- @supports
- 层叠
- 条件注释
- 浏览器怪癖

##@supports
.container {//IE10
  display: flex;
}
@supports(display: grid) {//假如浏览器支持display: grid
  .container {
    display: grid;
    grid-template: repeat(4, 1fr) / 50px 100px;
  }
}

##@supports兼容性
Chrome28.0
IE9
Firefox22
Opera12.1
safari9

##浏览器hack原理-层叠
- 同一个属性，后面书写的值覆盖前面书写的值
  p {
    line-height: 2;
    line-height: 3;
  }
- (对浏览器)无效的属性（值）会被忽略
  p {
    display: table; //IE8能看懂这个，就使用这个
    display: flex;
  }

  ##浏览器hack原理-条件注释
  IE6-IE10独有的
  <!--[if IE 7]>
  <p>只能在 IE 7 下看到我。</p>
  <![endif]-->

  <!--[if lt IE 8]>
  <p>只能在小于 IE 8 下看到我。</p>
  <![endif]-->

  <!--[if lt IE 7]> <html class="ie6"> <![endif]-->
  <!--[if IE 7]> <html class="ie7"> <![endif]-->
  <!--[if IE 8]> <html class="ie8"> <![endif]-->
  <!--[if IE 9]> <html class="ie9"> <![endif]-->
  <!--[if (gt IE 9)|!(IE)]><!---->
  <html class="w3c">
  <!---<![endif]-->

##浏览器的怪癖
##Internet Explorer 6
/* IE6 不支持两个类选择器直接组合 * /
.unused-class.selector {
  /* IE 6 only CSS * /
}
.container {
  height: 100px;
  /* 只有IE6 会忽略_ * /
  _height: 200px;
}

##Internet Explorer 7
.container {
  height: 100px;
  /* 只有 IE6 和 7会忽略* * /
  *height: 200px;
}

##Internet Export 8
/* IE6-8 不支持 :root 选择器 * /
:root .selector {
  /* IE6-8 Style * /
}
.selector {
  color: #fff;
  /* IE6-8 会忽略\9 * /
  color: #fff\9;
}

.tip {
  background: blue;//正常浏览器
  background: red\9;//IE8 6-8
  *background: black;//IE7 6-7
  _background: orange;//IE6
}
写多个，比如IE8有问题，可能IE7和6也有问题

##CSS2选择器兼容性
主要兼容性问题在IE6-7上

##IE6 不支持多个类直接组合
- p.class-a.class-b被当成p.class-b
- 解决办法：处理好选择器优先级

##IE6不支持父子、兄弟选择器
- E > F、E + F 和 E ~ F 选择器无效
- 解决方法：避免使用， 换后代选择器或其它

##IE6不支持属性选择器
- 任何一种都不支持
- 解决办法：用class

##IE6-7不支伪元素
- 不支持:before 和 :after
- 解决办法：改变实现方式，或在HTML中添加标签

##IE6不支持某些伪类
- 非链接不能使用:hover、:active
- 解决办法：使用a嵌套需要hover的元素

##IE6-7不支持:focus伪类
- 解决办法：使用JavaScript

##IE6不支持:first-child伪类
- 解决办法：给第一个子元素添加class="first"
所以会看到以前的列表的第一个的class="first"

##CSS3选择器兼容性
- CSS3中的大部分选择器，兼容性是IE9+
- 例如：target :empty :nth-child :nth-of-type :checked :disabled无法在IE6-8用
- 移动端支持绝大多数CSS3选择器

##CSS2属性
问题主要集中在IE6上，一小部分IE7也不支持

##IE6不支持min/max-width/height
- min-height解决办法：
  div {
    min-height: 500px;
    _height: 500px; //IE6对height的解释和min-height是一致的，内容少的时候是500，但是不能写overflow:hidden; 写了之后还是会裁剪掉
  }
- min-width解决办法
  <div class="container">
    <!-- 加上一个IE6的hack -->
    <div class="strut"></div>
    <!--other content-->
  </div>
  <style>
    .container {
      min-width: 500px;
    }
    /* IE6 * /
    .container .strut {//加一个没什么用的元素，把他给撑开,里面起码有一个元素是500的
      height: 1px;
      width: 500px;
    }
  </style>
- max-width/height解决办法
  - 使用JavaScript

##IE6不支持position: fixed
html, body {
  height: 100%;
}
.go-top {
  position: fixed;
  _position: absolute;
  bottom: 0;
  right: 0;
}

##IE6-7不支持块级元素inline-block
- 行级元素支持，而块级元素不支持
- 解决办法
  .select {
    display: inline-block;
    *display: inline;
    *zoom: 1;//保持一个块级的盒模型,让他出现在一行内，拥有宽度高度的这些特性,加了这些之后就是正常的inline-block特性
  }
  //zoom:1和overflow:hidden有点类似

##IE6-7不支持display:table
- 请使用float或inline-block布局
- 不要使用table布局

##CSS3属性
- IE6-7不支持
- IE8部分支持
- IE9基本都支持

##IE8支持
- box-sizing
- outline  和border比较类似1px solid red;不同的是border会占用盒子空间，outline不占用盒子实际的位置，是额外的一层border

##IE8不支持
- background-size
  - 推荐在IE8及以下使用固定宽度布局
- border-radius
- box-shadow
- opacity
  - filter: alpha(opacity=50)
- rgba、hsl、hsla
  - 一般场景下，使用相近的不透明颜色代替
  - Alpha可以通过增加额外元素，并设置透明度实现
- rem/vh/vw/calc
  -降级为固定宽度

##IE9不支持
- transition 和 animation
  - 可以接受的降级
  - 实在不能接收就用JavaScript

##media query
- 基本的媒体(all/print/screen/speech)都支持
- 媒体特性(width/height/orientation...) IE9及以上
  - 还是建议IE8及以下使用固定宽度布局

##浏览器前缀
- 浏览器厂商为了实验新特性，在属性名前加前缀
- Chrome/Safari/Opera: -webkit-
- Microsoft: -ms-
- Mozilla: -moz-

##2D Transform
Chrome 4+p //p表示需要加前缀  
Chrome 35+

Ieternet 9+p
Internet 10+

Firefox 3.5+
Firefox 16+

Opera 11.5+p
Opera 23+

android 2.1+p
android 5+

ios 3.2+p
ios 9.2+

.example {
  -webkit-transform: translate(100px, 0);
  -ms-transform: translate(100px, 0);
  transform: transform(100%, 0);
}

##3D Transform
Chrome 12+p
Chrome 35+

Internet Explor 10+

Firefox 10+p
Firefox 16+

Opera 15+p
Opera 23+

android 3+p
android 5+

ios 3.2+p
ios 9.2+

##Transform in IE
.selector {
  -webkit-transform: rotate(40deg) scale(2.0);
  -ms-transform: rotate(40deg) scale(2.0);
  transform: rotate(40deg) scale(2.0);
  filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1.5320888862379554, M12=-1.2855752193730787,
  M21=1.2855752193730796,
  M22=1.5320888862379558);
}

##Transition

Chrome 4+p
Chrome 26+

Internet Explor 10+

Firefox 4+p
Firefox 16+

Opera 10.5+p
Opera 23+

android 2.1+p
android 4.4+

ios 3.2+p
ios 7.1+

.example {
  -webkit-transform: translate(100px,0);
  -ms-transition: translate(100px,0);
  transform: translate(100px, 0);
  -webkit-transition: -webkit-transform .5s ease;
  transition: -webkit-transform .5s ease;
  transition: transform .5s ease;
}

加前缀的工作量非常大，所以可以使用工具，一般不会自己去写这么多
http://autoprefixer.github.io/

##Animation

Chrome 4+p
Chrome 43+

Internet Explor 10+

Firefox 5+p
Firefox 16+

Opera 12+p
Opera 30+

android 2.1+p
android 5+

ios 3.2+p
ios 9.2+

##Flexbox

Chrome 4+p
Chrome 29+

Internet Explor 10+
Internet Explor 11

Firefox 2+p
Firefox 28+

Opera 15+p
Opera 17+

android 2.1+p
android 5+

ios 3.2+p
ios 7.1+

##语义化的HTML5标签,这里的兼容性主要在IE8及以下
<style>
article, main, nav, aside, section, header, footer, figure, figcaption {
  display: block;
}
</style>
<!--[if lte IE 8]>
  <script src="html5shiv.js"></script>
<![endif]-->

##html5shiv.js  内容少可以写到行内
(function() {
  var tags = "abbr,article,aside,audio,canas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(/,\s*);
  var i = tags.length;
  while(i--) {
    document.createElement(tags[i]);
  }
  })();

##浏览器Bug
##IE6下半透明png显示不正确
- DD_belatedPNG.js
- filter
  .selector {
    background: url(/path/to/img.png) no-repeat;
    _background: none;
    /* 图片URL必须是完整路径 * /
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/path/to/img.png',sizingMethod='crop');
  }

##IE6 浮动双边距
- 浮动元素的与浮动同方向的边距加倍
  .selector {
    float: left;
    /* IE6 下显示为 20px * /
    margin-left: 10px;
  }
- 解决办法
  .selector {
    float: left;
    margin-left: 10px;
    _display: inline;
  }

##hasLayout: 很多时候解决问题的法定用zoom:1, 类似BFC
- On HavingLayout; 有自己的布局实现，有一个属性hasLayout, 要么为true,要么为false, 有的话就有自己的宽高，如果没有的话则会根据内容去计算宽度和高度, 遇到很多IE6的问题都可以设置 hasLayout为true, 通过设置zoom:1; 这样就能够让元素的hasLayout为true
- zoom: 1
https://github.com/old9/on-having-layout-zh-cns/blob/master/on-having-layout-zh-CN.md

##IE模式
- 浏览器模式 Browser Mode
  - 切的渲染引擎、JavaScript引擎和HTTP请求的UserAgent
  - 兼容模式相当于使用IE7的引擎
- 文本模式
  - 切的文档模式，即渲染引擎和JavaScript引擎

##控制 IE 模式（<=10）
- DocType有无控制是否进入怪异模式
- meta标签控制进入哪种文档模式
  <!-- 使用IE7模式渲染 -->
  <meta http-equiv="X-UA-Compatible" content="IE=7">

  <!-- 使用最新引擎 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

##测试兼容性
- 虚拟机
- BrowserStack 你提供一个URL，他会给你把各种浏览器下访问的截图，你可以看一下在不同浏览器里面有没有问题，发现有问题再调试；如果说在大公司里面也会搭建一些测试的平台，会装很多虚拟机或实体机器，然后自动化测试，帮你找到一些问题 https://www.browserstack.com/users/sign_up

##Polyfill 垫片
- 使用代码帮助浏览器实现它尚未支持的特性
- 使用（未来）标准写法
- CSS Polyfills
  - selectivizr http://selectivizr.com/
  - CSS3 PIE http://css3pie.com
  - box-sizing-polyfill https://github.com/Schepp/box-sizing-polyfill
  - flexibility https://github.com/jonathantneal/flexibility
  - rem http://chuckcarpenter.github.io/REM-unit-polyfill/
  - responseive https://github.com/scottjehl/Respond
  - cssSandpaper https://github.com/zoltan-dulac/cssSandpaper
