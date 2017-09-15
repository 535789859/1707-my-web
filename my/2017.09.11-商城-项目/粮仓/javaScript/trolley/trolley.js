/**
 * Created by DELL- on 2017/9/14.
 */
(function () {

    function init() {
        var token=localStorage.getItem("token");
        myajax.get("http://h6.duchengjiu.top/shop/api_cart.php",{token:""+token+""},function (error,result) {
            var data=JSON.parse(result).data;
            console.log(data);
            var contentContainer=document.querySelector(".content-container");
            for (var i=0;i<data.length;i++){
                contentContainer.innerHTML+="<ul>" +
                    "<li><img src='"+data[i].goods_thumb+"' alt='图片加载中'></li>" +
                    "<li><p>"+data[i].goods_name+"</p></li>" +
                    "<li><button>-</button><span>"+data[i].goods_number+"</span><button>+</button></li>" +
                    "<li><span>"+data[i].goods_price+"</span></li></ul>";
            }
        })
    }

    init();
})();