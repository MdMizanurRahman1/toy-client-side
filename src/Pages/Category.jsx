import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { RiPriceTag3Line } from 'react-icons/ri';
import { FiEye } from 'react-icons/fi';

const Category = ({ category }) => {


    return (
        <div className='mx-auto'>
            <div className='my-24 justify-center'>
                <div className='card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300'>
                    <figure>
                        <img src={category.image} alt={category.toyName} className="rounded-t-lg" />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>{category.toyName}</h2>
                        <p className='text-start flex items-center'>
                            <RiPriceTag3Line className='mr-2' />Price: ${category.price}
                        </p>
                        <p className="text-start flex items-center">
                            <span className="flex items-center">
                                Rating: <BsStarFill className='ml-2 text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className=' text-yellow-500' /> <BsStarHalf className='mr-2 text-yellow-500' />({category.rating})
                            </span>
                        </p>

                        <div className='card-actions justify-end'>
                            <button className='btn btn-error flex items-center'>
                                <FiEye className='mr-1' /> View details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
