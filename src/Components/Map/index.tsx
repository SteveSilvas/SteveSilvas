
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../../public/images/leaflet.css';

import L from 'leaflet';

L.Icon.Default.mergeOptions({
  // iconRetinaUrl: '../../../public/images/marker-icon-2x.png',
  // iconUrl: '../../../public/images/marker-icon.png',
  // shadowUrl: '../../../public/images/marker-shadow.png',
});

const center = {
  lat: -23.62737,
  lng: -46.93863,
};

const MapComponent = () => {
  return (
    <div className="w-screen h-[50vh] relative">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            Rua Paulo Sérgio Lemos, N° 18 <br /> Jd. Panorama. Cotia - SP
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent; 