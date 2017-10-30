/**
 * Created by DELL- on 2017/10/24.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer(function (req,res) {
    if(req.url=="/"){
        fs.readFile("index.html",function (err,data) {
            res.end(data);
        })
    }
    // res.end("hi");
});
var io=require("socket.io")(server);
io.on("connection",function (socket) {
    console.log("1 client connected");
    socket.on("hua",function (msg) {
        console.log("客户端发送过来的信息是"+msg);
        // io.emit("return",msg);//通知所有人
        socket.broadcast.emit("return",msg);//通知除了自己以外的其他人
    })
});
server.listen(3000,"192.168.30.1");