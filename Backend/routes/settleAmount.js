const express=require('express')
const {Expense,Member,User,Activity}=require('../models')
const  router=express.Router();
router.post("/update_amount",async(req,res)=>{
    console.log("data from  settle amount  request....",req.body);
    try{
        
        const exp=await Member.update({is_settled:true},{where:{expanse_id:req.body.expanse_id,member_id:req.body.user_id}})
         console.log(exp)
         const act=await Activity.create({user_id:req.body.user_id,activity_name:"settlement Done",created_Time:exp.createdAt})
         res.send({msg:'success'})
    }
    catch(err){
        console.log("error is",err);
        return res.send(res.status);

    }
 })
module.exports=router;