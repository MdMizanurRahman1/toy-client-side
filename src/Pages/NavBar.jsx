import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.log(error))
    }
    return (
        <nav className='bg-base-200'>
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className="block h-12 w-12" src="car.png" alt="Website Logo" />
                        <h1 className="ml-2 text-black font-bold text-lg">Sports Club</h1>
                    </div>
                    <div className="flex items-center gap-2">
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
                                    <div className="w-10  text-primary rounded-full ">

                                        <img src={user?.photoURL} alt="no photo" />
                                    </div>
                                </label>
                            </div> : " "}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;