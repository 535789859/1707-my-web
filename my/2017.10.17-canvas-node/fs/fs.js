/**
 * Created by DELL- on 2017/10/17.
 */
var http = require('http');
var fs = require('fs');
console.log(fs);
var server=http.createServer( (req,res) =>{
    // if(req.url==="/favicon.ico"){
    //     return
    // }
    if(req.url==="/a.txt"){
        fs.readFile("/a.txt",function (error,data) {
            res.end(data);
        })
    }else {
        res.end("hello world");
        console.log("A");
    }
});
console.log("B");
server.listen(5000,"127.0.0.1");//端口