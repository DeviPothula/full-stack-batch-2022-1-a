const express=require('express')
const {User,Friend}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/getfriends/:id",function(req,res){
    console.log("data from get friends route....",req.params.id);
    db.sequelize.query(`select  friends.user_id,friends.frd_id,user_details.name,user_details.email,user_details.phone_number,user_details.password from user_details,friends where (friends.frd_id=user_details.id and friends.user_id=${req.params.id})`)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
 })
module.exports=router;