import { Leaf, Package, FileText, Cpu, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const wasteTypes = [
  {
    icon: Leaf,
    name: "Organik",
    emoji: "🍃",
    description: "Sisa makanan, daun, kulit buah — bisa dijadikan kompos.",
    color: "#16A34A",
    bg: "bg-green-50",
  },
  {
    icon: Package,
    name: "Plastik",
    emoji: "♻️",
    description:
      "Botol, kantong, kemasan — bisa didaur ulang menjadi produk baru.",
    color: "#0EA5E9",
    bg: "bg-blue-50",
  },
  {
    icon: FileText,
    name: "Kertas",
    emoji: "📄",
    description:
      "Koran, kardus, majalah — daur ulang menghemat pohon dan energi.",
    color: "#F59E0B",
    bg: "bg-amber-50",
  },
  {
    icon: Cpu,
    name: "E-Waste",
    emoji: "🔌",
    description:
      "Elektronik rusak — mengandung logam berat berbahaya jika dibuang sembarangan.",
    color: "#EF4444",
    bg: "bg-red-50",
  },
  {
    icon: Zap,
    name: "Residu",
    emoji: "🗑️",
    description:
      "Sampah yang tidak bisa didaur ulang — styrofoam, popok, tisu kotor.",
    color: "#64748B",
    bg: "bg-gray-50",
  },
];

const whyItMatters = [
  {
    title: "Mengurangi Pencemaran",
    description:
      "Sampah yang dipilah dengan benar mengurangi polusi tanah, air, dan udara secara signifikan.",
    emoji: "🌊",
  },
  {
    title: "Menghemat Sumber Daya",
    description:
      "Daur ulang menghemat energi, air, dan bahan baku — mengurangi kebutuhan eksploitasi alam baru.",
    emoji: "⚡",
  },
  {
    title: "Melindungi Ekosistem Bali",
    description:
      "Terumbu karang, hutan mangrove, dan satwa liar Bali terancam oleh sampah yang tidak dikelola.",
    emoji: "🐢",
  },
  {
    title: "Mendukung Ekonomi Lokal",
    description:
      "Bank sampah dan industri daur ulang menciptakan lapangan kerja dan pendapatan masyarakat.",
    emoji: "💰",
  },
];

export default function EcoEducation() {
  return (
    <SectionWrapper id="education" className="bg-eco-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-semibold mb-4 animate-on-scroll">
          📚 Edukasi Lingkungan
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Kenali <span className="eco-gradient-text">Jenis Sampah</span> &
          Dampaknya
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Langkah pertama menuju Bali yang lebih bersih adalah memahami
          jenis-jenis sampah dan cara mengelolanya.
        </p>
      </div>

      {/* Waste types grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
        {wasteTypes.map((type) => (
          <div
            key={type.name}
            className="glass-card p-5 text-center animate-on-scroll"
          >
            <div
              className={`w-14 h-14 ${type.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
            >
              <span className="text-2xl">{type.emoji}</span>
            </div>
            <h4 className="font-bold text-eco-dark mb-1">{type.name}</h4>
            <p className="text-xs text-eco-gray leading-relaxed">
              {type.description}
            </p>
          </div>
        ))}
      </div>

      {/* Why it matters */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-eco-dark text-center mb-8 animate-on-scroll">
          Mengapa Pilah Sampah{" "}
          <span className="eco-gradient-text">Penting</span>?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyItMatters.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 flex items-start gap-4 animate-on-scroll"
            >
              <span className="text-3xl shrink-0">{item.emoji}</span>
              <div>
                <h4 className="font-bold text-eco-dark mb-1">{item.title}</h4>
                <p className="text-sm text-eco-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
