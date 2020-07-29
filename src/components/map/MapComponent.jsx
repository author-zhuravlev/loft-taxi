import React, { useEffect } from 'react';
import mapboxGl from 'mapbox-gl';
import PropTypes from "prop-types";

import './map.css';

export const MapComponent = ({ drawRoute, coordinates }) => {
    let map = null;
    const mapConteiner = React.createRef(map);
    const MAPBOX_TOKEN = "pk.eyJ1Ijoib2xlZy16aHVyYXZsZXYiLCJhIjoiY2tidWlnaWdzMGp0bTJ5bjZuaW5wc3pxZyJ9.LTJViZsyD8gRxziIkYtlaw";

    useEffect(map => {
        mapboxGl.accessToken = MAPBOX_TOKEN;

        map = new mapboxGl.Map({
            container: mapConteiner.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.316229, 59.938732],
            zoom: 15
        });

        map.on('styledata', () => { //////////////////// ? 
            if (coordinates.length && map) {
                drawRoute(map, coordinates);
            }
        });

        return () => {
            map.remove();
        };
    }, [map, mapConteiner, drawRoute, coordinates]);

    return (
        <div id="map-wrapper">
            <div id="map" ref={mapConteiner}></div>
        </div>
    );
};

MapComponent.protoTypes = {
    drawRoute: PropTypes.func,
    coordinates: PropTypes.array
};