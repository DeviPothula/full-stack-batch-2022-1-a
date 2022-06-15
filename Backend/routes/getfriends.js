const express=require('express')
const {User,Friend,Member,Expense}=require('../models')
const {sequelize}=require('../models')
const db=require('../models/index');
const  router=express.Router();
router.get("/getfriends/:id",function(req,res){
  
    console.log("data from get friends route....",req.params.id);
    db.sequelize.query(`select user_details.name,user_details.email,sum(members.amount) from user_details,members,expenses where (members.is_settled=false and expenses.created_by=${req.params.id} and expenses.id=members.expanse_id and members.member_id=user_details.id) group by user_details.email,user_details.name`)
    .then((data)=>{
        var new_data=[];
        var frds_details=data[0];
        db.sequelize.query(`select user_details.name,user_details.email from user_details,friends where friends.user_id=${req.params.id} and friends.frd_id=user_details.id`)
        .then((data)=>{
            var frds=data[0];
            console.log("frds_detais",frds_details)
            console.log("frds",frds);
           frds?.map((f,i)=>{
                    var obj=f;
                     var f=0;
                        frds_details.map((fd,i)=>{
                            console.log("second",obj.email,fd.email)
                           if(obj.email==fd.email)
                           {
                               console.log("i am matched")
                               new_data.push({name:fd.name,email:fd.email,sum:fd.sum})
                               f=1;
                           }
                       })
                       if(f==0)
                       {
                           new_data.push({name:obj.name,email:obj.email,sum:0})
                       }
           })   
           console.log("new data is",new_data);
           data=new_data
           res.send(data)
        })
        // console.log("new data is",new_data);
        // res.send(data)
    })
    .catch((err)=>res.send(err))
 })
module.exports=router;