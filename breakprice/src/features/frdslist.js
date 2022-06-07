import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd,getFriends,Add_Expense} from './priceSlice';
import { Link } from "react-router-dom";
export default function Frdslist()
{
    const dispatch=useDispatch();
    const frds=useSelector((state)=>{return state.priceReducer.friends});
    React.useEffect(()=>{
    dispatch(getFriends(localStorage.getItem("user_id")));
    },[])
    console.log("My friends List",frds[0]);
  
    return(
        <div>
           
             <Link to="/Home">Home</Link>&nbsp;&nbsp;
            <Link to="/friends">Friends</Link>&nbsp;&nbsp;
            <Link to="/">Logout</Link><br></br>
            
            <h3>{localStorage.getItem('name')}  Your Friends List</h3>
            {
                frds[0]?.map((a,i)=>{
                    return(
                        <div>
                        <li>{a.name}</li>
                        </div>
                    )
                })
            }
          
        </div>
    )

}