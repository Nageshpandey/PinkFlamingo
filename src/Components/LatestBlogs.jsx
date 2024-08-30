import React, { useState, useEffect } from 'react';
import R1 from '../assets/Rectangle 65.png';
import R2 from '../assets/Rectangle 67.png';
import R3 from '../assets/Rectangle 69.png';
import SideButton from '../assets/Group 14141.svg';
import BlogCard from './BlogCard';

export default function LatestBlogs() {
    const [data] = useState([
        {
            img: R1,
            title: 'The Power of Mindfulness',
            desc: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way.',
            date: '28-08-2024'
        },
        {
            img: R2,
            title: 'Connecting with the Divine',
            desc: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.',
            date: '15-08-2024'
        },
        {
            img: R3,
            title: 'The Beauty of Forgiveness',
            desc: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding.',
            date: '30-07-2024'
        },
        {
            img: R1,
            title: 'The Power of Mindfulness',
            desc: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way.',
            date: '18-07-2022'
        },
        {
            img: R2,
            title: 'Connecting with the Divine',
            desc: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness.',
            date: '05-06-2024'
        },
        {
            img: R3,
            title: 'The Beauty of Forgiveness',
            desc: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of understanding.',
            date: '12-05-2024'
        }
    ]);
    
    const [visibleCards, setVisibleCards] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    // Function to determine how many cards to display based on screen size
    const getCardsToShow = () => {
        if (window.innerWidth < 640) return 1; // Show 1 card on small devices
        if (window.innerWidth < 1024) return 2; // Show 2 cards on medium devices
        return 3; // Show 3 cards on large devices
    };

    // Update visible cards whenever screen size or start index changes
    useEffect(() => {
        const cardsToShow = getCardsToShow();
        setVisibleCards(data.slice(startIndex, startIndex + cardsToShow));
    }, [startIndex, data]);

    // Update the number of cards displayed on window resize
    useEffect(() => {
        const handleResize = () => {
            const cardsToShow = getCardsToShow();
            setVisibleCards(data.slice(startIndex, startIndex + cardsToShow));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [startIndex, data]);

    const handlePrevious = () => {
        const cardsToShow = getCardsToShow();
        setStartIndex((prevIndex) => (prevIndex - cardsToShow + data.length) % data.length);
    };

    const handleNext = () => {
        const cardsToShow = getCardsToShow();
        setStartIndex((prevIndex) => (prevIndex + cardsToShow) % data.length);
    };

    return (
        <div className='w-screen flex flex-col gap-8 justify-center items-center py-5'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold font-poppins'>Our Latest Blogs</h1>
            <div className='relative flex flex-row justify-center items-center w-full px-3 md:px-10 gap-4 font-poppins'>
                <button
                    onClick={handlePrevious}
                    className='absolute left-2 z-10 p-2'
                >
                    <img src={SideButton} alt="Previous Button" className='h-8 w-8 md:h-10 md:w-10' />
                </button>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[90%]'>
                    {visibleCards.map((blog) => (
                        <BlogCard key={blog.title} data={blog} />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className='absolute right-2 z-10 p-2'
                >
                    <img src={SideButton} alt="Next Button" className='h-8 w-8 md:h-10 md:w-10 rotate-180' />
                </button>
            </div>
        </div>
    );
}
