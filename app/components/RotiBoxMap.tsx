"use client";

import dynamic from "next/dynamic";

const RotiBoxMapClient = dynamic(
  () => import("./RotiBoxMapClient"),
  {
    ssr: false,
    loading: () => (
      <section className="roti-map-section">
        <div className="roti-map-heading">
          <p className="section-kicker">OUR NETWORK</p>
          <h2>See the Movement Growing Across the City.</h2>
          <p>Loading our Roti Box network...</p>
        </div>
      </section>
    ),
  }
);

export default function RotiBoxMap() {
  return <RotiBoxMapClient />;
}