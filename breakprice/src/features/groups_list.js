import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {get_group_details,get_group_members} from './priceSlice';
import Navbar from './navbar';
import Homenav from './homenav';
export default function Grouplist()
{

    const dispatch=useDispatch();
    const group_names = useSelector((state) => { return state.priceReducer.group_names })
    const group_members = useSelector((state) => { return state.priceReducer.group_members });
    React.useEffect(() => {
        dispatch(get_group_details(localStorage.getItem('user_id')))
        dispatch(get_group_members(localStorage.getItem('user_id')))
      },[])
      console.log("group names",group_names && group_names[0])
      console.log("group members",group_members && group_members[0]);
    return(
        <div>
            
            <Homenav></Homenav>
        <div className='d-flex justify-content-around'>
          <div className='ms-3'>
            <Navbar></Navbar>
          </div>
            <div className='m-5 card p-3  mx-auto sh ' style={{ width: '500px' }}>
            <p><b>List of Groups I Involved..</b></p>
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
                        
                   <p><b>Name: </b>{m.name} <b>Email:</b>{m.email} </p>
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
           
          </div></div></div>
        </div>
    )
}