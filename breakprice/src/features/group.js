import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getFriends,Add_Group} from './priceSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from './navbar';
import Homenav from './homenav';
export default function Group()
{
    var [select_frds,set_selected_frds]=React.useState([])
    const dispatch=useDispatch();
    const frds=useSelector((state)=>{return state.priceReducer.friends});
    React.useEffect(()=>{
    dispatch(getFriends(localStorage.getItem("user_id")));
    },[])
    console.log("My friends List In Group.js",frds[0] && frds[0]);
    const formik = useFormik({
    initialValues: {
        group_name:'',
      },validationSchema: Yup.object({
          group_name: Yup.string()
            .required('* group name required'),
        }),
        onSubmit:save,
      });
      function save(values)
        {
            console.log("save  method called..");
            console.log("values group_name",values);
            values.user_id=localStorage.getItem('user_id');
            values={...values,select_frds:select_frds}
            console.log("final values",values);
            dispatch(Add_Group(values))
            
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
        
        <div className='d-flex justify-content-around'>
            <div className='ms-3'>
               <Navbar></Navbar>
            </div>
            
        <div className='m-5 card p-3  mx-auto sh ' style={{ width: '500px' }}>
        <p><b>Create A Group</b></p>
            <form onSubmit={formik.handleSubmit}>
       <input name="group_name"  type="text" placeholder='Enter your GroupName'  {...formik.getFieldProps('group_name')} ></input><br></br> {formik.touched.group_name && formik.errors.group_name ? (
          <div style={{ color: 'red' }}>{formik.errors.group_name}</div>
        ) : null}<br></br>
        <p>Add Your Friends</p>
        <div className="d-flex">
            {
                frds[0]?.map((a,i)=>{
                    return(
                        <div className="m-1">
                <input type="checkbox" value={a.email} id={a.email} onChange={check}></input>
                <label>{a.name}</label>
                        </div>
                    )
                })
            }</div>
      <button   type="submit" className="btn btn-dark">Submit</button></form></div>
        </div>
        </div>
        
    )
}