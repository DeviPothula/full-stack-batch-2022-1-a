const express=require('express')
const {Expense,Member}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/account_credits/:id",function(req,res){
    console.log("data from acount_credits request....",req.params.id);
    db.sequelize.query(`select sum(members.amount) from expenses,members where expenses."created_by"=${req.params.id} and expenses.id=members.expanse_id and members.is_settled=false group by expenses."created_by"`)
    .then((data)=>{
        console.log("over all amount you have to recive",data[0]);
        res.send(data)})
    .catch((err)=>res.send(err))
 })
module.exports=router;