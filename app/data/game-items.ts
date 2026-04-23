export type WasteCategory = 'organik' | 'plastik' | 'kertas' | 'residu' | 'e-waste';

export interface WasteItem {
  id: string;
  name: string;
  emoji: string;
  category: WasteCategory;
  fact: string;
}

export const wasteCategories: { id: WasteCategory; name: string; emoji: string; color: string }[] = [
  { id: 'organik', name: 'Organik', emoji: '🍃', color: '#16A34A' },
  { id: 'plastik', name: 'Plastik', emoji: '♻️', color: '#0EA5E9' },
  { id: 'kertas', name: 'Kertas', emoji: '📄', color: '#F59E0B' },
  { id: 'residu', name: 'Residu', emoji: '🗑️', color: '#64748B' },
  { id: 'e-waste', name: 'E-Waste', emoji: '🔌', color: '#EF4444' },
];

export const gameItems: WasteItem[] = [
  {
    id: 'banana-peel',
    name: 'Kulit Pisang',
    emoji: '🍌',
    category: 'organik',
    fact: 'Kulit pisang bisa dijadikan kompos dalam 2-5 minggu!',
  },
  {
    id: 'plastic-bottle',
    name: 'Botol Plastik',
    emoji: '🧴',
    category: 'plastik',
    fact: 'Satu botol plastik butuh 450 tahun untuk terurai di alam!',
  },
  {
    id: 'newspaper',
    name: 'Koran Bekas',
    emoji: '📰',
    category: 'kertas',
    fact: 'Mendaur ulang 1 ton kertas bisa menyelamatkan 17 pohon!',
  },
  {
    id: 'rice-leftovers',
    name: 'Sisa Nasi',
    emoji: '🍚',
    category: 'organik',
    fact: 'Sisa makanan bisa diolah menjadi pupuk kompos berkualitas tinggi.',
  },
  {
    id: 'plastic-bag',
    name: 'Kantong Plastik',
    emoji: '🛍️',
    category: 'plastik',
    fact: 'Indonesia menghasilkan 64 juta ton sampah/tahun, 14% adalah plastik.',
  },
  {
    id: 'cardboard',
    name: 'Kardus',
    emoji: '📦',
    category: 'kertas',
    fact: 'Kardus bisa didaur ulang hingga 7 kali sebelum seratnya habis!',
  },
  {
    id: 'broken-phone',
    name: 'HP Rusak',
    emoji: '📱',
    category: 'e-waste',
    fact: 'Dalam 1 juta HP bekas terkandung 24 kg emas dan 250 kg perak!',
  },
  {
    id: 'styrofoam',
    name: 'Styrofoam',
    emoji: '🥡',
    category: 'residu',
    fact: 'Styrofoam tidak bisa didaur ulang dan butuh 500 tahun untuk terurai.',
  },
  {
    id: 'leaf-waste',
    name: 'Daun Kering',
    emoji: '🍂',
    category: 'organik',
    fact: 'Daun kering adalah bahan kompos terbaik dan kaya nutrisi tanah.',
  },
  {
    id: 'plastic-straw',
    name: 'Sedotan Plastik',
    emoji: '🥤',
    category: 'plastik',
    fact: 'Indonesia membuang 93 juta sedotan plastik per hari ke laut!',
  },
  {
    id: 'tissue',
    name: 'Tisu Bekas',
    emoji: '🧻',
    category: 'residu',
    fact: 'Tisu bekas tidak bisa didaur ulang karena sudah terkontaminasi.',
  },
  {
    id: 'old-battery',
    name: 'Baterai Bekas',
    emoji: '🔋',
    category: 'e-waste',
    fact: 'Satu baterai bisa mencemari 167 ribu liter air tanah!',
  },
  {
    id: 'egg-shell',
    name: 'Cangkang Telur',
    emoji: '🥚',
    category: 'organik',
    fact: 'Cangkang telur mengandung kalsium tinggi, bagus untuk tanaman.',
  },
  {
    id: 'broken-charger',
    name: 'Charger Rusak',
    emoji: '🔌',
    category: 'e-waste',
    fact: 'E-waste adalah jenis sampah yang paling cepat bertambah di dunia.',
  },
  {
    id: 'magazine',
    name: 'Majalah Bekas',
    emoji: '📖',
    category: 'kertas',
    fact: 'Daur ulang kertas menghemat 70% energi dibanding membuat kertas baru.',
  },
];

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export function shuffleItems(items: WasteItem[]): WasteItem[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
