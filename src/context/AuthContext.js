import { createContext } from 'react';

const fn = () => {};

const AuthContext = createContext({
    logIn: fn,
    logOut: fn,
    name: null,
    password: null,
    isAuthenticated: false
});

export default AuthContext;