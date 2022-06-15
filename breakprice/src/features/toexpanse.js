import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {ToExpanse,update_amount} from './priceSlice';
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function Toexpanse()
{
    const dispatch=useDispatch();
    const to_expanses=useSelector((state)=>{return state.priceReducer.To});
    React.useEffect(()=>{
    dispatch(ToExpanse(localStorage.getItem('user_id')));
    },[])
    console.log("To expanes",to_expanses[0]);
  
    return(
        <div>
           
           <Homenav></Homenav>
          <div className='d-flex justify-content-around'>
            <div className='ms-3'>
             <Navbar></Navbar>
            </div>
           <div className='m-5 card p-3  mx-auto sh '>
            <table border="1px" className="table table-striped" style={{"width":700}}>
                <thead><th><b>InvestedBy</b></th><th><b>EventName</b></th><th><b>You Owe</b></th><th><b>Details</b></th></thead>
                <tbody>
             {
                to_expanses[0]?.map((a,i)=>{
                    return(
                        
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.desc}</td>
                                <td style={{textDecoration:a.is_settled===true?"line-through":"none"}}>{a.amount}</td>
                                <td><Link to={`/details/${a.id}`}>Details</Link></td>
                                <td><button disabled={a.is_settled===true?true:false}onClick={()=>{dispatch(update_amount({user_id:localStorage.getItem("user_id"),expanse_id:a.id,desc:a.desc}))}}>Settele Amount</button></td>
                            </tr>
                        
                    )
                })
            }
            </tbody>
            </table></div></div>
        </div>
    )

}