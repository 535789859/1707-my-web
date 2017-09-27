#动画基础上
https://ppt.baomitu.com/p/e3051499#/38

##web socket客户端
websocket和socket一点关系都没有
他其实是http协议的一个升级，一个双向通信的

const ws = new WebSocket('ws://teach.h5jun.com');
const qrcode = document.getElementById('qrcode');

ws.addEventListener('open', function (event) {
    ws.send('open');
});

ws.addEventListener('message', function(event) {
  console.log('Message from server', event.data);
  let url = `http://teach.h5jun.com/check/${event.data}`;
  qrcode.innerHTML = '';
  new QRCode(qrcode, url);
  qrcode.parentNode.href = url;
});



https://ppt.baomitu.com/p/73512b17#
##一些动画的实现思路
先看一些实现思路：
  1.圆周运动 css3
  2.椭圆运动 js
  3.一些复杂动画

HTML:
<div id="ball"></div>
CSS:
#ball{
  position: absolute;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 50%;
  top: 100px;
  left: 200px;
  transform-origin: 10px 110px;
  transform: rotate(0deg);
  animation: roll 2s linear infinite;
}

@keyframes roll{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

JS圆周运动
HTML：
<div id="ball"></div>
CSS：
#ball{
  position: absolute;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 50%;
  top: 100px;
  left: 200px;
  transform-origin: 10px 110px;
}
JS：
function startCircle(el){
  let startTime = Date.now(),
      cycle = 2000;

  requestAnimationFrame(function update(){
    let currentTime = Date.now();
    let p = (currentTime - startTime) / cycle;
    ball.style.transform = `rotate(${360 * p}deg)`;
    requestAnimationFrame(update);
  });
}

startCircle();

##JS椭圆运动
轨迹方程

##动画是关于时间的函数
很多教程都犯了一个毛病，我们用增量的方式做运动

##一个反例
HTML：
<div id="block"></div>
CSS：
#block{
  position:absolute;
  left: 200px;
  top: 200px;
  width: 100px;
  height: 100px;
  background: #0c8;
  line-height: 100px;
  text-align: center;
}
JS：
var deg = 0;
block.addEventListener('click', function(){
  var self = this;
  requestAnimationFrame(function change(){
    self.style.transform = 'rotate(' + (deg++) +'deg)';
    requestAnimationFrame(change);
  });
});

这个如果要周期性的运动就不好做，另外要更精确也没办法，这个按增量来的计算就不好算；另外多点击几次会转的越来越快


如果碰撞一个墙的动画，可以用更简单的方式实现，一个小技巧，用两个球同时运动，把墙当一面镜子

动画需要一些数学的知识和物理的知识
上面的反例为了偷懒直接用增量的方式，这种方式的缺点是不能够精确的控制他的速度，如果我要在特定的时间转到特定的角度，是很难控制的，用requestAnimateionFrame的周期是不确定的，用setTimeout的话也是不确定的，我们说timer的时间间隔只能算是最小的时间间隔，我设置10毫秒的话，并不能指望每次都刚好10毫秒触发一次，是异步的，在CPU空闲的时间触发，如果现在CPU繁忙的话就会阻塞，我们会看到每次的间隔时间会比较长，用增量能实现效果，没法精确控制

真正要实现动画还是要在时间上面精确控制

##直线运动
- 匀速运动
- 匀加速运动
- 匀减速运动
- 平面上的直线运动

未完
