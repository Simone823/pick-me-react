import React from 'react';

// import trash icon 
import { IoIosTrash } from 'react-icons/io';

// import cart shop icon react ioicon 4
import { IoIosCart } from 'react-icons/io';

// import use title custom hook
import useTitle from '../customHook/useTitle';

// hook react redux
import { useSelector, useDispatch } from 'react-redux';

// import remove to cart redux cart
import { removeToCart, removeAllToCart } from '../redux/reducers/cart';

function CartShop() {
  // use title custom hook
  useTitle('Carrello');

  // state cart shop
  const {cart, total} = useSelector((state) => state.cartShop);

  // dispatch redux
  const dispatch = useDispatch();

  return (
    <section id='cart-shop'>
      <div className='container mx-auto pt-16 pb-8 px-3'>
        {/* title */}
        <h1 className='text-2xl sm:text-6xl font-bold mb-20'>Carrello</h1>

        {cart.length > 0 ? (
          <div className='wrapper grid grid-cols-1 sm:grid-cols-2'>
            {/* items cart col */}
            <div className='cart-items'>
              {/* btn remove all to cart */}
              <button onClick={() => dispatch(removeAllToCart())} className='font-bold text-lg text-pink-500 hover:text-violet-500 duration-300 mb-6' type='button'>
                Rimuovi tutto
              </button>

              {cart.map((item) => {
                return(
                  <div className='item flex gap-4 flex-wrap mb-6' key={item.id}>
                    {/* img */}
                    <figure className='max-w-xxs w-full h-36'>
                      <img className='w-full object-cover object-center rounded-md' src={item.urls['regular']} alt={item.id}/>
                    </figure>

                    {/* text */}
                    <div className='text flex-grow flex flex-col justify-between'>
                      <h5 className='text-pink-500 font-bold'>Categoria</h5>
                      
                      {/* price */}
                      <div className='price'>
                        <h6 className='text-sm font-bold'>Artista</h6>
                        <p className='font-semibold'>Titolo - {item.likes} &euro;</p>
                      </div>
                    </div>

                    {/* btn remove */}
                    <button onClick={() => dispatch(removeToCart(item.id))} className='self-start text-pink-500 hover:text-violet-500 duration-300' type='button'>
                      <IoIosTrash className='text-2xl'/>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='cart-empty max-w-xl mx-auto text-center border-2 border-gray-500 rounded-lg py-6 px-3 bg-black/60'>
            <IoIosCart className='text-6xl mx-auto mb-6'/>
            <h2 className='font-bold text-xl'>il tuo carrello è vuoto</h2>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartShop;