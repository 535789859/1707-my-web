#2
#CSS - 文本样式
##font-family
- 使用逗号分隔的字体族名称: 常规，粗体，斜体，斜体+粗体 (Times New Roman) (Helvetica Neue)[苹果出的一个字体]
- 初始值由浏览器设置决定，可继承

<h1>卡尔斯巴德洞窟(Carlsbad Caverns)</h1>
<p>卡尔斯巴德洞窟(Carlsbad Caverns)是美国的一座国家公园，位于新墨西哥州南部。游客可以通过天然入口徒步进入，也可以通过电梯直接到达230米的洞察深处。</p>
<style>
  h1 {
    font-family: Helvetica, sans-serif;
  }
  body {
    font-family: Georgia, serif;
  }
</style>

##字体匹配算法
1. 浏览器先获取一个系统字体列表
2. 对于元素中每一个字符，使用font-family属性及其它属性进行匹配，如果能匹配就暂定该字体
3. 如果步骤2没有匹配上，选择下一个可选的font-family执行步骤2
4. 如果匹配到一个字体，但是字体中没有该字符，继续下一个可选的font-family执行步骤2
5. 如果没有匹配到字体，使用浏览器默认字体

##通用字体族
- Serif 衬线体
  - Georgia、宋体
- Sans-Serif 无衬线体
  - Arial、Helvetica、黑体、微软雅黑
- Cursive 手写体
  - Caflisch script、楷体
- Fantasy 梦幻字体
  - Comic sans MS, papyru
- Monospace 等宽字体
  - Consolas、Courier、中文字体

##font-family使用
- 英文字体放在中文字体前面:英文字符总是会在中文中出现，中文的字符在英文中是不会出现的
- 最后总是添加通用字体族：极端的情况是前面的一堆都没有

##font-size
- 定义文字的大小，可使用px, 百分比, em等做单位
- 取值
  - 绝对值 xx-small | x-small | small | medium | large | x-large | xx-large
  - 相对值 larger | smaller
  - 长度
  - 百分比，相对于父元素计算值
- 初始值为 medium (由浏览器设置决定，一般16px), 可继承

.side-page li {
  font-size: 36px;
}
.richtext h4 {
  font-size: 125%;
}
.continue {
  font-size: 0.85em;
}

##长度单位em
- 一般是相对于元素font-size的计算值的
- 用在font-size属性上时，是相对于父元素的font-size计算值：得到父级的px之后剩以em的值；

<section>
  <h2>字体族</h2>
  <p>Cursive(手写体)字体的字形，作为用于CSS的术语，一般具有连笔(joining strokes) 或者其它除斜体字体外的手写特征。</p>
  <p>Fantasy字体，用于CSS，主要是装饰性的，但仍然具有字符表现（与不表现字符的Pi或者Picture字体相反）。</p>
</section>
<style>
  section {
    font-size: 16px;
  }
  section h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
</style>

##font-style
- 定义文字以斜体还是正常方式显示
- 取值：normal | italic | oblique; italic是字体中的斜体字体；oblique是伪斜体；平时用italic如果发现没有斜体的字体则也会使用伪斜体
- 初始值为normal, 可继承

##font-weight
- 定义文字的粗细程度
- 取值：normal | bold | bolder | lighter | 100 | 200 | ... | 900
- 初始值为normal, 可继承

##取值含义: 实际使用的时候用的较少，很少有字体提供这么多，一般会使用两种，一种normal, 一种bold; 如果需要非常细的只能找到一个单独的特殊字体
- 100 - Thin
- 200 - Extra Light(Ultra Light)
- 300 - Light
- 400 - Normal
- 500 - Medium
- 600 - Semi Bold(Demi Bold)
- 700 - Bold
- 800 - Extra Bold(Ultra Bold)
- 900 - Black(Heavy)
- normal - 400
- bold - 700
- bolder - 比继承值粗
- lighter - 比继承值细

##line-height
- 元素所属的line box所占高度
- 初始值为normal(具体值由浏览器决定)，可继承
- 取值：<长度> | <数字> | <百分比>
- 段落文字一般取值1.4 ~ 1.8

<style>
```
#header { line-height: 48px; }
#content .wrap { line-height: 1.6; }
```
</style>

<section>
  <h1>这是一个很长的标题啊</h1>
  <p>这是正文</p>
