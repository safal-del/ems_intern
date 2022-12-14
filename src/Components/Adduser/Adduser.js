import React, { useState } from 'react'
import { contextApi } from '../../Context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// document.getElementById("imagefile").addEventListener("change", function(){
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//     console.log(uploaded_image);
//   });
//   reader.readAsDataURL(this.files[0]);
   
// })

const Adduser = () => {

  const initialState = useContext(contextApi);
  const Adduser = initialState.PutingFor;
  const datas = initialState.datas;
  const navigate = useNavigate();

  const [passworderror, setPasswordError] = useState("");
  const [Emailerror, setEmailError] = useState("");

  // let uploaded_image = "";
 
  function onChange(){
    console.log("hdajka");

  }
      //  const name = document.getElementById("name").value;
    //  console.log(name);
    // const image = document.getElementById("fileimage").value;
    // console.log(image);

   
    

    //  const imagevalue = document.getElementById("fileimage").value;
    //  console.log(image);
    
    // const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     const uploaded_image = reader.result;
    //     // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    //     console.log(uploaded_image);
    //   });
    //   reader.readAsDataURL(this.files[0]);

  function AddUsers() {

  
  


    // console.log(photo)
    // let bannerimg = getBase64Image(photo)
    //  console.log(bannerimg);








    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;;
    const salary = document.getElementById("salary").value;
    const password = document.getElementById("password").value;
    const Phonenumber = document.getElementById("phonenumber").value;
    // const stringConvertedPhoto = JSON.stringify(photo);

    let validating = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!password.match(validating)) {
      setPasswordError("password must contain 8 character special caharcter and one uppercase");



    }
    if (!email.length > 0) {
      setEmailError("email is error");
    }

    else {
      let bannerimg = "hehe"

      Adduser(name, email, address, salary, password, Phonenumber, bannerimg);
      toast("user added")
      setTimeout(() => {
        navigate("/")
      }, 2000)
    }






  }
  console.log(datas);




  return (
    <div className='bg-primarycolor h-[100vh] text-white'>
      <h1 className='text-center text-3xl'>Add new user</h1>
      <h2 className='text-center '> password must be 8-15 character and must contain one numeric value and one uppercase</h2>
      <div className='w-full items-center flex justify-center p-5'>
        <div className='flex flex-col gap-3 w-[60%] justify-center'>
          <label>Name:</label><input className='rounded-lg text-black ' type="text" id="name" />
          <label>Email:</label><input className='rounded-lg text-black' type="email" id="email" />
          <div className='text-red-700'>{Emailerror}</div>
          <label>Address:</label><input className='rounded-lg text-black' type="text" id="address" />

          <label>Salary:</label><input className='rounded-lg text-black' type="text" id="salary" />
          <label>Password:</label><input className='rounded-lg text-black' type="password" id="password" />
          <div className='text-red-700'>{passworderror}</div>
          <label>Phonenumber:</label><input className='rounded-lg text-black' type="number" id="phonenumber"  />
          <input type="file"  id="imagefile" onChange={onChange} />
          <button className='bg-secondarycolor p-2 mt-1 rounded-lg text-black' onClick={AddUsers}>Add user</button>



        </div>
      </div>
      <p className='text-center text-red-700'></p>
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