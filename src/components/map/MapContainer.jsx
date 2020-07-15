import React from 'react';

import Header from '../header/HeaderContainer';
import RouteOnTheMap from './from-to/RouteOnTheMap';
import MapComponent from './MapComponent';

import './map.css';

const Map = () => {
    return (
        <div className="wrapper">
            <Header />
            <RouteOnTheMap />
            <MapComponent />
        </div>
    );
};

export default Map;