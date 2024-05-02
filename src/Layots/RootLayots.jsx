import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'
import styles from "../Css-Folder/navbar.module.css"
import {  toast } from 'react-toastify';

function RootLayots() {
  const {isloggedin  , setislogedin}=useAuth();
  const logout=()=>{
    setislogedin(false);
    toast.info("You Have Sucessfull Logout your account");
    
  }



  return (
    <div>
       
        <h1 style={{textDecoration:"none" , fontFamily:"arial" }}><Link   className={styles.headinglink} to="/">Task Manager </Link></h1>
        <nav className={styles.navbar}>
            <ul>
                <li>
                  <button> <Link  className={styles.link}to="/">Home</Link></button>
                  
                    </li>
                <li>
               <button> <Link  className={styles.link}  to="show">Show</Link></button>
                </li>
                <li>
              <button>  <Link   className={styles.link} to="edit">Edit </Link></button>
                </li>
                {/* <li><Link to="Signup">Signup</Link></li> */}

                {!isloggedin &&  <li>
              <button>  <Link   className={styles.link} to="login">Login</Link></button>
                </li>}
                {
              isloggedin && <button  className={styles.logoutbutton}onClick={logout}>Log Out</button>
            }
                
            </ul>
            
          

        </nav>
        <Outlet/>
    </div>
  )
}

export default RootLayots