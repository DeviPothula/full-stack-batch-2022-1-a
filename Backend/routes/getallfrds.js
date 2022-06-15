const express=require('express')
const {User,Friend}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/get_all_friends/:id",function(req,res){
    console.log("data from get friends route....",req.params.id);
    db.sequelize.query(``)
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
 })
module.exports=router;