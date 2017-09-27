#4
#表单
##使用form获取让用户提供数据
<form action="/echo" method="POST">
  <p>用户名：<input type="text" name="username"></p>
  <p>密码：<input type="password" name="password"></p>
  <p><button type="submit">登录</button></p>
</form>

##GET vs. POST
从语义上
  GET是从服务器获取，是比较安全的，每次返回的结果是一样的
  POST是向服务器发送数据, 对服务器上的数据有修改，每次提交的都不一样

缓存中就有差异
  GET  在浏览器端，中间的代理服务器等，GET请求都是有缓存的，每次返回的结果都一样，只要服务器的数据没变化
  POST 浏览器不会缓存任何的POST请求
传输方式
  HTTP协议里面会有一个URL
    GET 会把每个字段放到URL里面，去提交给服务器，payload里面的内容是空的，一次性发送给服务器
  POST不会把数据放在URL里面，会以某种形式进行编码，放到http的body里面，去提交，head里面的内容和body的内容是分两次发送的，head里面发现服务器允许发送body内容，然后再进行发送body的内容
编码方面
  只是位置不一样，编码方式都是一样的，并没有做任何的加密
  只是GET能在地址栏看到，POST在地址栏看不到
使用的时候如果是获取就用GET,如果要把东西保存到服务器或对服务器有修改则用POST请求

##URL编码：urlencode
   => %20 (空格)  新的URL规范里面会默认把空格替换成加号,在服务器端处理的时候要处理%20,并且要复原空格，要处理一下加号;原始的加号是%2B
 ! => %21
 " => %22
 # => %23
 $ => %24
 % => %25
 ' => %27
 ...

 在服务器端通过decode解码
 在js里面是 decodeURIComponent()

 HTTP method
 - GET
 - POST
 - HEAD  不会返回正文
 - PUT   
 - DELETE
 - OPTIONS 查看HTTP允许的head选项；通常在ajax异步跨域请求，浏览器就要先知道你的服务器端是否允许跨域，如果允许则继续发POST请求，如果不允许，浏览器就会拒掉

##单行文本框
<input name="username" value="maxwelldu">
name是必填的，如果给默认值则写一个value

##placeholder,告诉用户在没填写的时候应该输入什么内容
<input name="username" placeholder="请输入用户名">

##autofocus,最常见的是搜索引擎的页面
<input name="username" placeholder="请输入用户名" autofocus>

##密码：和text一样，只是显示的用*号代替
<input type="password" name="password">

##多行文本框
<textarea cols="40" rows="8"></textarea>

##输入验证:安全性,易用性,尽早的把错误给暴露出来; html5的写法，在这个出来之前必须要用JS来写;原生验证的及时性不是很好，大部分时间，我们希望更快更及时的反馈给用户
<form action="/echo">
  <p>
    <input name="username" require minlength="2" maxlength="10" placeholder="2-10位">
  </p>
  <p>
    <input pattern="1\d{10}" placeholder="输入手机号">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>

##type: 许多验证来自于他内置的type,这个在手机上面键盘的布局不一样；正常的有一个go按钮，如果是search,他会把go换成search; 如果type是email, 在手机上面键盘默认会把@字符给显示出来，方便输入；URL也是一样，他会把http:// 默认给展示出来；输入有验证; 提交高可性，在合适的场合，尽可能的使用合适的type
<form action="/echo">
  <p>
    Search: <input type="search">
  </p>
  <p>
    Email: <input type="email">
  </p>
  <p>
    URL: <input type="url">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>

##novalidate: 如果自己写了一套js验证，可以把表单的验证关闭
<form action="/echo" novalidate>
  <p>
    Search: <input type="search">
  </p>
  <p>
    Email: <input type="email">
  </p>
  <p>
    URL: <input type="url">
  </p>
  <p>
    <button type="submit">提交</button>
  </p>
</form>

##radio: name一致就是一个radio group, 选择是互斥的
<form>
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="radio" name="fruit" value="apple">苹果
    <input type="radio" name="fruit" value="balana">香蕉
    <input type="radio" name="fruit" value="mongo">芒果
  </p>
  <p><button>提交</button></p>
</form>

##checkbox
<form>
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit[]" value="apple">苹果
    <input type="radio" name="fruit[]" value="balana" checked>香蕉
    <input type="radio" name="fruit[]" value="mongo">芒果
  </p>
  <p><button>提交</button></p>
</form>

##label: 提交可用性和易用性,让label的文字能够关联checkbox, radio，input框; 鼠标放到文字上面会变成手型；读屏软件能够读取出这个标签框要输入的内容应该是什么，他能够把label和input这些关联；关联有两种方式，第一是给input给个id, 然后把label的for属性写成input的id, 读屏的时候知道关联，你点击的时候也能关联；第二是把input框整个放到label里面，这个时候也是关联的，也可以通过点击文字的方式选中input选项
<form>
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit" value="mongo" id="mongo">
    <label for="mongo">芒果</label>
    <label>
      <input type="radio" name="fruit[]" value="apple" >苹果
    </label>
    <label>
      <input type="radio" name="fruit[]" value="banana">香蕉
    </label>
  </p>
  <p>
    <label for="name">请输入你的名字：</label>
  </p>
  <p><input id="name"></p>
  <p><button>提交</button></p>
</form>

##select: 当内容特别多的时候都显示在屏幕上也不美观，可以使用下拉框
<select name="fruit">
  <option value="1">苹果</option>
  <option value="2">香蕉</option>
  <option value="3">芒果</option>
  <option value="4">菠萝</option>
  <option value="5">榴莲</option>
  <option value="6">木瓜</option>
