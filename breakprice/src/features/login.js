import React  from "react";
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Login(){
localStorage.removeItem("authorization");
const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      
    },validationSchema: Yup.object({
        email: Yup.string().email()
          .required('*email Required'),
         password:Yup.string()
         .required('*password required')
      }),
      onSubmit:check,
    });
function check(values)
{
    console.log("values,,",values);
      console.log("I am login request,,,,");
      fetch('https://backend-breakprice-app.herokuapp.com/login/login', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log("data from login",data);
      if(data.errors)
      {
          alert("Enter Details Properly")
      }
     else if(data.msg==="Regiterfirst")
      {
          alert("Register First");
      }
      else if(data.msg==="Incorrect")
      {
          alert("IncorrectDetails...");
      }
      else if(data.msg==="success")
      {
        console.log("data from login",data)
        localStorage.setItem("authorization","devi"+ " " +data.token);
        localStorage.setItem("user_email",values.email);
        localStorage.setItem("user_id",data.user_id);
        localStorage.setItem("name",data.name);
        localStorage.setItem("phone",data.phone)
        window.location="https://frontend-breakprice-app.herokuapp.com/verify_otp";
      }
      
    });
}
    return(
        <div>
             <div>
        <h5>Login Page</h5>
        <div className='m-5 card p-3  mx-auto sh ' style={{ width: '500px' }}>
            <form onSubmit={formik.handleSubmit}>
      <input name="email" className="forminput" type="text" placeholder='EnteryourEmail'  {...formik.getFieldProps('email')} ></input><br></br> {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}<br></br>
      <input name="password" className="forminput" type="password" placeholder='EnteryourPassword' {...formik.getFieldProps('password')} ></input><br></br>{formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}<br></br>
      <button   type="submit" className="btn btn-dark">Submit</button></form>
      <div className="d-flex"><p><b>New user?</b></p>&nbsp;<Link to="/register">RegisterHere</Link></div>
     
   <button className="btn btn-dark" ><Link to="/forgot" style={{textDecoration:'none',"color":"white"}}>ForGotPassword</Link></button></div>
        </div>
        </div>
    )
    }