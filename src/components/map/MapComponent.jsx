import React, { useEffect, useRef } from 'react';
import mapboxGl from 'mapbox-gl';
import PropTypes from "prop-types";

import './map.css';

import { drawRoute } from '../../containers/map/drawRoute';

const MAPBOX_TOKEN = "pk.eyJ1Ijoib2xlZy16aHVyYXZsZXYiLCJhIjoiY2tidWlnaWdzMGp0bTJ5bjZuaW5wc3pxZyJ9.LTJViZsyD8gRxziIkYtlaw";

export const MapComponent = ({ coordinates }) => {
    const mapConteiner = useRef();
    const mapObj = useRef();

    useEffect(() => {
        let map;
        mapboxGl.accessToken = MAPBOX_TOKEN;
        
        map = new mapboxGl.Map({
            container: mapConteiner.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.316229, 59.938732],
            zoom: 13
        });

        mapObj.current = map;

        return () => {
            map.remove();
        };
    }, []);
    
    useEffect(() => {
        if (mapObj.current.getLayer('route')) {
                
            mapObj.current
                .removeLayer('route')
                .removeSource('route');
        }

        if (coordinates.length) {
            drawRoute(mapObj.current, coordinates);
        }
    }, [coordinates]);

    return (
        <main id="map-wrapper">
            <div id="map" ref={mapConteiner}></div>
        </main>
    );
};

MapComponent.protoTypes = {
    drawRoute: PropTypes.func,
    coordinates: PropTypes.array
};