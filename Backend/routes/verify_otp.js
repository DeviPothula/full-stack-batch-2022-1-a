const express=require('express')
const {User,Friend}=require('../models')
const  router=express.Router();
const { body, validationResult } = require('express-validator');
const client=require("twilio")(process.env.accountSID,process.env.authToken)
router.post("/verify_otp",body('phone').isMobilePhone(),body('otp').isLength({min:4}),function(req,res)
{
    const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }
    console.log("i am from verify otp route",req.body)
    client.verify
    .services(process.env.serviceID)
    .verificationChecks
    .create({
        to:"+91"+ req.body.phone,
        code:req.body.otp
    })
    .then((data)=>{
       console.log("data after verification",data);
       if(data.valid===true)
       {
        res.send({msg:"success"})
       }
       else
       {
        res.send({msg:"invalid_otp"})
       }
       
    })
    .catch((err)=>{
        res.send({err:err})
    })
    
})
module.exports=router