import React from 'react';
import '../assets/css/components/photo.css';

// import cart shop icon
import { IoMdCart } from 'react-icons/io';

function Photo({id, image, price}) {
  return (
    <div className='card-photo relative w-full max-w-sm h-80 overflow-hidden cursor-pointer'>
      {/* image */}
      <figure className='w-full h-full shadow-lg'>
        <img className='w-full object-cover object-center' src={image} alt={id}/>
      </figure>

      {/* controls */}
      <div className='controls absolute bottom-0 w-full h-16 bg-gray-100 text-black flex items-center px-3'>
        <div className='wrapper w-full flex items-center justify-between gap-2'>
          {/* price */}
          <p className='font-bold'>{price} &euro;</p>

          {/* btn add to cart */}
          <button type='button' className='p-2 rounded-full bg-pink-500 text-xl text-white hover:bg-violet-500 duration-300'>
            <IoMdCart/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Photo;