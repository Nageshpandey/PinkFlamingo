import PropTypes from 'prop-types';

import { HiOutlineMail } from "react-icons/hi";
import SocialLinks from '../assets/Group 14133.svg'
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <div className='bg-[#FA5C98] flex flex-col text-white font-poppins'>
      <div className='flex flex-col gap-4 md:flex-row px-3 py-5 md:p-5 items-center justify-around border-b-[1px] border-white'>
        <div className='flex flex-row gap-4 items-start md:items-center justify-center'>
            <HiOutlineMail className='text-3xl'/>
            <p className='text-xl md:text-2xl'>Sign Up To Shop Now</p>
        </div>
        <label htmlFor='email' className='flex md:flex-row flex-col gap-2 p-1 justify-between rounded-md bg-white w-[90vw] md:w-2/6'>
            <input type="text" name="email" id="email" placeholder='Enter your email' className='outline-none p-1'/>
            <button className='bg-[#FA5C98] rounded-md px-3 py-1'>SUBSCRIBE</button>
        </label>
      </div>
      <div className='py-5 md:py-10 px-5 flex flex-wrap flex-col md:flex-row justify-around items-start'>
        <div className='text-xs'>
            <p className='text-lg font-bold'>Contact Us</p>
            <p>Demo Store</p>
            <address>
            <p>No. 1258 Utawala, Nairobi, 01010</p>
            <p>Kenya</p>
            </address>
            <p>+25470101010</p>
            <p>example@gmail.com</p>
        </div>
        <div className='text-xs'>
            <p className='text-lg font-bold'>Information</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Terms Of Service</p>
            <p>Blogs</p>
        </div>
        <div className='text-xs'>
            <p className='text-lg font-bold'>Account</p>
            <p>Search</p>
            <p>About Us</p>
            <p>Faq</p>
            <p>Contact</p>
            <p>Help</p>
        </div>
        <div className='text-xs'>
            <p className='text-lg font-bold'>Quick Links</p>
            <p>Incense Sticks</p>
            <p>Shankh</p>
            <p>Kalash</p>
            <p>Incense Holders</p>
            <p>Cone Dhoop</p>
        </div>
        <div className='text-xs'>
            <p className='text-lg font-bold'>Social Media.</p>
            <p className='mb-4'>Follow us on social media and stay updated.</p>
            <div className='flex flex-row gap-2 '>
                <span className='p-2 rounded-[50%] bg-[#ffffff56] border-[1px]'><FaTwitter className='text-xl'/></span>
                <span className='p-2 rounded-[50%] bg-[#ffffff56] border-[1px]'><FaFacebookSquare className='text-xl'/></span>
                <span className='p-2 rounded-[50%] bg-[#ffffff56] border-[1px]'><PiInstagramLogoFill className='text-xl'/></span>
                <span className='p-2 rounded-[50%] bg-[#ffffff56] border-[1px]'><FaYoutube className='text-xl'/></span>
            </div>
        </div>
      </div>
    </div>
  )
}
