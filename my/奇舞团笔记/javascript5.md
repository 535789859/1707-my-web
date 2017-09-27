

#//5 函数
##函数
- 函数声明、函数表达式
- 匿名函数
- 函数参数
- 作用域、闭包、this
- apply、call、bind
- 关于异步回调
- 函数的动态构建
- 函数式编程
- 如何封装好的函数

##函数声明和函数表达式
- 函数声明会被提升 hosting

console.log([typeof add, typeof sub]);//["function", "undefined"]
function add(x, y) {
  return x + y;
};
var sub = function(x, y) {
  return x - y;
};
console.log([add(1, 2), sub(1, 2)]);

##箭头函数表达式
let double = x => x * 2;
let add = (x, y) => {
  return x + y;
};
console.log([double(21), add(1,2)]);

##匿名函数
在函数表达式和回调函数中常见
function countDown(count, interval, callback) {
  if (count <= 0) return;

  callback(count);

  setTimeout(function(){
    if (--count > 0) {
      setTimeout(arguments.callee, interval);//arguments.callee 当前被调用的函数，不推荐用这种，可以给他指定名字并调用
    }
    callback(count);
  }, interval);
}
countDown(10, 1000, t => console.log(t));

##推荐使用具名函数,在早期的浏览器可能还是需要用上面的写法
function countDown(count, interval, callback) {
  if (count <= 0) return;

  callback(count);

  setTimeout(function update(){
    if (--count > 0) {
      setTimeout(update, interval);//arguments.callee 当前被调用的函数，不推荐用这种，可以给他指定名字并调用
    }
    callback(count);
  }, interval);
}
countDown(10, 1000, t => console.log(t));

##函数的参数
- 具名的参数， function.length(参数列表的个数)
- 可变参数与arguments(类数组属性)
- ES6 rest参数
- 参数默认值

##function.length
function __matchArgs__(fn) {
  return function (...args) {
    if (args.length !== fn.length) {
      throw RangeError('Arguments not match!');
    }
    return fn.apply(this, args);
  }
}

//var add = (a, b, c) => a + b + c;
var add = __matchArgs__( (a, b, c) => a + b + c);
console.log(add(1, 2, 3));
console.log(add(4, 5));

##可变参数与arguments
function add() {
  //var args = [].slice.call(arguments);
  var args = Array.rototype.slice.call(arguments);
  let args = Array.from(arguments);//将类数组对象转换成数组对象, 在ES之前的话可以使用以上的两种方式
  return args.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4));

//JavaScript函数设计中经常会让参数允许有不同的类型
function setStyle(el, property, value) {
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }
  if (typeof property === 'object') {
    for (var key in property) {
      setStyle(el, key, property[key]);
    }
  } else {
    el.style[property] = value;
  }
}

console.log(setStyle.length);
setStyle('div', 'color', 'red');
setStyle('div', {
  'fontSize': '32px',
  "backgroundColor": "white"
});
