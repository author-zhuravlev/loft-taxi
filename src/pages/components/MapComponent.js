// import React, { useState } from 'react';
// import ReactMapGl from 'react-map-gl';

// const MapComponent = () => {
//     const [viewport, setViewport] = useState({
//         latitude: 48.5717084,
//         longitude: 39.2973153,
//         width: '100vw',
//         height: '100vh',
//         zoom: 13,
//     });

//     const changeViewport = viewport => setViewport(viewport);

//     return (
//         <div id="map">
//             <ReactMapGl
//                 {...viewport}
//                 mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//                 onViewportChange={changeViewport}
//             >
//             </ReactMapGl>
//         </div>
//     )
// };

// export default MapComponent;

import React, { useEffect } from 'react';
import mapboxGl from 'mapbox-gl';

const MapComponent = () => {

    let map = null;
    const mapConteiner = React.createRef(map);
    const MAPBOX_TOKEN = "pk.eyJ1Ijoib2xlZy16aHVyYXZsZXYiLCJhIjoiY2tidWlnaWdzMGp0bTJ5bjZuaW5wc3pxZyJ9.LTJViZsyD8gRxziIkYtlaw";

    useEffect((map) => {
        mapboxGl.accessToken = MAPBOX_TOKEN;

        map = new mapboxGl.Map({
            container: mapConteiner.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [39.2973153, 48.5717084],
            zoom: 13
        });

        return () => {
            map.remove();
        };
    }, [map, mapConteiner]);

    return (
        <div id="map-wrapper">
            <div id="map" ref={mapConteiner}></div>
        </div>
    );
};

export default MapComponent;