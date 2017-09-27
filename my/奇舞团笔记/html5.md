#5
#HTML:扩展知识
##全局属性
- accesskey
- class
- contenteditable
- dir
- title
- hidden
- id
- itemid
- itemprop
- itemref
- itemscope
- itemtype
- lang
- spellcheck
- style
- tabindex

##accesskey & tabindex;  有些用户是键盘控，不会频繁的动鼠标; 还有些手脚不方便的人，移动鼠标不方便，但是他可以用键盘来快速准确的输入
<p>
  <input accesskey="i" placeholder="Press Ctrl+Alt+I">
</p>
<p>
  <a href="http://example.com" accesskey="e" tabindex="-1">Press <kbd>Ctrl+Alt+E</kbd></a>
<p>

该如何告诉用户该输入什么key; 有一些浏览器的插件会做这样的事，比如按ctrl或command键，他会把这些元素的accesskey给显示出来；还有浏览器插件是这样做，他会给所有的页面元素都分配一个accesskey,即使页面没有，插件也会帮你加入；主要关注可用性和快捷性

tabindex；对于键盘操作的人来说tabindex是一个非常重要的；我在页面上可以通过tab, shift+tab去选中不同的元素；有一些情况你做的不是很好，页面上的alert框，理论上是回车键能够把他消失掉，如果alert框是你自定义的，用元素模拟的，那你很可能一些行为和原生的不一样，会造成不方便，这个是不符合用户预期的，更有一些情况会造成操作上的一些失误，比如在一个表单里面，我填了一些东西我点击保存的时候弹出一个alert, 我下意识的敲了一个回车，如果下面的页面是在其他的链接上，我一点，页面就跳走了，前面的内容都丢失

如果你要改系统原生的组件的时候，或者模拟表单组件的时候；要充分的考虑框的可用性；很多时候我们访问页面的时候可能是使用的键盘，通过上下键切的选项，用tab键导航内容
focus状态的外边蓝色框也是要加上的

tabidnex可以定义按tab键的时候的顺序，如果不想的话把他设置为负的
我们看一下google.com, 搜索一个东西，按tab键，能够非常清楚的给我们显示出来，有些是鼠标放上去该有的提示，我们在tab的时候也能显示

##id,class & style
- id保证唯一性
- class多用在CSS
- style指定内联样式

##contenteditable & spellcheck html5新增的
<section contenteditable spellcheck="true">
  <h1>可读性和易读性</h1>
  <p>可读性和易读性经常被混淆。可读性通常用来形容某种书面语言阅读和理解的容易程度--它关乎这种语言本身的难度，而非其外观。影响可读性的因素包括语句的长度，以及文中生僻、过度专业性词汇的出现频率。</p>
</section>

编辑的时候可以按ctrl+b加粗，ctrl+i倾斜等等
spellcheck拼写检查

##语言lang & dir 大多数情况下没用，如果做的这个网站有多语言版本就非常有用; 指定了lang之后，搜索引擎是知道你这个网站是用的什么语言的，如果在海外搜他会直接到英文版；有些浏览器插件，你经常看英文的需要一些词典，chrome的插件也会做一些翻译，自动翻译，也会根据你默认的语言去做翻译
可以放在任意的标签里面
<div lang="zh-CN">
  <p>字体排印学的英文<span lang="en">Typography</span>来自希腊语的<span lang="el"></span></p>
</div>

<p dir="rtl" lang="ar">234243</p>  阿拉伯语的方向就是从右往左的顺序，所以默认就是右对齐

##title; 默认的效果不好，可以用toast自己模拟代替
<p>My logs show that there was some interest in <abbr title="Hypertext Transport Protocol">HTTP</abbr> today.</p>

##hidden: 通常用display:none隐藏，有时候隐藏的情况是用户点击了什么之后会再次显示出来，以前用display:none; 但是再一次显示的时候应该把他设置成什么呢？是block吗，不一定，因为隐藏的元素可能是块级，也有可能是行内元素，或者table,这个时候你要把display恢复成原本的需要加判断；如果用hidden就不需要判断
<p hidden>你看不见我</p>
$0.hidden
$0.hidden = true

##无障碍性
- 或可访问性，Accessibility
- 确保`任何人`都有办法获取在网页上的媒体内容
- 不让身体、心理或技术上的问题成为获取信息的障碍

##Web开发者应该做的事情
- WCAG(Web Content Accessibility Guidelines) 2.0  https://www.w3.org/Translations/WCAG20-zh/
- ARIA (Accessible Rich Internet Applications) https://www.w3.org/WAI/intro/aria


