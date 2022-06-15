import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd} from './priceSlice';
import Searchable from 'react-searchable-dropdown';
import Navbar from './navbar';
import Homenav from './homenav';
export default function Friend()
{
   
    const users=useSelector((state)=>{return state.priceReducer.users});
    var [email,setemial]=React.useState('');
    const dispatch = useDispatch();
    var options=[];
    React.useEffect(()=>{
        dispatch(getUsers())
    },[])
    console.log("daata in fried.js",users && users[0]);
    console.log("options",options && options);
    function save()
    {
        console.log("frd_email,user_id",email,localStorage.getItem("user_id"));
        dispatch(add_frd({user_id:localStorage.getItem("user_id"),email:email}))
        
    }
    return(
        <div>
            <Homenav></Homenav>
          
            {
                users[0]?.map((u,i)=>{
                    //    console.log(u.email)
                        options?.push({value:u.email,label:u.email})
                    
                })
            }
            <div className='d-flex justify-content-around'>
              <div className='ms-3'>
          <Navbar></Navbar>
            
            </div>
            <div className='m-5 card p-3  mx-auto sh ' style={{ width: '300px' }}>
            <p><b>Add Your Friend</b></p>
            <Searchable
              hideSelected
            options={options}
            onSelect={value => {
                setemial(value);
               
            }}
            /><br></br>
            <button onClick={save} className="btn btn-dark">Addfriend</button>
            </div>
            </div>
        </div>
        
    )
}