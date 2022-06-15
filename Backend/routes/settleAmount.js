const express=require('express')
const {Expense,Member,User,Activity}=require('../models')
const  router=express.Router();
var jwt=require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
router.post("/update_amount",body('expanse_id').isLength(1),body('member_id').isLength(1),async(req,res)=>{
    console.log("data from  settle amount  request....",req.body);
    try{
        
const errors = validationResult(req);
if(!errors.isEmpty())
{
    return res.status(400).json({ errors: errors.array() });
}
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