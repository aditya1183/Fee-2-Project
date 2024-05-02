import React from 'react'
import { useState } from 'react';

import { createContext , useContext } from 'react'
const Datacontext=createContext();


function TodoData({children}) {



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
    <Datacontext.Provider  value={{ todos , Deletetodo,ToggleCompleted , AddTodo  , Settodos}}>
       {children}

    </Datacontext.Provider>
  )
}


export function useData(){
    return useContext(Datacontext);
}

export default TodoData