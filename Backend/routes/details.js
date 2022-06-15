const express=require('express')
const {User,Expense,Member,Group}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/details/:id",function(req,res){
    
    console.log("data from details route....",req.params.id);
    db.sequelize.query(`select expenses.group_id,expenses.created_by,expenses.amount,expenses.desc,user_details.name from user_details,expenses,members where
     (expenses.id=${req.params.id} and members.member_id=user_details.id and members.expanse_id=${req.params.id})`)
    .then(async (data)=>
    {
        var main_obj={};
        var people=[];
        console.log("data in details route",data[0])
        data[0]?.map((u,i)=>{
           people.push(u.name)
        })
        console.log("peoples",people)
        
        var name_obj=data[0][0];
        main_obj.amount=data[0][0].amount
        main_obj.desc=data[0][0].desc
        main_obj.people=people
        console.log(name_obj);
        var user_name;
        // db.sequelize.query(`select name from user_details where id=${name_obj.created_by}`)
        // .then((data)=>{
        //       user_name=data[0][0].name
        //       data=user_name
        //       res.send(data)
          
        // })
        const user=await User.findOne({where:{id:name_obj.created_by}})
        const g=await Group.findOne({where:{id:data[0][0].group_id}})
        main_obj.user_name=user.name;
        if(g){main_obj.group_name=g.group_name;}
        data=main_obj
        console.log("finall data i am sending",data)
        res.send(data)
    })
    .catch((err)=>res.send(err))
 })
module.exports=router;