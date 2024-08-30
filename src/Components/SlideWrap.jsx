// SlideWrap.js
import React, { useState } from 'react';
import Slide from './Slide';
import SlideButton from '../assets/Group 14087.svg';

export default function SlideWrap() {
  const slides = [
    { id: 1, title: "Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses" },
    { id: 2, title: "Unlock New Horizons: Explore Spiritual Wisdom and Guidance" },
    { id: 3, title: "Find Inner Peace: Start Your Journey with Our Spiritual Courses" },
    { id: 4, title: "Awaken Your Spirit: Dive into Knowledge and Enlightenment" },
    { id: 5, title: "Embrace Change: Discover Your True Purpose with Our Teachings" },
    { id: 6, title: "Connect with Your Inner Self: Courses for Mindful Living" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='bg-[#FFEEF6] flex flex-col items-center px-2 md:px-16 py-10'>
      <div className='flex flex-row items-center w-full justify-center'>
        <button onClick={goToPrevSlide}>
          <img src={SlideButton} alt="Previous Slide" className='h-[3rem] w-[3rem]' />
        </button>
        <div className='w-10/12'>
          {slides.map((slide, index) => (
            index === currentIndex && (
              <div key={slide.id}>
                <Slide title={slide.title} />
              </div>
            )
          ))}
        </div>
        <button onClick={goToNextSlide}>
          <img src={SlideButton} alt="Next Slide" className='rotate-180 h-[3rem] w-[3rem]' />
        </button>
      </div>
      <div className='flex gap-2 mt-4'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#FA5C98]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
