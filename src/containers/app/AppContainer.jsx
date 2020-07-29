import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { AppComponent } from "../../components/app/App";
import { Loader } from "../../components/shared/loader/Loader";
import { checkIsAuth } from "../login/store/actions";
// import { useDispatch } from "react-redux"; использовать для получения данных redux

function App({ isLoading, checkIsAuth }) {
    useEffect(() => {
        checkIsAuth();
    }, [checkIsAuth]);

    return (
        <BrowserRouter>
            {isLoading
                ? <Loader />
                : <AppComponent />
            }
        </BrowserRouter>
    );
}

App.propTypes = {
    isLoading: PropTypes.bool,
    checkIsAuth: PropTypes.func
};

const mapStateToProps = state => ({
    isLoading: state.authReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  checkIsAuth: () => dispatch(checkIsAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
