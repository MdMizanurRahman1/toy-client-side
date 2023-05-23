import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error))
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-base-200'>
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className="block h-12 w-12" src="car.png" alt="Website Logo" />
                        <h1 className="ml-2 text-black font-bold text-lg">Sports Club</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <Link to='/' className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                            {user?.email ?
                                <>
                                    <Link to="/alltoys" className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
                                    <Link to='/myToys' className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
                                    <button className="text-black" onClick={handleLogOut}>logOut</button>
                                </> : <Link to='/login' className="text-black">Login</Link>
                            }

                            <Link to='/toyPage' className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
                            <Link to='/blog' className="text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                            <div data-tip={user?.displayName} className="tooltip-bottom tooltip">
                                {user ? <div className="navbar-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 text-primary rounded-full">
                                            <img src={user?.photoURL} alt="no photo" />
                                        </div>
                                    </label>
                                </div> : " "}
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="sm:hidden">
                            <button type="button" className="text-black hover:bg-red-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none" onClick={toggleMenu}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Options */}
                {isMenuOpen && (
                    <div className="px-2 pt-2 pb-4 sm:hidden">
                        <Link to='/' className="block text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                        {user?.email ?
                            <>
                                <Link to="/alltoys" className="block text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">All Toys</Link>
                                <Link to='/myToys' className="block text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">My Toys</Link>
                                <button className="block text-black" onClick={handleLogOut}>logOut</button>
                            </> : <Link to='/login' className="block text-black">Login</Link>
                        }

                        <Link to='/toyPage' className="block text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Add A Toy</Link>
                        <Link to='/blog' className="block text-black hover:bg-red-300 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                        <div data-tip={user?.displayName} className="block tooltip-bottom tooltip">
                            {user ? (
                                <div className="navbar-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 text-primary rounded-full">
                                            <img src={user?.photoURL} alt="no photo" />
                                        </div>
                                    </label>
                                </div>
                            ) : (
                                " "
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
