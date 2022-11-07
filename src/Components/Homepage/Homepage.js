import React, { useContext } from 'react'
import { useState } from 'react'
import { contextApi } from '../../Context/context'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Homepage = () => {
  const initialState = useContext(contextApi);
  const userData = initialState.users;
  const DeleteUser = initialState.DeleteUser;
  const sortBYAccending = initialState.SortByAccending;
  const SortByDecending = initialState.SortByDecending;
  const Edit = initialState.Editingindex;
  const SortBySalary = initialState.SortBySalary;
  const [state, setState] = useState(false);



  const navigate = useNavigate();


  function userDelete(data) {
    DeleteUser(data);
    toast('user deleted', {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function sortAccending() {
    sortBYAccending();
    setState(false);
  }
  function SortDecendingOrder() {
    SortByDecending();
    setState(false);
  }

  function Sortsalary() {
    SortBySalary();
    setState(false);
  }
  function Sendindexandnavigatetoedituser(index) {
    Edit(index);
    navigate("/edituser");
  }
  // console.log(datas);




  let finaldata = userData.map((items, i) => {
    return (

      <tr>
        <td>{items.name}</td>
        <td>{items.email}</td>
        <td>{items.address}</td>
        <td>{items.salary}</td>
        <td>{items.Phonenumber}</td>
        <td> <img src= {`data:image/png;base64,${items.photo}`} /></td>
        <></>
        <td><button className='rounded-lg p-1 pl-2 pr-2 bg-primarycolor hover:bg-secondarycolor text-white' onClick={() => Sendindexandnavigatetoedituser(i)}>Edit</button></td>
        <td><button className='rounded-lg p-1 pl-2 pr-2 bg-red-700 hover:bg-red-900 text-white' onClick={() => userDelete(i)}>delete</button></td>
      </tr>

    )
  })
  return (
    <div className=' h-[100vh] bg-gray-200'>

      <Navbar />
      <div>
        <div className='ablediv flex justify-center'>
          <table className=' text-center w-full'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Phonenumber</th>
              <th>photo</th>
              <th>
                <button onClick={() => setState((prevstate) => !prevstate)}>sortby {state ? "^" : "▼"}</button>
                {state ? <div className='z-20 block absolute bg-gray-200 w-32 h-32 ml-5 mt-3'>
                  <button onClick={sortAccending} className='mt-4 text-l font-200'>accending</button><br />
                  <button className='mt-2' onClick={SortDecendingOrder} >decending</button><br />
                  <button onClick={Sortsalary} className='mt-2'>salary  </button>

                </div> : null}





              </th>

            </tr>
            {finaldata}

          </table>
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


      </div>
    </div>
  )
}

export default Homepage;