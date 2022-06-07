import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd,update_pas} from './priceSlice';
import { Link } from 'react-router-dom';
export default function Reset()
{
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues: {
          new_password: '',
          confirm_password:'',
          
        },validationSchema: Yup.object({
            new_password: Yup.string()
              .required('*email Required'),
             confirm_password:Yup.string()
             .required('*password required')
          }),
          onSubmit:check,
        });
        function check(values)
        {
            console.log("values in reset password",values);
            if(values.new_password===values.confirm_password)
            {
                  dispatch(update_pas({email:localStorage.getItem("user_email"),password:values.new_password}))
                  alert("password rested successfully...");
                  window.location="http://localhost:3000/";
            }
            else
            {
                alert("new password and correct password does not match");
            }
        }
    return(
        <div>
            <h1>Set Your password here </h1>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" name="new_password" placeholder='enternewpassword' {...formik.getFieldProps('new_password')}>
            </input>
            {formik.touched.new_password && formik.errors.new_password ? (
          <div style={{ color: 'red' }}>{formik.errors.new_password}</div>
        ) : null}<br></br>
            <input type="password" name="confirm_password" placeholder='enterconfirmpassword' {...formik.getFieldProps('confirm_password')}></input>
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div style={{ color: 'red' }}>{formik.errors.confirm_password}</div>
        ) : null}<br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}