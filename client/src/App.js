// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignUp from './pages/authentication/SignUp';
import Login from './pages/authentication/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
