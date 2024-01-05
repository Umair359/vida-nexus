import React from 'react'
import { Route, Navigate } from 'react-router-dom';

const isAuthenticatedAsAdmin = () => {
    return false;
}
const ProtectedRoute = ({ path, element: Element }) => (
    <Route path={path} element={isAuthenticatedAsAdmin() ? <Element /> : <Navigate to="/login" replace={true} />}
    />
);

export default ProtectedRoute
