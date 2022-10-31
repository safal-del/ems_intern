
import Adduser from './Components/Adduser/Adduser';
import Edituser from './Components/EditUser.js/Edituser';
import Homepage from './Components/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Protectedroute from './Components/ProtectedRoute/Protectedroute';
import Home from './Components/Dashboard/Home';


function App() {
  return (
    <div className='bg-gray-200'>
      <Routes>
        <Route element={<Protectedroute />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/edituser' element={<Edituser />} />


        </Route>
        {/* <Route path='/' element={<Homepage/>} /> */}
        <Route path='/adduser' element={<Adduser />} />

      </Routes>
      {/* <Localstorage /> */}



    </div>

  );
}

export default App;
