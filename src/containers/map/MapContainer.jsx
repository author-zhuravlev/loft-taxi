import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Header from '../header/HeaderContainer';
import { RouteOnTheMap } from '../../components/map/from-to/RouteOnTheMap';
import { MapComponent } from '../../components/map/MapComponent';
import { Prompt } from '../../components/map/prompt/Prompt';
import { checkIsCardData } from '../profile/store/actions';
import { getAddress } from './store/actions';
import { getRoute } from './store/actions';

const Map = ({ isCardData, checkIsCardData, getAddress, getRoute, addresses, coordinates }) => {
    useEffect(() => {
        checkIsCardData();
        getAddress();
    }, [checkIsCardData, getAddress]);

    return (
        <div className="wrapper">
            <Header />
            {isCardData
                ? <RouteOnTheMap
                    getRoute={getRoute}
                    addresses={addresses}
                />
                : <Prompt />}
            <MapComponent
                coordinates={ coordinates }
            />
        </div>
    );
};

Map.protoTypes = {
    isCardData: PropTypes.bool,
    checkIsCardData: PropTypes.func,
    getAddress: PropTypes.func,
    getRoute: PropTypes.func,
    addresses: PropTypes.array,
    coordinates: PropTypes.array,
};

const mapStateToProps = state => ({
    isCardData: state.paymentReducer.isCardData,
    addresses: state.addressReducer.addresses,
    coordinates: state.addressReducer.routes
});
  
const mapDispatchToProps = (dispatch) => ({
    checkIsCardData: () => dispatch(checkIsCardData()),
    getAddress: () => dispatch(getAddress()),
    getRoute: (form) => dispatch(getRoute(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);