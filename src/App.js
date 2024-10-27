import React, { useContext } from 'react';

// import component
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

// import router 
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
// import motion 
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  const location = useLocation(); // Get the current location

  // List of routes to hide the navbar on
  const hideNavbarRoutes = ['/CustomerReviews', '/portfolio']; 

  return (
    <>
      {/* Conditionally render the Header component */}
      {!hideNavbarRoutes.includes(location.pathname) && <Header />}
      
      <AnimRoutes />

      {/* Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={'cursorBG'}
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
