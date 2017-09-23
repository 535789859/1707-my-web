/**
 * Created by DELL- on 2017/9/22.
 */
(function () {

    function position() {
        var div=document.querySelectorAll(".grid");
        for(var i=0;i<div.length;i++){
            div[i].style.left=i*250+"px";

        }
    }
    function tu() {
        for(var i=0;i<10;i++){
            (function (i) {
                var div=document.createElement("div");
                div.className="grid";
                div.innerHTML="<img src='waterfall/images/"+i+".png'><p>sdf</p>"
                document.querySelector(".waterfall").appendChild(div);
            })(i)
        }
    }

    function init() {
        tu();
        position();
    }
    init();
})();