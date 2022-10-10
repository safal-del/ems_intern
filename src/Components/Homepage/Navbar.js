import React from 'react'
import  {FaPlus, FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { contextApi } from '../../Context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const initialState = useContext(contextApi);
  const searchUserFunction = initialState.Searchuser;
  const ChangeTheState = initialState.changeLoginState;
  const navigate = useNavigate();

   function Searchuser(){
    const name = document.getElementById("searchuserinput").value;
     
    searchUserFunction(name);


   }
   
   function NavigateToDashboard(){
    navigate("/adduser")

   }
   function ChangeTheLoginState(){
    ChangeTheState(false);
   }
   

  return (
    <div>
       <h1 className='text-2xl font-semibold text-center text-primarycolor'>Note:User can be added, deleted, edited, sort, and search, please donot refresh the page until the operation</h1>
        <nav className='navbar bg-primarycolor h-16 '>
         
          <div className='flex justify-between h-16 items-center pl-10 pr-10 '>
           <h1 className='text-3xl text-white font-semibold'><Link to="/">EMS</Link></h1>
            <div className='flex'>
            <input className='rounded w-96' type= "text" placeholder='search user' id = "searchuserinput" />
            <div className='bg-white rounded w-10 flex justify-center'><FaSearch onClick={Searchuser} className='mt-2 hover:cursor-pointer' style={{color:"#1034A6", fontSize:"23px"}} /></div>                       
            </div>
            <div className='flex justify-between w-56'>
                 <FaPlus onClick={NavigateToDashboard} className='hover:cursor-pointer' style={{color:"white",fontSize:"23px"}}  />
                 <h1 className='text-white text-xl font-semibold'><Link to="/home">Dashboard</Link></h1>
                 <button onClick={ChangeTheLoginState} className='rounded p-1 bg-secondarycolor hover:bg-red-700 text-white'>Logout</button>
                 
            </div>

          </div>


        </nav>
    </div>
  )
}

export default Navbar;