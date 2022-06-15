const express=require('express')
const {User,Friend,Activity}=require('../models')
const  router=express.Router();
const app=express()
const db=require('../models/index');
const {sequelize}=require('../models');
const { body, validationResult } = require('express-validator');
var jwt=require('jsonwebtoken');
router.post("/addfriend",body('email').isEmail(),body().isLength(1),verifyToken,async(req,res)=>{
    console.log("data from addfriend request",req.body);
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }
           const user=await User.findOne({where:{email:req.body.email}})
           const frd=await  Friend.create({user_id:req.body.user_id,frd_id:user.id})
           const act=await Activity.create({user_id:req.body.user_id,activity_name:"Added Friend",created_Time:frd.createdAt})
           console.log("frd created ",frd);
           console.log("activity created",act);
           res.send({msg:'success'});
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