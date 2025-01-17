const express=require('express')
const {User,Friend}=require('../models')
const  router=express.Router();
const app=express()
const db=require('../models/index');
const {sequelize}=require('../models');
var jwt=require('jsonwebtoken');
router.post("/addfriend",verifyToken,async(req,res)=>{
    console.log("data from addfriend request",req.body);
    try{
       
           const frd=await  Friend.create({user_id:req.body.user_id,frd_id:req.body.frd_id})
           return frd;
    }
    catch(err){
       console.log("error is",err);
       return res.status(500).json(err);
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