</section>
<style>
  section {
    width: 10em;
    font-size: 12px;
    line-height: 1.5em; //12x1.5=18px;
  }
  h1 {
    font-size: 30px; //行高继承自section的18px,继承的是计算值
  }
</style>

需要改一下
<style>
  section {
    width: 10em;
    font-size: 12px;
    line-height: 1.5; //12x1.5=18px;
  }
  h1 {
    font-size: 30px; //行高继承自section的1.5,这里的行高值是45
  }
</style>

##font缩写
<h1> This is Title</h1>
<p>This is Paragraph</p>
<style>
  h1 {
    /* 斜体 粗细 大小/行高 字体族* /
    font: bold 14px/1.7 Helvetica, sans-serif;
  }
  p {
    font: 14px serif;
  }
</style>

##Web Fonts; 不想依赖于用户的字体，把字体放在服务器上，我们在css里面引用字体文件，去使用服务器上的字体，从服务器上把字体下载下来然后使用;
<h1>I watched the storm, so beautiful yet terrific.</h1>
<style>
  @font-face {
    font-family: 'Lobster';
    font-style: normal;
    font-weight: 400;
    src: local('Lobster'), //先使用本地的，本地没有会加载线上的; format的意义是不同版本的浏览器支持的字体格式不同，在项目中使用的时候会兼容不同的字体格式文件； @font-face就是申明了这样一个web-font;
         local('Lobster-Regular'),
         url(//lib.baomitu.com/fonts/lobster/lobster-v18-latin-regular.woff2)
         format('woff2'),
         url(//lib.baomitu.com/fonts/lobster/lobster-v18-latin-regular.woff)
         format('woff');
  }
  h1 {
    font-family: 'Lobster', cursive; //写好之后就可以像使用本地的字体一样去使用
  }
</style>

这里有两个问题；第一是版权，一般在大公司里面会去买方正的字库或者哪家的字库；
第二个是中文的问题，我们知道英文里面有100多个字体的字形就行，可能几十k就行；中文的汉子特别多，可能有几万个字符，这样字体文件就会比较大，十几M或者几十M，肯定 没办法直接在web上面去引用这么大的，我们可以想办法对这个字体进行裁切，理论上字库里面的这么多字符，我们很多的字符可能用不上，我们可以把不那么常见的字符给删除掉，把字体大小给变小，我们单独拆分出来1000个常用字变成一个小的字体，这样使用中文的web font的时候就比较方便了


##中文Web Fonts
<h1>中文也可以使用网络字体啊</h1>
<style>
  @font-face {
    font-family: 'fzjljw';
    font-style: normal;
    font-weight: 400;
    src: local('fzjljw'),
        url(http://s6.qhres.com/static/0c7c8a048bccb02f.woff)
        format('woff');
  }
  h1 {
    font-family: 'fzjljw', cursive;
  }
</style>

##链接
- Google Fonts https://fonts.google.com/
- Baomitu CDN https://cdn.baomitu.com/ 奇舞团出品
- Font Spider http://font-spider.org/ 拆分字体，压缩中文字体

##text-align
- 定义文本在容器内的对齐方式
- 取值：left | right | center | justify; justify最后一行是不会分散对齐的
- 初始值由HTML的dir属性决定， 可继承

##letter-spacing
- 指定字符之间的间距
- 取值：normal | <length>
- 初始值为 normal, 可继承

<h1> Letter Spacing 字符间距</h1>
<style>
  h1 {
    letter-spacing: 0.2em;
  }
</style>

##word-spacing
- 指定单词之间的间距
- 取值：normal | <length>
- 初始值为 normal, 可继承

<h1>Word Spacing单词间距</h1>
<style>
h1 {
  word-spacing: 0.2em;
}
</style>

##text-indent
- 指定文本缩进
- 取值：normal | <length> | <percentage> 长度或百分比
- 初始值为0，可继承

p {
  text-indent: 2em;
}

##text-decoration
- 定义了文本的一些装饰效果，比如下划线，删除线等
- 初始值为none, 可继承
- 其他值：underline | line-through | overline

##white-space
- 指定空白符如何处理
- 取值：normal | nowrap | pre  nowrap就是不换行，元素的内容不换行，pre大多数效果和<pre>标签是非常类似的

##word-break
- 指定是否允许在单词中间换行
- 取值：`normal | break-all | keep-all` 排版时太长了设置为break-all 能够从中换行
