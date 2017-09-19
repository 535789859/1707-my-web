/**
 * Created by DELL- on 2017/9/18.
 */
function $(selector) {
    return new $.fn.init(selector);
}
//fn 相当于是放一堆function的集合
$.fn = {
    //这个方法作为构造函数，$()的时候返回这个构造函数的实例对象
    init: function(selector) {
        //往实例化的对象上面放一系列的元素，并且放一个length属性, 相当于模拟的一个数组对象
        //arr[0] = 1, arr[1] = 2; arr.length
        //构造函数里面的this是新实例化出来的那个对象
        var elems = document.querySelectorAll(selector);
        this.length = elems.length;
        for (var i = 0; i < elems.length; i++) {
            //中括号里面放的任何元素，最终都会转换成字符串
            this[i] = elems[i];
        }
    },
    html:function (html) {
        for (var i = 0; i < this.length; i++) {
            this[i].innerHTML=html;
        }
        return this;
    },
    css:function (k,v) {
        if(typeof k==="string" && typeof v==="string"){
            for (var i = 0; i < this.length; i++) {
                this[i].style[k]=v;
            }
        }else if(typeof k==="object"){
            for (var j = 0; j < this.length; j++) {
                for(var prop in k){
                    this[j].style[prop]=k[prop];
                }
            }
        }
        return this;
    }
};
$.fn.init.prototype=$.fn;

$("p").html("<h1>hhh</h1>");
