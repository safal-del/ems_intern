import React, { useContext, useEffect, useState } from 'react'
import Login from '../Login/Login'
import { contextApi } from '../../Context/context'
import { Outlet } from 'react-router-dom'


const Protectedroute = () => {
  const initialstate = useContext(contextApi)
  const currentState = initialstate.loginState;
  const [newState,setState] = useState(true);

  useEffect(()=>{
     let localdata = localStorage.getItem("data");
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