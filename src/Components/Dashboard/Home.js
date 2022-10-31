import React from 'react'
import BarGraph from './BarGraph'
import Chart from './Chart'
import Graph from './Graph'
import Person from "../../image/person1.jpg";
import "./home.css"
import { FaCogs, FaPersonBooth, FaSignOutAlt, FaTable } from 'react-icons/fa';
import { useContext } from 'react';
import { contextApi } from '../../Context/context';
const Home = () => {
  const initialState = useContext(contextApi);
  const ChangeTheState = initialState.changeLoginState;
  function ChangeTheLoginState(){
    ChangeTheState(false);
    localStorage.removeItem("logindata");
    window.location.reload();
   }

  return (
    <div className='bg-white'>
      
        <div className='bg-primarycolor'>
        <h1 className='text-3xl text-white text-center font-semibold p-2 '>Welcome Admin!</h1>
        </div>
        
       <div className='flex w-full  m-5'>
        
        <div className='w-[20%] bg-primarycolor rounded-l-xl shadow-md'>
        <h1 className='text-3xl text-white text-center font-semibold p-2 '>EMS</h1>
          

          <div className='person rounded-[50%] mt-24  ml-24 w-28 h-28  bg-white'>
            {/* <img  src={Person} /> */}
          </div>
        <h1 className='text-lg text-white text-center mt-1 font-semibold'>Nataile</h1>
         <div className='flex gap-8 text-center text-white text-xl mt-5 flex-col'>
          <div className='flex items-center justify-center gap-3 '>
            <FaTable />
          <h1>Dashboard</h1>
          </div>  
          <div className='flex items-center justify-center gap-3 '>
            <FaPersonBooth />
          <h1>attendence</h1>
          </div>
          <div className='flex items-center justify-center gap-3 '>
            <FaCogs />
          <h1>Dashboard</h1>
          </div>
          <div  onClick={ChangeTheLoginState} className='flex items-center hover:cursor-pointer justify-center gap-3 '>
            <FaSignOutAlt />
          <h1>Logout</h1>
          </div>
            
         </div>

        </div>
       <div className='w-[70%] bg-gray-200 rounded-r-xl shadow-md'>
        <Chart/>
        <Graph/>
        <BarGraph /> 
      </div>
       </div>
     
    </div>
  )
}

export default Home