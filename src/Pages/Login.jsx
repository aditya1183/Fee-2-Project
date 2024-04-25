
import styles from "./LoginForm.module.css"
import { useAuth } from "../Context/AuthProvider";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignUpForm"



function Login() {
  const {isloggedin , setislogedin}=useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate();

  const login=()=>{
    setislogedin(true);
    navigate("/" , {replace:true})
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (replace with your own validation logic)
    if (username.trim() === '' || password.trim() === '') {
      setTimeout(()=>{
        setErrorMessage('Username and password cannot be empty');

      } , 3000)
      return;
    }
    setUsername("");
    setPassword("");


    // Call the provided onSubmit function with credentials
    // onSubmit({ username, password });
  };
  return (
    <>
   
    <form className="login-form" onSubmit={handleSubmit}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
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
     
      <button onClick={login} type="submit">Login</button>
    </form>
 


    </>
  )
}

export default Login