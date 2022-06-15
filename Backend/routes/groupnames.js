const express=require('express')
const {User,Group,Groupmembers}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/group_details/:id",function(req,res){
    console.log("data from group details....route",req.params.id);
    db.sequelize.query(`select distinct groups.id, groups.group_name from groups,groupmembers where (groupmembers.member_id=${req.params.id} or groups."createdBy"=${req.params.id}) and groupmembers.group_id=groups.id`)
    .then((data)=>{
        res.send(data)}
       )
    .catch((err)=>res.send(err))
    })
module.exports=router;