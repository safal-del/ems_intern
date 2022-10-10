import React, { useState } from 'react'
import { contextApi } from '../../Context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Adduser = () => {

  const initialState = useContext(contextApi);
  const Adduser = initialState.PutingFor;
  const datas = initialState.datas;
  const navigate = useNavigate();

  const [error, setError] = useState("");

  

   function AddUsers(){



    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;;
    const salary = document.getElementById("salary").value;
    const password = document.getElementById("password").value;
    const Phonenumber = document.getElementById("phonenumber").value;
   let validating = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(password.match(validating) && email.length>0 && Phonenumber.length<=10){

      Adduser(name,email,address,salary,password,Phonenumber);
      toast("user added")
      setTimeout(()=>{
        navigate("/")
      },2000)


    }
    else{
      setError("Fill up with requirement");
    }
    





   }
   console.log(datas);




  return (
    <div className='bg-primarycolor h-[100vh] text-white'>
        <h1 className='text-center text-3xl'>Add new user</h1>
          <h2 className='text-center '> password must be 8-15 character and must contain one numeric value and one uppercase</h2>
      <div className='w-full items-center flex justify-center p-5'>
      <div className='flex flex-col gap-3 w-[60%] justify-center'>
          <label>Name:</label><input className='rounded-lg' type="text" id= "name"  />
          <label>Email:</label><input className='rounded-lg' type = "text" id= "email" />
          <label>Address:</label><input className='rounded-lg' type = "text" id = "address"/>
          <label>Salary:</label><input className='rounded-lg' type="text" id= "salary"/>
          <label>Password:</label><input className='rounded-lg' type="text" id = "password" />
          <label>Phonenumber:</label><input className='rounded-lg' type="number" id= "phonenumber"/>
          <button className='bg-secondarycolor p-2 mt-1 rounded-lg'  onClick={AddUsers}>Add user</button>
          

            
         </div>
      </div>
      <p className='text-center text-white'>{error}</p>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
        
    </div>
  )
}

export default Adduser