#表格
##th,可以在第一行，也可能出现在第一列
<table border="1">
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Opera</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>

##错误的嵌套(table非常严格，这样写的话浏览器会帮你加上tbody,tr的自动纠错，把缺失的自动补上)
<table>
  <td>Chrome</td>
  <td>Blink</td>
  <td>V8</td>
</table>

比如这样写
<div>
  <td>Chrome</td>
  <td>Blink</td>
  <td>V8</td>
</div>
最后渲染出来会把td都给删除,浏览器会尽可能的补，但是并不能理解你的所有意图, 虽然会自动的补thead和tbody，但是我们最好自己写上

##合并行
<table border="1">
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td rowspan="2">Blink</td>
      <td rowspan="2">V8</td>
    </tr>
    <tr>
      <th>Opera</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>

##表格说明: 和可用性相关，盲人使用的读屏软件会先了解 这个表格的标题是什么，然后再去读内容，这个是一个比较合理的顺序
<table border="1">
  <!-- caption 必须 是table的第一个元素 -->
  <caption>浏览器及其引擎</caption>
  <thead>
  </thead>
  <tbody>
  </tbody>
</table>

##列组（colgroup）, col会和tr里面的td一样，是一一对应的; 在批量定义样式的时候比在每个td上面加class要好的多
<table border="1">
  <colgroup>
    <col class="browser">
    <col class="engine" span="2">
  </colgroup>
  <thead>
    <tr>
      <th>浏览器</th>
      <th>渲染引擎</th>
      <th>JavaScript 引擎</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Opera</th>
      <td>Blink</td>
      <td>V8</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Gecko</td>
      <td>SpiderMonkey</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>EdgeHTML</td>
      <td>Chakra</td>
    </tr>
  </tbody>
</table>
<style>
 .engine { background-color: lime }
</style>
