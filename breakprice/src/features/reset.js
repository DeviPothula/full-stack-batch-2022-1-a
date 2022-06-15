import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  useDispatch } from 'react-redux';
import {update_pas} from './priceSlice';

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
                 
            }
            else
            {
                alert("new password and confirm password does not match");
            }
        }
    return(
        <div>
            <p><b>Set your password here </b></p>
            <div className='m-5 card p-3  mx-auto sh ' style={{ width: '600px' }}>
            <form onSubmit={formik.handleSubmit}>
            <input type="text" name="new_password" placeholder='Enter New_password' {...formik.getFieldProps('new_password')}>
            </input><br></br>
            {formik.touched.new_password && formik.errors.new_password ? (
          <div style={{ color: 'red' }}>{formik.errors.new_password}</div>
        ) : null}<br></br>
            <input type="password" name="confirm_password" placeholder='Enter confirm_password' {...formik.getFieldProps('confirm_password')}></input><br></br>
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div style={{ color: 'red' }}>{formik.errors.confirm_password}</div>
        ) : null}<br></br>
            <button type="submit">Submit</button>
            </form></div>
        </div>
    )
}