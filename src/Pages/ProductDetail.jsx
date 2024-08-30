import { useSelector } from "react-redux";
import RatingSystem from "../Components/RatingSystem";
import RelatedProducts from "../Components/RelatedProducts";
import { useState } from "react";

export default function ProductDetail() {
  const [count, setCount] = useState(1);
  const product = useSelector((state) => state.data.product_details);
  const {
    img,
    brand,
    scent,
    availability,
    title,
    key_info,
    desc,
    rating,
    product_info,
    reviews,
  } = product;

  const [infoDiv, setInfoDiv] = useState('Desc');
  const [currentImg, setCurrentImg] = useState(1);

  return (
    <div className="flex flex-col py-8 px-8 md:px-20 justify-center items-center w-screen overflow-hidden font-poppins">
      <p className="text-lg w-full text-start text-[#C1C1C1] py-3">{`Product > Dhoop Cones > Jar Cones`}</p>
      <div className="flex flex-col md:flex-row w-full justify-between gap-10">
        <div className="flex flex-col-reverse w-full md:flex-row gap-3 justify-center h-fit md:h-[28rem] md:w-1/2 ">
          <div className="flex flex-row w-full md:flex-col justify-between">
            <img src={img[1]} alt="image1" className={` ${currentImg === 1 ? 'border-2' : 'border-none'} border-[#E6896D] w-24 h-24 cursor-pointer`} onClick={() => setCurrentImg(1)} />
            <img src={img[2]} alt="image2" className={` ${currentImg === 2 ? 'border-2' : 'border-none'} border-[#E6896D] w-24 h-24 cursor-pointer`} onClick={() => setCurrentImg(2)} />
            <img src={img[3]} alt="image3" className={` ${currentImg === 3 ? 'border-2' : 'border-none'} border-[#E6896D] w-24 h-24 cursor-pointer`} onClick={() => setCurrentImg(3)} />
            <img src={img[4]} alt="image4" className={` ${currentImg === 4 ? 'border-2' : 'border-none'} border-[#E6896D] w-24 h-24 cursor-pointer`} onClick={() => setCurrentImg(4)} />
          </div>
          <img src={img[currentImg]} alt="image0" className="row-span-4 col-span-3 w-[32rem] p-1" />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/2 px-1 md:px-4 py-2">
          <div className="text-sm font-thin">
            <p className="flex flex-row gap-2 items-start">
              <span className="font-semibold">Brand:</span>
              {brand}
            </p>
            <p className="flex flex-row gap-2 items-start">
              <span className="font-semibold">Scent:</span>
              {scent}
            </p>
            <p className="flex flex-row gap-2 items-start">
              <span className="font-semibold">Availability:</span>
              {`Only ${availability} in stock`}
            </p>
          </div>
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold">{title}</h1>
            <RatingSystem rating={rating} />
          </div>
          <div className="px-4 mb-8">
            <ul className="list-disc">
              <li>{key_info.p1}</li>
              <li>{key_info.p2}</li>
              <li>{key_info.p3}</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row bg-white justify-between px-4 md:justify-start gap-6">
            <div className="flex flex-row items-center font-semibold gap-2">
              {/* Minus Button Box */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#F0F0F0] rounded">
                <button
                  onClick={() => setCount(count === 1 ? 1 : count - 1)}
                  className="outline-none text-lg md:text-xl"
                >
                  -
                </button>
              </div>

              {/* Count Box */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#F0F0F0] rounded">
                <span className="text-lg md:text-xl">{count}</span>
              </div>

              {/* Plus Button Box */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#F0F0F0] rounded">
                <button
                  onClick={() => setCount(count + 1)}
                  className="outline-none text-lg md:text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
              <button className="pbuttonbg py-2 text-sm font-semibold px-4 md:px-6 text-white border-none rounded-md">
                Buy Now
              </button>
              <button className="btn bg-clip-text text-sm font-semibold border border-[#DC8064] py-2 px-4 text-[#DC8064] rounded-md">
                Add to Cart
              </button>
            </div>
          </div>


        </div>
      </div>
      <div className="flex flex-col w-[90vw] lg:w-[70vw]">
        <div className="flex flex-row justify-center py-3 gap-10">
          <p className={`font-medium ${infoDiv === 'Desc' ? 'border-b-2' : 'border-none'} border-[#FA5C98] cursor-pointer`} onClick={() => setInfoDiv('Desc')}>Description</p>
          <p className={`font-medium ${infoDiv === 'Info' ? 'border-b-2' : 'border-none'} border-[#FA5C98] cursor-pointer`} onClick={() => setInfoDiv('Info')}>Product Information</p>
          <p className={`font-medium ${infoDiv === 'Review' ? 'border-b-2' : 'border-none'} border-[#FA5C98] cursor-pointer`} onClick={() => setInfoDiv('Review')}>Reviews</p>
        </div>
        <div className="px-5 py-3">
          <div key={`desc+${1001}`} className={` ${infoDiv === 'Desc' ? 'inline-block' : 'hidden'}`}>{desc}</div>
          <div key={`info+${1002}`} className={` ${infoDiv === 'Info' ? 'inline-block' : 'hidden'}`}>
            <p>{`About Product : ${product_info.about}`}</p>
            <div className="mt-2">
              <h2 className="font-semibold text-lg">Key Features:</h2>
              <ul className="list-disc pl-5">
                {product_info.key_features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            key={`rev+${1003}`}
            className={` ${infoDiv === 'Review' ? 'flex' : 'hidden'} flex-col gap-3 justify-center items-start`}
          >
            {reviews.map((rev, index) => {
              const initials = rev.name.split(' ').map(word => word[0]).join('');
              return (
                <div
                  key={rev.name + index}
                  className="flex flex-col gap-3 items-start"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
                      {rev.profile_picture ? (
                        <img
                          src={rev.profile_picture}
                          alt={`${rev.name}'s profile`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-lg font-bold text-gray-700">
                          {initials}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-base md:text-lg">{rev.name}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm md:text-base">{rev.desc}</p>
                    <p className="text-xs md:text-sm text-gray-500">{rev.review_date}</p>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>
    </div>
  );
}
