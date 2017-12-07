/**
 * Created by DELL- on 2017/9/11.
 */
(function () {
    function init() {
        var htmlBody=document.querySelector("body");
        htmlBody.oncontextmenu=function (e) {
            e.preventDefault();
        };
        username();
        password();
        bottom();
    }
    function username() {
        var yhm=document.querySelector("#yhm");
        yhm.onblur=function () {
            var yhmPromp=document.querySelector(".yhmPromp");
            if(yhm.value.length<6 || yhm.value.length>16){
                yhmPromp.className="yhmPromp Promp2";
                yhmPromp.innerHTML="输入信息错误";
                return;
            }
            myajax.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"check",username:""+yhm.value+""},function (error,result) {
                var data=JSON.parse(result);
                switch (data.code){
                    case 0:
                        yhmPromp.className="yhmPromp Promp1";
                        yhmPromp.innerHTML="用户名可用";
                        break;
                    case 2001:
                        yhmPromp.className="yhmPromp Promp2";
                        yhmPromp.innerHTML="用户名被占用";
                        break;
                }
            })
        }
    }

    function password() {
        var mm=document.querySelector("#mm");
        var qrmm=document.querySelector("#qrmm");
        mm.onblur=function () {
            var mmPromp=document.querySelector(".mmPromp");
            if(mm.value.length<6 || mm.value.length>19){
                mmPromp.className="mmPromp Promp2";
                mmPromp.innerHTML="密码6-19个";
                return;
            }else {
                mmPromp.className="mmPromp Promp1";
                mmPromp.innerHTML="密码可用";
            }
        };
        qrmm.onblur=function () {
            var qrmmPromp=document.querySelector(".qrmmPromp");
            if(mm.value===qrmm.value && mm.value.length!==0 && qrmm.value.length>=6){
                qrmmPromp.className="qrmmPromp Promp1";
                qrmmPromp.innerHTML="密码一致";
            }else {
                qrmmPromp.className="qrmmPromp Promp2";
                qrmmPromp.innerHTML="密码不一致";
            }
        }
    }

    function bottom() {
        var bottom=document.querySelector(".min form");
        var xy=document.querySelector("input[type=checkbox]");
        var ckb=false;
        xy.onclick=function () {
            if(ckb===false){
                ckb=true;
                document.querySelector("input[type=submit]").id="";
                if(ckb===true){
                    bottom.onsubmit=function (e) {
                        e.preventDefault();
                        console.log(1);
                        var yhm=document.querySelector("#yhm");
                        var mm=document.querySelector("#mm");
                        myajax.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"register",username:""+yhm.value+"",password:""+mm.value+""},function (error,result) {
                            var data=JSON.parse(result);
                            switch (data.code){
                                case 1000:
                                    alert("请把信息填写正确完整");
                                    break;
                                case 0:
                                    alert("注册成功");
                                    window.location.href="../../html/login/login.html";
                                    break;
                                case 2001:
                                    alert("用户名已被占用");
                                    break;
                            }
                        });
                    }
                }
            }else {
                ckb=false;
                document.querySelector("input[type=submit]").id="submitInput";
                if(ckb===false) {
                    bottom.onsubmit=function (e) {
                        e.preventDefault();
                        return;
                    }
                }
            }
        };


    }
    init();
})();