import "./Aside.css"
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapComponentProps {
  center: { lat: number; lng: number }; // Propriedade para passar as coordenadas do centro
}

const MapComponent: React.FC<MapComponentProps> = ({ center }) => {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
