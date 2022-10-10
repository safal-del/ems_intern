import React, { useContext } from 'react'
import Login from '../Login/Login'
import { contextApi } from '../../Context/context'
import { Outlet } from 'react-router-dom'


const Protectedroute = () => {
  const initialstate = useContext(contextApi)
  const currentState = initialstate.loginState;
return (

 
         currentState ?  <Outlet/> : <Login/>      
    

  
)
}

export default Protectedroute