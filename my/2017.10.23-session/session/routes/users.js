var express = require('express');
var router = express.Router();
var session=require("express-session");
var app=express();
app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true
}));


/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.login=="1"){
    res.send("欢迎"+req.session.username);
  }else {
    res.send("没有登录");
  }
});

router.get("/login",function (req,res) {
    req.session.login=="1";
    req.session.username=="考拉";
    req.send("你已经登录成功");
});

module.exports = router;
