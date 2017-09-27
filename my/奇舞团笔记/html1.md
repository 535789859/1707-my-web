#1笔记： https://segmentfault.com/a/1190000007691807
#2 PPT
http://ppt.baomitu.com/d/e3051499#/11

#HTML:简介，文本
```
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>页面标题</title>
  </head>
  <body>
    <h1>这是内容</h1>
  </body>
</html>
```

##HTML是什么？
- HyperText Markup Language
- 使用`标签`来描述页面的`内容`和`结构`

##HTML的产生
- 1989年，Tim Berners-Lee
- 共享文档需要
- 还发明了浏览器、服务器和HTTP（前端的祖师爷）

##HTML 1.0, 1991
TITLE NEXTID A ISINDEX PLAINTEXT
P H1 H2 H3 H4 H5 H6 ADDRESS
DL DT DD UL LI

##HTML 2.0, 1994, IETF(标准化组织)
<!DOCTYPE html PUBLIC "-//IEFT//DTD HTML 2.0//EN">
HTML HEAD BODY H1 H2 H3 H4 H5 H6
P PRE XMP LISTING ADDRESS BLOCKQUOTE
UL OL LI DIR MENU DL DT DD
EM STRONG B I CITE CODE DFN KBD
SAMP VAR STRIKE U TT BR IMG
FORM INPUT SELECT OPTION TEXTAREA

##HTML 3.2, 1997, W3C
- Netscape引入私有标签
- HTML 3.0失败
- W3C接管HTML标准化

##HTML 4.01, 1998
- 样式与内容分离，CSS支持
- Doctype

浏览器 和 标准化组织一直在推动着WEB的发展，互相会有一些争斗，Doctype的产生就是这两个力量不一致的结果，在4.01出来之后，有些浏览器只支持旧的标准，对于新的标准浏览器不支持，这个版本有一个问题，他和之前的标准有一些不兼容的地方，这导致页面从旧的切的到新的版本的时候要修改很多东西；浏览器不知道页面按照哪个标准的哪个版本去显示

##Doctype的作用
- 指定HTML页面使用标准和版本
- 浏览器根据doctype决定使用哪种渲染模式

##渲染模式
- Quirks Mode 怪异模式（html4以前,如果不写会默认为怪异模式）
- Almost Standard Mode 准标准模式
- Standard Mode 标准模式(html4以后)

<!DOCTYPE html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 严格模式

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 非严格模式

##XHTML 1.0, 2000
- 用XML语法重新定义HTML(标签小写，必须闭合，属性的值必须要有)
- 语法严格要求

##XHTML 2.0
- 不兼容历史
- 去除样式类标签
- 去除img、a
- 彻底修改Form
- 开发者不欢迎，浏览器不支持

##HTML 5(和XHTML2.0同步发展)
- 2004年，WHATWG继续发展HTML
- 2008年，W3C HTML5草案发布

##HTML5设计思想
- 兼容已有内容
- 避免不必要的复杂性
- 解决现实的问题（storage,定位等）
- 优雅降级(浏览器不支持的时候，要有降级的方案，比如canvas标签不支持，可以中间写HTML表示不支持的浏览器显示的标签，如果浏览器认识，那里面的内容就忽略,这个就是降级的方案，可以给一个提示的图片)
- 尊重事实标准
- 用户 > 开发者 > 浏览器厂商 > 标准制定者 > 理论完美

##HTML5中的变化
- doctype、meta(简化)
- 新增语义化标签和属性(footer,header,nav)
- 去掉纯展示性标签(stroke,删除线，样式和结构分离)
- canvas、video、audio、离线、本地存储、拖拽等

##语法
- 标签不区分大小写，推荐小写
- 空标签可以不闭合，比如input、meta
- 属性不必引号，推荐双引号
- 某些属性值可以省略，比如required、readonly(为true可以省略)

##流式元素
![流式元素](01flow.png)

所有的标签分为几类
最大的是Flow流式元素，流式元素里面可以放其他的东西
###流式元素：里面可以放别的内容
```
a,abbr,address,area,article,aside,
audio,b,bdi,bdo,blockquote,br,
button,canvas,cite,code,data,
datalst,del,dfn,div,dl,em,embed,
fieldset,figure,footer,form,h1,h2,
h3,h4,h5,h6,header,hr,i,iframe,img,
input,ins,kbd,keygen,label,main,map,
mark,math,meter,nav,noscript,object,
ol,output,p,pre,progress,q,ruby,s,
samp,script,section,select,small,
span,strong,style,sub,sup,svg,table,
textarea,time,u,ul,var,video,wbr,
Text
```

###元数据元素:
```
base,link,meta,noscript,script,style,title
```

###可交互内容
```
a,audio,button,embed,iframe,img,
input,keygen,label,object,select,
textarea,video
```

###段落内容
```
a,abbr,area,audio,b,bdi,bdo,br,
button,canvas,cite,code,data,date,
datalist,del,dfn,em,embed,i,iframe,
img,input,ins,kbd,keygen,label,map,
mark,math,meter,noscript,object,
output,progress,q,ruby,s,samp,
script,select,small,span,strong,sub,
sup,svg,textarea,time,u,var,video,
wbr,Text
```

###标题内容
```
h1,h2,h3,h4,h5,h6
```

###章节内容
```
article,aside,nav,section
```

###嵌入式
```
audio,canvas,embed,iframe,img,math,
object,svg,video
```

##HTML中的文本标签

