import React from 'react'
import Logo from '../assets/favicon.svg'
import Check1 from '../assets/check 1.svg'

export default function WhyPinkFlamingo() {
  return (
    <div className='flex flex-col py-8 w-10/12 bg-[#FFF2F8] gap-4 items-center justify-center font-poppins'>
        <h1 className='text-2xl text-center md:text-5xl font-extrabold'>Why PINK FLAMINGO ?</h1>
      <div className='flex flex-col md:flex-row w-8/12 justify-between items-center gap-10'>
        <img src={Logo} alt="logo"/>
        <div className='flex flex-col gap-1'>
            <div className='flex flex-row gap-2 items-start'><img src={Check1} alt="check" /> <p>Spirituality can provide them with a framework for understanding the universe and their role in it</p></div>
            <div className='flex flex-row gap-2 items-start'><img src={Check1} alt="check" /> <p>Coping with stress and uncertainty</p></div>
            <div className='flex flex-row gap-2 items-start'><img src={Check1} alt="check" /> <p>Spirituality can be a path to personal growth and self-discovery</p></div>
            <div className='flex flex-row gap-2 items-start'><img src={Check1} alt="check" /> <p>Spirituality can provide people with a sense of community and connection with others</p></div>
        </div>
      </div>
    </div>
  )
}
