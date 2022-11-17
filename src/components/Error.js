import React from 'react';

function Error({message}) {
  return (
    <div className='error-wrapper border-2 border-red-600 mt-8 py-2 px-3 bg-red-300 rounded-md max-w-md'>
        <p className='uppercase font-bold text-red-600'>{message}</p>
    </div>
  )
}

export default Error;