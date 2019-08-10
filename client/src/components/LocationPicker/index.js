import React, { useRef, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./LocationPicker.css";

const LocationPicker = ({ userLat = 36.896768, userLng = 126.619648, setFieldValue}) => {
  const [hasLocation, setHasLocation] = useState(false);
  const [lat, setLat] = useState(userLat);
  const [lng, setLng] = useState(userLng);

  const mapRef = useRef();

  const handleClick = (e) => {
    const { latlng } = e;
    const map = mapRef.current;
    if (map != null) {
      map.leafletElement.locate();
    }
    setLat(latlng.lat);
    setLng(latlng.lng);
    setHasLocation(true);
    setFieldValue('coordinates', [lat, lng])

  };

  const marker = hasLocation ? (
    <Marker position={{ lat, lng }}>
      <Popup>lat:{lat}<br/> lng:{lng}</Popup>
    </Marker>
  ) : null;

  return (
    <Map
      className="map"
      center={{ lat, lng }}
      zoom={16}
      onClick={handleClick}
      ref={mapRef}
    >
      <TileLayer
        className="tile-layer"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker}
    </Map>
  );
};

export default LocationPicker;
