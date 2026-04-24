"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { newsArticles } from "../data/new-articles";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function NewsSection() {
  return (
    <SectionWrapper id="news" className="bg-eco-white">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-semibold mb-4">
          📰 Berita & Wawasan
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4">
          Berita Terkini tentang{" "}
          <span className="eco-gradient-text">Sampah di Bali</span>
        </h2>

        <p className="text-eco-gray max-w-3xl mx-auto leading-relaxed">
          Isu sampah terus menjadi perhatian karena berdampak langsung pada
          lingkungan, kesehatan, pariwisata, dan masa depan Bali. Berikut
          beberapa artikel pilihan yang bisa membantu masyarakat memahami
          persoalan sampah lebih dekat.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
      >
        {newsArticles.map((article) => (
          <motion.article
            key={article.title}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-gray-100 shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-eco-dark text-xs font-semibold shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Meta */}
              <div className="flex items-center justify-between gap-3 text-xs text-eco-gray mb-4 min-h-[20px]">
                <span>Sumber: {article.source}</span>
                <span>{formatDate(article.date)}</span>
              </div>

              {/* Title */}
              <div className="min-h-[108px] mb-4">
                <h3 className="text-xl font-bold text-eco-dark leading-snug">
                  {article.title}
                </h3>
              </div>

              {/* Summary */}
              <div className="min-h-[144px] mb-6">
                <p className="text-sm text-eco-gray leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Button */}
              <div className="mt-auto">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-eco-green to-eco-emerald text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Baca Berita
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}