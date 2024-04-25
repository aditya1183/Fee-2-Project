import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
function Addform({AddTodo}) {
    const [todo , setistodo]=useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(todo.trim().length==0){
            alert("Please Enter Your Task ..");
            return ;
        }
        const newtodo={
            title:todo,
            completed:false,
            id:uuid()
        
      };
      AddTodo(newtodo);
     setistodo("");

      
    }
      
  return (
    <form className="login-form" onSubmit={handleSubmit}>
   
    <label htmlFor="todo">Enter the Todo :</label>
    <input
    className='inputtodo'
      type="text"
      id="todo"
      value={todo}
      placeholder='Enter Your Task ..'
      onChange={(e) => setistodo(e.target.value)}
    />
   
    <button  className="ADDtodobtn"type="submit">Add Todo</button>
  </form>
  )
}

export default Addform