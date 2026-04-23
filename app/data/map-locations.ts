export interface MapLocation {
  id: number;
  name: string;
  type: 'bank-sampah' | 'drop-point' | 'edukasi' | 'komunitas';
  lat: number;
  lng: number;
  description: string;
  address: string;
}

export const mapLocations: MapLocation[] = [
  {
    id: 1,
    name: 'Bank Sampah Denpasar Bersih',
    type: 'bank-sampah',
    lat: -8.6500,
    lng: 115.2167,
    description: 'Bank sampah terbesar di Denpasar dengan program tukar sampah menjadi tabungan.',
    address: 'Jl. Gatot Subroto, Denpasar',
  },
  {
    id: 2,
    name: 'Drop Point Kuta Green',
    type: 'drop-point',
    lat: -8.7180,
    lng: 115.1690,
    description: 'Titik pengumpulan sampah plastik dan elektronik di area Kuta.',
    address: 'Jl. Raya Kuta, Badung',
  },
  {
    id: 3,
    name: 'Pusat Edukasi Lingkungan Ubud',
    type: 'edukasi',
    lat: -8.5069,
    lng: 115.2625,
    description: 'Pusat pembelajaran tentang pengelolaan sampah dan komposting.',
    address: 'Jl. Raya Ubud, Gianyar',
  },
  {
    id: 4,
    name: 'Komunitas Bali Bersih Sanur',
    type: 'komunitas',
    lat: -8.6926,
    lng: 115.2620,
    description: 'Komunitas relawan yang rutin melakukan beach cleanup di pantai Sanur.',
    address: 'Pantai Sanur, Denpasar',
  },
  {
    id: 5,
    name: 'Bank Sampah Gianyar Hijau',
    type: 'bank-sampah',
    lat: -8.5413,
    lng: 115.3254,
    description: 'Bank sampah dengan program edukasi untuk anak sekolah.',
    address: 'Jl. Astina, Gianyar',
  },
  {
    id: 6,
    name: 'Drop Point Seminyak Eco',
    type: 'drop-point',
    lat: -8.6894,
    lng: 115.1564,
    description: 'Titik pengumpulan sampah khusus dari hotel dan restoran.',
    address: 'Jl. Kayu Aya, Seminyak',
  },
  {
    id: 7,
    name: 'Eco Learning Center Tabanan',
    type: 'edukasi',
    lat: -8.5410,
    lng: 115.1258,
    description: 'Pusat belajar teknologi daur ulang dan energi terbarukan.',
    address: 'Jl. Raya Tabanan',
  },
  {
    id: 8,
    name: 'Komunitas Zero Waste Canggu',
    type: 'komunitas',
    lat: -8.6478,
    lng: 115.1385,
    description: 'Komunitas yang mengajarkan gaya hidup minim sampah.',
    address: 'Canggu, Badung',
  },
  {
    id: 9,
    name: 'Bank Sampah Karangasem',
    type: 'bank-sampah',
    lat: -8.4518,
    lng: 115.6017,
    description: 'Bank sampah yang fokus pada pengolahan sampah pertanian.',
    address: 'Amlapura, Karangasem',
  },
  {
    id: 10,
    name: 'Drop Point Nusa Dua',
    type: 'drop-point',
    lat: -8.8003,
    lng: 115.2294,
    description: 'Pengumpulan sampah area wisata Nusa Dua dan BTDC.',
    address: 'BTDC Nusa Dua, Badung',
  },
  {
    id: 11,
    name: 'Komunitas Sungai Bersih',
    type: 'komunitas',
    lat: -8.5960,
    lng: 115.2330,
    description: 'Program pembersihan sungai dan edukasi masyarakat bantaran.',
    address: 'Sungai Ayung, Gianyar',
  },
  {
    id: 12,
    name: 'Pusat Kompos Jimbaran',
    type: 'edukasi',
    lat: -8.7672,
    lng: 115.1710,
    description: 'Fasilitas komposting skala komunitas dengan pelatihan rutin.',
    address: 'Jimbaran, Badung',
  },
];

export const locationTypeConfig = {
  'bank-sampah': {
    label: 'Bank Sampah',
    color: '#16A34A',
    emoji: '🏦',
  },
  'drop-point': {
    label: 'Drop Point',
    color: '#0EA5E9',
    emoji: '📍',
  },
  'edukasi': {
    label: 'Pusat Edukasi',
    color: '#F59E0B',
    emoji: '📚',
  },
  'komunitas': {
    label: 'Aksi Komunitas',
    color: '#8B5CF6',
    emoji: '🤝',
  },
};
