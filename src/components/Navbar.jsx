import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-gray-300 border-red-900">
      <div className="flex items-center">
        <FiMenu
          className="text-3xl cursor-pointer"
          onClick={toggleMenu} 
        />
        <CgProfile className="ml-4 text-3xl cursor-pointer" />
      </div>
      <ul className="items-center hidden gap-6 md:flex">
        <li className="px-3 py-1 rounded-lg hover:bg-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 py-1 rounded-lg hover:bg-red-500">
          <Link to="/about">About</Link>
        </li>
      </ul>
      {menuOpen && <Sidebar closeSidebar={toggleMenu} />}
    </nav>
  );
}

export default Navbar;