</select>

##多选, 一眼只能看一个，现在可以看到多个，不过在交互上体验并不是很好,需要多选按住shift键选中多个，也可以拖拽选中多个；size属性是露出来几个，其他的可以滚动显示，对于大多数而言不写的话就是1个
<select name="fruit" multiple size="3">
  <option value="1">苹果</option>
  <option value="2">香蕉</option>
  <option value="3">芒果</option>
  <option value="4">菠萝</option>
  <option value="5">榴莲</option>
  <option value="6">木瓜</option>
</select>

##分组
<label>上的城市：</label>
<select name="country">
  <optgroup label="美洲">
    <option>多伦多</option>
    <option>温哥华</option>
    <option>旧金山</option>
    <option>洛杉矶</option>
    <option>纽约</option>
    <option>华盛顿</option>
    <option>里约热内卢</option>
  </optgroup>
  <optgroup label="亚洲">
    <option>北京</option>
    <option>上海</option>
    <option>首尔</option>
    <option>东京</option>
    <option>香港</option>
  </optgroup>
  <optgroup label="欧洲">
    <option>伦敦</option>
    <option>巴黎</option>
    <option>马德里</option>
    <option>柏林</option>
    <option>雅典</option>
  </optgroup>
</select>

##hidden: 有些数据希望隐藏起来不让用户看到，比如token或id，有时候技术方案实现，希望数据从页面提交，但是不希望展现出来
<input type="hidden" name="secret" value="1">

##文件选择: enctype 默认是a=b&c=d 文件这种比较复杂可以使用multipart的方式，会把表单里面要提交的字段包括文件的字段，用一个分割符隔开,用boundary来分开
<form action="/echo" method="POST" enctype="multipart/form-data">
  <p>
    <label>您的姓名：</label>
    <input name="fullname">
  </p>
  <p>
    <label>请选择简历：</label>
    <input type="file" name="resume">
    <input type="file" name="resume" multiple> //多选
    <input type="file" name="resume" multiple accept="image/* ">  //只能选择图片,* 号后面没有空格
  </p>
  <p><button>提交</button></p>
</form>

## date & time
<form action="/echo">
  <p>date: <input type="date"></p>
  <p>datetime-local: <input type="datetime-local"></p>
  <p>month: <input type="month"></p>
  <p>week: <input type="week"></p>
  <p>time: <input type="time"></p>
</form>

##number & range
<form action="/echo">
  <p>
    <label>身高(m):</label>
    <input type="number" min="0.5" max="2.5" step="0.01" name="height" value="1.7">
  </p>
  <p>
    <label>体重(kg):</label>
    <input type="range" min="10" max="150" step="0.1" name="weight" value="62">
    <output for="weight"></output>
  </p>
  <p>
    <label>BMI:</label>
    <output for="weight height"></output>
  </p>
</form>
<script>
  var form = document.querySelector('form');
  form.addEventListener('input', update);
  update();
  function update() {
    var data = new FormData(form);
    var height = parseFloat(data.get('height'));
    var weight = parseFloat(data.get('weight'));
    document.querySelector('[for="weight"]').value = weight;
    document.querySelector('[for="weight height"]').value = getBMI(height, weight);
  }
  function getBMI(height, weight) {
    return (weight / Math.pow(height, 2)).toFixed(2);
  }
</script>

##color 不太常用, 拿到的值是#加六位数字
<input type="color">

##button
<form>
  <p>你最喜欢什么水果？</p>
  <p>
    <input type="checkbox" name="fruit[]" value="apple">苹果
    <input type="radio" name="fruit[]" value="balana" checked>香蕉
    <input type="radio" name="fruit[]" value="mongo">芒果
  </p>
  <p>
    <button>不指定type</button> //默认就是submit
    <button type="submit">submit</button>
    <button type="button">button</button>
    <button type="reset">reset</button>
  </p>
</form>

##回车提交 更易操作,一般不要把回车提交给禁用，喜欢键盘操作和追求效率的人很在意
默认会提交,会触发你的submit按钮的onclick事件
如果要提交事件的话，最好还是写成form的submit事件
<form action="/echo">
  <p>您的姓名？</p>
  <p>
    <input type="text" name="fullname" value="abc">
  </p>
  <p>
    <button onclick="alert(1)">不指定type</button>
    <button onclick="alert(2)" type="button">button</button>
  </p>
</form>

##控件状态
<form action="/echo">
  <p>您的姓名？</p>
  <p>
    <input type="text" name="fullname" value="abc" readonly> //会提交,只是改不了
  </p>
  <p>你的职业？</p>
  <p>
    <select name="occupation" disabled> //disabled是不会提交到服务器
      <option value="1">学生</option>
      <option value="2">工程师</option>
      <option value="3">教师</option>
    </select>
  </p>
  <p>
    <button>提交</button>
  </p>
</form>

##表单设计
- 帮助用户不出错;能选就不用填，用户填的也可以给他辅助，比如输入邮箱的时候输入前面几个字符后面就出现@gmail.com;保证他尽量不出错
- 尽早提示错误；在输入的时候及时反馈
- 扩大选择/点击区域
- 控件较多时要分组;有非常长的表单要分成几部分
- 主要动作和次要动作分开：希望用户进行，大多数用户会选择的操作做的明显一些，把点击可能会少的次要一些; 比如像alert弹出框的默认通常是确认
