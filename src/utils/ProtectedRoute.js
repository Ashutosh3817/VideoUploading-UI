import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ loggedInUser, children }) => {
    if (!loggedInUser) {
        return <Navigate to="/signin" replace />;
    }
    return <Route>{children}</Route>;
};

export default ProtectedRoute;
