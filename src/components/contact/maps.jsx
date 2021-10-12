import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMaps = (props) => {
  const mapStyles = {
    width: '50%',
    height: '70%'
  };

  return (
    <>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXuu-KCpTnGwGp70VvwHdyGC4QL2PjA0M'
})(GoogleMaps);
