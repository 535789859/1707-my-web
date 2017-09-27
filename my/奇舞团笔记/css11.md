
#//11
#Responsive Web Design
响应式页面设计

##响应式设计
同一个页面可以适应不同屏幕大小设备的设计方案

##viewport: 不设置这个就会当成PC的页面，宽度为980的页面宽度
<meta name="viewport" content="width=device-width, initial-scale=1.0">

##响应式的图片
- 大图随容器自动缩放，保持高宽比
- max-width: 100%

<img src="http://p0.jscssimg.com/ac1feb9e05cf5752.jpg" alt="flower">
<style>
  body {
    margin: 0;
  }
  img {
    max-width: 100%;//不指定具体的宽度，不设置宽度就会导致图片的调试默认没有，后面会变化；在移动端可以在外面加一个容器，padding-top:50%;
  }
</style>

##背景图片
- background-size: cover
- background-size: contain

<div></div>
<style>
div {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url(//p0.jscssimg.com/ac1feb9e05cf5752.jpg) no-repeat center center;
  background-size: cover;
}
</style>

##保持高宽比,比如图片的轮播图和播放器的高宽比
<div><div>
<style>
div {
  height: 0;
  padding-top: 50%;
  backgrond: #f99;
}
</style>

##两栏：自适应布局
- float与BFC
- 绝对定位
- 模拟table
- flex布局

<form>
  <input type="search" >
  <button>搜索</button>
</form>
<style>
  form {
    margin-right: 4em;
    position: relative;
  }
  form input {
    width: 100%;
    font-size: inherit;
    line-height: 1.4;
  }
  form button {
    position: absolute;
    left: 100%;
    top: 0;
    width: 4em;
    font-size: inherit;
  }
</style>

##导航栏布局
<nav>
  <a href="#">Home</a>
  <a href="#">JavaScript</a>
  <a href="#">HTML</a>
  <a href="#">CSS</a>
  <a href="#">HTTP</a>
</nav>
<style>
body {
  margin: 0;
}
nav {
  display: table;
  width: 100%;
  background: #00bcd4;
}
nav a {
  display: table-cell;
  text-decoration: none;
  color: #fff;
  padding: 0 1em;
  font: normal 14px/2 Helvetica, sans-serif;
}
nav a:not(:first-child) {
  border-left: 1px solid rgba(255,255,255,0.7);
}
</style>

<nav>
  <a href="#">Home</a>
  <a href="#">JavaScript</a>
  <a href="#">HTML</a>
  <a href="#">CSS</a>
  <a href="#">HTTP</a>
</nav>
<style>
body {
  margin: 0;
}
nav {
  display: flex;
  width: 100%;
  background: #00bcd4;
}
nav a {
  flex: 1;
  text-decoration: none;
  color: #fff;
  padding: 0 1em;
  font: normal 14px/2 Helvetica, sans-serif;
}
nav a:not(:first-child) {
  border-left: 1px solid rgba(255,255,255,0.7)
}
</style>

##网格布局，自动换行
- inline-block + justify
- flex

一行不管多宽都是显示三个元素
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
</ul>
<style>
ul {
  margin: 0;
  padding: 0;
  text-align: justify;
}
li {
  display: inline-block;
  width: 30%;//放的元素就是固定的了,只能3个
  height: 0;
  padding-top: 20%;
  background: lightblue;
  text-align: center;
  margin-bottom: 1em;
}
</style>

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
</ul>
<style>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  display: block;
  width: 4em;
  height: 3em;
  background: lightblue;
  text-align: center;
  margin: 1em;
}
</style>


##media query
针对不同的屏幕，应用不同的样式
<link rel="stylesheet" href="m.css" media="screen and (max-width: 480px)">
@media screen and (min-width: 480px) {
  .selector {……}
}

##可以查询的media
- width
- height
- device-width
- device-height
- device-pixel-radio 写css的时候不用按屏幕的分辨率写px,针对 高分辨屏频率的要求
- orientation 转向,横屏还是竖屏

<nav>
  <a href="#">Home</a>
  <a href="#">JavaScript</a>
  <a href="#">HTML</a>
  <a href="#">CSS</a>
  <a href="#">HTTP</a>
</nav>
<style>
  body {
    margin: 0;
  }
  nav {
    display: flex;
    width: 100%;
    background: #00BCD4;
  }
  nav a {
    flex: 1;
    text-decoration: none;
    color: #fff;
    padding: 0 1em;
    font: normal 14px/2 Helvetica, sans-serif;
  }
  nav a:not(:first) {
    border-left: 1px solid rgba(255,255,255,0.7);
  }
  @media screen and (max-width: 480px) {
    nav {
      flex-direction: column;
    }
    nav a:not(:first-child) {
      border-left: none;
      border-top: 1px solid rgba(255,255,255,0.7);
    }
  }
</style>

##字体
<h1>Responsive web design</h1>
<p>Responsive web design (RWD) is an approach to web design aimed at allowing desktop webpages to be viewed in response to the size of the screen or web browser one is viewing with.</p>
<style>
html {
  font-size: 16px;
}
h1 {
  font-size: 2rem;
}
p {
  font-size: 1rem;
}
@media screen and (max-width: 1000px) {
  html {
    font-size: 14px;
  }
}
@media screen and (max-width: 720px) {
  html {
    font-size: 12px;
  }
}
</style>

##写一个属性值让根元素的font-size根据页面的宽度发生一些变化
font-size: 1.5vw;
这个屏幕太小字太小，屏幕太大会特别大

##calc,不常用
font-size: calc(10px + 1vw)
