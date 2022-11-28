const e=require("express");
const b=require("body-parser");
const m=require("mongodb").MongoClient;
const app=e();
app.use(e.static(__dirname+"/build"));
app.get("",(req,res)=>{
    res.sendFile(__dirname+"/build/index.html");
});
app.listen(process.env.PORT | 8000);
jah