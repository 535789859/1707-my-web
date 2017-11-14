/**
 * Created by DELL- on 2017/9/14.
 */
(function () {

    function init() {
        var token=localStorage.getItem("token");
        myajax.get("http://h6.duchengjiu.top/shop/api_cart.php",{token:""+token+""},function (error,result) {
            var data=JSON.parse(result).data;
            var contentContainer=document.querySelector(".content-container");
            for (var i=0;i<data.length;i++){
                contentContainer.innerHTML+="<ul>" +
                    "<li><img src='"+data[i].goods_thumb+"' alt='图片加载中'></li>" +
                    "<li><p>"+data[i].goods_name+"</p></li>" +
                    "<li>¥<span>"+data[i].goods_price+"</span></li>" +
                    "<li><button class='left'>-</button><span>"+data[i].goods_number+"</span><button class='right'>+</button></li>" +
                    "<li>¥<span>0</span></li>" +
                    "<li><a href='../../html/order/order.html?'>立即购买</a></li></ul>";

            }
            var total=document.createElement("ul");
            contentContainer.appendChild(total);
            total.innerHTML="<li>总计:¥<span>0</span></li><li><a>结算</a></li>";
            contentButton(".content-container .left",".content-container .right",".content-container li:nth-child(4) span",".content-container li:nth-child(5) span",".content-container li:nth-child(3) span");
            totalButton();
            order();
        })
    }
    function contentButton(left,right,spana,spanb,p) {
        var buttonLeft=document.querySelectorAll(left);
        var buttonRight=document.querySelectorAll(right);
        var span1=document.querySelectorAll(spana);
        var span2=document.querySelectorAll(spanb);
        var span=document.querySelectorAll(p);
        var spanA=document.querySelector(".content-container ul:last-child li span");

        for (var j=0;j<buttonLeft.length;j++){
            span2[j].innerText=(span[j].innerText)*(span1[j].innerText);
            (function (j) {
                buttonLeft[j].onclick=function () {
                    var a=span1[j].innerText;
                    if(a<=0){return;}
                    a--;
                    span1[j].innerText=a;
                    span2[j].innerText=(span[j].innerText)*a;
                    spanA.innerText=0;
                    totalButton();
                }
            })(j);
            (function (j) {
                buttonRight[j].onclick=function () {
                    var a=span1[j].innerText;
                    a++;
                    span1[j].innerText=a;
                    span2[j].innerText=(span[j].innerText)*a;
                    spanA.innerText=0;
                    totalButton();
                }
            })(j);
        }
    }

    function totalButton() {
        var spanA=document.querySelector(".content-container ul:last-child li span");
        var spanB=document.querySelectorAll(".content-container ul li:nth-child(5) span");

        var s=parseInt(spanA.innerText);
        for(var i=0;i<spanB.length;i++){
            s+=parseInt(spanB[i].innerText);
        }
        spanA.innerText=s;
    }
    function order() {
        var total=document.querySelector(".content-container ul:last-child li a");
        var spanA=document.querySelector(".content-container ul:last-child li span");
        var totalPrices=0;
        total.onclick=function () {
            totalPrices=spanA.innerText;

            total.href="../../html/order/order.html?"+totalPrices+"";
        };
    }
    init();
})();