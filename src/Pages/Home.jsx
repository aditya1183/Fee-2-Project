import React from 'react'
import { useState } from 'react'
import Addform from '../Components/Addform'
import Show from './Show'
import { useAuth } from '../Context/AuthProvider'



function Home() {
  const {isloggedin , setislogedin} =useAuth();
  

  

  const [todos , Settodos]=useState([
    {id:1 , title :"Learn React" , completed:true},
    {id:2 , title :"Learn Java Script" , completed:true},
    {id:3 , title :"Learn C++" , completed:true},
    {id:4, title :"Learn Python" , completed:false},
    {id:5 , title :"Learn Java" , completed:true}
   

  ])
  function AddTodo(newtodo){
    Settodos((e)=>{
      return [...todos , newtodo]
    })
  }
  function ToggleCompleted(id){
    

    Settodos((prev)=>{
      return prev.map(todo=>{
        if(id===todo.id) 
        { 
          return {...todo , completed:!todo.completed}
        }
        else{
          return todo;
        }
       
      })
    })


  }
  function Deletetodo(id){
    Settodos(prev=>{
     return prev.filter((todo)=>{
       return todo.id!==id;
     })
    })
 
   }
  return (
   
      <>
      <Addform AddTodo={AddTodo}/>
      {isloggedin && 
       <Show todos={todos}  togglecompleted={ToggleCompleted} deletetodo={Deletetodo}/>
      
      }
      </>
    
    
  )
}

export default Home;