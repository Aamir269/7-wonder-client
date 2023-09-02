import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import LogIn from './Pages/LogIn/login';
import SignUp from './Pages/SignUp/signup';
import Homepage from './Pages/HomePage/homepage';
import { Route, Routes } from 'react-router-dom';
import WonderDetail from './Pages/WonderDetail/wonderDetail';
import IsPrivate from './Components/IsPrivate/isprivate';
import WonderCard from './Pages/WonderCard/wondercard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/projects/create' element={<IsPrivate><AddProject /></IsPrivate>} />
        <Route path='/projects/edit/:projectId' element={<IsPrivate><EditProjectPage /></IsPrivate>} /> */}
        <Route path='/wonder/list' element={<WonderCard />} />
        <Route path='/wonder/:wonderId' element={<WonderDetail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;