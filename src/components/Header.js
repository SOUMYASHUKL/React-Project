import React,{useContext} from 'react';
import { onMouseEnter, onMouseLeave } from 'react';


// import components 

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobilNav from './MobileNav';

// import Link 

import {Link} from 'react-router-dom';
// import cursor context

import { CursorContext } from '../context/CursorContext';


const Header = () => {
  const {mouseEnterHandler,mouseLeaveHandler } = useContext(CursorContext)
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}

  return (
  <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>

     <div className='flex flex-col lg : flex-row lg : items-center w-full justify-between' >  

      {/* logo */}

      <Link 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      to ={'/'} className='max-w-[200px ]' >
      <img src= {Logo} alt='' />
       </Link>

               {/* nav - initially hidden -show on desktop mode */}

        <nav 
  className='hidden xl:flex gap-x-12 font-semibold'
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  >
         <Link to= {'/'}
         className='text-[#696c6d] hover:text-primary transtion'>
           Home
           </Link>
           <Link to= {'/about'}
         className='text-[#696c6d] hover:text-primary transtion'>
           About
           </Link>
           <Link to= {'/portfolio'}
         className='text-[#696c6d] hover:text-primary transtion'>
           Portfolio
           </Link>
           <Link to= {'/contact'}
         className='text-[#696c6d] hover:text-primary transtion'>
           Contact
           </Link>
      </nav>
        {/* socials */}

        <Socials />

        {/* mobil nav */}
        <MobilNav />

       </div>
    </header>
  );
};

export default Header;
