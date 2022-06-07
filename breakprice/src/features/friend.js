import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {getUsers,add_frd} from './priceSlice';
export default function Friend()
{
   
    const users=useSelector((state)=>{return state.priceReducer.users});
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getUsers())
    },[])
    // console.log("daata in fried.js",users[0]);
    return(
        <div>
            <Link to="/Home">Home</Link>&nbsp;&nbsp;
            <Link to="/ListFriends">FriendsList</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/addexpense">AddExpense</Link>&nbsp;&nbsp;
            <Link to="myexpanse">MyExpanses</Link>
            <Link to="/">Logout</Link><br></br><br></br>
            <h3>Add Your Friend Here</h3>
              SearchYourFriend: <input type="text" placeholder='SearchHere' onChange={(e)=>{dispatch(getUsers(e.target.value))}}></input>
              {
                  users[0]?.map((a,i)=>{
                      return(
                          <div>Name : {a.name}<button onClick={()=>{dispatch(add_frd({user_id:localStorage.getItem("user_id"),frd_id:a.id}))}}>AddFrd</button></div>
                      )
                  })
              }
            
        </div>
        
    )
}