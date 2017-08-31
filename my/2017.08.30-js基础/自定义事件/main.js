/**
 * Created by DELL- on 2017/8/30.
 */

var odiv=document.querySelector("div");
console.log(odiv.offsetHeight);
odiv.onclick=function () {
    // alert(odiv);
    console.log(odiv.offsetHeight);
    console.log(this);
};