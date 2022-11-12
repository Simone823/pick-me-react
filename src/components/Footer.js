import React from 'react';

// import logo footer
import Logo from '../assets/images/logo-footer.svg';

function Footer() {
    return (
        <footer id='footer' className='bg-zinc-900 text-white'>
            <div className='container mx-auto px-3 py-6 flex gap-6 flex-wrap'>
                {/* figure logo */}
                <figure>
                    <img src={Logo} alt='logo footer'/>
                </figure>

                {/* title */}
                <div className='title flex flex-col justify-between'>
                    <h5>pick me</h5>
                    <a href='https://simonedaglio.web.app/' className='text-sm text-gray-100 font-semibold hover:text-violet-500 duration-300'>@Simone Daglio</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;