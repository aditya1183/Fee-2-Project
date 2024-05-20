import React from 'react'
import { useData } from '../Context/TodoData';
import styles from "../Css-Folder/todo.module.css"
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import EditTodos from './EditTodos';
function Todo({ id , title , completed }) {
  const {   todos , Deletetodo,ToggleCompleted , AddTodo } =useData();
    function handleCompleted(){
      ToggleCompleted(id);

    }
    function handledelete(){
      Deletetodo(id);
    }
    if(todos.lenght==0){
      return <h1>No Todos Found</h1>
    }
  return (

    <>
   
    
   
    <div className={styles.outerbody}>
         <div className={styles.contentdiv}>
         <h2>{id}</h2>
        <p style={{
          textDecoration:completed ? "line-through" : "solid"
        }}>{title}</p> 
        <p>Completed : {completed?"True" : "False"}</p>

         </div>

        <div className={styles.buttondiv}>
        <button onClick={handleCompleted}>{completed ? <FaCheck /> : <ImCross /> }</button>
        <button onClick={handledelete}><RiDeleteBin6Fill /></button>
        </div>


        
      


        
    </div>


    


   
    </>
    


    
   
    
    
  )
}

export default Todo