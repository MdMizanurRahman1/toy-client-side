import React from 'react';

const NavBar = () => {
    return (
        <nav className='bg-neutral-100'>
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className="block h-12 w-12" src="car.png" alt="Website Logo" />
                        <h1 className="ml-2 text-black font-bold text-lg">Sports Club</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">All Toys</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">My Toys</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Add A Toy</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
                        <a href="#" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;