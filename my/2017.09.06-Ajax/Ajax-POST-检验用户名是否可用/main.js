/**
 * Created by DELL- on 2017/9/6.
 */
(function () {
    function AjaxJson() {
        var oInput = document.querySelector('input');
        var oSpan = document.querySelector('span');
        oInput.onblur = function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === xhr.DONE) {
                    // console.log(xhr.responseText);
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                    oSpan.innerText = json.message;
                    oSpan.style.display = 'block';
                    if (json.code === 0) {
                        oSpan.className = "right";
                    } else {
                        oSpan.className = "error";
                    }
                }
            };
            xhr.open('POST', 'http://h6.duchengjiu.top/shop/api_user.php');
            //请求头-如果发送POST请求，必须写一句话，模拟成form表单提交
            xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
            //发送的数据写到send里面
            xhr.send("status=check&username="+oInput.value);
        }
    }
    new AjaxJson();
})();