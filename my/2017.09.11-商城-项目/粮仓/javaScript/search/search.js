/**
 * Created by DELL- on 2017/9/13.
 */
(function () {

    function search() {
        var searchInput=document.querySelector("#searchInput");
        var labelInput=document.querySelector("#labelInput");
        labelInput.onclick=function () {
            var contentUl=document.querySelector(".content-container ul");
            contentUl.innerHTML="";
            contentUl.style.height=600+"px";
            var valueInput=searchInput.value;
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{search_text:""+valueInput+""},function (error,result) {
                new LiContent(result);
                new LiStyle();
            })
        };
    }


    search();
})();