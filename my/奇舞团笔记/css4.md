#//4
#层叠、继承和CSS单位
##哪条规则生效？
<article>
  <h1 class="title">拉森火山国家公园</h1>
</article>
<style>
  .title {
    color: blue;
  }
  article h1 {
    color: red;
  }
</style>

##选择器的特异度（Specificity）
选择器                 内联？     id个数      （伪）类个数      标签个数 特异度
#nav .list li a:link  0         1           2              2       0122
.hd ul.links a        0         0           2              2       0022

##简单选择器的特异度级别
- Level 0: *
- Level 1: 标签选择器、伪元素
- Level 2: 类、伪类、属性
- Level 3: id
- Level 4: 内联

http://specificity.keegan.st/

##属性覆盖
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>
<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333;
  }
  .btn.btn-primary {
    color: #fff;
    background: #218de6;
  }
</style>

##important
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>
<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333 !important;
  }
  .btn.btn-primary {
    color: #fff;
    background: #218de6;
  }
</style>

##覆盖important
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>
<style>
  .btn {
    display: inline-block;
    padding: .36em .8em;
    margin-right: .5em;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border-radius: .3em;
    border: none;
    background: #e6e6e6;
    color: #333 !important;
  }
  .btn.btn-primary {
    color: #fff !important;
    background: #218de6;
  }
</style>

##Cascading 层叠
##CSS样式的来源
- 页面开发者
- 用户设置：让浏览器的使用者设置样式，一些人喜欢定制
- 浏览器预设

##用户样式
浏览器可以指定一个本地CSS文件，打开所有页面时自动加载
safari浏览器在偏好设置，高级，样式表

##浏览器预设样式
- Mozilla Firefox预设样式 https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css
- Google Chrome 预设样式  https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css
- Internet Explorer 预设样式 http://www.iecss.com/

##哪条声明起作用？
1.找出匹配到的该属性所有声明
2.根据规则来源，优先级从低到高：
  - 浏览器预设
  - 用户设置
  - 网页样式
3.同一来源中，按照特异度排序，越特殊优先级越高
4.特异度一样时，按照样式书写顺序，后面的优先级高

##有!important时的变化
1.找出匹配到的该属性所有声明
2.根据规则来源，优先级从低到高：
  - 浏览器预设
  - 用户设置
  - 网页样式
  - 含!important的网页样式
  - 含!important的用户设置样式
3.同一来源中，按照特异度排序，越特殊优先级越高
4.特异度一样时，按照样式书写顺序，后面的优先级高

##继承
某些属性会自动继承其父元素的计算值，除非显式指定一个值
<p>
  This is a <em>test</em> of <strong>inherit</strong>.
</p>
<style>
p { color: #666; }
em { color: red; }
</style>

##显式继承, 可以把原本默认不能继承的属性都能够继承了
* {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
.some-widget {
  box-sizing: content-box;
}

##初始值
- CSS中，每个属性都有一个初始值
- background-color 的初始值为 transparent
- margin-left 的初始值为 0
- 可以显式重置为初始值，比如background-color: initial    就和background-color: transparent 一样；initial就是初始值
- 如果让字体属性不继承：* {font-size: initial;}

##CSS求值过程
![03](03.png)
![04](04.png)
![05](05.png)

##strong元素font-size的求值过程
<article>
  <h1>猴面包树</h1>
  <p>猴面包树是一种<strong>木棉科</strong>猴面包树属的大型落叶乔木，原产于热带非洲，现今中国大陆的云南、福建、广东皆有人工引种栽培。</p>
</article>
<style>
  body { color: #333; background: #f0f0f0; }
  article { font-size: 14px; line-height:1.6; }
  h1 { font-size: 2em; }
  p { font-size: 1.1em; }
</style>

这个时候可以去读CSS的规范了

##各种类型的值
- 关键字：font-size: initial、box-sizing: inherit、color: red等
- 字符串：content: "abc"、字体中间有空格
- URL: background-image: url(/resources/img/logo.png)
- 长度：font-size: 2em、height: 100px、 width:50vw
- 百分比：width: 50%、font-size: 200% (不同的百分比在属性中是不一样的，比如宽度的50%是相对于窗口的50%，font-size是相对于父级的200%)
- 整数：z-index: 9
- 浮点数：line-height: 1.8
- 颜色: color: #f00、 color: rgba(0,0,0,0.5)
- 时间：transition-duration: 0.3s
- 角度：transform: rotateX(deg)
- 函数：content: attr(title)、 height: calc(100vh - 100px)

CSS文档中能够看到某个属性接受什么样的值

##长度单位
- 绝对单位
  - px: 像素，对应显示器的一个像素点
  - in: 英寸
  - cm: 厘米
  - mm: 毫米
  - pt: 磅(1pt 等于 1/72英寸)
  - 英寸pc: 1pc 等于 12pt
- 相对单位
  - em: 相对于该元素的一个font-size
  - rem: 相对于html元素的font-size
  - vh: 浏览器窗口高度的 1%
  - vw: 浏览器窗口宽度的1%
  - vmin: vh 和 vw 中的较小者
  - vmax: vh 和 vw 中的较大者

##颜色
- 关键字
- Hex  十六进制的
- RGB & RGBA
- HSL & HSLA

CSS2的颜色关键字有17个，后面扩展了之后有147个
http://www.crockford.com/wrrrld/color.html
http://htmlcolorcodes.com/zh/yanse-ming/
https://www.webpagefx.com/web-design/random-color-picker/

##RGBa
和opaocity是有区别的，opacity是会连文字带背景全部都透明

RGBa是用函数的写法，rgba()

##HSL颜色模型
使用Hue、Saturation、Lightnesss一个数字来表示颜色

##Hue 色相
Hue: 色相（H）是色彩的基本属性，就是平常所说的颜色
名称，如红色、黄色等。取值范围是0-360
一般会在一个环上面去表示，用角度来表示色相

##HSL 和 HSLA  在H值不变的时候，可以调出同一色系不同深浅的颜色，我们去调制L的值
- Saturation: 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰。取值范围0-100%。
- Lightness：越高颜色越亮。取值范围是0-100%
- 例如：hsl(0, 50%, 50%)、hsla(120,50%,30%,0.5)
http://color.aurlien.net/#43B7BC





vh vw相对于视口的，不会做转化
