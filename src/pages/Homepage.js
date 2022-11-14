import React from 'react';

// import use title custom hook
import useTitle from '../customHook/useTitle';

// import hero component
import Hero from '../components/Hero';

// import image icon react ioicon
import { IoIosImages } from 'react-icons/io';

function Homepage() {
    // use title doc
    useTitle('Homepage');

    return (
        <section id='home'>
            <div className='container mx-auto pb-6 pt-16 px-3'>
                {/* hero */}
                <Hero/>

                {/* photos wrapper */}
                <div className='photos-wrapper'>
                    <h4 className='font-bold text-3xl mb-6'>Cerca le tue foto</h4>

                    {/* input search photos */}
                    <div className='relative max-w-max'>
                        <input className='pr-10 rounded-full text-md bg-transparent text-gray-400 py-2 px-3 border-2 border-gray-500 focus-visible:outline-none' id='photos' name='photos' placeholder='Cerca la tua foto' required/>
                        <IoIosImages className='absolute top-2/4 -translate-y-2/4 right-4 cursor-pointer text-gray-400 hover:text-violet-500 duration-300'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homepage;