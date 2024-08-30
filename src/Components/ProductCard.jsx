import React from 'react'
import RatingSystem from './RatingSystem'

export default function ProductCard({data}) {
    const {id, img, desc, title, disc_price, rating} = data
  return (
    <div className='flex flex-col gap-2'>
      <img src={img} alt={`image${id}`} className='rounded-[12px] border-[3px] border-[#E6896D] h-[22rem] md:h-[23rem] ' />
      <div className='p-1'>
        <p className='text-lg font-semibold text-[#FA5C98]'>{title}</p>
        <p>{desc}</p>
        <div><RatingSystem rating={rating}/></div>
        <p className='text-lg text-[#C0590E] font-bold'>{`$${disc_price}`}</p>
      </div>
    </div>
  )
}
