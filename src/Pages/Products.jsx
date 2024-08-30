import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard';
import Paggination from '../Components/Paggination';
import { Link } from 'react-router-dom';

export default function Products() {
  const data = useSelector(state => state.data.products)
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState('');

  // Function to update items per page based on screen width
  const updateItemsPerPage = () => {
    if (window.innerWidth <= 600) {
      setItemsPerPage(8);
    } else {
      setItemsPerPage(16);
    }
  };

  // Handle price filter change and reset current page
  const handlePriceFilterChange = (event) => {
    setSelectedPrice(event.target.value);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  // Filter products based on the selected price
  const filteredProducts = data.filter(product => {
    if (selectedPrice === '') return true;
    return product.disc_price <= parseInt(selectedPrice);
  });

  // Update items per page on resize
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  // Get the products for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='px-10 lg:px-20 py-6 flex flex-col gap-2 font-poppins'>
      <p className='text-lg text-[#C1C1C1]'>{`Product > Dhoop Cones > Jar Cones`}</p>
      <div className='flex flex-row gap-4'>
        <select
          name="price"
          id="price"
          className='custom-select w-[6.5rem] border-2 border-[#B7B7B7] rounded-2xl'
          value={selectedPrice}
          onChange={handlePriceFilterChange}
        >
          <option value="">Price ($)</option>
          <option value="2">Up to $2</option>
          <option value="10">Up to $10</option>
          <option value="20">Up to $20</option>
          <option value="30">Up to $30</option>
        </select>
        <select name="" id="" className='custom-select w-[7rem] md:w-[10rem] border-2 border-[#B7B7B7] rounded-2xl'>
          <option value="">Category</option>
          <option value="Cone Dhoop">Cone Dhoop</option>
          <option value="Incense Holders">Incense Holders</option>
          <option value="Incense Sticks">Incense Sticks</option>
          <option value="Shankh">Shankh</option>
          <option value="Kalash">Kalash</option>
          <option value="">Buddha Statue</option>
        </select>
      </div>
      <div className='grid grid-flow-row auto-rows-max md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 pt-4 pb-10'>
        {
          currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <Link key={index + product.id} to='/productdetails'>
                <ProductCard data={product} />
              </Link>
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>No products available</p>
          )
        }
      </div>
      <div className='w-full flex justify-center'>
        <Paggination
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
