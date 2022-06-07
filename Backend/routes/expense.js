const express=require('express')
const {Expense,Member}=require('../models')
const  router=express.Router();
const app=express()
var jwt=require('jsonwebtoken');
router.post("/add_expanse",verifyToken,async(req,res)=>{
    console.log("data from api post request....in users",req.body);
    try{
        const ex=await Expense.create({created_by:req.body.user_id,amount:req.body.ammount,desc:req.body.event_name})
       const each_amount=(req.body.ammount)/(req.body.select_frds.length);
       console.log("ammount for each member",each_amount);
        req.body.select_frds?.map(async(m,i)=>{
             
                 const member=await Member.create({expanse_id:ex.id,amount:each_amount,member_id:m})
                 return member
             
        })
        
        return ex;
    }
    catch(err){
        console.log("error is",err);
        return res.send(res.status);

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