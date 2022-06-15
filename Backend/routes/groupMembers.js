const express=require('express')
const {User,Group,Groupmembers}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/group_members/:id",function(req,res){
    console.log("data from group members....route",req.params.id);
    db.sequelize.query(`select groups.group_name,user_details.name,user_details.email,groupmembers.member_id from user_details,groupmembers,groups where groupmembers.group_id=groups.id and groupmembers.member_id=user_details.id`)
    .then((data)=>{
        console.log("my included ",data);
        res.send(data)}
       )
    .catch((err)=>res.send(err))
    })
module.exports=router;