import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// private route for specific route

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to={'/login'} replace></Navigate>
};

export default PrivateRoute;