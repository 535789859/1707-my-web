

#//JavaScript 0
PLT （程序语言理论）https://www.zhihu.com/question/31883401；掌握一两门有各自特点的语言还是有帮助的，但是不建议去学10门8门的，学习有相关性的，就算学C语言的话，也可以去写一个C模块，在服务端去调用，现在在nodejs里面也是可以去调C模块的

https://ppt.baomitu.com/ ppt
http://jsbin.com/

##j如何写`好`JavaScript, 有很多历史包袱
- JavaScript: The Good Parts
- JavaScript The Definitive Guide

##问题1：操作DOM,写一个点击之后改变颜色的JS
<ul id="user-list">
  <li>张三</li>
  <li>张三</li>
  <li>张三</li>
  <li>张三</li>
</ul>
<style>
body {
  background-color: white;
  font-size: 24px;
}
#user-list {
  line-height: 1.5em;
}
#user-list > li:hover {
  background-color: rgba(0,0,0,0.5);
}
</style>

##版本1,最大的问题是JS在控制item的样式，如果我是一个pm, 我修改了需求，我要把需求改成红底蓝字，这个时候我要修改这段代码，这个就是初学者经常范的错误，什么东西应该由JS来做，什么东西不应该由JS来做；并不是说JS不能完全的去控制样式，通常情况下JS能不操作样式就不操作样式，我们是改变他的状态，而不是改变他的样式，那样式交给谁来做呢，是交给CSS样式；很多一线的前端工程师也会犯这种错误，这个是非常初级的，但是又经常范的错误

let list = document.querySelect('#user-list');
let items = document.querySelectorAll('#user-list > li');

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    let item = e.target;
    items.forEach(function(item) {
      item.style.background = 'inherit';
      item.style.color = 'inherit';
    });
    item.style.background = 'black';
    item.style.color = 'white';
    console.log(item.innerHTML);
  }
})

##版本2 如果pm有需求更改的话是很方便的，不用修改js代码, 不过这个还可以做的更好
<ul id="user-list">
  <li>张三</li>
  <li>张三</li>
  <li>张三</li>
  <li>张三</li>
</ul>
<style>
body {
  background-color: white;
  font-size: 24px;
}
#user-list {
  line-height: 1.5em;
}
#user-list > li:hover {
  background-color: rgba(0,0,0,0.5);
}
#user-list > li.active {
  background-color: black;
  color: white;
}
</style>
<script>
let list = document.querySelector('#user-list');
let items = list.querySelectAll('li');

list.addEventListener('click', function(e) {
  items.forEach(function(item) {
    item.className = '';
  });
  if (e.target.tagName === 'LI') {
    let item = e.target;
    item.className = 'active';
    console.log(item.innerHTML);
  }
})
</script>

##版本3,扩展性非常强，如果要做成多选，直接将radio换成checkbox就行；专业的前端追求这样的; JS代码很简单怎么写都行，要写一个好的JS要考虑很多东西
<ul id="user-list">
  <li><input name="items" id="item0" type="radio" value="张三" />
  <label for="item0">张三</label>
  </li>
  <li><input name="items" id="item1" type="radio" value="张三" /> <label for="item1">张三</label> </li>
  <li><input name="items" id="item2" type="radio" value="张三" /> <label for="item2">张三</label> </li>
</ul>
<style>
  body {
    background-color: white;
    font-size: 24px;
  }
  #user-list {
    line-height: 1.5em;
  }
  #user-list input {
    display: none;
  }
  #user-list label {
    display: block;
  }
  #user-list > li:hover {
    background-color: rgba(0,0,0,0.3);
  }
  #user-list input:checked+label {
    background-color: black;
    color: white;
  }
</style>
//如果不需要处理事件的话可以一行代码都不写，如果需要处理点击之后的后续的话这样写
let list = document.querySelector('#user-list');
list.addEventListener('click', function(e){
  if(e.target.tagName === 'INPUT') {
    let checkedItem = list.querySelector('input:checked');
    console.log(checkedItem.value);
  }
})

##三个版本比较，你更喜欢哪个版本？为什么？

