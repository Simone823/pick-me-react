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
          <div className='wrapper grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12'>
            {/* items cart col */}
            <div className='cart-items'>
              {/* btn remove all to cart */}
              <button onClick={() => dispatch(removeAllToCart())} className='font-bold text-lg text-pink-500 hover:text-violet-500 duration-300 mb-6' type='button'>
                Rimuovi tutto
              </button>

              {cart.map((item) => {
                return(
                  <div className='item flex gap-6 flex-wrap mb-10' key={item.id}>
                    {/* img */}
                    <figure className='max-w-xxxs w-full h-28'>
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

            {/* form wrapper */}
            <div className='form-wrapper h-max border-2 border-gray-500 rounded-lg py-10 px-8 bg-black/60'>
              <h2 className='font-bold text-xl mb-8'>Dati Pagamento</h2>

              {/* form */}
              <form>
                {/* name surname */}
                <div className='form-group grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'> 
                  <input type='text' className='rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='name' name='name' placeholder='Nome' required minLength='3' maxLength='30'/>
                  <input type='text' className='rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='surname' name='surname' placeholder='Cognome' required minLength='3' maxLength='3'/>
                </div>

                {/* credit number */}
                <div className='form-group mb-8'>
                  <input type='number' className='rounded-full border-2 w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='card' name='card' placeholder='Numero carta di credito' required/>
                </div>

                {/* address, n address, cap */}
                <div className='form-group grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
                  <input type='text' className='rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='address' name='address' placeholder='Indirizzo' required/>
                  <input type='number' className='rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='civic' name='civic' placeholder='N° Civico' required/>
                  <input type='number' className='rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none' id='cap' name='cap' placeholder='CAP' required/>
                </div>

                {/* total nd btn submit */}
                <div className='detail-submit flex items-center justify-between flex-wrap gap-4'>
                  <h4 className='font-bold text-2xl'>{total} &euro;</h4>

                  {/* submit */}
                  <button className='rounded-full bg-gray-300 py-2 px-6 font-bold text-black hover:bg-gray-400 duration-300' type='submit'>
                    Procedi all'acquisto
                  </button>
                </div>
              </form>
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