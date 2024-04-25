import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'

function RootLayots() {
  const {isloggedin  , setislogedin}=useAuth();
  const logout=()=>{
    setislogedin(false);
  }
  return (
    <div>
        <h1>Task Manager .</h1>
        <nav 
    >
            <ul style={{
            display:"flex",
            justifyContent:"space-around",
            gap:"2rem",
            listStyle:"none",
            textDecoration:"none",
            border:"2px solid black",
            height:"5rem",

            alignItems:"center",
            flexWrap:"wrap"
            }}>
                <li>
                   <Link to="/">Home</Link>
                    </li>
                <li>
                <Link to="show">Show</Link>
                </li>
                <li>
                <Link to="edit">Edit </Link>
                </li>

                {!isloggedin &&  <li>
                <Link to="login">Login</Link>
                </li>}
                
            </ul>
            {
              isloggedin && <button onClick={logout}>Log Out</button>
            }
            <hr/>

        </nav>
        <Outlet/>
    </div>
  )
}

export default RootLayots