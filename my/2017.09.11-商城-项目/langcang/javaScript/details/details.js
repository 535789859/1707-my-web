/**
 * Created by DELL- on 2017/9/13.
 */
(function () {

    function init() {
        var name = location.href;
        var b1=name.indexOf("?");
        var goodsId=name.substr(b1+1,name.length);
        myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{goods_id:""+goodsId+""},function (error,result) {
            var data=JSON.parse(result).data[0];
            console.log(data);
            var smallPic=document.querySelector("#smallPic img");
            var bigPic=document.querySelector("#bigPic");
            smallPic.src=data.goods_thumb;
            bigPic.style.background="url('"+data.goods_thumb+"') no-repeat";
            var containerRight=document.querySelector(".content-container .container-right");
            containerRight.innerHTML="<h1>"+data.goods_name+"</h1>" +
                "<p>"+data.goods_desc+"</p>" +
                "<b><span>单价:</span>¥"+data.price+"</b>"+
                "<div class='quantity'>数量:<button class='left'>-</button><span class='button'>0</span><button class='right'>+</button>件(库存剩余<span class='shuLiang'>"+data.goods_number+"</span>件)</div>" +
                "<div class='site'>地址:</div>" +
                "<div class='shop'><a href='#'>立即购买</a><button>加入购物车</button></div>";
            quantityButton();
            shop(goodsId);
        });
        new Glass();

    }
    function quantityButton() {
        var buttonLeft=document.querySelector(".quantity .left");
        var span=document.querySelector(".quantity .button");
        var buttonRight=document.querySelector(".quantity .right");
        var shuLiang=document.querySelector(".quantity .shuLiang");
        var a=0;
        buttonLeft.onclick=function () {
            if(a<=0){return;}
            a--;
            span.innerText=a;
        };
        buttonRight.onclick=function () {
            // if(a>=shuLiang.innerText){return alert("库存没那么多了")};
            a++;
            span.innerText=a;
        };
    }

    function shop(goods) {
        var button=document.querySelector(".shop button");
        var tokenYh=localStorage.getItem("token");

        button.onclick=function () {
            if(!tokenYh){return window.location.href="../../html/login/login.html";}
            var span=document.querySelector(".quantity .button");
            myajax.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+tokenYh+"",{goods_id:""+goods+"",number:""+span.innerText+""},function (error,result) {
                var data=JSON.parse(result);
                switch (data.code){
                    case 0:
                        alert("添加到购物车成功");
                        break;
                    case 2:
                        alert("购物车未更新");
                        break;
                    case 1002:
                        window.location.href="../../html/login/login.html";
                        break
                }
            });
        }
    }
    init();
})();