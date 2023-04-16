import React, { createContext } from 'react';

export const AuthContext = createContext(null);





const AuthProvider = ({children}) => {
    const user = {name: "Tamim"}
const authInfo ={
    user,
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;