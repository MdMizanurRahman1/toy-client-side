import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-base-200'>
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className="block h-12 w-12" src="car.png" alt="Website Logo" />
                        <h1 className="ml-2 text-black font-bold text-lg">Sports Club</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link to='/' className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">All Toys</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">My Toys</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Add A Toy</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
                        <Link className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium" to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;