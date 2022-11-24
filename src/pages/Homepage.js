import React, {useEffect, useState, useRef} from 'react';

// react redux hook
import {useDispatch, useSelector} from 'react-redux';

// import use title custom hook
import useTitle from '../customHook/useTitle';

// import hero component
import Hero from '../components/Hero';

// import loading component
import Loading from '../components/Loading';

// import error component
import Error from '../components/Error';

// import photo component
import Photo from '../components/Photo';

// import image icon react ioicon
import { IoIosImages } from 'react-icons/io';

// import fetch data redux reducers api
import { fetchData, setQuery, updatCurrentPage } from '../redux/reducers/api';

function Homepage() {
    // use title doc
    useTitle('Homepage');

    // get value state photos redux
    const { loading, error, photos, rateLimit, pagination } = useSelector((state) => state.photos);

    // dispatch redux
    const dispatch = useDispatch();

    // serach query input
    const [inputQuery, setInputQuery] = useState('nft');

    // fecth photos custom
    const fecthPhotos = (page = 1)  => {
        // url
        const url = `/search/photos?query=${inputQuery.trim().toLowerCase()}&`;;

        // set query redux photos
        dispatch(setQuery(`${url}per_page=24&page=${page}`));

        // update current page redux
        dispatch(updatCurrentPage(page));

        // fetch data
        dispatch(fetchData(`${url}per_page=24&page=${page}`));
    }

    // search photo
    const searchPhoto = () => (e) => {
        // fecth photos
        fecthPhotos();
    }

    // prev page
    const prevPage = () => {
        if(pagination.currentPage - 1 !== 0) {
            fecthPhotos(pagination.currentPage - 1);
        } else {
            return;
        }
    }

    // next page
    const nextPage = () => {
        if(pagination.currentPage + 1 <= pagination.total_pages) {
            fecthPhotos(pagination.currentPage + 1);
        } else {
            return;
        }
    }

    // scroll top ref
    const scrollTop = useRef(null);

    // hadle scroll top
    const handleScrollTop = () => {
        if(scrollTop == null) {
            return;
        }

        // window scroll ref current
        scrollTop.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }

    // useeffect one render feth data
    useEffect(()=> {
        fecthPhotos();
    }, []);

    return (
        <section id='home'>
            <div className='container mx-auto pb-20 pt-16 px-3'>
                {/* hero */}
                <Hero/>

                {/* search photo wrapper */}
                <div ref={scrollTop} className='search-wrapper mb-12'>
                    <h4 className='font-bold text-3xl mb-6'>Cerca le tue foto</h4>

                    {/* wrapper */}
                    <div className='wrapper flex items-center justify-between flex-wrap gap-3'>
                        {/* input search photo */}
                        <div className='relative max-w-max'>
                            <input onChange={(e) => setInputQuery(e.target.value)} value={inputQuery} className='pr-10 rounded-full text-md bg-transparent text-gray-400 py-2 px-3 border-2 border-gray-500 focus-visible:outline-none' id='photos' name='photos' placeholder='Cerca la tua foto'/>
                            <IoIosImages onClick={searchPhoto()} className='absolute top-2/4 -translate-y-2/4 right-4 cursor-pointer text-gray-400 hover:text-violet-500 duration-300 text-xl'/>
                        </div>

                        {/* request rate limit*/}
                        <div className='request'>
                            <h5 className='font-semibold text-gray-400'>Richieste: {`${rateLimit.remaining} / ${rateLimit.total}`}</h5>
                        </div>
                    </div>
                </div>

                {/* check value state photos */}
                {!loading && !error.status ? (
                    <>
                        <div className='photos-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center'>
                            {photos.map((photo) => {
                                return <Photo item={photo} id={photo.id} image={photo.urls['regular']} price={photo.likes} key={photo.id}/>
                            })}
                        </div>

                        {/* pagination */}
                        {pagination.total_pages > 0 ? (
                            < div className={`pagination flex items-center ${pagination.currentPage === 1 ? 'justify-end' : 'justify-between'} mt-10`}>
                                {/* prev */}
                                <button onClick={() => { prevPage(); handleScrollTop() }} className={`${pagination.currentPage > 1 ? 'block' : 'hidden'} rounded-full py-2 px-3 border-2 border-pink-500 text-pink-500 hover:border-violet-500 hover:text-violet-500 duration-300`} type='button'>Indietro</button>

                                {/* next */}
                                <button onClick={() => { nextPage(); handleScrollTop() }} className={`${pagination.currentPage === pagination.total_pages ? 'hidden' : ''} rounded-full py-2 px-3 border-2 border-pink-500 text-pink-500 hover:border-violet-500 hover:text-violet-500 duration-300`} type='button'>Avanti</button>
                            </div>
                        ) : ''}
                    </>
                ) : !loading && error.status ? (
                    <Error message={error.message}/>
                ) : (
                    <Loading/>
                )}
            </div>
        </section>
    )
}

export default Homepage;