import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Pages/Login';
import SignupPage from './components/Pages/Signup';
import LogoutPage from  './Components/Pages/Logout'
import HomePage from './Components/Home';
import ProfilePage from './components/Pages/Profile';
import WonderList from './components/Pages/WonderList';
import WonderDetail from './components/Pages/WonderDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user-profile" element={<ProfilePage />} />
      <Route path="/wonder-list" element={<WonderList />} />
      <Route path="/wonders/:id" element={<WonderDetail />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App;
