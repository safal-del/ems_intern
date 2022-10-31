import React, { useContext, useEffect, useState } from 'react'
import Login from '../Login/Login'
import { contextApi } from '../../Context/context'
import { Outlet } from 'react-router-dom'


const Protectedroute = () => {
  const initialstate = useContext(contextApi)
  const currentState = initialstate.loginState;
  const [newState,setState] = useState(false);

  useEffect(()=>{
     let localdata = localStorage.getItem("logindata");
     console.log(localdata);
    let finaldata = JSON.parse(localdata);
       if(finaldata !==null){
         setState(true)
       }
      
  },[]);
  console.log(newState);


return (

 
         newState ?  <Outlet/> : <Login/>      
    

  
)
}

export default Protectedroute