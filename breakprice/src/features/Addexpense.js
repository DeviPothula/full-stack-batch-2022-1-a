import React  from "react";
import { Link} from "react-router-dom";
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function AddExpense()
{  
    return(
      <div>
        <Homenav></Homenav>
            <div className='d-flex justify-content-around'>
              <div className='ms-3'>
                 <Navbar></Navbar>
              </div>
        <div className='m-5 card p-3  mx-auto sh ' style={{ width: '600px' }}>
        <center><button className="btn btn-dark" style={{"width":200}}><Link to="/frdexpanse" style={{"textDecoration":'none',"color":"white"}}>AddExpenseToFriend</Link></button><br></br><br></br>
        <button className="btn btn-dark" style={{"width":200}}><Link to="/grpdetails" style={{"textDecoration":'none',"color":"white"}}>AddExpenseToGroup</Link></button></center>
        </div></div>
      </div>
    )

}