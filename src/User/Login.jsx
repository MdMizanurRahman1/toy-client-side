import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

// log in page

const Login = () => {
    useTitle('Login')
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })

            })
            .catch(error => setError(error.message))
    }


    const handleButtonGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div className="hero min-h-screen py-14 bg-rose-50">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <span>Are you new here? <Link to="/register" className="text-primary">Register please!</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-error hover:bg-red-600 text-white" type="submit" value="Login" />


                            </div>
                        </form>
                        <div>
                            <button onClick={handleButtonGoogleLogIn} className="btn w-full mt-4 bg-white text-black hover:bg-gray-200">
                                <FaGoogle className="mr-3 text-red-500 " />
                                <span> Login with Google</span>
                            </button>
                        </div>
                        <div>
                            <p className="text-error">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
