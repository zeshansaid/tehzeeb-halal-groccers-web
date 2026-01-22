// components/StoreMap.jsx
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

const StoreMap = () => {
  const position = [51.51057, -0.32259]; //[ latitude , longitude ]

  const defaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const LeafIcon = L.Icon.extend({
    options: {},
  });

  L.Marker.prototype.options.icon = defaultIcon;


  return (
    <div>
      <MapContainer
        style={{ height: "400px", width: "100%", borderRadius: "15px" }}
        center={position}
        zoom={17}
        minZoom={11}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Tehzeeb Halal <br /> Meat & Grocers
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StoreMap;
