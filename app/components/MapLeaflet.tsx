'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLocation, locationTypeConfig } from '@/app/data/map-locations';

// Fix Leaflet default marker icon issue
function createIcon(color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="${color}"/>
    <circle cx="14" cy="14" r="6" fill="white"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40],
  });
}

function FlyToLocation({ location }: { location: MapLocation | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 13, { duration: 1 });
    }
  }, [location, map]);
  return null;
}

interface MapLeafletProps {
  locations: MapLocation[];
  onError: () => void;
  selectedLocation: MapLocation | null;
  onSelectLocation: (loc: MapLocation) => void;
}

export default function MapLeaflet({ locations, onError, selectedLocation, onSelectLocation }: MapLeafletProps) {
  const errorCaught = useRef(false);

  useEffect(() => {
    // Check if tiles can load; if not, trigger fallback after timeout
    const timer = setTimeout(() => {
      const tiles = document.querySelectorAll('.leaflet-tile');
      if (tiles.length === 0 && !errorCaught.current) {
        errorCaught.current = true;
        onError();
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [onError]);

  return (
    <MapContainer
      center={[-8.4095, 115.1889]}
      zoom={9}
      style={{ width: '100%', height: '450px' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        eventHandlers={{
          tileerror: () => {
            if (!errorCaught.current) {
              errorCaught.current = true;
              onError();
            }
          },
        }}
      />
      <FlyToLocation location={selectedLocation} />
      {locations.map((loc) => {
        const config = locationTypeConfig[loc.type];
        return (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createIcon(config.color)}
            eventHandlers={{
              click: () => onSelectLocation(loc),
            }}
          >
            <Popup>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: 4 }}>
                  {config.emoji} {loc.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: 6 }}>
                  {loc.address}
                </div>
                <div style={{ fontSize: '12px', color: '#374151' }}>
                  {loc.description}
                </div>
                <span style={{
                  display: 'inline-block',
                  marginTop: 8,
                  padding: '2px 8px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'white',
                  background: config.color,
                }}>
                  {config.label}
                </span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
