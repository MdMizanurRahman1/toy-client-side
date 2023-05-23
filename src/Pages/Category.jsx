import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { RiPriceTag3Line } from 'react-icons/ri';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

//Category page where it will redirect to view details page


const Category = ({ category }) => {


    const { _id, image, toyName, price, rating } = category;

    return (
        <div className='mx-auto'>
            <div className='my-24 justify-center'>
                <div className='card w-96 bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300'>
                    <figure>
                        <img src={image} className="rounded-t-lg" />
                    </figure>
                    <div className='card-body'>
                        <h2 className='card-title'>{toyName}</h2>
                        <p className='text-start flex items-center'>
                            <RiPriceTag3Line className='mr-2' />Price: ${price}
                        </p>
                        <p className="text-start flex items-center">
                            <span className="flex items-center">
                                Rating: <BsStarFill className='ml-2 text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className='text-yellow-500' /> <BsStarFill className=' text-yellow-500' /> <BsStarHalf className='mr-2 text-yellow-500' />({rating})
                            </span>
                        </p>

                        <div className='card-actions justify-end'>
                            <Link to={`/toyDetails/${_id}`}>  <button className='btn btn-error flex items-center'>
                                <FiEye className='mr-1' /> View details
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
