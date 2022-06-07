import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd,getFriends,Add_Expense} from './priceSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
export default function AddExpense()
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
           
             <Link to="/groups">Goups</Link>&nbsp;&nbsp;
            <Link to="/friends">Friends</Link>&nbsp;&nbsp;
            <Link to="activity">Activity</Link>&nbsp;&nbsp;
            <Link to="account">Account</Link>&nbsp;&nbsp;
            <Link to="/">Logout</Link><br></br>
            <h3>Enter Detaisl To Add Expanse</h3>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="EnterEventName" name="event_name" {...formik.getFieldProps('event_name')}></input>{formik.touched.event_name && formik.errors.event_name ? (
          <div style={{ color: 'red' }}>{formik.errors.event_name}</div>
        ) : null}<br></br>
            <input type="text" placeholder="EnterAmount" name="ammount" {...formik.getFieldProps('ammount')}></input>{formik.touched.ammount && formik.errors.ammount? (
          <div style={{ color: 'red' }}>{formik.errors.ammount}</div>
        ) : null}<br></br>
            <h3>Select Your Frds To Add Expanse</h3>
            {
                frds[0]?.map((a,i)=>{
                    return(
                        <div>
                {a.name}<input type="checkbox" value={a.frd_id} id={a.name} onChange={check}></input>
                        </div>
                    )
                })
            }
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
    )

}