import SectionWrapper from "./SectionWrapper";

const wasteKnowledge = [
  {
    category: "Organik",
    emoji: "🍃",
    description:
      "Sampah organik adalah sampah yang berasal dari makhluk hidup dan mudah terurai secara alami.",
    examples: ["Sisa makanan", "Kulit buah", "Daun kering", "Cangkang telur"],
    uses: ["Kompos", "Pupuk cair", "Eco-enzyme", "Pakan maggot"],
  },
  {
    category: "Plastik",
    emoji: "♻️",
    description:
      "Sampah plastik adalah sampah berbahan plastik yang sulit terurai jika dibuang sembarangan.",
    examples: [
      "Botol plastik",
      "Kantong plastik",
      "Sedotan",
      "Kemasan makanan",
    ],
    uses: ["Ecobrick", "Pot tanaman", "Kerajinan tangan", "Tempat pensil"],
  },
  {
    category: "Kertas",
    emoji: "📄",
    description:
      "Sampah kertas berasal dari bahan kertas atau karton yang masih dapat dimanfaatkan kembali.",
    examples: ["Koran bekas", "Kardus", "Majalah lama", "Kertas tugas"],
    uses: [
      "Kertas daur ulang",
      "Organizer kardus",
      "Kerajinan",
      "Bahan pembungkus",
    ],
  },
  {
    category: "E-Waste",
    emoji: "🔌",
    description:
      "Sampah elektronik adalah barang elektronik rusak atau sudah tidak terpakai yang perlu penanganan khusus.",
    examples: ["HP rusak", "Baterai bekas", "Charger rusak", "Kabel lama"],
    uses: [
      "Perbaikan ulang",
      "Ambil komponen",
      "Daur ulang resmi",
      "Pemulihan logam bernilai",
    ],
  },
  {
    category: "Residu",
    emoji: "🗑️",
    description:
      "Sampah residu adalah sampah yang sulit atau tidak bisa didaur ulang, sehingga perlu dikurangi dari sumbernya.",
    examples: ["Styrofoam", "Tisu kotor", "Popok sekali pakai", "Pembalut"],
    uses: [
      "Kurangi penggunaan",
      "Ganti dengan produk reusable",
      "Pisahkan agar tidak mencemari jenis lain",
    ],
  },
];

export default function WasteUtilization() {
  return (
    <SectionWrapper id="waste-utilization" className="bg-eco-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-semibold mb-4 animate-on-scroll">
          ♻️ Pemanfaatan Sampah
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Kenali <span className="eco-gradient-text">Sampah</span> dan
          Pemanfaatannya
        </h2>
        <p className="text-eco-gray max-w-3xl mx-auto animate-on-scroll">
          Sampah tidak selalu harus langsung dibuang. Jika dikenali jenisnya dan
          dipilah dengan benar, banyak sampah masih bisa dimanfaatkan kembali
          menjadi sesuatu yang berguna dan mengurangi penumpukan sampah di
          lingkungan, terutama di Bali.
        </p>
      </div>

      {/* Kenali sampah */}
      <div className="glass-card p-6 sm:p-8 mb-14 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-eco-dark mb-4">
            Kenali <span className="eco-gradient-text">Sampah</span>
          </h3>
          <p className="text-eco-gray leading-relaxed mb-4">
            Sampah adalah sisa kegiatan manusia atau bahan yang sudah tidak
            digunakan lagi. Jika dibuang sembarangan, sampah dapat menumpuk,
            mencemari lingkungan, menyebabkan bau, dan merusak keindahan alam.
          </p>
          <p className="text-eco-gray leading-relaxed mb-4">
            Karena itu, penting untuk mengenali jenis sampah sejak dari rumah.
            Dengan memahami perbedaannya, kita bisa tahu mana yang bisa
            dijadikan kompos, mana yang dapat didaur ulang, dan mana yang harus
            dikurangi penggunaannya.
          </p>
          <p className="text-eco-gray leading-relaxed">
            Memilah dan memanfaatkan sampah adalah langkah kecil yang bisa
            memberi dampak besar bagi kebersihan lingkungan dan masa depan Bali.
          </p>
        </div>
      </div>

      {/* Card kategori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {wasteKnowledge.map((item) => (
          <div key={item.category} className="glass-card p-6 animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-eco-green/10 flex items-center justify-center text-2xl">
                {item.emoji}
              </div>
              <h3 className="font-bold text-eco-dark text-lg">
                {item.category}
              </h3>
            </div>

            <p className="text-sm text-eco-gray leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="mb-4">
              <h4 className="font-semibold text-eco-dark mb-2">Contoh:</h4>
              <ul className="space-y-1 text-sm text-eco-gray">
                {item.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2">
                    <span className="text-eco-green mt-0.5">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-eco-dark mb-2">Pemanfaatan:</h4>
              <ul className="space-y-1 text-sm text-eco-gray">
                {item.uses.map((use) => (
                  <li key={use} className="flex items-start gap-2">
                    <span className="text-eco-green mt-0.5">•</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
