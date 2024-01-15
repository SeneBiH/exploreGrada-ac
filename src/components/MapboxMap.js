import React, { useState } from 'react';
import { Map, Marker, Popup } from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Import mapbox-gl-geocoder CSS if you are using it (optional)

const MapboxMap = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 44.87472200,
    longitude: 18.42909990,
    zoom: 12,
  });

  const locations = [
    {
      id: 1,
      name: 'Gradačac Location 1',
      latitude: 44.87972200,
      longitude: 18.43809990,
      photo: 'https://example.com/photo1.jpg',
      description: 'Description of Gradačac Location 1',
    },
    {
      id: 2,
      name: 'Gradačac Location 2',
      latitude: 44.87072200,
      longitude: 18.42409990,
      photo: 'https://example.com/photo2.jpg',
      description: 'Description of Gradačac Location 2',
    },
    // Add more locations...
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);

  const renderPopup = () => {
    return (
      selectedLocation && (
        <Popup
          latitude={selectedLocation.latitude}
          longitude={selectedLocation.longitude}
          onClose={() => setSelectedLocation(null)}
        >
          <div>
            <h3>{selectedLocation.name}</h3>
            <img src={selectedLocation.photo} alt={selectedLocation.name} style={{ maxWidth: '200px' }} />
            <p>{selectedLocation.description}</p>
          </div>
        </Popup>
      )
    );
  };

  const markers = locations.map((location) => (
    <Marker
      key={location.id}
      latitude={location.latitude}
      longitude={location.longitude}
      offsetLeft={-12}
      offsetTop={-24}
    >
      <button className="marker-button" onClick={() => setSelectedLocation(location)}>
        <img src="https://example.com/marker-icon.svg" alt="Marker Icon" style={{ width: '25px' }} />
      </button>
    </Marker>
  ));

  return (
    <div>
      <Map
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZW5lc3NhaGFjaWMxOSIsImEiOiJjbGtjanN5cHUwbDdpM2VwZjByM2NibXBoIn0.MhL46UgmStuLmMtMhL8swA"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {markers}
        {renderPopup()}
      </Map>
    </div>
  );
};

export default MapboxMap;
