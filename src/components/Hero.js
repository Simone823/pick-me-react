import React from 'react';

// import arrow right react ioicon 4
import { IoIosArrowDropright } from 'react-icons/io';

function Hero() {
  return (
    <div className='hero grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-10'>
        {/* text */}
        <div className='text-hero'>
            <h1 className='font-bold text-5xl sm:text-7xl mb-16'>The easiest way to buy Photos as NFT.</h1>
            <a href='/' className='font-semibold text-4xl text-pink-500 hover:text-violet-500 duration-300 flex items-center gap-4 flex-wrap max-w-max'>
                Start Now
                <IoIosArrowDropright className='self-end'/>
            </a>
        </div>

        {/* image hero */}
        <div className='image-hero'>
            <figure className='h h-96'>
                <img className='object-cover object-center rounded-xl shadow-xl shadow-black/50 w-full h-full' src={require('../assets/images/nft-img.png')} alt='nft logo'/>
            </figure>
        </div>
    </div>
  )
}

export default Hero;