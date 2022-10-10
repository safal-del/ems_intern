import React, { useState } from 'react'
import { useContext } from 'react'
import { contextApi } from '../../Context/context'
import { Link } from 'react-router-dom'

 


const Login = () => {
   const initialState = useContext(contextApi);
   const data = initialState.userData;
   console.log(data)
     const loginstate = initialState.loginState;
    const ChangeTheState = initialState.changeLoginState;
     console.log(loginstate);
     const [error, setError] = useState("");
  
     // function to check the validation and change the state to enter homepage(user list).
     function ChangeTheLoginState(){

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      //expression to validate the password
      let validating = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
      if(password.match(validating) && email.length>0){
         data.forEach((items)=>{
            if(email=== items.email && password === items.password){
              ChangeTheState(true);
            }
            
          });
         

      }
      else{
         setError("invalid email or password!");
       }
     

     }

  return (
    <div className='main text-white bg-primarycolor h-[100vh]'>
      <h1 className='pt-10 text-center text-2xl'> Use email as ram@gmail.com and password as rambahadurA@1 to login or you can redirected to the regiter page</h1>
     
        <div className='flex flex-col justify-center items-center h-96'>
        <h1 className='text-center text-3xl'>Login to your EMS account</h1>
           <div className='w-56 mt-10 '>
            <label className='text-lg font-semibold'>Email:</label><input className='border-lg text-black w-60 h-10 border-2 rounded border-black'  type= "text" placeholder='email' id= "email" required/><br/>
           </div>
           <div className='mt-5  w-56 '>
          <label className='text-lg font-semibold' > Password:</label><input className='border-lg text-black w-60 h-10 border-2 rounded border-black ' type="password" placeholder='password' id= "password" required />
           </div>
           <div><h1>dont have an account?<Link to="/adduser" className='hover:text-black'> Register here</Link></h1></div>
           <div className='ml-44 mt-5  justify-end  '> <button  className=' pl-4 pr-4 pt-2  pb-2 bg-secondarycolor rounded' onClick={ChangeTheLoginState}> Login </button></div>
            
             </div>
             <h1 className=' text-center text-white text-lg font-bold'>{error}</h1>
    </div>
  )
}

export default Login;