你用原生的JS会考虑这些问题，如果你用一些框架，为什么会这么设计，使用MVVM,其实他们有一个原则，框架禁止直接在JavaScript里去操作DOM，为什么要这样做呢？就是害怕工程师们去写出像前面版本1那种的代码。所以框架就是一些基本规则；框架存在的上的不是让人写出特别好的代码来，而是去阻止那些烂的工程师写出特别烂的代码，这是框架的意义，也是框架对团队开发最大的作用，比如10个人写项目，有1个人写的代码特别烂，会拉低项目整体的可维护性；框架有一个非常好的点，他避免出现这样的问题，他是通过很暴力的方式，他不会说以后不要写版本1的代码，更暴力的是你在我的框架里面很难写直接操作DOM的代码，如果写了，在框架里面会暴错，这是一个设计的思路；还有一些类库，比如像jquery,其实他做了很多语法糖，我们发现用原生的JS来写代码的时候，可能会意识到我们操作了item的style不好，如果你用惯了jquery，反而更难意识到这些问题，因为他操作DOM特别方便，我可能一个.css(), 里面传一个对象，他就设了一堆样式，因为这个东西只需要写一行代码就完成了，所以我写的特别爽的时候，我其实是不太在乎这些我该不该去写的这些问题；所以为什么会有一些批评者去诟病说用jquery写出来的代码质量不好，这个不是jquery本身的原因，他给开发者背锅，因为他为开发者写这样的代码提供了便利，但是本质上还是开发者写了不好的代码，而不是说jquery不好；为什么建议说同学要学原生的JS，而不是从框架或类库学起，除了要知道底层的实现之外；框架不让你写坏的代码，你不写原生JS，你不知道写的代码是坏的，如果未来用了一些新的东西来写代码的时候，就难免会写成坏的代码， 对于学习js基本功是不利的；他们是很好的工具，不排斥用这些工具，但是学习的时候应该明白这些道理

##问题1的思考
- 写JavaScript操作DOM要注意什么(害怕工程师们写出前面那种不好的代码)
- JavaScript与HTML、CSS的职责如何分离
- 把复杂性放在哪一头，为什么

##问题2：API的设计
很多时候不关心底层，为什么用库很爽，我们是在使用他的API

三个状态用红(stop)、绿(pass)、黄(wait)表示
要求用JavaScript让三个状态流切换
每个状态的停留时间为2秒钟

##版本1
<ul id="traffic" class="wait">
  <li><span></span></li>
  <li><span></span></li>
  <li><span></span></li>
</ul>
<style>
#traffic > li {
  display: block;
}
#traffic span {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: gray;
  margin: 5px;
  border-radius: 50%;
}
#traffic.stop li:nth-child(1) span {//放在父容器上面更容易控制
  background-color: #a00;
}
#traffic.wait li:nth-child(2) span {
  background-color: #aa0;
}
#traffic.pass li:nth-child(3) span {
  background-color: #0a0;
}
</style>
<script>
const traffic = document.getElementById('traffic');
(function reset() {
  traffic.className = 'wait';

  setTimeout(function(){
    traffic.className = 'stop';
    setTimeout(function() {
      traffic.className = 'pass';
      setTimeout(reset, 2000);
    }, 2000);
  }, 2000);
})();
</script>

##版本1的问题？
如果需求增加到5盏、10盏灯？
const traffic = document.getElementById('traffic');
里面就会写N个函数回调嵌套

`过程耦合 + Callback Hell`

过程耦合，因为他有顺序，所以就这样写，如果将来需求改变，要先wait,再pass,再stop的话就需要改代码；a要知道我的下一步是b,b要知道我的上一步是a，所以这是一个过程耦合；
CodeReview如果发现这样的代码要强制重构的

##版本2，解决了版本1的最大的两个问题
我们把三个状态抽取出来，后面要做的事情就简单了; 状态列表提取出来了，以后也可以写到配置文件里面去
<script>
  var traffic = document.getElementById('traffic');
  var stateList = ['wait', 'stop', 'pass'];
  var currentStateIndex = 0;
  setInterval(function(){
    var state = stateList[currentStateIndex];
    traffic.className = state;
    currentStateIndex = (currentStateIndex + 1) % stateList.length;
  },2000);
</script>

##版本2的问题，代码写的很糙；版本1完全的不入流，版本2离及格线还差一点；
`最大的问题是封装性很差`
依赖于外部变量stateList、currentStateIndex; 这里的每个变量要封装起来,通过参数暴露出来

##版本3, 这个大概七八十分,大多数专业的前端工程师写出这样的代码是可以的
<script>
const traffic = document.getElementById('traffic');
function start(traffic, stateList) {
  var currentStateIndex = 0;
  setInterval(function(){
    var state = stateList[currentStateIndex];
    traffic.className = state;
    currentStateIndex = (currentStateIndex + 1) % stateList.length;
  },2000);
}
start(traffic, ['wait', 'pass', 'stop']);
</script>

##版本3的问题？
版本3虽然中规中矩……但其实可复用性差
还有不同的思路

<script>
const traffic = document.getElementById('traffic');
function poll(...fnList) {//传入任意多个函数列表，我就会依次调用每一个函数； 这个函数和具体的需求没关系
  let stateIndex = 0;
  return function(...args) {
    let fn = fnList[stateIndex++ % fnList.length];
    return fn.apply(this, args);
  }
}
function setState(state) {
  traffic.className = state;
}
let trafficStatePoll = poll(setState.bind(null, 'wait'),
                            setState.bind(null, 'stop'),
                            setState.bind(null, 'pass'));
