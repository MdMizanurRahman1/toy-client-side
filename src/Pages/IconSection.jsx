import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


// another extra section for home page

const IconSection = () => {

    //AOs animation

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])




    return (
        <div className='my-32 px-10'>
            <h2 className='text-2xl text-center'>Our Blogs</h2>
            <div className=' gap-5 justify-center mt-5'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className='card lg:card-side bg-pink-50 shadow-xl h-96 hover:scale-105 transition-transform duration-300' data-aos="zoom-in-up">
                        <figure className='relative'>
                            <img
                                src='https://i.ibb.co/txrQb6C/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg'
                                alt='Album'
                                style={{ height: '400px' }}
                                className='hover:opacity-75 focus:opacity-75 transition-opacity duration-300'
                            />
                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title'>Released new car blog!</h2>
                            <p>
                                Our car blog is dedicated to providing you with a wealth of information, insights, and resources related to cars!...
                            </p>
                            <div className='card-actions justify-end'>
                                <button className='btn btn-error hover:bg-red-600'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='card lg:card-side bg-pink-50 shadow-xl h-96 hover:scale-105 transition-transform duration-300' data-aos="zoom-in-up">
                        <figure className='relative'>
                            <img
                                src='https://i.ibb.co/tYJX0by/carl-figuracion-fs33-QGYh-Nw-I-unsplash.jpg'
                                alt='Album'
                                style={{ height: '400px' }}
                                className='hover:opacity-75 focus:opacity-75 transition-opacity duration-300'
                            />
                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title'>Our customer Stefany says!</h2>
                            <p>
                                Welcome to our car blog, your ultimate destination for all things automotive, insights, and resources!...
                            </p>
                            <div className='card-actions justify-end'>
                                <button className='btn btn-error hover:bg-red-500'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconSection;