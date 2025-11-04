import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    {id: 'about', label: 'About'},
    {id: 'skills', label: 'Skills'},
    {id: 'experience', label: 'Experience'},
    {id: 'work', label: 'Work'},
    {id: 'education', label: 'Education'},
    {id: 'contact', label: 'Contact'}
  ]
  return (
   <nav className='bg-transparent px-2'>
    <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo */}
        <div  className='text-white py-5 flex justify-between items-center'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Maysha </span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'> Tabassum</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div> 

        {/* Desktop Menu */}
        <ul className='md:flex space-x-8 text-g ray-300'>
          {menuItems.map((items)=>(
            <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] ${
              activeSection === items.id? "text-[#8245ec]": ""
            }`}>
                <button>
                  {items.label}
                </button>
            </li>
          ))}
        </ul>
    </div>

   </nav>
  );
};

export default Navbar;