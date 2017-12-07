/**
 * Created by DELL- on 2017/10/12.
 */
(function () {

    function login() {
        var name=localStorage.getItem("username");
        if(name) {
            var loginHtml = $(".login1")[0];
            console.log(loginHtml);
            loginHtml.innerHTML = "" + name + "";
            loginHtml.className="nav navbar-nav login";
        }
    }

    function init() {
        login();
    }
    init();
})();