import React from "react";
import { getActivities } from "./priceSlice";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "./navbar";
import Homenav from "./homenav";
export  default function Activity()
{
    const acts=useSelector((state)=>{return state.priceReducer.activities});
    const dispatch=useDispatch()
    React.useEffect(()=>{
     dispatch(getActivities(localStorage.getItem("user_id")));
    },[])
    console.log("activities are",acts && acts[0])
    return(
        <div>
            <Homenav></Homenav>
            <div className='d-flex justify-content-around'>
                <div className='ms-3'>
            <Navbar></Navbar>
                </div>
                <div className='m-5 card p-3  mx-auto sh '>
            <table className="table table-striped" >
            <thead><tr><td ><b>S.No</b></td><td ><b>Activity</b></td><td ><b>Time</b></td>
            </tr></thead>
            <tbody>
                {
                    acts[0]?.map((a,i)=>{
                        return(
                            <tr >
                            <td >{i+1}</td>
                            <td>{a.activity_name}</td>
                           <td >{a.created_Time}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table></div></div>
        </div>
    )
}