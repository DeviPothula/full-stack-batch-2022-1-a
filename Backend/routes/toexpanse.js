const express=require('express')
const {User,Expense,Member,Activity}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/toexpanse/:id",function(req,res){
    console.log("data from my expense route....",req.params.id);
    db.sequelize.query(`select expenses.id,user_details.name,expenses.desc,members.amount,members.is_settled from user_details,expenses,members where
     (members.member_id=${req.params.id} and expenses.id=members.expanse_id and expenses.created_by=user_details.id)`)
    .then((data)=>
    {
        
        res.send(data)})
    .catch((err)=>res.send(err))
 })
module.exports=router;