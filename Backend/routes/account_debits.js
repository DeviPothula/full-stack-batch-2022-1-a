const express=require('express')
const {Expense,Member}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
const app=express()
router.get("/account_debits/:id",function(req,res){
    console.log("data from account debits request....",req.params.id);
    db.sequelize.query(`select sum(members.amount) from expenses,members where members.member_id=${req.params.id} and expenses.id=members.expanse_id and members.is_settled=false group by members.member_id`)
    .then((data)=>{
        console.log("over all amount you have to pay",data[0])
        res.send(data)
    })
    .catch((err)=>res.send(err))
 })
module.exports=router;