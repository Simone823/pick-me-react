import React from 'react';
import {Link, useLocation} from 'react-router-dom';

// import logo svg
import Logo from '../assets/images/logo.svg';

// import cart shop icon react ioicon 4
import { IoIosCart } from 'react-icons/io';

function Header() {
    // location url
    const {pathname} = useLocation();

    return (
        <header id='header' className='h-14 flex items-center bg-zinc-900 fixed w-full z-50'>
            <div className='container mx-auto px-3 flex items-center justify-between gap-6'>
                {/* logo */}
                <Link to='/'>
                    <figure>
                        <img src={Logo} alt='logo'/>
                    </figure>
                </Link>

                {/* icon cart shop */}
                <Link to='/cart-shop' className={`${pathname === '/cart-shop' ? 'bg-violet-500' : 'bg-white'} rounded-full hover:bg-violet-500 hover:scale-105 duration-300 text-2xl p-1`}>
                    <IoIosCart/>
                </Link>
            </div>
        </header>
    )
}

export default Header;