import React from 'react';

function Loading() {
  return (
    <div className='loading-wrapper flex flex-col items-center mt-16 gap-y-4'>
        {/* spinner */}
          <div className='spinner rounded-full border-4 border-pink-500 w-14 h-14 border-t-transparent animate-[rotateInfinite_1s_linear_infinite] shadow-lg'></div>
        {/* text */}
        <p className='font-bold text-md'>Caricamento...</p>
    </div>
  )
}

export default Loading;