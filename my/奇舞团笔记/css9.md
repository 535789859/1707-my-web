
#//9
#动画
##transform变换
- 对元素进行平衡、旋转、缩放
- transform不会对其它元素布局产生影响
- 取值：none | <transform-list>

<ul>
  <li class="item-1"><span>初始状态</span></li>
  <li class="item-2"><span>平移</span></li>
  <li class="item-3"><span>旋转</span></li>
  <li class="item-4"><span>缩放</span></li>
</ul>
<style>
  ul {
    font-size: 14px;
    line-height: 4em;
  }
  li {
    display: block;
    text-align: center;
    margin: 1em;
  }
  li span {
    display: block;
    width: 6em;
    background: coral;
  }
  .item-2:hover span {
    transform: translate(100px, 0);
  }
  .item-3:hover span {
    transform: rotate(45deg);
  }
  .item-4:hover span {
    transform: scale(2, 0.5);
  }
</style>

##transform-list:顺序会影响最后展示的结果
<div class="box-1">box 1</div>
<div class="box-2">box 2</div>
<style>
  div {
    line-height: 6em;
    width: 6em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -3em 0 0 -3em;
  }
  .box-1 {
    transform: rotate(-45deg) translate(100px,0);
    background: coral;
  }
  .box-2 {
    transform: translate(100px, 0) rotate(-45deg);
    background: lightblue;
  }
</style>

要理解矩阵乘法 http://www.ruanyifeng.com/blog/2015/09/matrix-multiplication.html

##指定某一坐标变换
- translateX
- translateY
- scaleX
- scaleY

##transform-origin
<ul>
  <li class="item-1"><span>中心旋转</span></li>
  <li class="item-2"><span>左上角旋转</span></li>
</ul>
<style>
 ul {
   font-size: 14px;
   line-height: 4em;
 }
 li {
   display: block;
   text-align: center;
   margin: 1em;
 }
 li span {
   display: block;
   width: 6em;
   background: coral;
 }
 li:hover span {
   transform: rotate(45deg);
 }
 .item-2:hover span {
   transform-origin: 0 0;
 }
</style>

##3D Transform
##perspective 视点；放在要变换的元素的父级上
- 指定进行3D渲染时，人眼距离Z平面的距离
- 不会影响元素本身的渲染
- 只影响子元素的3D效果

<div class="container-2d">
  <p>2D Transform</p>
</div>
<div class="container-3d">
  <p>3D Transform</p>
</div>
<style>
  div {
    padding: 1em;
    border: 1px solid lightgray;
  }
  p {
    transform: rotateY(45deg);
    margin: 0;
    line-height: 4;
    width: 8em;
    text-align: center;
    background: lightblue;
  }
  .container-3d {
    perspective: 10em;
  }
</style>

- translate3d()
- translateZ()
- rotate3d()
- rotateX()
- rotateY()

##transition 过渡
- 指定从一个样式状态以另一个状态时如何过渡
- 动画的意义：告诉用户发生了什么

##指定过渡
- 什么属性发生变化时需要过渡
- 过渡持续多长时间
- 速度变化是什么样
- 是否有延迟

##transition
- transition-property
- transition-duration
- transition-timing-function
- transition-delay

<div class="box"></div>
<style>
.box {
  transition: all 2s ease-in;//有些属性是没办法做动画，比如display:block; display:none;
  width: 200px;
  height: 200px;
  margin: 1em auto;
  border-width: 50px;
  border-style: solid;
  border-top-color: #f35;
  border-left-color: #269;
  border-bottom-color: #649;
  border-right-color: #fa0;
}
.box:hover {
  width: 0;
  height: 0;
}
</style>

<div class="box"></div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: coral;
  transition: width 1s ease 1s, height 1s ease;
}
.box:hover {
  width: 200px;
  height: 200px;
}
</style>

<nav>
  <a href="#">Home</a>
  <a href="#">HTML</a>
  <a href="#">CSS</a>
  <a href="#">JavaScript</a>
  <a href="#">HTTP</a>
</nav>
<style>
nav {
  width: 100%;
  display: table;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 3;
}
nav a {
  display: table-cell;
  text-align: center;
  border: 1px solid #fff;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  background: hsl(181, 58%, 52%);
  transition: all .5s ease;
}
nav a:hover {
  color: #fff;
  background: hsl(181, 58%, 45%);
}
</style>

##animation
- animation 可以实现更复杂的样式变化效果
- 定义关键帧
- 指定动画行为

<i class="scroll-down">丅</i>
<style>
@keyframes down {
  from {
    margin-top: 0;
    opacity: 1;
  }
  50% {
    margin-top: 0.5em;
    opacity: 0.3;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}
.scroll-down {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -0.5em;
  font: normal normal 48px/1 Helvetica;
  color: #f66;
  animation: down 1.5s ease infinite;//使用down这个关键帧动画
}
</style>

<div class="box">
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
  <div class="leaf"></div>
</div>
<style>
.box {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 20px 0 80px;
}
.box .leaf {
  position: absolute;
}
.leaf {
  margin-top: 200px;
  width: 150px;
  height: 150px
  border-radius: 150px 0px;
  background: linear-gradient(
    45deg,
    rgba(188, 190, 192, 1) 8%,
    rgba(158, 31, 99, 1) 30%,
    rgba(158, 31, 99, 1) 100%
    );
    opacity: 0.5;
    transform: rotate(45deg);
    transform-origin: top right;
}
.leaf:nth-child(2) {
  animation: show-2 5s ease-in-out 1;
}
.leaf:nth-child(3) {
  animation: show-3 5s ease-in-out 1;
}
.leaf:nth-child(4) {
  animation: show-4 5s ease-in-out 1;
}
.leaf:nth-child(5) {
  animation: show-5 5s ease-in-out 1;
}
.leaf:nth-child(6) {
  animation: show-6 5s ease-in-out 1;
}
.leaf:nth-child(7) {
  animation: show-7 5s ease-in-out 1;
}
.leaf:nth-child(8) {
  animation: show-8 5s ease-in-out 1;
}
.box .leaf {
  animation-fill-mode: forwards;
}
@keyframes show-2 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(71deg);
  }
}
@keyframes show-3 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(96deg);
  }
}
@keyframes show-4 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(123deg);
  }
}
@keyframes show-5 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(149deg);
  }
}
@keyframes show-6 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(175deg);
  }
}
@keyframes show-7 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(200deg);
  }
}
@keyframes show-8 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(225deg);
  }
}

</style>
