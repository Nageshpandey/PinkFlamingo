import { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownArrow from '../assets/dropdown.svg';
import { Link } from 'react-router-dom';

function TopNav({ data }) {
  const [navoption, setNavoption] = useState('Home');
  const { showDropDown, setShowDropDown } = data;

  const handleNavClick = (option) => {
    setNavoption(option);
    if (option === 'Products') setShowDropDown(!showDropDown);
    else setShowDropDown(false);
  };

  return (
    <div className='p-3'>
      <nav className='navbar flex flex-row items-center justify-center gap-5'>
        <span
          className={`nav-item ${navoption === 'Home' ? 'active' : ''}`}
          onClick={() => handleNavClick('Home')}
        >
          <Link to='/'>Home</Link>
        </span>
        <span
          className={`nav-item flex flex-row items-center gap-2 ${navoption === 'Products' ? 'active' : ''}`}
          onClick={() => handleNavClick('Products')}
        >
          Products
          <img src={DropDownArrow} alt="arrow" className='rotate' />
        </span>
        <span
          className={`nav-item flex flex-row items-center gap-2 ${navoption === 'Services' ? 'active' : ''}`}
          onClick={() => handleNavClick('Services')}
        >
          Services
          <img src={DropDownArrow} alt="arrow" className='rotate' />
        </span>
        <span
          className={`nav-item ${navoption === 'Courses' ? 'active' : ''}`}
          onClick={() => handleNavClick('Courses')}
        >
          Courses
        </span>
        <span
          className={`nav-item ${navoption === 'Blogs' ? 'active' : ''}`}
          onClick={() => handleNavClick('Blogs')}
        >
          Blogs
        </span>
        <span
          className={`nav-item ${navoption === 'Videos' ? 'active' : ''}`}
          onClick={() => handleNavClick('Videos')}
        >
          Videos
        </span>
        <span
          className={`nav-item ${navoption === 'Contact Us' ? 'active' : ''}`}
          onClick={() => handleNavClick('Contact Us')}
        >
          Contact Us
        </span>
      </nav>
    </div>
  );
}

TopNav.propTypes = {
  data: PropTypes.shape({
    showDropDown: PropTypes.bool.isRequired,
    setShowDropDown: PropTypes.func.isRequired,
  }).isRequired,
};

export default TopNav;
