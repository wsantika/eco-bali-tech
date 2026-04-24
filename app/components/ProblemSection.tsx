"use client";

import { motion } from "framer-motion";
import {
  TriangleAlert,
  Waves,
  Trash2,
  Trees,
  ShieldAlert,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const problems = [
  {
    icon: Trash2,
    title: "Sampah rumah tangga masih banyak tercampur",
    description:
      "Ketika organik, plastik, kertas, dan residu dicampur, proses daur ulang jadi sulit dan sampah lebih cepat menumpuk.",
    color: "bg-rose-50 border-rose-100",
    iconColor: "text-rose-500",
  },
  {
    icon: Waves,
    title: "Sampah plastik mencemari sungai, pantai, dan laut",
    description:
      "Pencemaran plastik berdampak langsung pada kebersihan lingkungan dan mengganggu keindahan alam Bali.",
    color: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-500",
  },
  {
    icon: ShieldAlert,
    title: "Sampah elektronik berbahaya jika dibuang sembarangan",
    description:
      "Baterai, charger, dan perangkat rusak bisa mengandung bahan berbahaya dan perlu dipisahkan dari sampah biasa.",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-500",
  },
  {
    icon: Trees,
    title: "Penumpukan sampah merusak kualitas lingkungan hidup",
    description:
      "Jika tidak dikelola dari sumber, sampah akan terus membebani TPA, mencemari lingkungan, dan menurunkan kualitas hidup masyarakat.",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-500",
  },
];

const quickFacts = [
  {
    value: "Rumah Tangga",
    label: "Sumber awal pemilahan yang paling menentukan",
  },
  {
    value: "Pantai & Sungai",
    label: "Area yang paling cepat terdampak jika sampah bocor ke lingkungan",
  },
  {
    value: "TPA",
    label: "Akan terus terbebani jika sampah tidak dipilah dari awal",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper
      id="problem"
      className="relative overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-200/20 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">
          <TriangleAlert className="w-4 h-4" />
          Permasalahan Lingkungan
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-eco-dark mb-4 leading-tight">
          Mengapa Sampah Jadi{" "}
          <span className="text-rose-500">Masalah Serius</span>?
        </h2>

        <p className="text-eco-gray max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          Sampah bukan hanya soal kotor atau bau. Jika tidak dipilah dan dikelola
          dengan benar, sampah bisa mencemari lingkungan, membebani tempat
          pembuangan, merusak ekosistem, dan akhirnya berdampak pada kehidupan
          masyarakat.
        </p>
      </motion.div>

      {/* Quick facts */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative glass-card p-6 sm:p-8 mb-10 border border-rose-100"
      >
        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          {quickFacts.map((fact) => (
            <div
              key={fact.value}
              className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm h-full flex flex-col"
            >
              <p className="text-xl font-bold text-eco-dark mb-2">{fact.value}</p>
              <p className="text-sm text-eco-gray leading-relaxed flex-1">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">
        {problems.map((problem, index) => {
          const Icon = problem.icon;

          return (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`rounded-3xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${problem.color} h-full`}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon className={`w-7 h-7 ${problem.iconColor}`} />
                </div>

                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-eco-dark mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-eco-gray leading-relaxed flex-1">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="rounded-[2rem] bg-gradient-to-r from-[#08142f] via-[#102247] to-[#2f3d55] px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 text-white shadow-xl"
      >
        <div className="max-w-5xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5">
            Kabar baiknya, masalah ini bisa mulai dikurangi dari rumah.
          </h3>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-4xl">
            Langkah kecil seperti memilah sampah, mengurangi plastik sekali pakai,
            dan memahami pemanfaatan sampah dapat memberi dampak besar jika
            dilakukan bersama. Karena itu, edukasi bukan hanya penting, tapi juga
            mendesak.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}