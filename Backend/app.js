const {sequelize}=require('./models');
var express=require('express');
var Cors=require('cors');
var bodyParser=require('body-parser')
var jwt=require('jsonwebtoken');
var app=express();
const registerRouter=require('./routes/register')
const loginRouter=require('./routes/login')
const addfriendRouter=require('./routes/addfriends')
const expenserouter=require('./routes/expense')
const getusersRouter=require('./routes/getusers')
const getfriendsRouter=require('./routes/getfriends')
const forgotpasRouter=require('./routes/forgotpas')
const myexpenseRouter=require('./routes/myexpanse')
const toexpanseRouter=require('./routes/toexpanse')
app.use(Cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/login",loginRouter);
app.use("/register",registerRouter);
app.use("/addfriend",addfriendRouter);
app.use("/add_expanse",expenserouter);
app.use("/getusers",getusersRouter);
app.use("/getfriends",getfriendsRouter);
app.use('/forgotpas',forgotpasRouter);
app.use("/myexpanse",myexpenseRouter);
app.use("/toexpanse",toexpanseRouter);
app.get("/",function(req,res)
{
    res.send("hi 5000");
})
app.listen({port:5000},async(req,res)=>{
    console.log("I am running from server...5000");
    await sequelize.authenticate();
    console.log("Dataabase Conneccted successfully....");
})