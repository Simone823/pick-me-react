import React from 'react';

// import logo footer
import {ReactComponent as Logo} from '../assets/images/logo-footer.svg';

function Footer() {
    return (
        <footer id='footer' className='bg-zinc-900 text-white'>
            <div className='container mx-auto px-3 py-6 flex gap-6 flex-wrap'>
                {/* figure logo */}
                <figure>
                    <Logo/>
                </figure>

                {/* title */}
                <div className='title flex flex-col justify-between'>
                    <h5>pick me</h5>
                    <p className='text-sm text-gray-400 font-semibold'>Store NFT photo react</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;