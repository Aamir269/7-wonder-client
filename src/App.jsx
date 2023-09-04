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
import UpdateReview from './Pages/UpdateReview/updateReview';
import CreateReview from './Pages/CreateReview/createReview';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/review/update/:reviewId/:wonderId' element={<IsPrivate><UpdateReview /></IsPrivate>} />
        <Route path='/review/create/:wonderId' element={<IsPrivate><CreateReview /></IsPrivate>} />
        <Route path='/wonder/card' element={<WonderCard />} />
        <Route path='/wonder/:wonderId' element={<WonderDetail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;