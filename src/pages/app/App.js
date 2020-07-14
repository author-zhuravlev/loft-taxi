import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UseRoutes from '../../routes/routes';

import Loading from '../../shared/loader/Loader'

import './app.css';

function App({ isLoading }) {
    return (
        <BrowserRouter>
                {
                    isLoading ?
                    (<Loading />):
                    (<div className="app">
                        <UseRoutes />
                    </div>)
                }
        </BrowserRouter>
    );
};

export default connect(
    state => ({
        isLoading: state.auth.isLoading,
    }),
)(App);