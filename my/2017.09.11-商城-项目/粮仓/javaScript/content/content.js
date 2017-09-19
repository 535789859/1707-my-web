/**
 * Created by DELL- on 2017/9/13.
 */
(function () {

    function LiContent(result) {
        var navUl=document.querySelector(".content-container ul");
        var data=JSON.parse(result);
        for (var i=0;i<data.data.length;i++){
            var li=document.createElement("li");
            li.innerHTML="<a href='html/details/details.html?"+data.data[i].goods_id+"'><img src='"+data.data[i].goods_thumb+"' />" +
                "<p>"+data.data[i].goods_name+"</p><span>¥"+data.data[i].price+"</span></a>";

            navUl.appendChild(li);
        }
    }
    function LiStyle() {
        var liArr=document.querySelectorAll(".content-container ul li");
        for(var i=4;i<=liArr.length;){
            var li=document.querySelector(".content-container ul li:nth-child("+i+")");
            li.className="liMarginRight";
            i+=4;
        }
    }

    window.LiContent=LiContent;
    window.LiStyle=LiStyle;
})();