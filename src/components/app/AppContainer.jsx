import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppComponent from './App';
import Loading from '../shared/loader/Loader'

function App({ isLoading }) {
    return (
        <BrowserRouter>
                {
                    isLoading ?
                    (<Loading />):
                    (<AppComponent />)
                }
        </BrowserRouter>
    );
};

App.propTypes = {
    isLoading: PropTypes.bool 
}

const mapStateToProps = state => ({ isLoading: state.authReducer.isLoading });

export default connect(
    mapStateToProps
)(App);
