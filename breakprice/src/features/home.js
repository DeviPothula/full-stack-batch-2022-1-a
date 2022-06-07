import React from "react";
import { Link } from "react-router-dom";
export default function Home()
{
    return(
        <div>
            <h1>Home page....</h1>
            <Link to="/groups">Goups</Link>&nbsp;&nbsp;
            <Link to="/friends">Friends</Link>&nbsp;&nbsp;
            <Link to="activity">Activity</Link>&nbsp;&nbsp;
            <Link to="account">Account</Link>&nbsp;&nbsp;
            <Link to="/">Logout</Link>
        </div>
    )
}