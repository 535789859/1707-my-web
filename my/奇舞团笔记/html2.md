#2
#HTML:链接
##<a href="http://www.w3.org">W3C</a>
##链接地址
http://www.example.com/post/2016/fe.html?print=1&color=no#heading
http: Scheme
www.hexample.com: Host
post/2016/fe.html: Path
print=1&color=no: Query
heading: Hash

##省略协议(浏览器会根据当前页面的协议来决定这个链接的协议)
有时候网页即可以使用http，也可以使用https协议的时候经常这样用
另外https的页面里面使用了http的资源是加载不了，因为浏览器自动判断只加载https协议的资源; 可以查看百度或谷歌的地址

<a href="//p0.ssl.qhimg.com/t01.png">查看图片</a>

##省略协议和host(根据当前页面的协议和host，会自动补齐一个完整的URL)
<a href="/index.html">返回首页</a>

在命令行可以选中当前的元素
输入$0
$0.href     //查看到是一个完整的地址

##相对路径与绝对路径
为什么不用相对路径
  有时候跳到不同层级的页面时再相对的话就会出现地址错误
更多的时候是省略协议，省略host的写法,并且使用绝对路径
<a href="/a/b/c.html">绝对路径</a>
<a href="a/b/c.html">相对路径</a>
<a href="../../c.html">相对路径</a>

##页面内链接（锚点）
<h1>锚点</h1>
<p><a href="#test">到test</a></p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p id="test">test</p>
<p><a href="#">回顶部</a></p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>
<p>0</p> <p>0</p> <p>0</p>

##链接目标
默认是self
如果自定义的话，新打开的目标值都是abc, 则打开的窗口都会到新的这个tab标签
<a href="http://www.w3.org" target="-self">W3C(当前窗口)</a>
<a href="http://www.w3.org" target="-blank">W3C(新窗口)</a>
<a href="http://www.w3.org" target="abc">W3C(abc)</a>
<a href="http://www.example.org" target="abc">Example (abc)</a>

##HTML: 图片
给视障者看，比如手机上用voice over可以读屏的时候把这个文字给读出来
有些手机开了省浏览模式，把图片给关掉了，关掉之后是可以显示 alt 的文字
建议把图片的width和height属性写上；如果图片没有的话在加载时空间很小，图片加载完了会变大，用户体验的时候会从小变大，体验不好，可以在CSS里面指定，比如照片的宽高，你事前是不知道的，内容性的图片一般会在HTML的属性里面指定宽高，内容需要加上文字的说明可以加上figure包起来，更符合语义
<img src="/path/to/img.jpg" alt="替代文字" width="300" height="200">
<figure>
  <img src="/path/to/img.jpg" alt="替代文字">
  <figcaption>图片说明</figcaption>
</figure>

##指定图片宽高
- 不指定宽高：原图大小显示
- 指定宽度：按比例缩放到指定宽度
- 指定高度：按比例缩放到指定高度
- 指定高宽：强制按指定宽高显示（设置的时候按比例设置）

##常用图片格式
- jpg(算法比较适合表现色彩比较丰富的图片使用)
  - 照片
- png
  - 色彩较少时使用
  - png24可以半透明
- gif
  - 无法半透明(也适合颜色比较少)
  - 可以多帧做动画
- webp(尺寸更小，有一些浏览器不支持)
