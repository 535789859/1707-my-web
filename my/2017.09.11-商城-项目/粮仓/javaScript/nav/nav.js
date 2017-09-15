/**
 * Created by DELL- on 2017/9/13.
 */
(function () {

    function nav() {
        myajax.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function (error,result) {
            var data=JSON.parse(result).data;
            var ul=document.querySelector(".nav-container ul");
            for(var i=0;i<data.length;i++){
                var li =document.createElement("li");
                ul.appendChild(li);
                li.innerHTML="<a href='#content'>"+data[i].cat_name+"</a>";
                (function (i) {
                    li.onclick=function () {
                        var contentUl=document.querySelector(".content-container ul");
                        contentUl.innerHTML="";
                        contentUl.style.height=600+"px";
                        myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{cat_id:""+data[i].cat_id+""},function (error,result) {
                            new LiContent(result);
                            new LiStyle();
                        })
                    }
                })(i);
                myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{cat_id:""+data[i].cat_id+""},function (error,result) {
                    new LiContent(result);
                    new LiStyle();
                })
            }
        })
    }

    nav();
})();