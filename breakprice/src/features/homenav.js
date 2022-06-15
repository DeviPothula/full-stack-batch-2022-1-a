import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Homenav()
{
    const navigate=useNavigate()
    return(
        <div>
             <div className="d-flex justify-content-around mb-2 bg-dark p-1">
          <Link to="/Home" style={{
              color: '#ffffff',
              textDecoration: 'inherit',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}>Home</Link>
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to="/" className="nav-link" style={{
              color: '#ffffff',
              textDecoration: 'inherit',
              cursor: 'pointer',
              
            }}>Logout</Link>
       <p style={{"color":'white'}}><b>{localStorage.getItem("name").toUpperCase()}</b></p>
        </div>
        </div>
    )
}