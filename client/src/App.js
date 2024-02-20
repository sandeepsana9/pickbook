// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignUp from './pages/signup/SignUp';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
