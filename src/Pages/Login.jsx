

import { useAuth } from "../Context/AuthProvider";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Signup from "./SignUp"
import styles from "../Css-Folder/Login.module.css"
import {  toast } from 'react-toastify';

function Login() {
  const {isloggedin , setislogedin}=useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate();

  const login=()=>{
   if(username.length>=3 && password.length>=3 ){

     setislogedin(true)
     toast.info("Your Account is Sucessfull Login")
    navigate("/" , {replace:true})
  
  
  }
  if (username.trim() === '' || password.trim() === '') {
      
    toast.error("Please Enter Your UserName & Password")
  }





  
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (replace with your own validation logic)
    
    setUsername("");
    setPassword("");


    // Call the provided onSubmit function with credentials
    // onSubmit({ username, password });
  };
  return (
    <>
   
    <form  onSubmit={handleSubmit} className={styles.mainform}>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h2>WELCOME BACK</h2>
      <h3>Enter Your Details</h3>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter UserName"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
     
      <button  className ={styles.loginbtn}onClick={login} type="submit">Login</button>
      <p> Don't have an account ? <Link to="/Signup">Sign Up </Link></p>
    </form>
    
 


    </>
  )
}

export default Login