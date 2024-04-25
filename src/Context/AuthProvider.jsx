import React from 'react'
import { createContext , useContext  , useState} from 'react'

const Authcontext=createContext()
function AuthProvider({children}) {
    const [isloggedin , setislogedin]=useState(false)
  return (
    <Authcontext.Provider value={{isloggedin , setislogedin}}>
    {children}
    </Authcontext.Provider>
  )
}

export function useAuth(){
    return useContext(Authcontext)
}

export default AuthProvider  