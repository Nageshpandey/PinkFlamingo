import { BsCart } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { useState } from "react";

export default function RelatedProductCard({ data }) {
  const { id, img, title, disc_price, stock, label } = data;

  const [addToFav, setAddToFav] = useState(false);

  // Determine label styles based on label type
  const getLabelStyles = (labelType) => {
    switch (labelType) {
      case '-10%':
        return 'bg-red-500 text-white'; 
      case 'HOT':
        return 'bg-orange-500 text-white'; 
      case 'New':
        return 'bg-green-500 text-white'; 
      default:
        return 'bg-green-300 text-white';
    }
  };

  // Determine the label style based on product's label attribute
  const labelStyles = stock === 0 
    ? 'bg-gray-400 text-gray-700'
    : getLabelStyles(label);

  return (
    <div className='flex flex-col gap-4 w-[19rem] justify-center items-center px-2 py-4'>
      <div className='flex flex-col w-full h-[27.5rem] justify-between items-center px-2 py-3 border-2 border-[#E6896DCC] rounded-[8px]'>
        <div className='flex flex-row w-full justify-between items-center'>
          <p className={`text-xs rounded-md px-1.5 ${labelStyles}`}>
            {label || 'New'} {}
          </p>
          <p 
            className='p-1.5 rounded-[50%] border-[1px] border-[#FFF2F8] cursor-pointer'
            onClick={() => setAddToFav(!addToFav)}
          >
            <MdOutlineFavorite fill={addToFav ? '#FA5C98' : '#D7D7D7'} className='text-2xl' />
          </p>
        </div>
        <img src={img} alt={`Image${id}`} />
        <button 
          className={`flex flex-row items-center justify-center gap-2 px-5 font-medium text-white py-2 ${stock === 0 ? 'bg-[#C6C6C6]' : 'cardbutton'} rounded-[7px] outline-none w-fit`} 
          style={stock === 0 ? { position: 'relative', bottom: '50px' } : {}}
        >
          <BsCart /> {stock === 0 ? 'Out Of Stock' : 'Add To Cart'}
        </button>
      </div>
      <div className='w-full flex flex-col gap-1 justify-center items-center'>
        <h1 className='font-semibold uppercase text-[#FA5C98]'>{title}</h1>
        <p className='text-[#E28569] font-bold'>{`$${disc_price}`}</p>
      </div>
    </div>
  );
}
