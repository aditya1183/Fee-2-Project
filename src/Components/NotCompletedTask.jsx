import React from 'react'
import { useData } from '../Context/TodoData'
import { useAuth } from '../Context/AuthProvider';
import styles from "../Css-Folder/notcompleted.module.css"

function NotCompletedTask() {
    const {todos}=useData();
    const {isloggedin , setislogedin}=useAuth();
  return (
   <>
   {
    isloggedin && todos.map((todo)=>{
        return <div>
     
        
        {
            !todo.completed && <div  className={styles.notcompeteddiv}
            style={{
                fontfamily: "sans-serif",
                fontweight: 100,
                

            }}
            >
            <h3>Id : {todo.id}  </h3>
            <p><h3>Title :</h3>{todo.title}</p>
            
           
            
            
            </div>
            
        }
        </div>
    })
   }
   </>
  )
}

export default NotCompletedTask