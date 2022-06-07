const express=require('express')
const {User}=require('../models')
const  router=express.Router();
var jwt=require('jsonwebtoken');
router.post("/forgotpas",async(req,res)=>{
    console.log("data from  forgot password  request....in users",req.body);
    try{
        const ex=await User.update({password:req.body.password},{where:{email:req.body.email}})
        return ex;
    }
    catch(err){
        console.log("error is",err);
        return res.send(res.status);

    }
 })
module.exports=router;