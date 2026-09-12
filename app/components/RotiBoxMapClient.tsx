"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const rotiBoxes = [
  {
    id: "PRG-001",
    name: "Pehli Roti Box #001",
    location: "R.K. Puram, New Delhi",
    lat: 28.5677,
    lng: 77.1768,
    installed: "2026",
    contributors: 12,
  },
  {
    id: "PRG-002",
    name: "Pehli Roti Box #002",
    location: "Vasant Kunj, New Delhi",
    lat: 28.5207,
    lng: 77.1594,
    installed: "2026",
    contributors: 8,
  },
  {
    id: "PRG-003",
    name: "Pehli Roti Box #003",
    location: "Munirka, New Delhi",
    lat: 28.5535,
    lng: 77.1749,
    installed: "2026",
    contributors: 15,
  },
];

const rotiBoxIcon = L.divIcon({
  className: "roti-map-marker",
  html: `
    <div class="roti-map-marker-inner">
      <span>▣</span>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -42],
});

export default function RotiBoxMapClient() {
  return (
    <MapContainer
      center={[28.55, 77.18]}
      zoom={11}
      scrollWheelZoom={false}
      className="roti-leaflet-map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {rotiBoxes.map((box) => (
        <Marker
          key={box.id}
          position={[box.lat, box.lng]}
          icon={rotiBoxIcon}
        >
          <Popup>
            <div className="roti-map-popup">
              <span className="roti-map-popup-id">{box.id}</span>

              <h3>{box.name}</h3>

              <p>{box.location}</p>

              <div className="roti-map-popup-meta">
                <span>Installed: {box.installed}</span>
                <span>{box.contributors} Gau Sevaks</span>
              </div>

              <div className="roti-map-popup-actions">
                <a href={`/roti-box/${box.id}`}>
                  View Box
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${box.lat},${box.lng}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Navigate →
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}