import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from './priceSlice';
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
            email: Yup.string().email()
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
            if(f===1)
            {
                localStorage.setItem("user_email",values.email)
                window.location="https://backend-breakprice-app.herokuapp.com/reset";
            }
            else
            {
                alert("User not exist");
            }
        }
  return(
      <div>
          <div className='m-5 card p-3  mx-auto sh ' style={{ width: '600px' }}>
          <p><b>Enter Your Email...</b></p>
          <form onSubmit={formik.handleSubmit}>
          <input type="text" placeholder="Enter email" {...formik.getFieldProps('email')} name="email"></input>
          <br></br>
          {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}<br></br>
          <button type="submit">submit</button>
          </form></div>
      </div>
  )
}