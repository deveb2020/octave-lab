import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Translate } from 'react-bootstrap-icons';

const GoogleMaps = (props) => {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <div className="google_maps">
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 57.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 57.0, lng: -122.0 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXuu-KCpTnGwGp70VvwHdyGC4QL2PjA0M'
})(GoogleMaps);