##p,有自动闭合功能，不过建议写好闭合标签
<p>At the first</p>
<p>The conference

##h1~h6 从页面的角度来看待，不要受section的影响，有section之后有争论，section里面再分的话复杂度上升，还是用原来的思路，从整个网页来看;
这个会影响到SEO优化，特别是标题的关键词

```
<h1>Typography</h1>
<h2>History</h2>
<p>Althought typically applied to printed</p>
<h3>Evolution</h3>
<p>The design of typefaces</p>
<h2>Scope</h2>
```

##hr段落级别的话题切换,之前只是横线，H5之后的语义多了一个话题切换的语义
```
<h3>principles</h3>
<p>a</p>
<hr>
</p>Type may be</p>
```

##列表
- 有序列表
- 无序列表
- 定义列表

##有序列表
```
<h1>世界电影票房排行榜</h1>
<ol start="1">
  <li>阿凡达</li>
  <li>泰坦尼克号</li>
  <li>复仇者联盟</li>
</ol>
```

##无序列表
```
<h1>购物清单</h1>
<ul>
  <li>1个西瓜</li>
  <li>2瓶矿泉水</li>
  <li>1盒酸奶</li>
</ul>
```

也可以嵌套
<ul>
  <li>1个西瓜</li>
  <li>2瓶矿泉水</li>
  <li>1盒酸奶</li>
  <li>
    垃圾袋
    <ul>
      <li>大号垃圾袋</li>
      <li>小号垃圾袋</li>
    </ul>
  </li>
</ul>

##定义列表
<h3>霸王别姬</h3>
<dl>
  <dt>导演：</dt>
  <dd>陈凯歌</dd>
  <dt>主演：</dt>
  <dd>张国荣</dd>
  <dd>张丰毅</dd>
  <dd>巩俐</dd>
  <dt>上映日期：</dt>
  <dd>1993-01-01</dd>
</dl>

##嵌套规则,不合法的规则，浏览器可能会用合法的规则重新改写；table的嵌套也要注意
<div>
  <li>Item 1</li>
  <li>Item 2</li>
</div>
<span>
  <dt>专业：</dt>
  <dd>软件工程</dd>
</span>

##引用
<blockquote cite="http://t.cn/RfjK00F">
<p>天才并不是自生自长在深林荒野里的怪物，是可以使现在都生长的民众产生、升序出来的，所以就同有 这种民众，就没有天才。</p>
</blockquote>
<p>--鲁迅</p>

<p>我最喜欢的一本书是<cite>小王子</cite>.</p>

<p>在<cite>第一章</cite>, 我们讲过<q>字符串是不可变量</q>.</p>

cite是标题，电影，书，用于来源
q是和blockquote相对的，一个短的引用，q里面包裹的是引用的内容

##预格式化文本
<p>第一行 空    格
第二行</p>
<pre>第一行 空    格
第二行</pre>

##代码
<p><code>const</code>声明创建一个只读的常量。</p>

<pre><code>
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
</code></pre>

##figure
<figure>
  <img src="a.jpg" alt="字体排印样表">
  <figcaption>制作了一张表</figcaption>
</figure>

<figure>
  <figcaption>定义一个函数</figcaption>
  <pre><code>
  function add(x, y) {
    var total = x + y;
    return total;
  }
  </code></pre>
</figure>

##网页总体结构
![结构](02struct.png)
header
  nav
main
  article
  article
aside
footer

##内容划分
<article>
  <header>
    <h1></h1>
    <p></p>
  </header>
  <section>
    <h2></h2>
    <p></p>
  </section>
  <section>
    <h2></h2>
    <p></p>
  </section>
  <footer>
    <h2>参考链接</h2>
    <nav>
      <ul>
        <li><a></a></li>
        <li><a></a></li>
      </ul>
    </nav>
  </footer>
</article>

##我该用哪个标签？
http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf


##强调,推荐前两个
- strong: 重要性、严重性和紧急性
- em: 从一句话中突出某个词语
- b: 将词语从视觉上和其他部分区分，比如一篇论文摘要中的关键词
- i：换一种语调去说一句话时，比如其它语言翻译，对话中的旁白

##定义与缩写
<p><dfn>HTML是HyperText Markup Language的简称</dfn></p>

<p><abbr title="HyperText Markup Language">HTML</abbr>
标准由<abbr title="World Wide Web Consortium">W3C</abbr>
制定和修改。</p>

##代码
<p><code>...</code></p>
<p><var>E</var>等于的质量<var>m</var></p>
<p>按下<kbd>F12</kbd>打开浏览器开发者工具。</p>
<samp>On branch master
</samp>//举例

##上标和下标
<sup></sup>
<sub></sub>

##mark
- 和用户当前行为相关的突出，比如在搜索结果中匹配到的词
- 一部分内容需要在后面引用时

##插入和删除, 为了记录修改的过程，先删除，再插入
<p>但是，该属性<del>目前还没有浏览器支持</del>
<ins>更新：新版本的Safari</ins></p>

<del>原价：298元</del> <ins>双11特价：188元</ins>

##换行控制（尽量避免）, wbr当足够长的时候不换行，如果需要换行，会在wbr的地方换行，
<p>JavaScript<br>高级程序设计</p>
<p>http://zh.wikipedia.org/a/b/c</p>
<p>http://zh.wikipedia.org/<wbr>wiki/<wbr>a</p>

##div和span
实在找不到其它更符合语义的标签时使用

##实体(Entity)字符
&amp; &nbsp; &lt; &copy; &yen; &#9775;
