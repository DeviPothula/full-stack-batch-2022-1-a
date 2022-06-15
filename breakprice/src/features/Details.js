import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getDetails} from './priceSlice';
import {useParams} from "react-router-dom";
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function Details()
{
    const expanse_id=useParams().id;
    console.log("Yu clicked the expanse id",expanse_id);
    const  details=useSelector((state)=>{return state.priceReducer.details});
    const dispatch=useDispatch();
    React.useEffect(()=>{
   dispatch(getDetails(expanse_id))
    },[])
    console.log("details",details)
    return(
        <div>
          <Homenav></Homenav>
            <div className='d-flex justify-content-around'>
              <div className='ms-3'>
               <Navbar></Navbar>
              </div>
            <div className='m-5 card p-3  mx-auto sh '><table className="table table-striped"  style={{"width":500}}>
            <thead><tr ><td ><b>CreatedBy</b></td><td ><b>Amount</b></td><td ><b>EventName</b></td><td ><b>GroupName</b>
            </td><td><b>Members</b></td></tr></thead>
            <tbody>
              <tr >
                  <td>{details.user_name}</td>
                  <td>{details.amount}</td>
                 <td >{details.desc}</td>
                 <td>{details.group_name}</td>
                  <td >{details.people?.map((a,i)=>{return(<div><p>Name:{a}</p><p>Amount:{(details.amount)/((details.people?.length)+1)}</p></div>)})}</td> 
                  </tr>
            </tbody>
            </table></div></div>
        </div>
    )

}