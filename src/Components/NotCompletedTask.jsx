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
        return <div >
            
        
        {
            !todo.completed && <>
            <h1>Id : {todo.id}  ,  Title :{todo.title}</h1>
            
            
            </>
        }
        </div>
    })
   }
   </>
  )
}

export default NotCompletedTask