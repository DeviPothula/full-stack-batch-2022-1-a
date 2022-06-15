const express=require('express')
const {User}=require('../models')
const  router=express.Router();
var jwt=require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
router.post("/forgotpas",body('email').isEmail(),async(req,res)=>{
    console.log("data from  forgot password  request....in users",req.body);
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }
        const ex=await User.update({password:req.body.password},{where:{email:req.body.email}})
        if(ex)
        {
            console.log("ex",ex)
            res.send({msg:'success'})
        }
    }
    catch(err){
        console.log("error is",err);
        return res.send(res.status);

    }
 })
module.exports=router;