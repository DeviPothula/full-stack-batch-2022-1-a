import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { get_group_details, get_group_members ,Add_Expense} from './priceSlice';
import { useFormik } from 'formik';
import Navbar from './navbar';
import Homenav from './homenav';
import * as Yup from 'yup';
export default function Groupdetails() {
  const [disable, setDisable] = React.useState(false);
  const[grpname,set_grpname]=React.useState('');
  const[group_id,set_group_id]=React.useState();
  const dispatch = useDispatch();
  var [select_frds, set_selected_frds] = React.useState([])
  const group_names = useSelector((state) => { return state.priceReducer.group_names });
  const group_members = useSelector((state) => { return state.priceReducer.group_members });
  React.useEffect(() => {
    dispatch(get_group_details(localStorage.getItem('user_id')))
    dispatch(get_group_members(localStorage.getItem('user_id')))
  },[])
  
  console.log("group names", group_names[0] && group_names[0])
  console.log("group members", group_members[0] && group_members[0])
  const formik = useFormik({
    initialValues: {
      event_name: '',
      ammount: '',
    }, validationSchema: Yup.object({
      event_name: Yup.string()
        .required('*event name required'),
      ammount: Yup.string()
        .required('*ammount required')
    }),
    onSubmit: save,
  });
  function save(values) {
    console.log("values are event_name and amount", values);
    values.user_id = localStorage.getItem('user_id');
    values.group_id=group_id
    values = { ...values, select_frds: select_frds }
    console.log("final values",values);
    dispatch(Add_Expense(values))
  }
  function check(e,grp_name,id) {
    console.log("group_name in check",grp_name)
    if (e.target.checked) {
      select_frds.push(e.target.value)
      console.log("frd selected", select_frds)
      set_selected_frds([...select_frds])
      if(select_frds.length>=1)
      {
        set_grpname(grp_name)
        set_group_id(id)
        setDisable(true)
      }
      else{
        setDisable(false)
        set_grpname('')
        }
        }
    else {
      var index = select_frds.indexOf(e.target.value)
      select_frds.splice(index, 1)
      console.log("frds", select_frds)
      set_selected_frds([...select_frds])
      if(select_frds.length>=1)
      {
        set_grpname(grp_name)
        set_group_id(id)
        setDisable(true)
      }
      else{
        setDisable(false)
        set_grpname('')
        }
    }
   
  }
  return (
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
          <input type="text" placeholder="Enter Amount" name="ammount" {...formik.getFieldProps('ammount')}></input><br></br>{formik.touched.ammount && formik.errors.ammount ? (
            <div style={{ color: 'red' }}>{formik.errors.ammount}</div>
          ) : null}<br></br>
          <p><b>Click On Group Name To Add  Expanse</b></p>
          {disable===true?<div style={{ color: 'red' }}><p>You can select friends from one group only</p></div>:<></>}
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {
              group_names[0]?.map((a,i)=>{
                return(
                <div class="accordion-item">
                  <button   class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+a.group_name} aria-expanded="false" aria-controls={a.group_name}>
                 {a.group_name}</button>
                 <div id={a.group_name} class="accordion-collapse collapse" >
                 
                <div class="accordion-body">
                  {
                  group_members[0]?.map((m,i)=>{
                    if(m.group_name===a.group_name && m.name!==localStorage.getItem("name"))
                    {
                    return(
                      <div className='m-1'>
                        <input type="checkbox"   disabled={a.group_name!==grpname?disable:false} value={m.email} id={m.name} onChange={(e)=>{check(e,a.group_name,a.id)}}></input>
                <label>{m.name}</label>
                      </div>
                    )}
                  })
                  }
                
                  </div>
              </div>
                </div>
                )
              })
            }
           
          </div>
          <br></br>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form></div></div>
    </div>
  )
}