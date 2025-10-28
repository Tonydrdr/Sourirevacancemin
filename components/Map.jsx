'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useMemo } from 'react';

// Icônes Leaflet hébergées sur CDN (fonctionnent sur Vercel)
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map({ items = [], center = [46.5, 2.5], zoom = 5 }) {
  const bounds = useMemo(() => {
    if (!items.length) return null;
    return L.latLngBounds(items.map((i) => [i.lat, i.lng]));
  }, [items]);

  return (
    <div style={{ height: '78vh', minHeight: 480, width: '100%' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        style={{ height: '100%', width: '100%', borderRadius: 12 }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {items.map((it) => (
          <Marker key={it.id} position={[it.lat, it.lng]} icon={icon}>
            <Popup>
              <div style={{ minWidth: 160 }}>
                <b>{it.title}</b><br />
                {it.city}, {it.country}<br />
                {it.price} € / nuit<br />
                <a href={`/bien/${it.id}`} style={{ display: 'inline-block', marginTop: 6 }}>
                  Voir l’annonce
                </a>
              </div>
            </Popup>
          </Marker>
        ))}

        <InvalidateOnMount />
        {bounds ? <FitToBounds bounds={bounds} /> : null}
      </MapContainer>
    </div>
  );
}

/** Force Leaflet à recalculer sa taille (évite les “carrés blancs”). */
function InvalidateOnMount() {
  const map = useMap();
  useEffect(() => {
    const kick = () => map.invalidateSize();
    const t = setTimeout(kick, 50);
    window.addEventListener('resize', kick);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', kick);
    };
  }, [map]);
  return null;
}

/** Centre la vue sur tous les marqueurs quand `bounds` change. */
function FitToBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) map.fitBounds(bounds, { padding: [50, 50] });
  }, [bounds, map]);
  return null;
}
