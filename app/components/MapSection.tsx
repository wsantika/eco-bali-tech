'use client';

import { useState, useEffect } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { mapLocations, locationTypeConfig, MapLocation } from '@/app/data/map-locations';
import { cn } from '@/app/lib/utils';
import dynamic from 'next/dynamic';

// Dynamically import map to avoid SSR issues
const MapComponent = dynamic(() => import('./MapLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] rounded-2xl bg-eco-gray-muted flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-eco-green border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-eco-gray text-sm">Memuat peta...</p>
      </div>
    </div>
  ),
});

type FilterType = 'semua' | MapLocation['type'];

export default function MapSection() {
  const [filter, setFilter] = useState<FilterType>('semua');
  const [mapFailed, setMapFailed] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const filteredLocations = filter === 'semua'
    ? mapLocations
    : mapLocations.filter((l) => l.type === filter);

  const filterButtons: { id: FilterType; label: string; emoji: string }[] = [
    { id: 'semua', label: 'Semua', emoji: '📍' },
    { id: 'bank-sampah', label: 'Bank Sampah', emoji: '🏦' },
    { id: 'drop-point', label: 'Drop Point', emoji: '📍' },
    { id: 'edukasi', label: 'Edukasi', emoji: '📚' },
    { id: 'komunitas', label: 'Komunitas', emoji: '🤝' },
  ];

  return (
    <SectionWrapper id="map" className="bg-gradient-to-b from-eco-white to-white">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-blue/10 text-eco-blue text-sm font-semibold mb-4 animate-on-scroll">
          🗺️ Peta Interaktif
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Titik <span className="eco-gradient-text">Aksi Lingkungan</span> di Bali
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Temukan bank sampah, drop point, pusat edukasi, dan komunitas lingkungan terdekat.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 animate-on-scroll">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              filter === btn.id
                ? 'bg-eco-green text-white shadow-md'
                : 'bg-white text-eco-gray border border-eco-gray-muted hover:border-eco-green/30'
            )}
          >
            {btn.emoji} {btn.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-on-scroll">
        {/* Map or Fallback */}
        <div className="lg:col-span-2">
          {!mapFailed ? (
            <div className="rounded-2xl overflow-hidden shadow-lg border border-eco-gray-muted">
              <MapComponent
                locations={filteredLocations}
                onError={() => setMapFailed(true)}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            </div>
          ) : (
            <div className="w-full h-[450px] rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center p-6">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                <h4 className="font-bold text-eco-dark mb-2">Peta tidak dapat dimuat</h4>
                <p className="text-sm text-eco-gray">
                  Gunakan daftar lokasi di samping untuk melihat titik-titik aksi lingkungan.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Location List */}
        <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
          {filteredLocations.map((loc) => {
            const config = locationTypeConfig[loc.type];
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={cn(
                  'w-full text-left glass-card p-4 transition-all duration-200 hover:shadow-md',
                  selectedLocation?.id === loc.id && 'ring-2 ring-eco-green shadow-md'
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{config.emoji}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-eco-dark text-sm">{loc.name}</div>
                    <div className="text-xs text-eco-gray mt-0.5">{loc.address}</div>
                    <span
                      className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-medium text-white"
                      style={{ background: config.color }}
                    >
                      {config.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
