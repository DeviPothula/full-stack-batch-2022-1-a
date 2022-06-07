import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd,getFriends,Add_Expense,MyExpanse,ToExpanse} from './priceSlice';
import { Link } from "react-router-dom";
export default function Expenses()
{
    const dispatch=useDispatch();
    const expanses=useSelector((state)=>{return state.priceReducer.myne});
    const to_expanses=useSelector((state)=>{return state.priceReducer.To});
    React.useEffect(()=>{
    dispatch(MyExpanse(localStorage.getItem("user_id")));
    dispatch(ToExpanse(localStorage.getItem('user_id')));
    },[])
    console.log("My expanes",expanses[0]);
    console.log("To expanes",to_expanses[0]);
  
    return(
        <div>
           
             <Link to="/Home">Home</Link>&nbsp;&nbsp;
            <Link to="/friends">Friends</Link>&nbsp;&nbsp;
            <Link to="/">Logout</Link><br></br>
            
            <h3>List Of Expanses  {localStorage.getItem('name')} Created</h3>
            <center><table border="2px">
                <thead><tr><th>S.No</th><th>EventName</th><th>AmountPaid</th></tr></thead>
                <tbody>
             {
                expanses[0]?.map((a,i)=>{
                    return(
                        
                            <tr>
                               <td>{i+1}</td>
                                <td>{a.desc}</td>
                                <td>{a.amount}</td>
                            </tr>
                        
                    )
                })
            }
          </tbody>
          </table></center>
          <h3>List of members {localStorage.getItem('name')} has to pay</h3>
          <center><table border="2px">
                <thead><th>Name</th><th>EventName</th><th>AmountPaid</th></thead>
                <tbody>
             {
                to_expanses[0]?.map((a,i)=>{
                    return(
                        
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.desc}</td>
                                <td>{a.amount}</td>
                            </tr>
                        
                    )
                })
            }
            </tbody>
            </table></center>
        </div>
    )

}