import React, { useState } from 'react';
import DropDownArrow from '../assets/dropdown.svg';
import { LuUser2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function SideNav({ data }) {
  const [navoption, setNavoption] = useState('Home');
  const [showProductsSub, setShowProductsSub] = useState(false); // State to toggle Products sub-categories
  const [showDhoopSubCategories, setShowDhoopSubCategories] = useState(false); // State to toggle Dhoop Cones sub-categories

  const { setShowSideNav } = data;

  const handleNavClick = (option) => {
    setNavoption(option);

    // Handle nested dropdowns
    if (option === 'Products') {
      setShowProductsSub(!showProductsSub);
      setShowDhoopSubCategories(false); // Reset nested sub-category when parent is toggled
    } else if (option === 'Dhoop Cones') {
      setShowDhoopSubCategories(!showDhoopSubCategories);
    } else {
      setShowProductsSub(false);
      setShowDhoopSubCategories(false);
    }
  };

  return (
    <div className='flex relative flex-col px-4 py-10 gap-4 h-screen bg-white w-2/3 lg:hidden overflow-y-auto'>
      <RxCross2 className='absolute top-3 right-2' onClick={() => setShowSideNav(false)} />
      <div className="flex flex-row items-center gap-2">
        <LuUser2 className="text-4xl text-white bg-[#FA5C98] rounded-[50%] p-2" />
        <p>SIGN IN / SIGN UP</p>
      </div>
      <nav className='flex flex-col w-full items-start font-semibold justify-start gap-3'>
        <span className={`${navoption === 'Home' && 'text-[#FA5C98]'} cursor-pointer`} onClick={() => handleNavClick('Home')}>Home</span>

        <div className='w-full'>
          <span 
            className={`flex flex-row w-full justify-between items-center gap-2 cursor-pointer ${navoption === 'Products' && 'text-[#FA5C98]'}`} 
            onClick={() => handleNavClick('Products')}>
            Products <img src={DropDownArrow} alt="arrow" />
          </span>

          {showProductsSub && (
            <div className='flex flex-col pl-4 gap-2'>
              <span 
                className={`flex flex-row w-full justify-between items-center gap-2 cursor-pointer ${navoption === 'Dhoop Cones' && 'text-[#FA5C98]'}`} 
                onClick={() => handleNavClick('Dhoop Cones')}>
                Dhoop Cones <img src={DropDownArrow} alt="arrow" />
              </span>

              {/* Render sub-categories of 'Dhoop Cones' */}
              {showDhoopSubCategories && (
                <div className='flex flex-col pl-4 gap-2 text-sm font-medium '>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Jar Cones</Link>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Chandan Bamboo Dhoop</Link>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Backflow Cone Dhoop</Link>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Buddha Red Incense Cone</Link>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Mountain Sandal Dhoop</Link>
                  <Link to='/products' className='cursor-pointer hover:text-[#FA5C98]'>Cone Sandal Dhoop</Link>
                </div>
              )}
            </div>
          )}
        </div>

        <span className={`flex flex-row w-full justify-between items-center gap-2 cursor-pointer ${navoption === 'Services' && 'text-[#FA5C98]'}`} onClick={() => handleNavClick('Services')}>Services <img src={DropDownArrow} alt="arrow" /></span>
        <span className={`${navoption === 'Courses' && 'text-[#FA5C98]'} cursor-pointer`} onClick={() => handleNavClick('Courses')}>Courses</span>
        <span className={`${navoption === 'Blogs' && 'text-[#FA5C98]'} cursor-pointer`} onClick={() => handleNavClick('Blogs')}>Blogs</span>
        <span className={`${navoption === 'Videos' && 'text-[#FA5C98]'} cursor-pointer`} onClick={() => handleNavClick('Videos')}>Videos</span>
        <span className={`${navoption === 'Contact Us' && 'text-[#FA5C98]'} cursor-pointer`} onClick={() => handleNavClick('Contact Us')}>Contact Us</span>
      </nav>
    </div>
  );
}
