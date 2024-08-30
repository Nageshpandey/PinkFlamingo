import { useState } from 'react';
import { useSelector } from 'react-redux';
import RelatedProductCard from './RelatedProductCard';
import SideButton from '../assets/Group 14141.svg';

export default function RelatedProducts() {
  const data = useSelector((state) => state.data.products);

  // Number of products to display per page
  const productsPerPage = 4;
  const totalPages = Math.ceil(data.length / productsPerPage);

  // Initialize state with visible cards and current page
  const [visibleCards, setVisibleCards] = useState(data.slice(0, productsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  // Update visible cards based on page index
  const updateVisibleCards = (pageIndex) => {
    const startIndex = pageIndex * productsPerPage;
    setVisibleCards(data.slice(startIndex, startIndex + productsPerPage));
    setCurrentPage(pageIndex);
  };

  // Handle previous button click
  const handlePrevious = () => {
    setCurrentPage((prevPage) => {
      const newPage = (prevPage - 1 + totalPages) % totalPages;
      updateVisibleCards(newPage);
      return newPage;
    });
  };

  // Handle next button click
  const handleNext = () => {
    setCurrentPage((prevPage) => {
      const newPage = (prevPage + 1) % totalPages;
      updateVisibleCards(newPage);
      return newPage;
    });
  };

  // Handle pagination dot click
  const handleDotClick = (pageIndex) => {
    updateVisibleCards(pageIndex);
  };

  return (
    <div className='w-screen flex flex-col gap-8 justify-center items-center py-5'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold font-poppins'>Related Products</h1>
      <div className='relative flex flex-col md:flex-row gap-8 justify-center items-center w-full px-4 md:px-10'>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 md:relative md:translate-y-0 md:top-auto'
        >
          <img
            src={SideButton}
            alt="Previous"
            className='h-10 w-10 md:h-[4rem] md:w-[4rem] outline-none'
          />
        </button>

        {/* Product Cards */}
        <div className='flex flex-row flex-wrap w-[20rem] md:w-full h-[33rem] overflow-hidden justify-center items-center gap-4'>
          {visibleCards.map((product) => (
            <RelatedProductCard key={product.id} data={product} />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 md:relative md:translate-y-0 md:top-auto'
        >
          <img
            src={SideButton}
            alt="Next"
            className='rotate-180 h-10 w-10 md:h-[4rem] md:w-[4rem] outline-none'
          />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className='flex gap-2 mt-4'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentPage ? 'bg-[#FA5C98]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
