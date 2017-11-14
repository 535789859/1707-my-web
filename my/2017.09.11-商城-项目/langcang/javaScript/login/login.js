/**
 * Created by DELL- on 2017/9/12.
 */
(function () {

    function init() {
        document.body.oncontextmenu=function (e) {
            e.preventDefault();
        };
        var yhm=document.querySelector("#yhm");
        var mm=document.querySelector("#mm");
        var form=document.querySelector("form");
        form.onsubmit=function (e) {
            e.preventDefault();
            if(yhm.value.length===0 || mm.value.length===0){
                alert("请填写用户名或密码");
                return;
            }else {
                myajax.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:""+yhm.value+"",password:""+mm.value+""},function (error,result) {
                    var data=JSON.parse(result);
                    console.log(data);
                    if(data.code===0){
                        window.location.href="../../index.html";
                        localStorage.setItem("liangcang",""+yhm.value+"");
                        localStorage.setItem("token",""+data.data.token+"");
                    }else {
                        alert("用户名或密码错误");
                    }
                })
            }
        }
    }

    init();
})();