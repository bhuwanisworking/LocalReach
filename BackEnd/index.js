const express=require("express");
const app=express();
const cors = require('cors');
const mongoose=require("mongoose")
// cors is used to let the react server and the backend server connect
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Vendors").then((res)=>{

}).catch((err)=>{
    console.log("err while connecting")
})


app.use(function(req,res,next){
    console.log("this will be called")
    next();
})

app.get("/",function(req,res){
    console.log("/ is called")
    res.send("welcome to the / page")
})

app.get("/about",function(req,res){
    console.log("about page is called")
    res.send("Welcome to the /about Page")
})

app.get("/post",function(req,res){
    res.status(200).send("hello the status code is 200 on this port")
})
app.get("/loginScreen",function(req,res){
    res.send("Welcome to the Login Screen");
})

app.listen(3000,function(err){
    console.log("Server started");
})