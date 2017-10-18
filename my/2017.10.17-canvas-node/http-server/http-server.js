/**
 * Created by DELL- on 2017/10/17.
 */
var http = require('http');
var server=http.createServer( (req,res) =>{
    // res.send("hello world");
    res.write("hello world");
    res.end();
});
server.listen(4000);//端口