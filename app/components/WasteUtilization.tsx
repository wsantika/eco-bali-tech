"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Recycle,
  FileText,
  PlugZap,
  Trash2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

type WasteCategory =
  | "Semua"
  | "Organik"
  | "Plastik"
  | "Kertas"
  | "E-Waste"
  | "Residu";

type WasteKnowledgeItem = {
  category: Exclude<WasteCategory, "Semua">;
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
  color: string;
  softBg: string;
  border: string;
  title: string;
  description: string;
  examples: string[];
  uses: string[];
  benefit: string;
  tag: string;
  impact: string;
};

const categories: WasteCategory[] = [
  "Semua",
  "Organik",
  "Plastik",
  "Kertas",
  "E-Waste",
  "Residu",
];

const wasteKnowledge: WasteKnowledgeItem[] = [
  {
    category: "Organik",
    icon: Leaf,
    emoji: "🍃",
    color: "from-green-500 to-emerald-500",
    softBg: "bg-green-50",
    border: "border-green-100",
    title: "Sampah organik mudah terurai dan paling mudah diolah dari rumah",
    description:
      "Sampah organik berasal dari sisa makhluk hidup seperti makanan, daun, dan kulit buah. Jika dipilah dengan benar, jenis sampah ini tidak perlu menumpuk di tempat pembuangan akhir.",
    examples: ["Sisa makanan", "Kulit buah", "Daun kering", "Cangkang telur"],
    uses: ["Kompos", "Pupuk cair", "Eco-enzyme", "Pakan maggot"],
    benefit:
      "Mengurangi bau, menekan volume sampah rumah tangga, dan menyuburkan tanah.",
    tag: "Mudah diolah",
    impact: "Cocok dimulai dari rumah tangga dan sekolah.",
  },
  {
    category: "Plastik",
    icon: Recycle,
    emoji: "♻️",
    color: "from-sky-500 to-cyan-500",
    softBg: "bg-sky-50",
    border: "border-sky-100",
    title: "Plastik sulit terurai, tapi masih bisa punya nilai guna",
    description:
      "Plastik menjadi salah satu penyumbang pencemaran terbesar jika dibuang sembarangan. Namun jika dikumpulkan, dibersihkan, dan dipilah, sebagian plastik bisa dimanfaatkan kembali.",
    examples: ["Botol plastik", "Kantong plastik", "Sedotan", "Kemasan makanan"],
    uses: ["Ecobrick", "Pot tanaman", "Kerajinan tangan", "Tempat pensil"],
    benefit:
      "Mengurangi pencemaran lingkungan dan membuka peluang kreativitas masyarakat.",
    tag: "Bisa didaur ulang",
    impact: "Paling penting dicuci dan dipisah sebelum dikumpulkan.",
  },
  {
    category: "Kertas",
    icon: FileText,
    emoji: "📄",
    color: "from-amber-500 to-orange-500",
    softBg: "bg-amber-50",
    border: "border-amber-100",
    title: "Kertas bekas masih punya nilai guna jika tidak tercampur residu",
    description:
      "Kertas dan karton yang dipilah dengan baik bisa digunakan kembali menjadi produk baru atau kerajinan sederhana. Pemilahan kertas membantu menghemat bahan baku.",
    examples: ["Koran bekas", "Kardus", "Majalah lama", "Kertas tugas"],
    uses: [
      "Kertas daur ulang",
      "Organizer kardus",
      "Kerajinan",
      "Bahan pembungkus",
    ],
    benefit:
      "Mengurangi pemborosan bahan dan membantu menghemat sumber daya alam.",
    tag: "Mudah dimanfaatkan",
    impact: "Jaga agar tetap kering dan tidak tercampur sampah basah.",
  },
  {
    category: "E-Waste",
    icon: PlugZap,
    emoji: "🔌",
    color: "from-rose-500 to-red-500",
    softBg: "bg-rose-50",
    border: "border-rose-100",
    title: "Sampah elektronik harus dipisahkan karena bernilai sekaligus berbahaya",
    description:
      "Barang elektronik rusak mengandung komponen yang masih bernilai, tetapi juga bisa mengandung zat berbahaya. Karena itu, e-waste perlu dipisah dari sampah biasa.",
    examples: ["HP rusak", "Baterai bekas", "Charger rusak", "Kabel lama"],
    uses: [
      "Perbaikan ulang",
      "Ambil komponen",
      "Daur ulang resmi",
      "Pemulihan logam bernilai",
    ],
    benefit:
      "Mengurangi risiko pencemaran dan menjaga komponen berbahaya tidak dibuang sembarangan.",
    tag: "Perlu pengelolaan khusus",
    impact: "Jangan dibakar atau dibuang ke tong sampah campuran.",
  },
  {
    category: "Residu",
    icon: Trash2,
    emoji: "🗑️",
    color: "from-slate-500 to-gray-600",
    softBg: "bg-slate-50",
    border: "border-slate-100",
    title: "Sampah residu paling aman dikurangi dari sumbernya",
    description:
      "Sampah residu adalah jenis sampah yang sulit atau tidak bisa didaur ulang. Karena itu, cara terbaik adalah mengurangi penggunaan sejak awal.",
    examples: ["Styrofoam", "Tisu kotor", "Popok sekali pakai", "Pembalut"],
    uses: [
      "Kurangi penggunaan",
      "Ganti dengan produk reusable",
      "Pisahkan agar tidak mencemari jenis lain",
    ],
    benefit:
      "Mengurangi beban TPA dan mendorong gaya hidup yang lebih ramah lingkungan.",
    tag: "Sulit didaur ulang",
    impact: "Fokus utamanya bukan mengolah, tapi mencegah menumpuk.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function WasteUtilization() {
  const [activeCategory, setActiveCategory] = useState<WasteCategory>("Semua");

  const filteredItems = useMemo(() => {
    if (activeCategory === "Semua") return wasteKnowledge;
    return wasteKnowledge.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <SectionWrapper
      id="waste-utilization"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 h-28 w-28 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-sky-200/20 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4" />
          Pemanfaatan Sampah
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-eco-dark mb-4 leading-tight">
          Kenali Sampah dan{" "}
          <span className="eco-gradient-text">Ubah Jadi Manfaat</span>
        </h2>

        <p className="text-eco-gray max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          Sampah tidak selalu harus langsung dibuang. Jika dikenali jenisnya dan
          dipilah dengan benar, banyak sampah masih bisa dimanfaatkan kembali
          menjadi sesuatu yang berguna bagi rumah tangga, lingkungan, dan
          masyarakat Bali.
        </p>
      </motion.div>

      {/* Top Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative glass-card p-6 sm:p-8 mb-10 border border-eco-green/10"
      >
        <div className="grid lg:grid-cols-4 gap-4 items-stretch">
          <div className="lg:col-span-2 h-full">
            <div className="rounded-2xl bg-white border border-slate-100 p-5 h-full">
              <h3 className="text-2xl font-bold text-eco-dark mb-3">
                Mengapa Perlu Tahu Pemanfaatan Sampah?
              </h3>
              <p className="text-eco-gray leading-relaxed">
                Dengan memahami manfaat tiap jenis sampah, masyarakat tidak
                hanya belajar membuang sampah dengan benar, tetapi juga melihat
                bahwa sebagian sampah masih memiliki nilai guna. Ini membantu
                mengurangi penumpukan sampah, memperkuat kebiasaan memilah, dan
                membuka peluang aksi sederhana yang bisa dimulai dari rumah.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-green-50 p-4 border border-green-100 h-full flex flex-col">
            <p className="text-sm font-semibold text-eco-dark mb-1">
              Lebih Praktis
            </p>
            <p className="text-sm text-eco-gray flex-1">
              Warga tahu harus mengapakan sampah setelah dipilah.
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 p-4 border border-sky-100 h-full flex flex-col">
            <p className="text-sm font-semibold text-eco-dark mb-1">
              Lebih Bermanfaat
            </p>
            <p className="text-sm text-eco-gray flex-1">
              Sampah tidak langsung berakhir di tempat pembuangan.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-gradient-to-r from-eco-green to-eco-emerald text-white border-transparent shadow-lg"
                  : "bg-white text-eco-gray border-eco-green/10 hover:border-eco-green/30 hover:text-eco-green hover:-translate-y-0.5"
              }`}
            >
              {category}
            </button>
          );
        })}
      </motion.div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {filteredItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.category}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative overflow-hidden rounded-3xl border ${item.border} bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${item.color}`} />

                <div className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5 min-h-[72px]">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.softBg} flex items-center justify-center shadow-sm shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-eco-dark" />
                      </div>

                      <div>
                        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-eco-green mb-1">
                          Jenis Sampah
                        </span>
                        <h3 className="text-2xl font-bold text-eco-dark">
                          {item.category}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-eco-dark shrink-0">
                      {item.tag}
                    </span>
                  </div>

                  <div className="min-h-[72px] mb-3">
                    <h4 className="text-lg font-bold text-eco-dark">
                      {item.title}
                    </h4>
                  </div>

                  <div className="min-h-[120px] mb-6">
                    <p className="text-eco-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 h-full flex flex-col min-h-[180px]">
                      <h5 className="text-sm font-bold text-eco-dark mb-3">
                        Contoh Sampah
                      </h5>
                      <ul className="space-y-2 flex-1">
                        {item.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-start gap-2 text-sm text-eco-gray"
                          >
                            <span className="mt-1 text-eco-green">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-100 h-full flex flex-col min-h-[180px]">
                      <h5 className="text-sm font-bold text-eco-dark mb-3">
                        Bisa Dimanfaatkan Menjadi
                      </h5>
                      <ul className="space-y-2 flex-1">
                        {item.uses.map((use) => (
                          <li
                            key={use}
                            className="flex items-start gap-2 text-sm text-eco-gray"
                          >
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-eco-green shrink-0" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-eco-green/10 to-eco-emerald/10 p-4 border border-eco-green/10 mb-4 min-h-[96px]">
                    <p className="text-sm font-semibold text-eco-dark mb-1">
                      Manfaat Utama
                    </p>
                    <p className="text-sm text-eco-gray leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 flex-wrap min-h-[48px]">
                    <p className="text-sm text-eco-gray">{item.impact}</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-eco-dark">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}