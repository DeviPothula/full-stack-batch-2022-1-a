import React, { useEffect }  from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd} from './priceSlice';
import { Link } from "react-router-dom";
export default function Forgot()
{ const users=useSelector((state)=>{return state.priceReducer.users});
const dispatch = useDispatch();
   React.useEffect(()=>{
    dispatch(getUsers(''))
   },[])
    const formik = useFormik({
        initialValues: {
          email: '',
        },validationSchema: Yup.object({
            email: Yup.string()
              .required('*email Required'),
            
          }),
          onSubmit:check,
        });
        console.log("users data in forgot",users[0])
        function check(values)
        {
            var f=0;
            console.log("values",values);
            users[0]?.map((a,i)=>{
                console.log("name",a.name)
                if(a.email===(values.email))
                {
                     f=1;
                }
            })
            if(f==1)
            {
                window.location="http://localhost:3000/reset";
            }
            else
            {
                alert("User not exist");
            }
        }
  return(
      <div>
           <Link to="/groups">Goups</Link>&nbsp;&nbsp;
            <Link to="/friends">Friends</Link>&nbsp;&nbsp;
            <Link to="activity">Activity</Link>&nbsp;&nbsp;
            <Link to="account">Account</Link>&nbsp;&nbsp;
            <Link to="/">Logout</Link>
          <h1>Enter Your EMail...</h1>
          <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder="enter email" {...formik.getFieldProps('email')} name="email"></input>
          <br></br>
          {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}<br></br>
          <button type="submit">submit</button>
          </form>
      </div>
  )
}