import React, { useState } from 'react'
import { useContext } from 'react'
import { contextApi } from '../../Context/context'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Edituser = () => {
    const initialState = useContext(contextApi);
    const index = initialState.editIndex;
    const Edit = initialState.EditUser;
    const user = initialState.users;
    const [error,setError] = useState("");
    console.log(index);
    const navigate = useNavigate();
    const name = user.at(index).name;
    const email = user.at(index).email;
    const address = user.at(index).address;
    const salary = user.at(index).salary
    const phone = user.at(index).Phonenumber
    console.log(name);
    function Useredited(){       
    const name = document.getElementById("names").value;
    const email = document.getElementById("emails").value;
    const address = document.getElementById("addresss").value;
    const salary = document.getElementById("salarys").value;
    const password = document.getElementById("passwords").value;
    const Phonenumber = document.getElementById("phonenumbers").value;

   let validating = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
   if(password.match(validating) && email.length>0 && Phonenumber.length<=10){
    Edit(name,email,address,salary,password,Phonenumber,index);
    toast("user edited");
    
    setTimeout(()=>{
      navigate("/")
    },2000);


   }
   else{
    setError("password must be 8-15 character and must contain one numeric value and one uppercase"); 
   }



        
      }


  return (
    <div className='bg-primarycolor h-[100vh] text-white'>
    <h1 className='text-center text-3xl'>Edit  user</h1>
      <h2 className='text-center '> password must be 8-15 character and must contain one numeric value and one uppercase</h2>
  <div className='w-full items-center flex justify-center p-5'>
  <div className='flex flex-col gap-3 w-[60%] justify-center '>
      <label>Name:</label><input className='  text-black rounded-lg' type="text" id= "names" placeholder= {name} />
      <label>Email:</label><input className=' text-black rounded-lg' type = "text" id= "emails" placeholder={email} />
      <label>Address:</label><input className=' text-black rounded-lg' type = "text" id = "addresss" placeholder={address}/>
      <label>Salary:</label><input className=' text-black rounded-lg' type="text" id= "salarys" placeholder= {salary}/>
      <label>Password:</label><input className=' text-black rounded-lg' type="password" id = "passwords" />
      <span >{error}</span>
      <label>Phonenumber:</label><input className=' text-black rounded-lg' type="number" id= "phonenumbers" placeholder={phone}/>
      <button className='bg-secondarycolor p-2 mt-1  text-white rounded-lg'  onClick={Useredited}>Edit   user</button>
      

        
     </div>
  </div>
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
  <p className='text-center text-white'>{error}</p>
    
</div>
  )
}

export default Edituser;