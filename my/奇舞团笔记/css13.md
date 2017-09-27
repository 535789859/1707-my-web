

#//13
#工程化
##目的
- 提供一致、合理的开发基础（团队里面相同的代码规范和风格）
- 应对变化（尤其是样式随着时间会发生改变）
- 提升效率

一个中大型项目的文件结构
css 分成base,modules,pages
  base  通用的全局的东西可以放到base里面
    normalize.css 重置浏览器的默认样式
    mixins.css
    layout.css  布局，清除浮动
    variables.css
  modules       有公共的可以提取成components或者modules
    button.css
    checkbox.css
    dialog.css
    form.css
    input.css
    modal.css
    pagination.css
    radio.css
    select.css
    tab.css
    table.css
    textarea.css
    tip.css
  pages
    index.css
    papge-a.css
    page-b.css
    page-c.css

##CSS Reset & normize.css
##CSS reset
- 设置HTML标签的默认样式
- 使其在各个浏览器表现`基本一致`
- 让默认样式`归零`

html {
  -ms-text-size-adjust: 100%; /*手机上会用，在ios上面横屏后会放大*/
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  font: 16px/1.5 sans-serif;  //默认12小，normal在不同地方不一样，有的是1.2
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
h4,
p,
blockquote,
figure,
ol,
ul, {
  margin: 0;
  padding: 0;
}
main, li { //main在比较早的浏览器里面的display可能都不是block, li默认是list-item, 会有一个圆点, 通过display:block; 让他成为一个普通的元素
  display: block;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit; //让他把原本的字体去掉，直接继承自父级的字体
}
strong {
  font-weight: bold;
}
a, button {
  color: inherit;
  transition: .3s;
}
a {
  text-decoration: none;
}
button {
  overflow: visible;
  border: 0;
  font: inherit; //默认的表单元素的文字通常还是很小
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  background: none;
  cursor: pointer;
}
::-moz-focus-inner {//修复firefox的一个bug
  padding: 0;
  border: 0;
}
:focus {
  outline: 0; //不占空间的框,通过可用的角度可能希望不要加这句话，对于可交互的元素，一定要在focus这种状态和不是这种状态下要有一个明显的区分，让用户知道他处于focus状态，可以在不同的模块当中设置一下
}
img {
  max-width: 100%;
  height: auto;
  border: 0;//早期的IE，给图片外面加了一个A标签，图片外面有一个蓝色的边框
}

##normalize.css 在reset后面出现的,更合理一些,对于每一行都有解释
- 设置HTML标签的默认样式
- 使其在各个浏览器表现`基本一致`
- 保留标签的默认样式
- https://github.com/necolas/normalize.css/blob/master/normalize.css

##CSS模块
- 可复用的CSS代码段
- 与模块在HTML中的位置无关
- （一般）与使用的HTML标签无关（比如按钮样式，我是一个a链接，我也可以使用btn样式）

<style>
  .btn {
    display: inline-block;
    padding: 0.36em 0.8em;
    margin-right: 0.5em;
    border: none;
    border-radius: 0.3em;
    cursor: pointer;
  }
</style>
<form>
  <button class="btn">提交</button>
</form>
<p>
  <input class="btn" type="button" value="取消">
</p>

##CSS模块原则
- 面向对象（OOCSS）
- 单一职责原则（SRP）
- 开闭原则
- Don't Repeat Yourself(DRY)

##面向对象（OOCSS）
<style>
  a {
    color: inherit;
    text-decoration: none;
  }
  .btn {
    display: inline-block;
    padding: 0.36em 0.8em;
    margin-right: 0.5em;
    border: none;
    border-radius: 0.3em;
    cursor: pointer;
  }
  .btn--primary {//不一样的地方继承
    background-color: #09c;
    color: #fff;
  }
</style>
<form>
  <button class="btn btn--primary">提交</button>
  <button class="btn">重置</button>
</form>

##OOCSS原则
- 结构和皮肤分离
  - .btn .btn--primary .btn--info .btn--danger
- 容器和内容分离: 一个button长什么样是由自身决定的，而不是由放在哪个位置决定的；比如一个杯子放的水，茶，咖啡，里面的内容是由本身决定的，而不是杯子决定的
  /* 不推荐这样写! */
  .header .btn {//父级限制了，这个样式复用不方便，维护难度大
    background: #f66;
    color: #fff;
  }

CSS架构，最基础的是OOCSS

##Media Object


##结构
<div class="media media--left">
  <a class="media__image">
    <img class="media__ojbect" src="//placehold.it/100x100" alt="">
  </a>
  <div class="media__body">
    <h3 class="media__title">Title</h3>
    <p class="media_description">
      A paragraph about the media
    </p>
  </div>
</div>

CSS结构，他和标签没有关系，这种media可以是一个DIV,也可以是一个LI；
我们很少用标签的名字，因为我们不限制在body里面使用标签，标签是一个语义化的东西，符合语义；CSS是一个样式的容器，没有必要要求他什么标签使用什么样式；也有例外，有时候在一个组件里面只能使用一个标签的时候，也会使用标签代替class,比如有的列表li的样式
.media
  .media__image
    .media__object
  .media_body
    .media__title
    .media__description

##CSS：语义化限定在结构里面，CSS是定义样式的，像mt10这种最好不要写；不过像left和right是可以的，看使用场景，如何把握后面讲，这个看经验；在其他语言像JS，一开始不会涉及到权衡，设计上的东西；但是在CSS里面，一去写就会遇到这个问题， CSS看起来很容易学，为什么那么多人却学不好，因为自由度大，一开始就要考虑架构，设计，包括命名都要去思考，CSS之所以很难把他写好的原因，要从很多的方面去考虑，包括语义
.media,
.media__body {
  overflow: hidden;
}
.media__body :first-child {
  margin-top: 0;
}
.media--left .media__image {
  float: left;
  margin-right: 1em;
}
.media-right .media__image {
  float: right;
  margin-left: 1em;
}

##单一职责原则（SRP）
- 尽可能细地拆分成可`独立复用`的组件
- 通过组合方式使用多个组件
- 比如将布局和其它样式拆分；上面文件结构，一个项目的布局方式很多，两栏，三栏，布局不会太复杂，可以写在一个独立的文件，或者使用现有的模型，像栅格

.error-message {
  padding: block;
  padding: 10px;
  border-top: 1px solid #f00;
  border-bottom: 1px solid #f00;
  background-color: #fee;
  color: #f00;
  font-weight: bold;
}
.success-message {
  padding: block;
  padding: 10px;
  border-top: 1px solid #f00;
  border-bottom: 1px solid #f00;
  background-color: #efe;
  color: #0f0;
  font-weight: bold;
}
//这个CSS重复的太多，前四个和最后一个都是一样的

可以提取成这样,单一职责，可复用
.box {
  display: block;
  padding: 10px;
}
.message {
  border-style: solid;
  border-width: 1px 0;
  font-weight: bold;
}
.message--error {
  background-color: #fee;
  color: #f00;
}
.message--success {
  background-color: #efe;
  color: #0f0;
}

##开闭原则(对于扩展是开放的，可以基于现有的在他的基础之上写更多的样式，不要直接对我写的这个class进行修改)
.box {
  display: block;
  padding: 10px;
}
/* bad example */
.content .box {
  padding: 20px;
}

/* better example */
.box--large {
  padding: 20px;
}
http://zhouweicsu.github.io/
https://github.com/webzhao/diapo

##Don't Repeat Yourself(DRY): 代码越简单，越容易读和修改
/* bad example*/
.selector {
  border-top: 1px solid #fcc;
  border-left: 1px solid #fcc;
  border-leftbottom 1px solid #fcc;
}

/* better example */
.selector {
  border: 1px solid #fcc;
  border-right: none;
}

/* bad example */
.icon-1 {
  background: url(img.png) no-repeat 0 0;
}
.icon-2 {
  background: url(img.png) no-repeat 0 -100px;
}

/* better example */, 命名使用一个通用的.icon会更好
.icon-1, .icon-2 {
  background: url(img.png) no-repeat 0 0;
}
.icon-2 {
  background-position-y: -100px;
}

##命名Naming
- 基于功能
  - 它是用来干什么的？
  - .button/.form/.list/.external-link/.tab-item/.nav: 站外链接做一个区分
- 基于内容:这个用的通常比较多
  - 元素里面放的是什么内容？
  - .news/.user-info/.help/.contact-me
- 基于视觉
  - 看起来是什么样？
  - .round-image/.nowrap:圆角图，不折行

##命名原则
- 优先使用基于功能的命名
  - 样式与内容无关（好处，通常样式和内容会发生变化，如果基于样式命名，带圆角的图上，后面把圆角去掉了，改变了样式，这个时候命名就不那么合适；第二个基于内容去命名有不好的地方就是把样式和内容绑定在一块儿了，同样的.news在当前是新闻的样式，比如后来加了一块儿功能，设计师复用了news的样式，然后再给那边加一个news也不太合适；但是功能型的命名，他的抽象会更好一些，他和内容绑定的不那么紧密）
- 中小型网站可以基于内容去命名：对于个人简历或博客，页面三五个或者不多，内容也不会加的特别多，这个时候可以用内容去命名
- 大型网站可以使用基于视觉去命名(视觉风格通常会统一)
  - 不要使用太具体的样式(需要自己去把握，比较的困难)

#top
#left  #right 这样的命名就不好，如果左右换一下就不好了

#header
#main #aside 这个不是那么的具体，可以把main放左边，也可以放右边，main占主体，咱们通过大小去做这样的命名

##功能 vs 视觉 vs 具体样式
- .warning vs .orange  在三个系统里面有警告或错误提示的信息，如果命名成.orange，这个就是一个非常具体的基于样式的命名；.warning是基于他的用途和功能的命名，他是一个提示信息，或者是一个成功的信息，错误的信息，他和样式是没有关系，他在不同的设计里面颜色不一样
- .btn-primary vs .btn-blue 蓝色在网站的设计里面是主色调，你的主要功能按钮是蓝色，但是不要写.btn-blue,这个是一个很具体的，如果改版的话会很不方便；.btn-primary是一个主要动作的按钮，后面改成什么颜色 都可以
- .size-large vs .width-200 太具体也是不太好的，像w190
- form-inline  bootstrap里面的例子，需要在一行里面显示两个表单项就可以用这个，让多个元素并排，他也是一个基于视觉的命名，但是又不是特别具体
- nav-stacked bootstrap里面的例子，导航栏有些时候在手机上宽度不大，要垂直的摆放，可以用 nav-stacked stacked是堆在一块儿，这个是基于视觉的，但是又不太具体

css在其他地方也是一个比较头疼的，可以看一些比较好的项目的做法，可以看bootstrap里面的一些命名，以及实现； bootstrap是一个布局的框架，因为他不知道你是使用在什么地方，所以基本都是基于视觉来命名的；比如布局就更直接，row, col-lg-6

##CSS命名规范
##BEM,可以把两个线换成一个线的，为什么是两个呢，因为是很多时候都会用到一个线的命名，为了区分，可以使用两个
- Block     可以独立出来的组件
- Element   Block里面的一些子元素 __  跟上组件的名称，避免命名冲突
- Modifier  基础样式进行扩展，修饰 --

<nav>
  <a href="#">Home</a>
  <a href="#">JavaScript</a>
  <a href="#">CSS</a>
</nav>

##Block(Module/Component)

<nav class="tabs">
  <a href="#">Home</a>
  <a href="#">JavaScript</a>
  <a href="#">CSS</a>
</nav>

##Element(Block内的元素)
<nav class="tabs">
  <a class="tabs__item" href="#">Home</a>
  <a class="tabs__item" href="#">JavaScript</a>
  <a class="tabs__item" href="#">CSS</a>
</nav>

##Modifier(修饰): 正常三个是并排，如果要垂直的放起来
<nav class="tabs tabs--stacked">
  <a class="tabs__item" href="#">Home</a>
  <a class="tabs__item" href="#">JavaScript</a>
  <a class="tabs__item" href="#">CSS</a>
</nav>

##Modifier(修饰): tab栏选中
<nav class="tabs tabs--stacked">
  <a class="tabs__item tabs__item--active" href="#">Home</a>
  <a class="tabs__item" href="#">JavaScript</a>
  <a class="tabs__item" href="#">CSS</a>
</nav>

##.block__element--modifier   总结起来就是这样,比较简单，给每个团队讲都能够讲明白，这个习惯挺好，因为他很规范，看到一个class就知道他是一个元素还是一个修饰
后面出的不同的一个CSS框架使用的都比较相似，或者稍微变一下，总体的思想都是这样的

##编写简单易维护的CSS
浏览器的前缀很不方便

##CSS预处理,针对大型项目里面很有必要，几个页面用也不一定好
- less http://lesscss.org/
- Sass http://sass-lang.com/
- Stylus http://www.stylus.com/
- PostCSS http://postcss.org/(相当于一个CSS预处理的框架，本身没有语法，你可以自己去写CSS的某一种未来的写法，比如CSS4的或者其他的，然后使用PostCSS里面的插件，他有一个完善的插件的机会，所有的东西都是通过插件来转换的，比如autocomprefix会自动帮你加前缀; 前面三种能做的这个都能做；他是向未来的标准靠拢的，新的一些草稿已经有了，我们可以提前写)
- http://cssnext.io/playground/

##CSS变量, 在Chrome里面是可以使用的，它现在已经支持,可以通过postcss编译的方式让下面的代码在所有的浏览器里面都可以使用
<h1>页面标题</h1>
<style>
:root {
  --primary-color: #f66;
  --heading-font: Helvetica, "Microsoft Yahei", Sans-serif;
}
h1, h2, h3 {
  font-family: var(--heading-font);
  color: var(--primary-color);
}
.btn--primary {
  background: var(--primary-color);
}
</style>

##Nesting 嵌套,标准的W3C，未来的写法,在现代浏览器里面没有支持，通过postcss
<nav class="navbar">
  <a class="navbar__item">Home</a>
  <a class="navbar__item">CSS</a>
  <a class="navbar__item">JavaScript</a>
</nav>
<style>
  .navbar {
    display: table;
    width: 100%;
    background: #f66;

    & .navbar__item {
      display: table-cell;
      color: #fff;
    }
  }
</style>

##Mixins 未来的写法(函数式的，公共的东西)
:root {
  --h-center {
    margin-left: auto;
    margin-right: auto;
  }
}
.main {
  @apply --h-center;
  max-width: 100em;
  min-width: 40em;
}

##颜色相关函数, sass里面非常好用的功能，在CSS下一个标准里面有颜色的函数
:root {
  --primary-color: #f66;
}
.btn {
  background: var(--primary-color);
  &:hover {
    background: color(var(--primary-color) blackness(20%)); //变暗降到20%，就不需要考虑颜色，只需要把之前的颜色加深就行
  }
}

##import, css2里面就支持的功能;也可以循环的引用，把基本的放到base.css里面，然后只引用base.css; 理论上我们不会这样去做，文件拆分太多，http的请求数量会变的非常多，所以性能是不好的，如果用less,sass,postcss, 他会把这些 @import都替换成import里面的一些内容
/* app.css */
@import 'variables.css';
@import 'common.css';
@import 'modules/button.css';
@import 'modules/form.css';

##Plugins
- AutoPrefixer
- StyleLint 讲HTML的时候有可能有意无意的出现一些错，可以找一些工具自动的帮你检查错误，这个就是Lint的工具，每一门语言都会有对应的Lint工具，他会帮助你发现在CSS里面的一些错误，包括语法，不好的用法，格式的错误，都可以通过这个来检查出来
- cssnext https://github.com/MoOx/postcss-cssnext
