import React from 'react';

export default function BlogCard(props) {
    const { img, title, desc, date } = props.data;

    return (
        <div className='flex flex-col gap-4 w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-auto shadow-md rounded-md'>
            <img
                src={img}
                alt="blogimg"
                className='w-full h-[18rem] object-cover rounded-t-md'
            />
            <div className='flex flex-col p-4 justify-center items-center gap-2 md:gap-4'>
                <h3 className='font-bold text-base md:text-lg text-center'>{title}</h3>
                <p className='text-sm md:text-base'>
                    {desc}
                </p>
                <button className='blogbutton py-2 px-5 text-white text-sm md:text-base'>
                    Read More
                </button>
            </div>
            <p className='text-gray-300 text-xs md:text-sm px-4 py-3'>
                {date}
            </p>
        </div>
    );
}
