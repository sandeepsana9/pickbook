// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Landing from './pages/landing/Landing';
import SignUp from './pages/authentication/SignUp';
import Login from './pages/authentication/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Photo from './pages/photo/Photo';



function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/photo' element={<Photo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
