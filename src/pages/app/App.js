import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import useRoutes from '../../routes';

import './app.css';

function App() {
    const routes = useRoutes(false); //если true получаем доступ к Map и Profile

    return (
        <BrowserRouter>
            <div className="app">
                { routes }
            </div>
        </BrowserRouter>
    )
};

export default App;