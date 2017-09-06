/**
 * Created by DELL- on 2017/9/6.
 */
(function () {
    function AjaxJson() {
        var oul=document.querySelector("ul");
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function () {
            if(xhr.readyState===4){
                console.log(JSON.parse(xhr.responseText));
                try{
                    /**
                     * 1、将预见可能引发异常的代码包含在try语句块中。
                     * 2、如果发生了异常，则转入catch的执行。
                     */
                    var data=JSON.parse(xhr.responseText);
                    for(var i=1;i<data.data.length;i++){
                        oul.innerHTML+="<li><a href='#'>"+data.data[i].cat_name+"</a></li>"
                    }
                }catch (error){
                    /**
                     * 这将捕获任何发生的异常
                     * catch可以有多个，也可以没有，每个catch可以处理一个特定的异常
                     */
                }
            }
        };
        xhr.open("GET","http://h6.duchengjiu.top/shop/api_cat.php");
        xhr.send();
    }
    new AjaxJson();
})();