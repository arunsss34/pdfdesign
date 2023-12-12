// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => {
    return isAuthenticated ? (
        <Route {...rest} element={<Element />} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;
