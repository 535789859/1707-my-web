/**
 * Created by DELL- on 2017/9/20.
 */
$.ajax("http://h6.duchengjiu.top/shop/api_cat.php",{
    type:"get",
    dataType:"json",
    data:{},
    success:function (result) {
        console.log(result);
    }
});