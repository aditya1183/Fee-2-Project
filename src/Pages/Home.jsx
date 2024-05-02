import React from 'react'
import { useState } from 'react'
import Addform from '../Components/Addform'
import Show from './Show'
import { useAuth } from '../Context/AuthProvider'

import {useData} from "../Context/TodoData"
import NotCompletedTask from '../Components/NotCompletedTask'

function Home() {
  const {isloggedin , setislogedin} =useAuth();
  const { todos , Deletetodo,ToggleCompleted , AddTodo } =useData();

  

  

  // const [todos , Settodos]=useState([
  //   {id:1 , title :"Learn React" , completed:true},
  //   {id:2 , title :"Learn Java Script" , completed:true},
  //   {id:3 , title :"Learn C++" , completed:true},
  //   {id:4, title :"Learn Python" , completed:false},
  //   {id:5 , title :"Learn Java" , completed:true}
   

  // ])
  // function AddTodo(newtodo){
  //   Settodos((e)=>{
  //     return [...todos , newtodo]
  //   })
  // }
  // function ToggleCompleted(id){
    

  //   Settodos((prev)=>{
  //     return prev.map(todo=>{
  //       if(id===todo.id) 
  //       { 
  //         return {...todo , completed:!todo.completed}
  //       }
  //       else{
  //         return todo;
  //       }
       
  //     })
  //   })


  // }
  // function Deletetodo(id){
  //   Settodos(prev=>{
  //    return prev.filter((todo)=>{
  //      return todo.id!==id;
  //    })
  //   })
 
  //  }
  return (
   
      <>
      <Addform AddTodo={AddTodo}/>
      <h2>Task You Have Not Completed Yet :  </h2>
      <hr/>
      <NotCompletedTask/>
      
      </>
    
    
  )
}

export default Home;