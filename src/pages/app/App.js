import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import useRoutes from '../../routes';
import useAuth from '../../hooks/auth.hook';
import AuthContext from '../../context/AuthContext';

import './app.css';

function App() {
    const { logIn, logOut, name, password } = useAuth();
    const isAuthenticated = !!(name && password);
    console.log('isAuthenticated: ', isAuthenticated);
    const routes = useRoutes(isAuthenticated); //если true получаем доступ к Map и Profile

    return (
        <AuthContext.Provider value={{ logIn, logOut, name, password, isAuthenticated }}>
            <BrowserRouter>
                <div className="app">
                    { routes }
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
};

export default App;