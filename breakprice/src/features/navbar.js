import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar()
{
    return(
        <div>
          <div className="d-flex">
      <div className="card ms-3 mt-3" style={{width:"200px",height:"500px"}}>
    
     <nav class="nav flex-column">
        <Link to="/groups" className="nav-link" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;&nbsp;<i class="bi bi-people-fill"></i>Group</Link>
        <Link to='/grouplist' className="nav-link active"  style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;&nbsp;<i class="bi bi-people-fill"></i>GroupList</Link>
        <Link to='/friends' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;<i class="bi bi-person-fill"></i>Friends</Link>
        <Link to='/ListFriends' className="nav-link active"  style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}> &nbsp;<i class="bi bi-people-fill"></i>FriendsList</Link>
        <Link to='/myexpanse' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;<i class="bi bi-wallet2" ></i>MyExpanses</Link>
        <Link to='/addexpense' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;<i class="bi bi-plus-circle-fill"></i>AddExpense</Link>
        <Link to='/toexpanse' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;Your Owes</Link>
        <Link to='/activity' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;<i class="bi bi-activity"></i>Activity</Link>
        <Link to='/account' className="nav-link active" style={{textDecoration:"none",color: 'black',fontWeight: 'bold',cursor: 'pointer'}}>&nbsp;<i class="bi bi-person-circle"></i>Account</Link>
   </nav>
   </div>     </div>
           
        
        </div>
    )
}