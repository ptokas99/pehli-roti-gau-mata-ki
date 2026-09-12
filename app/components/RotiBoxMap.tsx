"use client";

import dynamic from "next/dynamic";

const RotiBoxMapClient = dynamic(
  () => import("./RotiBoxMapClient"),
  {
    ssr: false,

    loading: () => (
      <div className="network-map-loading">
        <div className="network-map-loading-inner">
          <span className="network-map-loading-dot" />
          <p>Loading Roti Box network...</p>
        </div>
      </div>
    ),
  }
);

export default function RotiBoxMap() {
  return <RotiBoxMapClient />;
}