const express=require('express')
const {User,Friend}=require('../models')
const  router=express.Router();
var jwt=require('jsonwebtoken');
const app=express()
router.post("/login",async(req,res)=>{
    console.log("I am from login route...",req.body);
    try
    {
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
                            //token generation
                            jwt.sign({user},'secretkey',(err,token)=>{
                                res.send({msg:"success",token:token,user_id:user.id,name:user.name})
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