const express=require('express')
const {User,Friend}=require('../models')
const  config=require('../config/twilio_config')
const  router=express.Router();
const { body, validationResult } = require('express-validator');
const client=require("twilio")(config.accountSID,config.authToken)
var jwt=require('jsonwebtoken');
router.post("/login",body('email').isEmail(),body('password').isLength({min:4}),async(req,res)=>{
    console.log("I am from login route...",req.body);
    console.log("config details",config.accountSID,config.authToken,config.serviceID)
    try
    {
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }
             User.findOne({where:{email:req.body.email}}).then((user)=>{
                       
                   if(!user)
                   {
                       res.send({msg:"Regiterfirst"})
                   }
                    else
                    {
                        if(user.password==req.body.password)
                        {
                            console.log("login successfully...")

                            // if user details are correct generate an otp to their mobile number

                            client
                            .verify
                            .services(config.serviceID)
                            .verifications
                            .create(
                                {
                                    to:"+91" + user.phone_number,
                                    channel:"sms"
                                }
                            )
                            .then((data)=>{
                                // token generation
                                console.log("i am after otp generate");
                              jwt.sign({user},'secretkey',(err,token)=>{
                                res.send({msg:"success",token:token,user_id:user.id,name:user.name,phone:user.phone_number})
                            })
                            })
                        }
                        else
                        {
                            res.send({msg:"Incorrect"})
                        }
                    }
              })
     }
     catch(err)
     {
        console.log("error",err);
     }
 })
        
function verifyToken(req,res,next)
{
    const v=req.headers['authorization'];
    if(typeof(v)!=undefined)
    { //split the v to get the token

       const vToken=v.split(' ')[1];
       //verify the token get from front end
       if(vToken)
       {
           console.log("I am from fromted token",vToken);
           try
           {
               var verifivation=jwt.verify(vToken,"secretkey")
               next();
           }
           catch(err)
           {
                res.json({"error":err})
           }
       }
       //if token not adjust send msg
       else
       {
            res.json({"message":"authorization header is missing..."})
       }
    }
    else
    {
        res.sendStatus(403)
    }
}
module.exports=router;