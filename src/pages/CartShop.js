import React, {useEffect} from 'react';

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

// import formik
import {Formik} from 'formik';

// import all yup
import * as Yup from 'yup';

function CartShop() {
  // use title custom hook
  useTitle('Carrello');

  // state cart shop
  const {cart, total} = useSelector((state) => state.cartShop);

  // dispatch redux
  const dispatch = useDispatch();

  // initial value form
  const form = {
    name: '',
    surname: '',
    card: '',
    address: '',
    civic: '',
    cap: '',
  }

  // validation schema form yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Il Nome deve essere composto da almeno 3 caratteri')
      .max(25, 'Il nome può contenere massimo 25 caratteri')
      .required('Il campo Nome è richiesto')
      .matches(/^[a-zA-Z\s]*$/, 'Il Nome può contenere solo lettere e spazi'),

    surname: Yup.string()
      .min(3, 'Il Cognome deve essere composto da almeno 3 caratteri')
      .max(25, 'Il nome può contenere massimo 25 caratteri')
      .required('Il campo Cognome è richiesto')
      .matches(/^[a-zA-Z\s]*$/, 'Il Cognome può contenere solo lettere e spazi'),

    card: Yup.string()
      .required('Il campo n° carta di credito è richiesto'),

    address: Yup.string()
      .min(3, "L'indirizzo deve essere composto da almeno 3 caratteri")
      .max(255, "L'indirizzo può contenere massimo 255 caratteri")
      .required('Il campo Indirizzo è richiesto')
      .matches(/^[a-zA-Z\s]*$/, "L'indirizzo può contenere solo lettere e spazi"),

    civic: Yup.string()
      .required('Il campo n° civico è richiesto'),

    cap: Yup.string()
      .required('Il campo Cap è richiesto')
      .min(5, 'Il Cap deve essere composto da 5 caratteri numerici')
      .max(5, 'Il Cap può contenere solo 5 caratteri numerici')
      .matches(/^[0-9]{5}$/, 'Inserire un CAP Italiano')
  });

  // useeffect one render scroll top
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, []);

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
              <Formik
                initialValues={form}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    actions.resetForm(form);
                  }, 500);
                }}
              >
                {props => (
                  <form onSubmit={props.handleSubmit}>
                    {/* Name surname */}
                    <div className='form-group grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                      {/* name */}
                      <div className='name'>
                        <input onBlur={props.handleBlur} value={props.values.name} onChange={props.handleChange} type='text' className={`${props.errors.name ? 'border-red-500' : ''} w-full rounded-full border-2 border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='name' name='name' placeholder='Nome'/>
                        {props.errors.name && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.name}</p>}
                      </div>

                      {/* surname */}
                      <div className='surname'>
                        <input onBlur={props.handleBlur} value={props.values.surname} onChange={props.handleChange} type='text' className={`${props.errors.surname ? 'border-red-500' : ''} w-full rounded-full border-2 border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='surname' name='surname' placeholder='Cognome'/>
                        {props.errors.surname && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.surname}</p>}
                      </div>
                    </div>

                    {/* credit number */}
                    <div className='form-group mb-8'>
                      <input onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.card} type='text' className={`${props.errors.card ? 'border-red-500' : ''} rounded-full border-2 w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='card' name='card' placeholder='Numero carta di credito'/>
                      {props.errors.card && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.card}</p>}
                    </div>

                    {/* address, n address, cap */}
                    <div className='form-group grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
                      {/* address */}
                      <div className='address'>
                        <input onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.address} type='text' className={`${props.errors.address ? 'border-red-500' : ''} rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='address' name='address' placeholder='Indirizzo'/>
                        {props.errors.address && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.address}</p>}
                      </div>

                      {/* civic */}
                      <div className='civic'>
                        <input onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.civic} type='text' className={`${props.errors.civic ? 'border-red-500' : ''} rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='civic' name='civic' placeholder='N° Civico'/>
                        {props.errors.civic && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.civic}</p>}
                      </div>
                      
                      {/* cap */}
                      <div className='cap'>
                        <input onBlur={props.handleBlur} onChange={props.handleChange} value={props.values.cap} type='text' className={`${props.errors.cap ? 'border-red-500' : ''} rounded-full border-2 max-w-full border-gray-500 bg-transparent py-2 px-4 text-gray-300 focus-visible:outline-none`} id='cap' name='cap' placeholder='CAP'/>
                        {props.errors.cap && <p id="feedback" className='text-sm text-red-500 mt-2'>{props.errors.cap}</p>}
                      </div>
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
                )}
              </Formik>
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