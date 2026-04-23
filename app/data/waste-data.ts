// Mock environmental data for Bali dashboard

export const wasteByCategory = [
  { kategori: 'Organik', jumlah: 3200, warna: '#16A34A' },
  { kategori: 'Plastik', jumlah: 2100, warna: '#0EA5E9' },
  { kategori: 'Kertas', jumlah: 1400, warna: '#F59E0B' },
  { kategori: 'Logam', jumlah: 600, warna: '#8B5CF6' },
  { kategori: 'Kaca', jumlah: 450, warna: '#14B8A6' },
  { kategori: 'E-Waste', jumlah: 250, warna: '#EF4444' },
  { kategori: 'Residu', jumlah: 1800, warna: '#64748B' },
];

export const weeklyTrend = [
  { minggu: 'Minggu 1', sampahTotal: 1420, daurUlang: 380 },
  { minggu: 'Minggu 2', sampahTotal: 1380, daurUlang: 420 },
  { minggu: 'Minggu 3', sampahTotal: 1350, daurUlang: 470 },
  { minggu: 'Minggu 4', sampahTotal: 1290, daurUlang: 510 },
  { minggu: 'Minggu 5', sampahTotal: 1310, daurUlang: 530 },
  { minggu: 'Minggu 6', sampahTotal: 1250, daurUlang: 580 },
  { minggu: 'Minggu 7', sampahTotal: 1200, daurUlang: 620 },
  { minggu: 'Minggu 8', sampahTotal: 1180, daurUlang: 660 },
  { minggu: 'Minggu 9', sampahTotal: 1120, daurUlang: 700 },
  { minggu: 'Minggu 10', sampahTotal: 1080, daurUlang: 740 },
  { minggu: 'Minggu 11', sampahTotal: 1040, daurUlang: 780 },
  { minggu: 'Minggu 12', sampahTotal: 990, daurUlang: 820 },
];

export const wasteComposition = [
  { name: 'Organik', value: 33, fill: '#16A34A' },
  { name: 'Plastik', value: 21, fill: '#0EA5E9' },
  { name: 'Residu', value: 18, fill: '#64748B' },
  { name: 'Kertas', value: 14, fill: '#F59E0B' },
  { name: 'Logam', value: 6, fill: '#8B5CF6' },
  { name: 'Kaca', value: 5, fill: '#14B8A6' },
  { name: 'E-Waste', value: 3, fill: '#EF4444' },
];

export const reductionEstimate = [
  { bulan: 'Jan', sebelum: 4800, sesudah: 4800 },
  { bulan: 'Feb', sebelum: 4750, sesudah: 4600 },
  { bulan: 'Mar', sebelum: 4820, sesudah: 4350 },
  { bulan: 'Apr', sebelum: 4780, sesudah: 4100 },
  { bulan: 'Mei', sebelum: 4900, sesudah: 3900 },
  { bulan: 'Jun', sebelum: 5100, sesudah: 3750 },
  { bulan: 'Jul', sebelum: 5300, sesudah: 3600 },
  { bulan: 'Agu', sebelum: 5200, sesudah: 3400 },
  { bulan: 'Sep', sebelum: 4950, sesudah: 3250 },
  { bulan: 'Okt', sebelum: 4880, sesudah: 3100 },
  { bulan: 'Nov', sebelum: 4800, sesudah: 2950 },
  { bulan: 'Des', sebelum: 4850, sesudah: 2800 },
];

export const statsCards = [
  {
    label: 'Total Sampah / Hari',
    value: '9.800',
    unit: 'ton',
    change: '-12%',
    positive: true,
    icon: 'trash',
  },
  {
    label: 'Tingkat Daur Ulang',
    value: '34',
    unit: '%',
    change: '+8%',
    positive: true,
    icon: 'recycle',
  },
  {
    label: 'Aksi Komunitas',
    value: '1.247',
    unit: 'aksi',
    change: '+23%',
    positive: true,
    icon: 'users',
  },
  {
    label: 'Bank Sampah Aktif',
    value: '186',
    unit: 'unit',
    change: '+15',
    positive: true,
    icon: 'landmark',
  },
];