setInterval(trafficStatePoll, 2000);

//我们也可以, 每次都切换，用这个做toggle, 循环都可以，所以这个版本是很有意思的东西，做出这种的同学很有才华, 抽象能力很强
function a() {return 1;};
function b() {return 0;};
var toggle = poll(a,b);
console.log([toggle(), toggle(), toggle()]);

//bind是一个原生的高阶函数，他会返回一个函数
  //偏函数，高阶函数, 返回另外一个function, 他在做一个过程抽象；版本2，版本3在做状态抽象；现在抽取的是一个setTimeout的过程抽象，其实过程抽象是函数式编程的基础；函数式编程中的函数的意义和传统的函数的意义是不一样的；如果我们一定要去类比的话，数据抽象是很多人天生就会，抽象是有不同的层次，人天生会对实体进行抽象，应该是人类与生俱来的能力；就算一个小孩从来没去动物园，你给小孩看猴子的卡通，然后再到动物园看到真实的，他们之间的差距是挺大的，不过他能分辨这个猴子和卡通是同样的，这是个神奇的能力，这个其实是数据的抽象；就好比说现在有这样的一个场景，有一个小王，他家闹铃响了，他去开门，然后进来一只猫；如果这个场景抽象的话，小王是个人，抽象出一个Person类，猫是一个动物，Cat, 门是一个Door, 但是有没有人思考这个动作，开这个动作其实也是可以抽象的，因为我不仅仅是要开门，我可能还要开窗户，开冰霜，其实open这个动作也是可以抽象的，抽象open这个叫做过程抽象，他和数据抽象是不同层次的，数据抽象是本能，相当于初等数学的；抽象过程就相当于高等数学，建立在更高的基础之上

</script>

##版本4的问题？
版本4函数式编程(Functional Programming), 抽象出poll方法，有点意思

##然后需求来了……
PM做了需求变更如下：
wait、stop、pass状态的时长不相等，分别改成1秒、2秒、3秒

那么是否要回归到版本1呢？不是

##版本5
<script>
  const traffic = document.getElementById('traffic');
  function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  function setState(state) {
    traffic.className = state;
  }
  function reset() {
    Promise.resolve()
    .then(setState.bind(null, 'wait'))
    .then(wait.bind(null, 1000))
    .then(setState.bind(null, 'stop'))
    .then(wait.bind(null, 2000))
    .then(setState.bind(null, 'pass'))
    .then(wait.bind(null, 3000))
    .then(reset);
  }
  reset();
<script>

##版本5的问题？
版本5用Promise解决问题，抽象出wait方法，还不错

##版本6, 很高级的工程师写出来的代码
这个是有共性的，我们关注的是这个状态改变的过程，所以我可以通过面向对象的思想，先设计出来，这个可以不是一个具体的对象，我们抽象出一个交通协议
<script>
  const trafficEL = document.getElementById('traffic');
  function TrafficProtocol(el, reset) {
    this.subject = el;
    this.autoReset = reset;
    this.stateList = [];
  }
  TrafficProtocol.prototype.pushState = function(fn) {
    this.stateList.push(fn);
  }
  TrafficProtocol.prototype.reset = function() {
    let subject = this.subject;

    this.statePromise = Promise.resolve();
    this.stateList.forEach((stateFn) => {
      this.statePromise = this.statePromise.then(() => {
        return new Promise(resole => {
          stateFn(subject,resolve);
          });
        });
      });
      if (this.autoReset) {
        this.statePromise.then(this.reset.bind(this));
      }
  }

  TrafficProtocol.prototype.start = function() {
    this.reset();
  }
  var traffic = new TrafficProtocol(traffcEl, true);
  traffic.putState(function(subject, next){
    subject.className = 'wait';
    setTimeout(next, 1000);
  });
  traffic.putState(function(subject, next){
    subject.className = 'stop';
    setTimeout(next, 2000);
  });
  traffic.putState(function(subject, next){
    subject.className = 'pass';
    setTimeout(next, 3000);
  });
  traffic.start();
<script>
这个API可以在里面随意的添加状态,非常好的设计，典型的，还有各种各样的设计
  traffic.putState(function(subject, next){
    document.body.style.background = 'red';//这里不推荐，演示一下
    setTimeout(next, 1500);
  });

##版本6的问题？
- 优点：面向对象，函数式，Promise、灵活可扩展
- 缺点：复杂度、、实现难度，是否过度设计了

设计是双刃剑
写代码简单
程序设计不易
且行且珍惜

##问题3：JavaScript的"效率"？
语言的本质是什么

