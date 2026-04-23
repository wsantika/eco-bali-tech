export type WasteUse = {
  category: string;
  emoji: string;
  title: string;
  description: string;
  examples: string[];
  benefits: string[];
};

export const wasteUses: WasteUse[] = [
  {
    category: "Organik",
    emoji: "🍃",
    title: "Sampah organik bisa jadi pupuk dan bahan bermanfaat",
    description:
      "Sampah organik seperti sisa makanan, daun, dan kulit buah bisa diolah kembali agar tidak menumpuk di tempat pembuangan.",
    examples: ["Kompos", "Pupuk cair", "Eco-enzyme", "Pakan maggot"],
    benefits: [
      "Mengurangi bau dan penumpukan sampah",
      "Menyuburkan tanah",
      "Bisa dipakai untuk kebun rumah",
    ],
  },
  {
    category: "Plastik",
    emoji: "♻️",
    title: "Sampah plastik bisa dimanfaatkan kembali",
    description:
      "Botol, kantong, dan kemasan plastik bisa dipakai ulang atau dijadikan bahan karya kreatif.",
    examples: ["Ecobrick", "Pot tanaman", "Kerajinan", "Tempat pensil"],
    benefits: [
      "Mengurangi sampah plastik tercampur",
      "Bisa jadi barang berguna",
      "Mendorong kreativitas masyarakat",
    ],
  },
  {
    category: "Kertas",
    emoji: "📄",
    title: "Kertas bekas masih punya nilai guna",
    description:
      "Kertas, kardus, dan majalah bekas bisa didaur ulang atau dijadikan kerajinan sederhana.",
    examples: ["Kertas daur ulang", "Organizer kardus", "Kerajinan tangan"],
    benefits: [
      "Mengurangi pemborosan bahan",
      "Masih bisa dipakai ulang",
      "Mengurangi volume sampah rumah tangga",
    ],
  },
  {
    category: "E-Waste",
    emoji: "🔌",
    title: "Sampah elektronik harus dipisah dan dikelola khusus",
    description:
      "Barang elektronik rusak tidak boleh dibuang sembarangan karena mengandung komponen berbahaya dan bernilai.",
    examples: ["Perbaikan ulang", "Ambil komponen", "Daur ulang resmi"],
    benefits: [
      "Mengurangi pencemaran",
      "Komponen masih bisa dimanfaatkan",
      "Lebih aman untuk lingkungan",
    ],
  },
  {
    category: "Residu",
    emoji: "🗑️",
    title: "Sampah residu perlu dikurangi dari sumbernya",
    description:
      "Sampah residu sulit dimanfaatkan kembali, jadi fokus utamanya adalah mengurangi penggunaan.",
    examples: [
      "Kurangi styrofoam",
      "Gunakan wadah ulang pakai",
      "Hindari produk sekali pakai",
    ],
    benefits: [
      "Mengurangi beban TPA",
      "Mendorong gaya hidup minim sampah",
      "Lebih baik untuk lingkungan Bali",
    ],
  },
];
