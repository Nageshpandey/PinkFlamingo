import PropTypes from 'prop-types';
import Group from '../assets/Group.svg';
import Cart from '../assets/cartgroup.svg';
import { IoIosSearch } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';


function TopSearchBar({ setShowSideNav }) {
  const pin = 201301;

  return (
    <>
      <div className="w-full bg-[#fff] py-4 px-10 hidden lg:flex flex-row items-center justify-around">
        <div className="flex flex-row items-center gap-2">
        <Link to='/'><img src={Group} alt="Logo" /></Link>
        </div>
        <div className="flex flex-row items-center justify-center border-2 border-[#DC8064] rounded-[5px] pr-2 ">
          <div className="flex flex-row items-center gap-2 bg-[#FA5C98] justify-center text-white rounded-r-sm px-2 py-1">
            <IoLocationSharp className="text-xl" />
            <p className="text-delivery-info">
              Deliver to <br />
              <span className="text-xs">{pin}</span>
            </p>
          </div>
          <input
            type="text"
            placeholder="Search for medication & Wellness products.."
            className="w-[26rem] p-2 outline-none placeholder:text-[#0E276933]"
          />
          <IoIosSearch className="text-2xl text-[#0E276933]" />
        </div>
        <img src={Cart} alt="Logo" />
        <div className="flex flex-row items-center gap-2">
          <LuUser2 className="text-4xl text-white bg-[#FA5C98] rounded-[50%] p-2" />
          <p className="text-sign-in">SIGN IN / SIGN UP</p>
        </div>
      </div>

      <div className="w-full lg:hidden flex flex-col px-3 py-2 gap-2">
        <div className="w-full flex flex-row items-center justify-between">
          <GiHamburgerMenu className="text-2xl" onClick={() => setShowSideNav(true)} />
          <div className="flex flex-row items-center gap-1">
            <img src={Group} alt="Logo" />
          </div>
          <img src={Cart} alt="Logo" />
          <LuUser2 className="text-2xl text-white bg-[#FA5C98] rounded-[50%] p-2" />
        </div>
        <div className="flex flex-row w-full items-center justify-between border-2 border-[#DC8064] rounded-[2px] pr-2">
          <div className="flex flex-row items-center gap-2 bg-[#FA5C98] justify-center text-white rounded-r-sm px-2 py-2.5">
            <IoLocationSharp className="text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search for medication & Wellness products.."
            className="p-2 outline-none placeholder:text-[#0E276933] placeholder:text-xs"
          />
          <IoIosSearch className="text-3xl text-[#0E276933]" />
        </div>
      </div>
    </>
  );
}

TopSearchBar.propTypes = {
  setShowSideNav: PropTypes.func.isRequired,
};

export default TopSearchBar;
