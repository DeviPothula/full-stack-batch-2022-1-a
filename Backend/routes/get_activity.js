const express=require('express')
const {Activity}=require('../models')
const  router=express.Router();
const db=require('../models/index');
const {sequelize}=require('../models');
router.get("/acts/:id",async(req,res)=>{
    console.log("data from addfriend request",req.body);
    try{
       
           const data=await Activity.findAll({where:{user_id:req.params.id}})
           console.log("actvities",data)
           res.send(data);
    }
    catch(err){
       console.log("error is",err);
       return res.status(500).json(err);
    }

})

module.exports=router;