import React from 'react';

// import pages 

import Home from '../pages/Home';
import About from '../pages/About';
import CustomerReviews from './CustomerReviews';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

// import routes route & uselocation hook 

import { Routes,Route,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location =useLocation();
  return (
    <AnimatePresence initial ={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path= '/' element ={<Home/>} />
      <Route path ='/about' element ={<About/>} />
      <Route path ='/Portfolio' element ={<Portfolio/>} />
      <Route path="/CustomerReviews" element={<CustomerReviews />} />
      <Route path ='/Contact' element ={<Contact/>} />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
