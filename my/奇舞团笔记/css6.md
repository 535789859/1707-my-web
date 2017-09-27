

#//6
#定位与堆叠
##定位模式(Positioning schemes)
- 常规流(Normal Flow)
- 浮动(Float)
- 绝对定位（Absolute Positioning）

##position
- static, 非定位，默认值
- relative, 相对定位(相对自己) 仍然在常规流中
- absolute, 绝对定位，相对非static祖先元素定位
- fixed, 相对于视口绝对定位

##relative
- 在常规流里面布局
- 相对于自己本应该在的位置进行偏移
- 使用top、left、bottom、right设置偏移长度
- 流内其它元素当它没有偏移一样布局：不会影响其他元素

<figure>
  <img src="http://s3.qhimg.com/static/65796cb8649a8770/d.jpg" width="512" alt="daisy">
  <figcaption>图片标题</figcaption>
</figure>
<p>其他文本内容。</p>
<style>
figure {
  width: 512px;
}
figure img {
  display: block;
}
figcaption {
  position: relative;
  top: -28px;
  background: rgba(0,0,0,0.2);
  color: #fff;
  font-size: 14px;
  line-height: 2;
  padding: 0 1em;
}
</style>

##Absolute
- 脱离正常流
- 相对于最近的非static祖先的padding box定位
- 不会对流内元素布局造成影响
- 可以有margin, 但不会折叠

<figure>
  <img src="http://s3.qhimg.com/static/65796cb8649a8770/d.jpg" width="512" alt="daisy">
  <figcaption>图片标题</figcaption>
</figure>
<style>
figure {
  width: 512px;
  position: relative;
}
figure img {
  display: block;
}
figcaption {
  position: absolute;
  bottom: 0;//根据布局看设置哪个属性最灵活
  width: 100%;
  background: rgba(0,0,0,0.3);
  color: #fff;
  font-size: 14px;
  line-height: 2;
  padding: 0 1em;
  box-sizing: initial;
  left: 0; //两边都设置为0，他会自动计算出来
  right: 0;
}
</style>

##自动计算
- 这些值都可以不指定
  - top
  - left
  - right
  - bottom
  - width
  - height
- 如果冲突了怎么办?

<p>Enter your email below to get exclusive access to our best articles and tips before everybody else.</p>
<div class="box">
  绝对定位内容。
</div>
<p>Just look at the image at the top of this article
to see how it will all work. Yes, you can install VLC
or another piece of Windows software that easily! After you run the command OneGet will locate the package in your configured package sources, download it to your computer, and install it -- all automatically.</p>
<style>
.box {
  position: absolute;
  background: #f00;
  color: #fff;
}//其他值都没写，值是auto, auto不总是0，他是智能的，对于绝对元素来说，他的top,right,bottom,left值是假定这个元素不是绝对定位，他本来应该在哪儿的就在哪儿；当设置为绝对定位之后他还是在这个位置显示，只是不影响其他元素
</style>

有时候不写或者写成auto,或者百分比；有时候比写固定的值要强，可能在别的地方设置了行高40，如果在其他地方又写了40，发现固定的值写在了很多个地方；这个时候代码的可维护性就不那么好了，写CSS要用尽可能灵活的方式去实现；绝对定位可以适当的写auto,更灵活；适当的使用自动计算，写一个top和left,其他的自动计算

##position:fixed
- 相对于viewport定位
- 不会随页面滚动发生位置变化

<nav>
  <a href="#">首页</a>
  <a href="#">导航1</a>
  <a href="#">导航2</a>
</nav>
<main>
  <section>1</section>
  <section>2</section>
  <section>3</section>
  <section>4</section>
  <section>5</section>
</main>
<a href="#" class="go-top">返回顶部</a>
<style>
  nav {
    position: fixed;
    line-height: 2;
    background: rgba(0,0,0,0.3);
    width: 100%;
  }
  nav a {
    padding: 0 1em;
    color: rgba(255,255,255,0.7);
  }
  nav a:hover {
    color: #fff;
  }
  .go-top {
    position: fixed;
    right: 1em;
    bottom: 1em;
    color: #fff;
  }
  body {
    margin: 0;
    font-size: 14px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  section {
    height: 100vh;//让高度正好是视口的高度；
    color: #fff;
    text-align: center;
    font-size: 5em;
    line-height: 100vh;
  }
  section:nth-child(1) {
    background: #F44336;
  }
  section:nth-child(2) {
    background: #3F51B5;
  }
  section:nth-child(3) {
    background: #FFC107;
  }
  section:nth-child(4) {
    background: #607D8B;
  }
  section:nth-child(5) {
    background: #4CAF50;
  }
</style>

##z-index堆叠层次: 绝对定位元素会有重叠，谁在上谁在下可以通过z-index
- 为定位元素指定其在z轴的上下等级: position是非static的
- 用一个整数表示，数值越大，越靠近用户
- 初始值为auto, 可以为负数、0、正数

<div class="box-a">Box A</div>
<div class="box-b">Box B</div>
<div class="box-c">Box C</div>
<style>
  [class^="box-"] {//统一给三个元素定义样式
    position: absolute;
    width: 200px;
    line-height: 200px;//只有一行文字让文字在高度垂直居中就设置这个属性；设置这个之后就不用再设置一个height为200px了；因为这个文字只有一行；这里就可以少写一个height属性，更灵活
    text-align: center;
    color: #fff;
  }
  .box-a {
    background: #F44336;
  }
  .box-b {
    top: 100px;
    left: 100px;
    z-index: -1;
    background: #0097A7;
  }
  .box-c {
    top: 150px;
    left: 150px;
    z-index: 1;
    background: #4CAF50;
  }
</style>

##z-index大的一定在上面吗？
<nav>
  <ul>
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</nav>
<div id="dialog">
  dialog content
</div>
<style>
  nav {
    position: fixed;
    top: 0;
  }
  nav ul {
    positino: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    background: red;
    padding 1em;
    width: 10em;
  }
  #dialog {
    position: absolute;
    z-index: 1;
    top: 5em;
    left: 5em;
    background: blue;
    height: 10em;
    width: 10em;
  }
</style>
看到ul并没有在dialog上面；对于ul来说他的z-index是2；对于dialog来说他的z-index是1；  
nav本身是一个fixed的，他的z-index是auto;
我们比较的时候在堆叠的时候有一个上下文

##堆叠上下文
Stacking Context A
同一个堆叠上下文一定是按照大小的
![06](06.png)
![07](07.png)

##堆叠上下文的生成
- Root元素
- z-index值不为auto的定位元素（position不o static的）
- 设置了某些CSS3属性的元素，比如opacity、transform、animation等

##绘制顺序
- 在每一个堆叠上下文中，从下到上：
  - 形成该上下文的元素的border和background
  - z-index为负值的子堆叠上下文
  - 常规流内的块级元素非浮动子元素
  - 非定位的浮动元素(float)
  - 常规流内非定位行级元素(inline)
  - z-index为0的子元素或堆叠上下文
  - z-index为正数的子堆叠上下文
