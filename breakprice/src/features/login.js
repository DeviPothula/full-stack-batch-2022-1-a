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
        email: Yup.string()
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
      fetch('http://localhost:5000/login/login', {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log("data from login",data);
      if(data.msg==="Regiterfirst")
      {
          alert("Register First");
      }
      else if(data.msg==="Incorrect")
      {
          alert("IncorrectDetails...");
      }
      else if(data.msg==="success")
      {
        localStorage.setItem("authorization","devi"+" "+data.token);
        localStorage.setItem("user_email",values.email);
        localStorage.setItem("user_id",data.user_id);
        localStorage.setItem("name",data.name);
        window.location="http://localhost:3000/Home";
      }
      
    });
}
    return(
        <div>
             <div>
        <h1>Login Page</h1>
        <div className='login-page'>
            <form onSubmit={formik.handleSubmit}>
      <input name="email" className="forminput" type="text" placeholder='EnteryourEmail'  {...formik.getFieldProps('email')} ></input><br></br> {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}<br></br>
      <input name="password" className="forminput" type="text" placeholder='EnteryourPassword' {...formik.getFieldProps('password')} ></input><br></br>{formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}<br></br>
      <button   type="submit" className="formbutton">Submit</button></form>
      <p>New user?</p>
      <Link to="/register">RegisterHere</Link>
      <p>Forgotpassword</p>
      <Link to="/forgot">ForGotPassword</Link>
      </div>
        </div>
        </div>
    )
    }