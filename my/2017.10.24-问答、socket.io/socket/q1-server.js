/**
 * Created by DELL- on 2017/10/24.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer(function (req,res) {
    if(req.url=="/"){
        fs.readFile("q1-client.html",function (err,data) {
            res.end(data);
        })
    }
    // res.end("hi");
});
var io=require("socket.io")(server);
io.on("connection",function (socket) {
    console.log("1 client connected");
    socket.on("tiwen",function (msg) {
        console.log("客户端发送过来的信息是"+msg)
        socket.emit("return","吃了")
    })
});
server.listen(3000);