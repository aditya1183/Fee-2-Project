import React from 'react'
import { useData } from '../Context/TodoData'
import { useAuth } from '../Context/AuthProvider';

function NotCompletedTask() {
    const {todos}=useData();
    const {isloggedin , setislogedin}=useAuth();
  return (
   <>
   {
    isloggedin && todos.map((todo)=>{
        return <>
        {
            !todo.completed && <h1>{todo.title}</h1>
        }
        </>
    })
   }
   </>
  )
}

export default NotCompletedTask