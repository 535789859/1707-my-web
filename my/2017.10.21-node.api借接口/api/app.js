let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
require('./db');
let users = require('./routes/users');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//拦截所有路由
app.use((req,res,next)=>{
    //originalUrl来源地址
    console.log("url:"+req.originalUrl);
    if(req.cookies.userId || req.originalUrl==="/users/login" || req.originalUrl.indexOf("/goods/list")>-1){
        next();
    }else {
        return res.json({
            statues:"10001",
            message:"当前未登录",
            result:""
        })
    }

});

app.use('/users', users);
module.exports = app;
