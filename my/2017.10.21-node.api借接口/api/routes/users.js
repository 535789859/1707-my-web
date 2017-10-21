let express = require('express');
let router = express.Router();
let User = require('./../models/user');

//1.登录接口
router.post("/login", (req,res,next) => {
  let param = {
    userName:req.body.userName,//获取用户名
    userPwd:req.body.userPwd//获取密码
  };
  //查找用户
  User.findOne(param, (err,doc) => {
      console.log(doc);
      console.log(param);
    if(err){
      return res.json({
        status:"1",
        msg:err.message
      });
    }
    if (!doc) {
      return res.json({
        status: "1",
        msg: "用户名或密码错误"
      });
    }
    //给客户端设置cookie, userId改改，值为用户的ID，cookie的作用域是/,过期时间是1个小时

      res.cookie("userId",doc.userId,{
      maxAge:1000*60*60
      });
    //给客户端设置用户名，值为用户的名称，cookie的作用域是/，过期时间为1小时
    res.cookie("userName",doc.userName,{
      maxAge:1000*60*60
    });
    //req.session.user = doc;
    return res.json({
      status:'0',
      msg:'',
      result:{
        userName:doc.userName
      }
    });
  });
});

//2.退出
router.post("/logout",(req,res,next) =>{
  //清空cookie
  res.cookie("userId","",{
    maxAge:-1
  });
  return res.json({
      status:"0",
      message:"",
      result:""
  })
});

//3.检查用户是否登录
router.get("/checkLogin",(req,res,next) =>{
  if(req.cookies.userId){
    return res.json({
      status:"0",
      message:"",
      result:req.cookies.userName || ""
    });
  }
  return res.json({
        status:"1",
        message:"未登录",
        result:""
    })
});

//

module.exports = router;
