import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    loading && <div className="radial-progress bg-red-500 text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>;

 if (user) {
    return children;
 }
 else{
    return <Navigate to={"/"}></Navigate>
 }

};

export default PrivateRoute;