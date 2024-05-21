import React from 'react'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import RootLayots from './Layots/RootLayots'
import Home from "./Pages/Home"
import Show from "./Pages/Show";
import Login from "./Pages/Login"
import Edit from "./Pages/Edit";
import  Error from "./Pages/Error"
import Signup from './Pages/SignUp'
import RequiredAuth from './Components/RequiredAuth';
import AuthProvider from './Context/AuthProvider';
import TodoData from './Context/TodoData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { flushSync } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import SingleTodo from './Components/SingleTodo';




const router=createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayots/>} >
  <Route index element={<Home/>}/>
  <Route  path='show' element={<RequiredAuth><Show/></RequiredAuth>}/>
  <Route path='edit' element={<RequiredAuth><Edit/></RequiredAuth>}/>
  <Route path='login' element={<Login/>}/>
  <Route  path='signup' element={<Signup/>}/>
  
  <Route path='*' element={<Error/>}/>
</Route>))

function App() {
  return (
   <>
   <TodoData>
    <ToastContainer position='bottom-right' newestOnTop={true} autoClose={1000} hideProgressBar={false} 
      
    />
  
   <AuthProvider>
    
   <RouterProvider router={router}/>

   </AuthProvider>
   </TodoData>
   
 
 
   </>
  )
}

export default App