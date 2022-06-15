import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getFriends,ToExpanse} from './priceSlice';
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function Frdslist()
{
    const dispatch=useDispatch();
    const frds=useSelector((state)=>{return state.priceReducer.friends});
    const you_owes=useSelector((state)=>{return state.priceReducer.To});
    React.useEffect(()=>{
    dispatch(getFriends(localStorage.getItem("user_id")));
    dispatch(ToExpanse(localStorage.getItem('user_id')));
    },[])
    console.log("My friends List",frds[0] && frds[0]);
    console.log("You owes",you_owes[0] && you_owes[0]);
  
    return(
        <div>
           
           <Homenav></Homenav>
            
            <p><b>{localStorage.getItem('name')} Your Friends List</b></p>
             <div className='d-flex justify-content-around'>
               <div className='ms-3'>
             <Navbar></Navbar>
               </div>
             
           <div className='m-5 card p-3  mx-auto sh '><table className="table table-striped" style={{"width":500}}><thead><tr><td>S.No</td><td>Name</td><td>Email</td><td>Owes You</td></tr></thead>
           <tbody>
            {
                frds[0] && frds[0].map((a,i)=>{
                    return(
                        <tr><td>{i+1}</td><td>{a.name}</td><td>{a.email}</td><td>{a.sum}</td></tr>
                       
                )})
            }
            </tbody>
          </table></div></div>
        </div>
    )

}