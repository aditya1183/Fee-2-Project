import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import styles from "../Css-Folder/addtodo.module.css"
import {  toast } from 'react-toastify';
import { useData } from '../Context/TodoData';

function Addform() {
    const [todo , setistodo]=useState("");
    const{ todos , Deletetodo,ToggleCompleted , AddTodo  , Settodos}=useData();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(todo.trim().length==0){
            toast.error("Please Enter Your Task ..");
            return ;
        }
        const newtodo={
            title:todo,
            completed:false,
            id:todos.length+1
        
      };
      AddTodo(newtodo);
      if(todo.length >=3){
        toast.info("Your Task is Sucessfull Added")
      }
     setistodo("");

      
    }
      
  return (
    <form  onSubmit={handleSubmit} className={styles.loginform}>
   
    <label htmlFor="todo">Enter the Todo :</label>
    <input
    className='inputtodo'
      type="text"
      id="todo"
      value={todo}
      placeholder='Enter Your Task ..'
      onChange={(e) => setistodo(e.target.value)}
    />
   
    <button   className="ADDtodobtn"type="submit">Add Todo</button>
  </form>
  )
}

export default Addform