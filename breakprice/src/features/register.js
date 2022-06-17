import React  from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Register()
{
    
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      
    },validationSchema: Yup.object({
        name:Yup.string().
        min(2,"too short").max(20,'toolong').
        required("*name required"),
        email: Yup.string().email('invalid mail')
          .required('*email Required'),
         password:Yup.string().min(4,"tooshort").max(20,"toolong")
         .required('*password required'),
        //  phone_number:Yup.string().length(10,"Invalid phonenumber")
        //  .required('*phone number required')

      }),
      onSubmit:save,
    });
  function  save(values)
  {
    console.log("save method called,,,",values);

    fetch('https://backend-breakprice-app.herokuapp.com/register/register', {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then((res)=>res.json())
  .then((data)=>{
    if(data.msg==="success")
    {
      window.location="https://frontend-breakprice-app.herokuapp.com/";
    }
    else if(data.errors)
    {
      alert("Enter Valid Details...")
    }
  });
  }
  return(
      <div>
           <p><b>Register Here</b></p><div className='m-5 card p-3  mx-auto sh ' style={{ width: '600px' }}>
           <form onSubmit={formik.handleSubmit}>
      <input placeholder="Enter name"type="text" id="name" name="name"   {...formik.getFieldProps('name')}></input><br></br>
      {formik.touched.name&& formik.errors.name? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}<br></br>
    <input placeholder="Enter Mail"type="text" id="email" name="email"  {...formik.getFieldProps('email')}></input><br></br>
    {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}<br></br>
    <input placeholder="Enter Password" type="password" id="password"  {...formik.getFieldProps('password')}></input><br></br>
    {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}<br></br>
    <input placeholder="Enter Phonenumber"type="tel" id="phone_number"  {...formik.getFieldProps('phone_number')}></input><br></br>
    {/* {formik.touched.phone_number && formik.errors.phone_number ? (
          <div style={{ color: 'red' }}>{formik.errors.phone_number}</div>
        ) : null}<br></br> */}
    <button type="submit" >Add
      </button></form></div>
      </div>
  )
}