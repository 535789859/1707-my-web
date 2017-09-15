/**
 * Created by DELL- on 2017/9/12.
 */
(function () {

    function login() {
        var idLi=document.querySelector(".header-container .container-right ul li:nth-child(4)");
        if(localStorage.getItem("liangcang")){
            var id=localStorage.getItem("liangcang");
            idLi.innerHTML="<li>"+id+"<div>" +
                "<a href='html/login/login.html'>切换用户</a>" +
                "<button class='button'>退出</button>" +
                "</div></li>";
            var button=document.querySelector(".header-container .container-right ul li:nth-child(4) div .button");
            button.onclick=function () {
                localStorage.clear();
                window.location.reload();
            }
        }

    }

    function shopTrolley() {
        var shop=document.querySelector(".header-container .container-right ul li:nth-child(2) a");
        console.log(shop);
        var token=localStorage.getItem("token");
        shop.onclick=function (e) {
            e.preventDefault();
            if(token){
                tokenVerify(token,"html/trolley/trolley.html");
            }else {
                return window.location.href="html/login/login.html";
            }
        }
    }
    function tokenVerify(token,url) {
        myajax.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"checkToken",token:""+token+""},function (error,result) {
            var data=JSON.parse(result);
            console.log(data);
            switch (data.code){
                case 0:
                    console.log(data.code);
                    window.location.href=url;
                    break;
                case 2:
                    window.location.href="html/login/login.html";
            }
        })
    }
    function init() {
        login();
        shopTrolley();
    }
    init();
})();