/**
 * Created by DELL- on 2017/10/17.
 */
var http = require('http');
var server=http.createServer( (req,res) =>{
    var random=Math.random();
    if(random>0.9){
        throw  new Error("咋了")
    }
    res.end("hello world");
});
console.log("B");
server.listen(4000,"127.0.0.1");//端口