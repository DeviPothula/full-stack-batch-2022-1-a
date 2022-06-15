import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar()
{
    return(
        <div>
            <div style={{position:'fixed'}}>
           <Link to="/groups" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}><i class="bi bi-people-fill"></i>Goup</Link></div><br></br>
            <div style={{position:'fixed'}}>
                <Link to="/grouplist" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}><i class="bi bi-people-fill"></i>GroupsList</Link>
                </div><br></br>
            <div style={{position:'fixed'}}>   <Link to="/friends" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
              
            }}><i class="bi bi-person-fill"></i>Friend</Link></div><br></br>
             <div style={{position:'fixed'}}>
            <Link to="/ListFriends" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}><i class="bi bi-people-fill"></i>FriendsList</Link></div><br></br>
            <div style={{position:'fixed'}}> <Link to="/addexpense" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}><i class="bi bi-plus-circle-fill"></i>AddExpense</Link></div><br></br>
            <div style={{position:'fixed'}}> <Link to="/myexpanse" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}><i class="bi bi-wallet2" ></i>MyExpanses</Link></div><br></br>
            <div style={{position:'fixed'}}> <Link to="/toexpanse" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}>Your Owe's</Link></div><br></br>
            <di style={{position:'fixed'}}> 
           <Link to="/activity" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight:'bold'
            }}><i class="bi bi-activity"></i>Activity</Link></di><br></br>
            <div style={{position:'fixed'}}> <Link to="/account" style={{
              color: 'black',
              textDecoration: 'inherit',
              cursor: 'pointer',
               fontWeight:'bold'
            }}><i class="bi bi-person-circle"></i>Account</Link></div><br></br>
        </div>
    )
}