import React, {useState }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getFriends,Add_Expense} from './priceSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function FrdExpense()
{
    var [select_frds,set_selected_frds]=useState([])
    const dispatch=useDispatch();
    const frds=useSelector((state)=>{return state.priceReducer.friends});
    React.useEffect(()=>{
    dispatch(getFriends(localStorage.getItem("user_id")));
    },[])
    console.log("My friends List",frds[0]);
    const formik = useFormik({
        initialValues: {
          event_name: '',
          ammount:'',
          
        },validationSchema: Yup.object({
            event_name: Yup.string()
              .required('*event name required'),
             ammount:Yup.string()
             .required('*ammount required')
          }),
          onSubmit:save,
        });
        function save(values)
        {
            console.log("values are event_name and amount",values);
            values.user_id=localStorage.getItem('user_id');
            values={...values,select_frds:select_frds}
            dispatch(Add_Expense(values))
            
        }
        function check(e)
        {
            if(e.target.checked)
            {   
               select_frds.push(e.target.value)
               console.log("frd selected",select_frds)
               set_selected_frds([...select_frds])
            }
            else
            {
             var index=select_frds.indexOf(e.target.value)
             select_frds.splice(index,1)  
             console.log("frds",select_frds)   
             set_selected_frds([...select_frds])
            }
        }
    return(
        <div>
           
          <Homenav></Homenav>
            <p><b>Enter Detaisl To Add Expanse</b></p>
            <div className='d-flex justify-content-around'>
              <div className='ms-3'>
               <Navbar></Navbar>
              </div>
            <div className='m-5 card p-3  mx-auto sh ' style={{ width: '600px' }}>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Enter EventName" name="event_name" {...formik.getFieldProps('event_name')}></input><br></br>{formik.touched.event_name && formik.errors.event_name ? (
          <div style={{ color: 'red' }}>{formik.errors.event_name}</div>
        ) : null}<br></br>
            <input type="text" placeholder="Enter Amount" name="ammount" {...formik.getFieldProps('ammount')}></input><br></br>{formik.touched.ammount && formik.errors.ammount? (
          <div style={{ color: 'red' }}>{formik.errors.ammount}</div>
        ) : null}<br></br>
            <p><b>Select Your Friends</b></p>
            <div className="d-flex">
            {
                frds[0]?.map((a,i)=>{
                    return(
                        <div className="m-1">
                <input type="checkbox" value={a.email} id={a.name} onChange={check}></input>
                <label>{a.name}</label>
                        </div>
                    )
                })
            }</div>
            <br></br>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form></div>
        </div></div>
    )

}