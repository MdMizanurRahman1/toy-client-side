import React from 'react';
import { Link, useRouteError } from "react-router-dom";

// error page handeling

const Error = () => {
    const error = useRouteError();

    return (
        <div className='flex justify-center h-3/4 w-3/4 my-20 mx-auto' id="error-page">
            <div className="hero bg-base-200 rounded-lg shadow-xl hover:shadow-xl transition duration-500">
                <div className="hero-content flex flex-col lg:flex-row items-center justify-center">
                    <div>
                        <img src="https://i.ibb.co/52F2jWL/404-error-isometric-illustration-23-2148509538.jpg" className="max-w-sm rounded-lg shadow-2xl transform hover:scale-110 transition duration-500" alt="Error" />
                    </div>
                    <div className="text-center lg:text-left lg:ms-14 p-10">
                        <h1 className="text-5xl font-bold italic">{error.statusText || error.message}</h1>
                        <p className="py-6">OOPS! SORRY FOR THE ERROR!</p>
                        <Link to='/'>
                            <button className="btn btn-error hover:bg-red-600 hover:text-white">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
