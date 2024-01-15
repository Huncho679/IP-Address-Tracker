import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useApp } from "../Context/Context";

export default function Map() {
  const { position, region, city } = useApp();
  //console.log("Being rerendered");
  if (position.length !== 2) {
    return;
  }
  return (
    <MapContainer
      className="h-full"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {city}, {region}
        </Popup>
      </Marker>
      <ChangeCenter position={position} />
    </MapContainer>
  );
}

function ChangeCenter(props) {
  const map = useMap();
  map.setView(props.position);
  return null;
}
