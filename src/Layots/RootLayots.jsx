import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'
import styles from "../Css-Folder/navbar.module.css"
import {  toast } from 'react-toastify';
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { MdEditDocument } from "react-icons/md";
import { MdSlideshow } from "react-icons/md";

function RootLayots() {
  const {isloggedin  , setislogedin}=useAuth();
  const logout=()=>{
    setislogedin(false);
    toast.info("You Have Sucessfull Logout your account");
    
  }


  const handleshowtodo=(e)=>{
    if(!isloggedin){
      toast.error("Please Login your Account ... ")
    }
  }


  const handleedittodo=()=>{
    if(!isloggedin){
      toast.error("Please Login your Account ... ")
    }

  }



  return (
    <div className={styles.mainnavbar}>
       
        <h1 style={{textDecoration:"none" , fontFamily:"arial" }}><Link   className={styles.headinglink} to="/">Task Manager </Link></h1>
        <nav className={styles.navbar}>
            <ul>
                <li>
                  <button> <Link  className={styles.link}to="/">Home <IoHome /></Link></button>
                  
                  </li>
                <li>
               <button> <Link  onClick={handleshowtodo} className={styles.link}  to="show">Show <MdSlideshow /></Link></button>
                </li>
                <li>
              <button>  <Link    onClick ={handleedittodo} className={styles.link} to="edit">Edit  <MdEditDocument /></Link></button>
                </li>
                {/* <li><Link to="Signup">Signup</Link></li> */}

                {!isloggedin &&  <li>
              <button>  <Link   className={styles.link} to="login">Login <IoIosLogIn /> </Link></button>
                </li>}
                {
              isloggedin && <button  className={styles.logoutbutton}onClick={logout}>Log Out <GrLogout /></button>
            }
                
            </ul>
            
          

        </nav>
        <Outlet/>
    </div>
  )
}

export default RootLayots