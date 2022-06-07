const express=require('express')
const {User,Expense,Member}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/myexpanse/:id",function(req,res){
    console.log("data from my expense route....",req.params.id);
    db.sequelize.query(`select expenses.desc,expenses.amount from expenses where
     (expenses.created_by=${req.params.id})`)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
 })
module.exports=router;