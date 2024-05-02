import React, { useState } from 'react';
import styles from "../Css-Folder/Signup.module.css"
import {  toast } from 'react-toastify';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For error handling

  const handleSignup = async (event) => {
    event.preventDefault();

    // Basic validation (more can be added)
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      setPassword("");
      setConfirmPassword("");
      return;
    }

    else if(username.trim().length==0){
      toast.error("Please Enter UserName")
    }
     else if(email.trim().length==0){
      toast.error("Please Enter Email .");
    }
    else if(password.trim().length()==0 || confirmPassword.trim().length==0){
      toast.error("Please Enter Your Password")
    }
    



   


    // try {
    //   // Implement signup logic with API call (replace with your backend logic)
    //   const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, email, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Signup failed with status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log('Signup successful:', data);
    //   // Handle successful signup (e.g., redirect to login page)
    // } catch (error) {
    //   setErrorMessage(error.message);
    // }
  };

  function handleclick(){
  
    if(password===confirmPassword && username.length>=5 && email.length>=6){
      toast.info("You Have Sucessfull Create Your Account");
      setUsername("")
      setConfirmPassword("")
      setPassword("")
      setEmail("")
      
    }
  


  };


  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} className={styles.signupform}>
        <h2>Enter Your Details</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
         
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button  onClick={handleclick} className={styles.signupbtn} type="submit">Sign Up</button>
      </form> 
    </div>
  );
}

export default SignUp;
