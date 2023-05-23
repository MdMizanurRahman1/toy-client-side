import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaMoneyBill, FaUser, FaEnvelope, FaBox, FaStar } from 'react-icons/fa';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import useTitle from '../hooks/useTitle';

// detail descriptions with detail page

const ToyDetails = () => {
    useTitle('Toy Details')
    const details = useLoaderData();
    const { toyName, sellerName, image, sellerEmail, price, rating, availableQuantity, detailDescription } = details;

    return (
        <div className="card lg:card-side shadow-xl w-10/12 mx-auto my-32">
            <div className='card lg:card-side bg-pink-50 shadow-xl h-96'>
                <div className="relative flex justify-center items-center">
                    <img
                        src={image}
                        alt={toyName}
                        style={{ height: '80%', width: '100%' }}
                        className='hover:scale-105 transition-transform duration-300 rounded-lg'
                    />
                </div>

                <div style={{ width: '645px' }} className='card-body'>
                    <h2 className='card-title'>{toyName}</h2>
                    <div className="flex items-center">
                        <FaMoneyBill className="mr-2" style={{ color: 'green' }} />
                        <p>Price: {price}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-start flex items-center">
                            <span className="flex items-center">
                                <FaStar className='text-yellow-500 mr-2' /> Rating: <BsStarFill className='ml-2 text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className=' text-yellow-500' /> <BsStarHalf className='mr-2 text-yellow-500' />({rating})
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FaBox className="mr-2" style={{ color: 'blue' }} />
                        <p>Quantity: {availableQuantity}</p>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <p>Seller Name: {sellerName}</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaEnvelope className="mr-2" />
                        <p>Seller Email: {sellerEmail}</p>
                    </div>
                    <div >
                        <p className='text-lg mb-2'>Details: <span className='text-sm'>{detailDescription}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
