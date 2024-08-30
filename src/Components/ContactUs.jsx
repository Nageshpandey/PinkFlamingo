import ContactImage from '../assets/ContactImage.svg'
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export default function ContactUs() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-screen font-poppins'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold font-poppins'>Let’s Connect</h1>
      <div className='flex lg:flex-row flex-col w-full items-center justify-around px-10 gap-4 '>
        
            <form className='flex flex-col shrink items-center gap-5 '>
                <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                    <label htmlFor="" className='flex flex-row items-center py-3 px-3 box-shadow rounded-md'><AiOutlineUser className='text-[#FA5C98] mr-2 text-2xl'/><input type="text" placeholder='Name' className='outline-none py-1 px-4 placeholder:text-[#888888] border-l-2 border-[#D8D8D8]'/></label>
                    <label htmlFor="" className='flex flex-row items-center py-3 px-3 box-shadow rounded-md'><BsTelephone className='text-[#FA5C98] mr-2 text-2xl'/><input type="text" placeholder='Phone number' className='outline-none py-1 px-4 placeholder:text-[#888888] border-l-2 border-[#D8D8D8]'/></label>
                </div>
                <label htmlFor="" className='flex flex-row items-center py-3 px-3 box-shadow rounded-md w-full'><TfiEmail className='text-[#FA5C98] mr-2 text-2xl'/><input type="text" placeholder='Email address' className='outline-none py-1 px-4 placeholder:text-[#888888] border-l-2 border-[#D8D8D8]'/></label>
                <textarea name="" id="" placeholder='Write your message here!' className='w-full h-36 py-2 px-4 resize-none box-shadow rounded-md outline-none placeholder:text-[#C7C7C7]'></textarea>
            </form>
       
        <img src={ContactImage} alt="ContactImage" className='w-[27rem]'/>
      </div>
    </div>
  )
}
