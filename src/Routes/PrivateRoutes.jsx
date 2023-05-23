import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-10 w-10"></div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoutes;
