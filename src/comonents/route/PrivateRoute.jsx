import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    loading && <div className="radial-progress bg-red-500 text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>;

 if (user) {
    return children;
 }
 else{
    return <Navigate to={"/login"} state={{from : location}}></Navigate>
 }

};

export default PrivateRoute;