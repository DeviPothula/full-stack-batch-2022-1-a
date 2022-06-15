const express=require('express')
const {User,Friend}=require('../models')
const  router=express.Router();
const { body, validationResult } = require('express-validator');
const app=express()
router.post("/register",body('email').isEmail(),body('password').isLength({min:5}),body('name').isLength({min:4}),body('phone_number').isMobilePhone(),async(req,res)=>{
    console.log("data from register request....in users",req.body);
     try{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }
         const user=await User.create({name:req.body.name,email:req.body.email,password:req.body.password,phone_number:req.body.phone_number})
         res.send({msg:"success"})
     }
     catch(err){
         console.log("error is",err);
         return res.send(res.status);
 
     }
 })
module.exports=router;