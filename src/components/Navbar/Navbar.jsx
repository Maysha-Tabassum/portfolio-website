import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);


  //Check scroll and change navbar background
  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  //Smooth scroll function
  const handleMenuItemClick = (sectionId) =>{
      setActiveSection(sectionId);
      setIsOpen(false);
  }

  const menuItems = [
    {id: 'about', label: 'About'},
    {id: 'skills', label: 'Skills'},
    {id: 'experience', label: 'Experience'},
    {id: 'work', label: 'Work'},
    {id: 'education', label: 'Education'},
    {id: 'contact', label: 'Contact'}
  ]
  return (
   <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
    isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md" : "bg-transparent"
   }`}>
    <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo */}
        <div  className='text-2xl text-white py-5 flex justify-between items-center'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Maysha </span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'> Tabassum</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div> 

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-g ray-300'>
          {menuItems.map((items)=>(
            <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] ${
              activeSection === items.id? "text-[#8245ec]": ""
            }`}>
                <button onClick={()=> handleMenuItemClick(items.id)}>
                  {items.label}
                </button>
            </li>
          ))}
        </ul> 

        {/* Social Media Icons */}
        <div className='hidden md:flex space-x-4'>
           <a 
           href='https://github.com/Maysha-Tabassum'
           target='_blank'
           rel='noopener noreferrer'
           className='text-gray-300 hover:text-[#8245ec]'
           >
            <FaGithub size={25}></FaGithub>
           </a>
           <a 
           href='https://www.linkedin.com/in/maysha-tabassum-nova-0182a6244/'
           target='_blank'
           rel='noopener noreferrer'
           className='text-gray-300 hover:text-[#8245ec]'
           >
            <FaLinkedin size={25}></FaLinkedin>
           </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className='md:hidden'>
           {
            isOpen? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)}/>
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer '
              onClick={() => setIsOpen(true)}/>
            )
           }
        </div>
    </div>
    {/* Mobile Menu Items */}

    {
      isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white 
              ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
                <a 
           href='https://github.com/Maysha-Tabassum'
           target='_blank'
           rel='noopener noreferrer'
           className='text-gray-300 hover:text-[#8245ec]'
           >
            <FaGithub size={25}></FaGithub>
           </a>
           <a 
           href='https://www.linkedin.com/in/maysha-tabassum-nova-0182a6244/'
           target='_blank'
           rel='noopener noreferrer'
           className='text-gray-300 hover:text-[#8245ec]'
           >
            <FaLinkedin size={25}></FaLinkedin>
           </a>
            </div>
          </ul>
        </div>
      )
    }

   </nav>
  );
};

export default Navbar;