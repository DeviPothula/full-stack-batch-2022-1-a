const express=require('express')
const {Expense,Member,User,Activity}=require('../models')
const  router=express.Router();
const app=express()
var jwt=require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
router.post("/add_expanse",body('group_id').isInt(),body('user_id').isInt(),body('ammount').isNumeric(),body('event_name'
).isAlpha(),verifyToken,async(req,res)=>{
    console.log("data from api post request....in users",req.body);
    try{
        
const errors = validationResult(req);
if(!errors.isEmpty())
{
    return res.status(400).json({ errors: errors.array() });
}
        const ex=await Expense.create({group_id:req.body.group_id,created_by:req.body.user_id,amount:req.body.ammount,desc:req.body.event_name})
       const each_amount=(req.body.ammount)/((req.body.select_frds.length)+1);
       console.log("ammount for each member",each_amount);
        req.body.select_frds?.map(async(m,i)=>{
                
                 const user=await User.findOne({where:{email:m}})
                 console.log("user details",user);
                 const member=await Member.create({group_id:req.body.group_id,expanse_id:ex.id,amount:each_amount,member_id:user.id})
                console.log("members added",member)
             
        })
        const act=await Activity.create({user_id:req.body.user_id,activity_name:"Added Expense",created_Time:ex.createdAt})
        res.send({msg:'success'})
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