##ARIA:除了role还有其他的一些属性
<ol role="tablist">
  <li role="tab">
    <a href="#ch1">Chapter 1</a>
  </li>
  <li role="tab">
    <a href="#ch2">Chapter 2</a>
  </li>
  <li role="tab">
    <a href="#quiz">quiz</a>
  </li>
</ol>

##提升无障碍性：也有用户会开启省流量模式
- 为img提供alt属性
- noscript 给一段说明文字如何启用javascript
- input和label对应: 操作易用，区域足够大，点文字能操作控件
- 图形验证码与语音验证码
- 文字和背景有足够对比度
- 键盘可操作

##语义化
- HTML中的元素、属性及属性值都拥有某些含义
- 开发者应该遵循`语义`来编写HTML

##为什么语义化很重要？
- 提升代码可读性、可维护性
- 搜索引擎优化
- 提升无障碍性

##扩展HTML
- meta
- data-*
- microdata
- RDFa
- JSON-LD

##meta标签
<!-- 编码 -->
<meta charset="UTF-8">

<!-- 指定HTTP Header -->
<meta http-equiv="Content-Security-Policy" content="script-src 'self'">

<!-- SEO 搜索引擎优化 -->
<meta name="keywords" content="关键词">
<meta name="description" content="页面介绍">

<!-- 移动设备viewport -->
<meta name="viewport" content="initial-scale=1">

<!-- 关闭iOS电话号码自动识别 -->
<meta name="format-detection" content="telphone=no">

<!-- 360浏览器指定内核 -->
<meta name="renderer" content="webkit">

<!-- 指定IE渲染模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

##data-* : 把id放到data-id上面
<ul>
  <li data-id="1">苹果</li>
  <li data-id="2">香蕉</li>
  <li data-id="3">芒果</li>
</ul>

选中一个li
$0.dataset

##microdata  主要用在搜索引擎优化
- HTML5中的一个规范
- 在HTML中通过属性嵌入格式化数据
- 提供给搜索引擎、浏览器（插件）使用

这里描述了一个人，里面有名字，学校，网页，地址等信息，现在就是普通的文本，如果用HTML写，简单的就是段落，没有办法用语义化的标签把他组织成格式化的数据；但是microdata可以做到，用了itemscope, itemscope是一个项的作用域，实体一是一个Person, 一项的属性；实体里面也是可以嵌套的
对于搜索引擎，可以对格式化的信息进行聚合，更好的展示
<section itemscop itemtype="http://schema.org/Person">
  Hello, my name is
  <span itemprop="name">John Doe</span>
  I am a
  <span itemprop="jobTitle">Graduate research assistant</span>
  at the
  <span itemprop="affiliation">University of Dreams</span>
  My friends call me
  <span itemprop="additionalName">Johnny</span>
  You can visit my homepage at
  <a href="http://www.example.com" itemprop="url">www.example.com</a>
  <section itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    I live at
    <span itemprop="streetAddress">1234 Peach Drive</span>
    <span itemprop="addressLocality">Warner Robins</span>
    <span itemprop="addressRegion">Georgia</span>
  </section>
</section>

在谷歌上面搜索一个海底捞 看TripAdvisor等里面有Rating:4.4 他不需要根据哪家公司的标准，可以直接从数据里面提取出来

国外的大众点评yelp 里面就会有一些itemscope

把microdata的数据提取出来，就是JSON-LD
##JSON-LD
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Graduate research assistant",
  "affiliation": "University of Dreams",
  "additionalName": "Johnny",
  "url": "http://www.example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Peach Drive",
    "addressLocality": "Wonderland",
    "addressRegion": "Georgia"
  }
}
</script>

搜索引擎对microdata和json-ld的方式都是支持的

##相关链接
- Google Schemas  https://developers.google.com/schemas/
- Schema.org http://schema.org/  定义实体的地方，一个实体里面有哪些属性，和其他实体有什么关系；这个除了搜索引擎之外 ；对于起名字范困难的同学有帮助，如果做一个商品的页面，有很多内容，不知道起什么class名字，可以参考这个

##HTML编码规范,关于标签的闭合，大小写，引号，换行
- Google coding Style https://google.github.io/styleguide/htmlcssguide.html  atom/sublime/vscode 编辑器里面可以装html5的lint，他会给你检查出来，哪里没有闭合，哪里缺少间括号
- W3C Validator  https://validator.w3.org/  建议大家装一个插件，在保存的时候就帮你检查，搜索html lint或者html validator就行

##工具
- EMMET
- Markdown
