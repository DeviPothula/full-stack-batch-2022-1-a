const express=require('express')
const {User,Friend}=require('../models')
const  router=express.Router();
const app=express()
router.post("/register",async(req,res)=>{
    console.log("data from post request....in users",req.body);
     try{
         const user=await User.create({name:req.body.name,email:req.body.email,password:req.body.password,phone_number:req.body.phone_number})
         res.send({msg:"success"})
     }
     catch(err){
         console.log("error is",err);
         return res.send(res.status);
 
     }
 })
module.exports=router;