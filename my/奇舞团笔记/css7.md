
#//7
#排版细节
##CSS details
##行级格式化上下文
Inline Formatting Context

##Font Metrics
![08](08.png)
ascender line
cap line
mean line
x-height  小写字母x的高度
baseline
descender line

复杂一点的有大写字母的一条线

##line-height
是指定两行的baseline之间的距离

##line box内的盒子摆放
![09](09.png)

##vertical-align
有时候希望让图片的位置调整一下，垂直对齐
- 定义盒子所处的行盒(line box)的垂直对齐关系
- 取值：baseline | sub | super | top | text-top | middle | bottom | text-bottom | <percentage> | <length>
- 百分比相对于元素自身的行高
- 初始值baseline

![10](10.png)

##top & text-top
<p><span>
  Rapidly advancing technology revolutionized <em>typography</em> in the latter twentieth century.
</span></p>
<style>
span {
  line-height: 5;
  background: coral;
}
em {
  vertical-align: text-top;
  display: inline-block;
  background: lightblue;
  line-height: 1.5;
  font-size: 200%;
}
</style>

##strut
<p><img src="//p5.ssl.qhimg.com/t013753a42172e3170a.jpg" alt="car" width="400" ></p>
<style>
  p {
    padding: 0;
    background: red;
  }
</style>

baseline是怎么确立的？
行级元素中没有任何的文字，也会根据元素的font-family去设置一个baseline, 图片的对齐方式继承自p标签
图片的下面还会有点空间，这个空间是baseline下面的空间
在图片的前面加一个字母y可以查看到baseline下面还有一点；即使里面没有文字的时候，也会按照font-family; 浏览器布局的时候先按照strut(支柱)去布局


<p><img src="//p5.ssl.qhimg.com/t013753a42172e3170a.jpg" alt="car" width="400" ></p>
<style>
  p {
    padding: 0;
    background: red;
    vertical-align: baseline;
  }
</style>
也可以把图片设置成display:block;

##lists style
- display: list-item 会生成 Principle Block Box 和 Marker Box(Principle放li, Marker放圆点)
- Marker Box的内容和位置可以通过list-style系列属性指定

##list-style-position
<h1>Typograph</h1>
<ul>
  <li>Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.</li>
  <li>Rapidly advancing technology revolutionized typography in the latter twentieth century.</li>
</ul>
<style>
  li:first-child {
    list-style-position: inside;
  }
</style>

##list-style-type
- none
- disc
- circle
- square
- decimal
- lower-roman
- upper-roman
- lower-greek
- lower-latin

<ul>
  <li>Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.</li>
  <li>Rapidly advancing technology revolutionized typography in the latter twentieth century.</li>
</ul>
<style>
  li:first-child {
    list-style-type: decimal;
  }
  li:last-child {
    list-style-type: lower-roman;
  }
</style>
在浏览器上面可以换各种类型

##list-style-image
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<style>
  li {
    list-style-image: url(https://s5.ssl.qhres.com/static/81c9c4d9eb2f79ba.svg)
  }
</style>

##list-style
list-style:none;
或者把li元素的display:block; 这样也可以没有小点

##background
- background-color
- background-image
- background-repeat
- background-position
- background-attachment

<div>content</div>
<style>
div {
  width: 100px;
  height: 100px;
  background-color: red;
  background-image: url(https://s5.ssl.qhres.com/static/81c9c4d9eb2f79ba.svg);
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>

##background
background: red url(path/to/img.png) no-repeat 0 0 ;

##CSS Sprites
<ul>
  <li class="item-1">Item 1</li>
  <li class="item-2">Item 2</li>
  <li class="item-3">Item 3</li>
</ul>
<style>
ul {
  padding: 0;
}
li {
  display: block;
  background: url(//p1.ssl.qhimg.com/t0111e26ee101fb8ecb.gif) no-repeat 0 0;
  padding-left: 32px;
  line-height: 1.7;
  margin: 1em 0;
}
li.item-2 {
  background-position: 0 -50px;//可以写百分比，50% 50% 把图片的50%和容器的50%对齐, 0% 50% 100% 都有缩写，left center right
}
li.item-3 {
  background-position: 0 -104px;
}
</style>

##background-size
<div></div>
<style>
div {
  border: 1px solid red;
  width: 200px;
  height: 100px;
  background: url(//p5.ssl.qhimg.com/t013753a42172e3170a.jpg) no-repeat 0 0;
  background-size: 200px 100px;
  //可以设置background-size: auto 100% 宽度自适应，高度100%
  //background-size: container; 包含图片，并且不做比例的变形，这种做内容的显示，让容器包含这张图
  //background-size: cover; 适合做背景图，进行裁剪
}
</style>

##border-radius
- border-radius: 5px
- 可以指定四个方向
- 可以使用百分数

<div id="example-one">1</div>
<div id="example-two">2</div>
<div id="example-three">3</div>
<div id="example-four">4</div>
<div id="example-five">5</div>
<div id="example-six">6</div>
<div id="example-seven">7</div>
<div id="example-eight">8</div>
<style>
#example-one {
  border-radius: 10px;
}
#example-two {
  border-radius: 10px;
  border: 3px solid green;
}
#example-three {
  border-radius: 5px 20px;
}
#example-four {
  border-radius: 10px/30px;
}
#example-five {
  border-radius: 30px/10px;
}
#example-six {
  border-radius: 50%;
}
#example-seven {
  width: 200px;
  border-radius: 50%; //相对于每一条边的百分比
}
#example-eight {
  width: 200px;
}
div {
  background: #BADA55;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #000;
  font-size: 24px;
  font-family: Helvetica, sans-serif;
  float: left;
  margin: 1em;
}
</style>

##box-shadow
http://www.cssmatic.com/box-shadow
http://www.css3developer.com/css3generator/inset-box-shadow-css.html
阴影可以加多个，用逗号隔开，可以写无限多个

用一个元素复原出来无限多个方的，然后写出一个多拉A
梦，写出来一个机器人，也可以用伪元素，相当于一个元素他有多个元素，通过before, after, box-shadow， border可以做出很多有意思的东西
有很多人拿这个做图标

https://saeedalipoor.github.io/icono/ 纯CSS的图标

box-shadow: inset;//在元素里面显示阴影，内阴影 outset; 在元素外面显示阴影，外阴影
