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
      <span>📦</span>
    </div>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -40],
});

export default function RotiBoxMapClient() {
  return (
    <section id="roti-box-map" className="roti-map-section">
      <div className="roti-map-heading">
        <p className="section-kicker">OUR NETWORK</p>

        <h2>See the Movement Growing Across the City.</h2>

        <p>
          Every pin represents a real Pehli Roti Box connecting a community
          with Gau Matta.
        </p>
      </div>

      <div className="roti-map-layout">
        <div className="roti-map-panel">
          <MapContainer
            center={[28.57, 77.18]}
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

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${box.lat},${box.lng}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Directions →
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="roti-map-sidebar">
          <p className="roti-map-sidebar-label">LIVE SEVA NETWORK</p>

          <h3>
            Every Roti Box has a place, a story and the people who made it
            possible.
          </h3>

          <p>
            As our network grows, each installed box will appear here with its
            location, installation record and Seva contributors.
          </p>

          <div className="roti-map-stats">
            <div>
              <strong>{rotiBoxes.length}</strong>
              <span>Roti Boxes</span>
            </div>

            <div>
              <strong>{rotiBoxes.length}</strong>
              <span>Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}