import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function RequiredAuth({children}) {
  const {isloggedin , setislogedin}=useAuth();

    

    if(isloggedin){
        return children

    }
  return (
    <Navigate to="/login"/>
  )
}

export default RequiredAuth