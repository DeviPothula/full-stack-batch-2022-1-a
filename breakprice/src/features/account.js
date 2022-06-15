import React from "react";
import Navbar from "./navbar";
import { useSelector, useDispatch } from 'react-redux';
import { getDebits,getCredits } from "./priceSlice";
import Homenav from "./homenav";
export default function Account()
{
    const  credits=useSelector((state)=>{return state.priceReducer.userOverAllCredits});
    const debits=useSelector((state)=>{return state.priceReducer.userOverAllDebits});
    const dispatch=useDispatch();
    React.useEffect(()=>{
         dispatch(getDebits(localStorage.getItem("user_id")))
         dispatch(getCredits(localStorage.getItem("user_id")))
    },[])
    console.log("Over all amount you have to recived",credits && credits[0])
    console.log("Over all Amount you have to pay",debits && debits[0])
    return(
        <div>
            <Homenav></Homenav>
            <div className='d-flex justify-content-around'>
                <div className='ms-3'>
                <Navbar></Navbar>
                </div>
                <div className='m-5 card p-3  mx-auto sh '>
                <p><b>Account Details</b></p>
                  {
                    debits[0]?.map((d,i)=>{
                       return(
                        <div><p>Over All Amount You have To Pay <b>{d.sum}</b></p></div>
                       )
                    })
                  }
                  {
                    credits[0]?.map((c,i)=>{
                       return(
                        <div><p>Over All Amount You have To Recive <b>{c.sum}</b></p></div>
                       )
                    })
                  }
                </div>
            </div>
          
        </div>
    )
}