给定一个很大的数组，数组里面有许多整数，用JavaScript实现一个函数，要求：
将数组中之和为10的每一对数配对并找出，返回这些数配对后的数组。
例如：[11,3,8,9,7,-1,1,2,4...]
得到：[[11,-1],[3,7],[8,2],[9,1]...]

##版本1 时间复杂度是On的平方
<script>
let list = [11, 4, 9, 3, -1, -3, 6, 7, 9, 13, 8];
function map(list) {
  let ret = [], len = list.length;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (list[i] + list[j] === 10) {
        ret.push([list[i], list[j]]);
      }
    }
  }
  return ret;
}
console.log(JSON.stringify(map(list)));
</script>
这个数组是无序的
我们可以排序，好的排序算法是logN

##版本2
<script>
let list = [11, 4, 9, 3, -1, -3, 6, 7, 9, 13, 8];
function map(list) {
  let ret = [];
  list = list.sort((a,b)=>a-b);//从小到大变成有序，有序后左边最小，右边最大，从两边往中间找，如果刚好等于10把小的指针加1，大的指针减1，如果之和小于10，则小的指针再加1，如果和大于10，则让大的指针减1； 现在的效率要快很多，如果数组不多的时候两个方法差不多，如果有10万和百万级别的数组的话，性能就会非常大；程序的本质是算法，比从语言细节方面扣的更有效；left pad;某个程序员写了很多的模块，模块里面有个leftpad, 是个补充字符串的功能，有时候计数，1-10，要展现的好看是01,02...10, 把1位的数后面补0，时间复杂度是On, 算法可以优化到logN,我们要把自己当成程序员，不然就会遇到鄙视链，如果我们不注重基础的话就可能写不出好的代码来，对不起JS开发者来说过去是写在浏览器上的问题，浏览器上真的不需要说处理这么大的数据量，处理百万级的数据量，但是我们现在JS不仅跑在浏览器，可以用在服务器，用在数据库，这种时候很有可能会遇到这样的问题；现在JS在浏览器上处理3D的图像也有可能遇到这样的问题
  for(let i=0, j = list.length - 1, i < j;) {
    let a = list[i], b = list[j];
    if (a + b === 10) {
      ret.push([a,b]);
      i++;
      j--;
    } else if(a+b<10) {
      i++;
    } else {
      j--;
    }
  }
  return ret;
}
console.log(JSON.stringify(map(list)));
</script>

##还有别的解法？
用时间复杂度转成空间复杂度

##总结
这一课，学习了如何写好的代码，这是一个方向，好的代码有一些特质，
1.代码的职责清晰
2.程序的好坏就是你API的设计，你的api要设计的合理，适当的抽象和可扩展性
3.用好的算法让你的代码有更高的效率
这3点是所有程序开发都需要去关注的点，有很多同学觉得我也会写JS，我们看前面的例子，只能实现基本的，离真正写JS代码还有很远

学js要掌握函数的精髓
学c要掌握指针
学C++要掌握面向对象，才算真正掌握了这门语言

我们经常会用到别人的库
function setColor(color, el) {
  el.style.color = color;
}
setColor('red', content);
//这个参数元素应该放在前面，想重写，自己实现一个又不能重名，重写一个会比较费时，好名字不能用
function setColor2(el, color) {
  el.style.color = color;
}

function setColor2(el, color) {
  setColor(color, el);
}
//这个问题用过程抽象的方式来解决的话，我们可以实现一个高阶函数让这个函数去把所有函数参数的顺序给反一下
function reverseArgs(fn) {
  return function(...args) {
    args = args.reverse();
    return fn.apply(this, args);
  }
}
如果还想用setColor也可以
setColor = reverseArgs(setColor); //改了之后在文档里面做一下笔记
setColor(content, 'blue');
我们没有修改别人的代码，他的代码库是可以正常升级的，我的这个过程抽象方法是抽象的这个过程，而不关心他的具体实现是怎样的，只要这个函数有参数的话我就给他参数换一下；这种过程抽象是可以组合的，可以把他变成延时执行的异步函数，其实也是可以的
function delay(fn, time) {
  return function(...args) {
    setTimeout(fn.bind(this, ...args), time);
  }
}
setColor = delay(reverseArgs(setColor), 100);//这样就做到了延迟100毫秒去执行
setColor(content, 'blue');
所有的动态脚本语言都可以这样去动态的抽象他的过程

比如setTimeout这个函数，他的回调函数是放在第一个，这个函数的实现比较早期 ，我们通常都是把回调函数放在最后，在这种情况下,我们写一个500毫秒后执行的函数，这些函数变换是可以组合；最大的变化是可以改变函数的参数也好，返回值也好，函数式编程就是过程抽象，解决函数计算的问题，在数学上面叫泛函或者高阶函数

var wait500 = reverseArgs(setTimeout).bind(null, 500);
wait500(()=> console.log('message'));
