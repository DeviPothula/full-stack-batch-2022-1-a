import React from "react";
export default function OTP()
{
    var [otp,set_otp]=React.useState('')
    function verify()
    {
        console.log("I am otp verify function,,,,",otp);
      fetch('http://localhost:5000/verify_otp/verify_otp', {
        method: "POST",
        body: JSON.stringify({otp:otp,phone:localStorage.getItem("phone")}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>
    {
        console.log("data from otp route",data)
        if(data.msg==="success")
        {
            window.location="http://localhost:3000/Home";
        }
        else if(data.errors)
        {
            alert("otp length minimum 4")
            // window.location="http://localhost:3000/Home";
        }
        else
        {
            alert("enter valid otp")
            
        }
    })
    }
    return(
        <div>
            
            <div className="m-5 card p-3  mx-auto sh " style={{"width":300}}>
            <p><b>Validating OTP</b></p>
            <input type="number" placeholder="Enter OTP" required onChange={(e)=>{set_otp(e.target.value)}}></input><br></br>
            <button className="btn -btn" onClick={verify} style={{"backgroundColor":"black","color":"white"}}>Submit</button>
            </div>
        </div>
    )
}