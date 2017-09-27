
#//4
#变量，值，类型
##Data Types & Values
###6 ECMAScript Data Types and Values
Algorithms within this specification manipulate values each of which has an associated type. The possible value type area exactly those defined in this clause. Types are further subclassified into ECMAScript language types and specification types.

##关于类型
强？弱？
https://www.zhihu.com/question/19918532
图

##关于JS类型的几点说明
- JavaScript是动态类型+弱类型的语言
- JavaScript的变量、属性在运行期决定类型
- JavaScript存在隐式类型转换
- JavaScript有一系列识别类型的反射方法

##Language Types
###6.1 ECMAScript language Types
An ECMAScript language types corresponds to values that area directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, and Object. An ECMAScript language value is a value that is characterized by an ECMAScript language type.

##typeof
对
typeof undefined        === 'undefined';
typeof true             === 'boolean';
typeof 123              === 'number';
typeof 'username'       === 'string';
typeof {team:'team'}    === 'object';
typeof Symbol()         === 'symbol';
错
typeof null             === 'object';  //历史遗留问题
特殊
typeof function(){}     === 'function';

##function
A primitive value is a member of one of the following built-in types: Undefined, Null, Boolean, Number, String, and Symbol; an object is a member of the built-in type Object; and `a function is a callable object`.   -----4.2 ECMAScript Overview

- Undefined
- Null
- Number
- String
- Symbol
- Object   
- Function

##变量声明
根据规范，JavaScript有三种变量声明的方法：
- var - 声明一个变量，可选择将其初始化为一个值。
- let - 声明一个块级作用域变量，可选择将其初始化为一个值。
- const - 声明一个只读的常量

##使用 var 的注意事项
1.var不支持块级作用域
2.var存在变量提升(Variable hosting)

console.log(a === undefined);//true
var a = 10;

function foo() {
  console.log([a, i]);//[undefined, undefined]
  var a = 20;
  for (var i = 0; i < a; i++) {
    //do sth.
  }
  console.log([a, i]); //[20,20]
}
foo();

##使用let的注意事项
1.块级作用域
2.同一作用域中不允许重复声明
3.暂存死区(Temporal dead zone)
4.循环中的let作用域
5.浏览器兼容性 http://kangax.github.io/compat-table/es6/

##块级作用域和重复声明
{
  let x = 10;
  console.log('x is ' + x);
}
console.log(typeof x);
let i  = 20;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

var y = 3;
let y = 4;
console.log(y);

let z = 3;
var z = 4;
console.log(z);

##LET有一个暂存死区（TDZ），不会被提升
let x = 10;
function foo() {
  console.log(x);
  let x = 20;//如果这一句改成var会怎样？
  return x * x;
}
console.log(foo());

##循环(let的词法作用域)
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {//换成let就没问题了, 因为这个是前端经常遇到的问题；现在要兼容旧的浏览器不用let用闭包来解决，还可以用
  buttons[i].onclick = evt => console.log('点击了第' + i + '个按钮');
}

##使用const的注意事项
1.const声明的标识符所绑定的值不可以再次改变
2.ES6 const的其他行为和let一样

##不声明直接使用
var x = y = 0;
console.log([typeof x, typeof y]);//

//:TODO
