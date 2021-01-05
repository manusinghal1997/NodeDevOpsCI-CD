const express = require("express");

const app = express();

const port = 3000;

const admin = (req,res) => {
    return res.send("Admin Dashboard");
};

const isAdmin = (req,res, next) => {
    console.log("is admin checking");
    next();
};

const isloggedin = (req,res, next) => {
    console.log("is loggedin checking");
    next();
};
app.get("/admin", isloggedin,isAdmin, admin);



app.get("/",(req,res) =>{
    return res.send("home page");
});
app.get("/login",(req,res) =>{
    return res.send("login page");
});
app.get("/signin",(req,res) =>{
    return res.send("signin page");
});

app.get("/signup",(req,res) =>{
    return res.send("you are sign out");
});
app.get("/nodemon",(req,res) =>{
    return res.send("you are sign out");
});

app.listen(port,(req,res) => {
    console.log("server is running at 3000");
});

