import React from "react";
import Navbar from "./navbar";
import Homenav from "./homenav";
export default function Home()
{
    return(
        <div>
        <Homenav></Homenav>
        <div className="d-flex justify-content-around">
        <div className='ms-3'>
               <Navbar></Navbar>
            </div>
        <div className='  mx-auto sh ' style={{ width: '600px' }}>
                 
                </div>
        </div></div>
    )
}