import React, { useState } from 'react'
import { RiDownloadLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa';


function Header() {
  const handleDownload = () => {
 
    const link = document.createElement('a');
    link.href = '/assal-cv.pdf';
    link.download = 'assal-cv.pdf';
    link.click();
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    
    <div className='flex items-center justify-between md:px-10 px-1 py-2 '>
      <div className='md:text-[25px] text-[16px] flex items-center py-1 gap-1'>
        <img src="/pngegg.png" alt="asasa" className='w-[40px] h-[40px]' />
        <p className='sofadi-one-regular  bg-gradient-to-r from-[#5f5bd2] to-[#f932d8e1] bg-clip-text text-transparent '>Assal Mohammed</p>
      </div>

      <div className='hidden md:flex text-[20px] text-[#dad6d6] items-center justify-between gap-7'>
        <ul className='flex gap-7'>
          <li><a className='hover:text-[#4e65ba]' href="/#hero">About</a></li>
          <li><a className='hover:text-[#4e65ba]'  href="/projects">All Projects</a></li>
          <li><a className='hover:text-[#4e65ba]'  href="/#skills">Skills</a></li>  
          <li><a className='hover:text-[#4e65ba]'  href="/#contact">Contact us</a></li>
        </ul>
        <button onClick={handleDownload} className='flex items-center p-3 text-[10px] bg-gradient-to-r from-[#5f5bd2] to-[#f932d8e1] gap-1 rounded-[23px]'>
          <RiDownloadLine /> <p>Download CV</p>
        </button>
      </div>

     
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className='text-2xl  text-red-500' /> : <FaBars className='text-2xl hover:text-[#dad6d6] text-[#f932d8e1] ' />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className='absolute top-16 z-20  left-0 w-[100%]   md:hidden'>
          <ul className='flex flex-col items-center w-[80%] mx-auto  bg-gradient-to-r from-[#5f5bd2] to-[#f932d8e1] '>
            <li className='p-2 hover:text-[#b9eaea] '><a onClick={toggleMenu} href="/#hero">About</a></li>
            <li className='p-2'><a onClick={toggleMenu} href="/projects">All Projects</a></li>
            <li className='p-2'><a onClick={toggleMenu} href="/#skills">Skills</a></li>
            <li className='p-2'><a onClick={toggleMenu} href="/#contact">Contact us</a></li>
            <li className='p-2'>
              <button onClick={handleDownload} className='flex items-center p-2 text-[10px] bg-gradient-to-r from-[#e063aa] to-[#eebe0fe1] gap-1 rounded-[23px]'>
                <RiDownloadLine /> <p>Download CV</p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
