const express=require("express");
const app=express();
const cors = require('cors');
const mongoose=require("mongoose")
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Vendors").then((res)=>{
    console.log("connected succesfully")

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

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

app.get("/about",function(req,res){
    console.log("about page is called")
    res.send("Welcome to the /about Page")
})

app.listen(3000,function(err){
    console.log("Server started");
})