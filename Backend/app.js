const {sequelize}=require('./models');
var express=require('express');
const {User,Friend}=require('./models')
var Cors=require('cors');
var bodyParser=require('body-parser')
const accountSid = 'AC29df809115d57e3ac22bdbbb381664fb'; 
const authToken = 'ac98191537e0d996a36ee91496d26bd8'; 
const client = require('twilio')(accountSid, authToken); 
var app=express();
const cron=require('node-cron')
const registerRouter=require('./routes/register')
const loginRouter=require('./routes/login')
const addfriendRouter=require('./routes/addfriends')
const expenserouter=require('./routes/expense')
const getusersRouter=require('./routes/getusers')
const getfriendsRouter=require('./routes/getfriends')
const forgotpasRouter=require('./routes/forgotpas')
const myexpenseRouter=require('./routes/myexpanse')
const toexpanseRouter=require('./routes/toexpanse')
const detailsRouter=require('./routes/details')
const addGroupRouter=require('./routes/add_group')
const groupdetailsRouter=require('./routes/groupnames')
const groupmembersRouter=require('./routes/groupMembers')
const getActivitiesRouter=require('./routes/get_activity')
const settleAmountRouter=require('./routes/settleAmount')
const All_debits_Router=require('./routes/account_debits')
const All_credits_Router=require('./routes/account_credits')
const verify_otp_route=require('./routes/verify_otp')
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
app.use('/details',detailsRouter);
app.use("/addgroup",addGroupRouter)
app.use("/group_details",groupdetailsRouter)
app.use("/group_members",groupmembersRouter)
app.use("/acts",getActivitiesRouter)
app.use("/update_amount",settleAmountRouter)
app.use("/account_debits",All_debits_Router)
app.use("/account_credits",All_credits_Router)
app.use("/verify_otp",verify_otp_route)
app.get("/",function(req,res)
{
    res.send("hi 5000");
})

async function  users_fun()
{
    const users=await User.findAll();
    users.map((u,i)=>{
        return(
            client.messages.
            create({
             body:"hii devi ",
             to:"+91" + u.dataValues.phone_number,
             messagingServiceSid:'MG41a9e6a45f3b7f8c0294f7a6691f1d5f',  
            }).then(msg=>console.log(msg.sid))
            .catch(err=>{console.log(err)})
        )

    })
}
//minutes hours day(1-31) month  weekday(0-7)
// cron.schedule("*/3 * * * *",()=>{
//     users_fun();
// })
app.listen({port:5000},async(req,res)=>{
    console.log("I am running from server...5000");
    await sequelize.authenticate();
    console.log("Dataabase Conneccted successfully....");
})