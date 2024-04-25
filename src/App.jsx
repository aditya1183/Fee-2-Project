import React from 'react'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import RootLayots from './Layots/RootLayots'
import Home from "./Pages/Home"
import Show from "./Pages/Show";
import Login from "./Pages/Login"
import Edit from "./Pages/Edit";
import  Error from "./Pages/Error"
import RequiredAuth from './Components/RequiredAuth';
import AuthProvider from './Context/AuthProvider';




const router=createBrowserRouter(createRoutesFromElements(<Route path='/' element={<RootLayots/>} >
  <Route index element={<Home/>}/>
  <Route  path='show' element={<RequiredAuth><Show/></RequiredAuth>}/>
  <Route path='edit' element={<RequiredAuth><Edit/></RequiredAuth>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='*' element={<Error/>}/>
</Route>))

function App() {
  return (
   <>
  
   <AuthProvider>
    
   <RouterProvider router={router}/>

   </AuthProvider>
   
 
 
   </>
  )
}

export default App