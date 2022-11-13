import React from 'react';

// import arrow right react ioicon 4
import { IoIosArrowDropright } from 'react-icons/io';

function Hero() {
  return (
    <div className='hero grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-10 mb-20'>
        {/* text */}
        <div className='text-hero'>
            <h1 className='font-bold text-5xl md:text-6xl  mb-16'>Il modo più semplice per acquistare foto come NFT.</h1>
            <a href='/' className='font-semibold text-4xl text-pink-500 hover:text-violet-500 duration-300 flex items-center gap-4 flex-wrap max-w-max'>
                Inizia Ora
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