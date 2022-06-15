const express=require('express')
const {User,Friend}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
const app=express()
router.get("/getusers",function(req,res){
    console.log("data from get request....in frds");
    db.sequelize.query('select * from user_details')
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
 })
module.exports=router;