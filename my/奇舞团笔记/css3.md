#//3
#浮动
##定位模式(Positioning schemes)
- 常规流(NormalFlow)
- 浮动（Float）
- 绝对定位（Absolute Positioning）

##常规流
- 除根元素、浮动元素和绝对定位元素外，其他元素都在常规流之内（in-flow）
- 而根元素、浮动和绝对定位的元素会脱离常规流(out of flow)
- 常规流中的盒子，属于块级格式化上下文或行级格式化上下文（BFC,IFC）:格式化上下文表示在一个块级范围作用域内，这些盒子遵循一定的规则, 在同一个格式的上下文

##块级格式化上下文（Block Formatting Context）
- 盒子在容器（包含块）内从上到下一个接一个地放置
- 两个兄弟盒之间的竖直距离由margin属性决定
- 同一个BFC内垂直margin会合并
- 盒子在左边缘挨着容器（包含块）的左边

##行级格式化上下文（Inline Formatting Context）
- 盒子一个接一个水平放置
- 盒子的水平margin, border和padding都有效
- 同一行的盒子所在的矩形区域叫行盒（line box）
- 当一个行盒放不下上下文内所有盒子时，会被分成多个堆叠的行盒里
- 行盒内的水平分布由"text-align"属性可以
- 如果一个行级块无法分割（单词，inline-block）, 该元素会被作为一个整体决定分布在哪一个行盒

##浮动（float）
- 浮动元素从常规流中脱离，被漂浮在容器（包含块）左边或右边
- 浮动盒会一直漂到其外边缘挨到容器边缘或另外的浮动盒
- 浮动元素不会影响其后面的流内块级盒
- 但是浮动元素后面的行级盒子会变短以避开浮动元素

<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg" width="120" alt="house" >
  <p><span>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的短叶丝兰--约书亚树的特殊栖息地。约书亚树以从茂密的森林到远远间隔的实例等各种形式出现。除了约书亚树森林之外，该公园的西部包括加州沙漠里发现的最有趣的地质外观。</span></p>
</section>
<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
</style>


<section>
  <img src="http://p0.qhimg.com/t0117c2689d8703d551.jpg" width="120" alt="house" >
  <p><span>莫哈韦沙漠不仅纬度较高，而且温度要稍微低些，是命名该公园的短叶丝兰--约书亚树的特殊栖息地。</span></p>
</section>
<section class="cleared">
  <h1>科罗拉多沙漠</h1>
  <p>科罗拉多沙漠海拔低于3000英尺（910米），环绕着约书亚树国家公园的东部，其主要特征为墨西哥三齿拉瑞阿低矮丛林、墨西哥刺木、沙漠滨藜和包括丝兰和灌木仙人掌混合的低矮丛林的生存环境。</p>
</section>
<style>
  img {
    float: left;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
  }
  .cleared {
    clear: both;
  }
</style>

##clearfix
.clearfix::after {
  content: ' ';
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}

##块级格式化上下文（BFC）的特性: 自己管理了内部的元素，不会影响其他元素
- BFC内的浮动不会影响到BFC外部的元素
- BFC的高度会包含其他的浮动元素
- BFC不会和浮动元素重叠
- BFC可以通过overflow:hidden 等方式创建

##BFC的创建
- 浮动框
- 绝对定位框
- 非块级的块容器(inline-block)
- overflow属性非visible的块框

##BFC的作用
- 清除浮动
- 防止margin折叠
- 双栏布局
