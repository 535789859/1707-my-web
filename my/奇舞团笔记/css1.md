#CSS1
#CSS的概念与简介
##版本（Level）是层层递进的
- CSS Level 1
- CSS Level 2(CSS 2.1 规范)
- CSS Level 3
  - Color Module Level 3
  - Selectors Level 3
  - Media Queries
  - Fonts Level 3

##CSS规则
`选择器`
h1 { `声明块`
  `声明`
  color: red;
  `属性`       `值`
  font-size: 24px
}

##代码风格
h1 { color: red; font-size: 14px; }
h1 { /*工作中这样写的更多*/
  color: red;
  font-size: 14px;
}

##使用CSS
<!-- 外链 -->
link把外部的资源引进来； rel表示关系的类型，stylesheet是样式表，说明这个是样式文件；rel也可以是rss等; 像把网页保存成快捷方式时，里面也会用到link; 他在不同的场合会被不同的工具解析，在这里是在浏览器里面，当成样式
<link rel="stylesheet" href="/path/to/style.css">

<!-- 嵌入 -->
<style type="text/css">
  li { margin: 0; list-style: none; }
  p { margin: 1em 0; }
</style>

<!-- 内联 --> 坚决不要使用的写法，把结构和样式混合了，不易于维护；使用的情况有限制，只能给这一个元素给样式
<p style="margin:1em 0">Example Content</p>

##注释
/* 设置按钮宽度 * / //单行注释
.form button {
  width: 240px;
}

/** //多行注释
 * 设置默认样式
 * /
 body {
   margin: 0;
   /* font-size: 12px; * /
   //color: #333; 错误的写法，虽然也能有作用，因为css识别不了//
 }

 ##选择器
选择器用来从页面中选择元素，以给它们定义样式。

##通配选择器
/* 匹配所有元素 * /
* {
  box-sizing: inherit;
}

##标签选择器
/* 匹配所有p标签 * /
p {
  margin: 1em 0;
}

##id选择器
<p id="example">Example Content</p>
<style type="text/css">
/*
 * 匹配id为example的元素
 * 注意：id值在一个 HTML 中必须唯一
 * /
#example {
  font-size: 14px;
  line-height: 1.6;
  color: red;
}
</style>

##类选择器
<p class="warning">这是一条警告信息</p>

<!-- 可以给一个元素指定多个class,用空格隔开 -->
<p class="warning icon">这是另外一条警告信息</p>

<style type="text/css">
  .warning {
    color: orange;
  }
  .icon {
    background: url(warn.png) no-repeat 0 0;
  }
</style>

##简单选择器
- 通配选择器
- 标签选择器
- ID选择器
- 类选择器

##属性选择器
<p>
  <label>用户名：</label>
  <input name="username" value="zhao" disabled>
</p>

<style>
  input[disabled] {
    background: #eee;
    color: #999；
    cursor: not-allowed;
  }
</style>

<p>
  <label>密码：</label>
  <input name="password" disabled>
</p>

<style>
  input[type="password"] {
    border-color: red;
    color: red;
  }
</style>

<p>
  <label>身高：</label>
  <input name="height">
</p>
<p>
  <label>体重：</label>
  <input name="weight">
</p>
<p>
  <label>BMI：</label>
  <output for="weight height">22</output>
</p>
<style>
  [for~="height"] { //包含height
    color: red;
  }
</style>


<p><a href='#top'>回到顶部</a></p>
<p><a href='/home'>返回首页</a></p>
<style>
  a[href^="#"] {
    color: red;
  }
</style>

<p>你可以<a href="a.jpg">查看原图</a></p>
<style>
a[href$=".jpg"] {
  color: red;
}
</style>

<i class="icon-user">用户</i>
<i class="icon-wifi">WiFi</i>
<i class="other1 icon-car">汽车</i>
<i class="icon-heart other2">爱心</i>
<style>
[class^="icon-"], [class*=" icon-"] {
  color: coral;
  font-family: FontAwesome;
  font-style: normal;
  margin-right: 1em;
}
.icon-user::before {
  content: '\f007';
}
.icon-wifi::before {
  content: '\f1eb';
}
</style>

##伪类(pseudo-classes)
基于DOM之外的信息去（比如根据用户和网页的交互状态）选择元素。
  a:link {} 未访问过
  a:visited {} 已访问过

  a:hover {} 鼠标移动到链接上
  a:active {} 鼠标在链接上按下时
  a:focus {} 获得焦点时

<nav>
  <ul>
    <li><a href="http://w3.org">W3C</a></li>
    <li><a href="http://example.org">example.com</a></li>
    <li><a href="http://360.org">360</a></li>
  </ul>
</nav>
<label>搜索：<input name="q" type="search"></label>

<style>
  a:link {
    color: black;
  }
  a:visited {
    color: gray;
  }
  a:hover {
    color: orange;
  }
  a:active {
    color: red;
  }
  :focus {
    outline: 2px solid red;
  }
</style>

##选择器组合
- 直接组合 EF
- 后代组合 E F
- 亲子组合 E > F

##直接组合EF
<p color="warning">这是一条警告信息</p>
<div class="warning icon">这是另外一条警告信息</div>
<style>
p.warning { color: orange; }
</style>

##组合形式
- E[foo="bar"]
- E.warning
- E#myid
- #myid.warning
- .warning[foo="bar"]

##后代选择器
/* 后代选择器 * /
article p {
  color: coral;
}
/* 亲子选择器 * /
article > p {
  color: limegreen;
}

##同时为一组选择器定义样式
body, h1, h2, h3, h4, h5, h6, ul, ol, li {
  margin: 0;
  padding: 0；
}
[type="checkbox"], [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
