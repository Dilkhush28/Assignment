import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // If Sidebar is used, ensure it's correctly imported

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className='flex justify-between bg-gray-300 border-red-900 px-9'>
      <section className='flex justify-between w-screen'>
        <div className='flex pl-10'>
          <FiMenu
            className='items-center m-5 text-3xl cursor-pointer align-center'
            onClick={toggleMenu} 
          />
          <CgProfile className='flex items-center m-5 text-3xl align-baseline cursor-pointer' />
        </div>

        <div className='flex flex-wrap gap-2 font-bold text-center align-center'>
          <ul className='flex flex-wrap justify-between gap-6 py-5 pr-20 font-sans text-center cursor-pointer text-bold align-center'>
            <li className='mb-1 rounded-lg hover:bg-red-500'>
              <Link to="/">Home</Link>
            </li>
            <li className='mb-1 rounded-lg hover:bg-red-500'>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </section>

    
      {menu && <Sidebar />}
    </nav>
  );
}

export default Navbar;
