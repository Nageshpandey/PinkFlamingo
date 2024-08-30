import React from 'react'
import C1 from '../assets/Rectangle 14.png'
import C2 from '../assets/Rectangle 15.png'
import C3 from '../assets/Rectangle 16.png'
import C4 from '../assets/Rectangle 17.png'
import C5 from '../assets/Rectangle 18.png'
import C6 from '../assets/Rectangle 19.png'

export default function Categories() {
    const items = [
        {
            img:C1,
            title:"Cone Dhoop"
        },
        {
            img:C2,
            title:"Incense Holders"
        },
        {
            img:C3,
            title:"Incense Sticks"
        },
        {
            img:C4,
            title:"Shankh"
        },
        {
            img:C5,
            title:"Kalash"
        },
        {
            img:C6,
            title:"Buddha Statue"
        }
    ]
  return (
    <div className='flex flex-col gap-3 py-8 px-2'>
      <h3 className='custom-heading'>Shop From Our Top Categories</h3>
      <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
        {
            items.map((item, index)=>{
               return <div key={index} className='text-center navbar'>
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                    <p className='text-[#FA5C98] font-[500]'>Shop Now</p>
                    </div>
                
            })
        }
      </div>
      
    </div>
  )
}
