import React from 'react';

import Header from '../components/Header';
import RouteOnTheMap from '../components/RouteOnTheMap';
import MapComponent from '../components/MapComponent';

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