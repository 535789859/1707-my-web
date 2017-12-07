/**
 * Created by DELL- on 2017/10/11.
 */
(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        this.yhm=this["yhm"];
        this.mm=this["mm"];
        var status={
            status:"login",
            username:""+this.yhm.value+"",
            password:""+this.mm.value+""
        };
        post("http://h6.duchengjiu.top/shop/api_user.php",status,function (result) {
            var code=result.code;
            var data=result.data;
            switch (code){
                case 0:
                    localStorage.setItem("username",""+data.username+"");
                    localStorage.setItem("token",""+data.token+"");
                    location.href="../../index.html";
                    break;
                case 2003:
                case 1001:
                    alert("用户名密码错误");
                    break;
            }
        })
    });

    function post(url,data,success) {
        $.ajax({
            url:url,
            method:"post",
            data:data,
            dataType:"json",
            success:success
        });
    }

})();