/**
 * Created by DELL- on 2017/11/8.
 */
let Koa=require("koa");
let app=new Koa;

app.use(ctx=>{
    ctx.body={
        data:[
            {
            id:1,
            name: "max"
            }
        ]
    };
});
app.listen(3000);