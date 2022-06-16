import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {MyExpanse,ToExpanse} from './priceSlice';
import { Link } from "react-router-dom";
import Homenav from "./homenav";
import Navbar from "./navbar";
export default function Expenses()
{
    const dispatch=useDispatch();
    const expanses=useSelector((state)=>{return state.priceReducer.myne});
    React.useEffect(()=>{
    dispatch(MyExpanse(localStorage.getItem("user_id")));
    dispatch(ToExpanse(localStorage.getItem('user_id')));
    },[])
    console.log("My expanes",expanses[0]);
    return(
        <div>
          <Homenav></Homenav>
            <div className='d-flex justify-content-around'>
              <div className='ms-3'>
              <Navbar></Navbar>
              </div>
            <div className='m-5 card p-3  mx-auto sh '><table className="table table-striped" style={{"width":500}}>
                <thead><tr><th><b>S.No</b></th><th><b>EventName</b></th><th><b>AmountPaid</b></th><th><b>Details</b></th></tr></thead>
                <tbody>
             {
                expanses[0]?.map((a,i)=>{
                    return(
                        
                            <tr>
                               <td>{i+1}</td>
                                <td>{a.desc}</td>
                                <td>{a.amount}</td>
                                <td><Link to={`/details/${a.id}`}>Details</Link></td>
                            </tr>
                        
                    )
                })
            }
          </tbody>
          </table></div></div>
        </div>
    )

}