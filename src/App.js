import React, { useState } from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import locationList from './data/nirvana-landmarks.js';
import mapStyles from './mapstyles';

function Map() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{ lat: 46.9829827, lng: -123.8062302 }} 
      defaultOptions={{styles: mapStyles}}
    >
      {locationList.map(location => (
        <Marker
          key={location.ID}
          position={{
            lat: location.COORDINATES[0],
            lng: location.COORDINATES[1]
          }}
          onClick={() => {
            setSelectedLocation(location);
          }}
          icon={{
            url: '/logo.png',
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}
      {selectedLocation && (
        <InfoWindow
        position={{
          lat: selectedLocation.COORDINATES[0],
          lng: selectedLocation.COORDINATES[1]
        }}
        onCloseClick={() => {
          setSelectedLocation(null);
        }}
        >
          <div>
            <h2>{selectedLocation.NAME}</h2>
            <h4>{selectedLocation.ADDRESS}</h4>
            <p>{selectedLocation.DESCRIPTION}</p>
            <img src={selectedLocation.IMAGE} alt="Kurt Cobain's childhood home"></img>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}