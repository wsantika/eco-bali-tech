'use client';

import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowDown,
  Calculator,
  BarChart3,
  Leaf,
  Waves,
  TreePine,
  Recycle,
} from 'lucide-react';
import { scrollToSection } from '@/app/lib/utils';

function AnimatedCounter({
  end,
  suffix = '',
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [started, end, duration]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString('id-ID')}
      {suffix}
    </span>
  );
}
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 eco-gradient-bg" />

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-eco-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-10 w-52 h-52 bg-eco-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              background: i % 2 === 0 ? '#22C55E' : '#0EA5E9',
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F0FDF4]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8 shadow-lg"
        >
          <Leaf className="w-4 h-4 text-eco-green-light" />
          Platform Digital untuk Lingkungan Bali
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Teknologi Informasi untuk Bali yang Lebih{' '}
          <span className="bg-gradient-to-r from-eco-green-light via-eco-teal to-eco-blue bg-clip-text text-transparent">
            Bersih, Hijau,
          </span>{' '}
          dan{' '}
          <span className="bg-gradient-to-r from-eco-blue to-eco-green-light bg-clip-text text-transparent">
            Cerdas
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          EcoBali Tech menunjukkan bagaimana solusi digital — dari visualisasi data
          hingga gamifikasi — dapat membantu mengatasi permasalahan sampah dan
          lingkungan di Pulau Dewata.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('calculator')}
            className="btn-primary text-lg px-8 py-4 shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Hitung Dampak Hijau Kamu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('dashboard')}
            className="btn-secondary text-lg px-8 py-4 shadow-xl"
          >
            <BarChart3 className="w-5 h-5" />
            Jelajahi Dashboard
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div
            variants={statCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass-dark p-5 rounded-2xl text-center shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <Waves className="w-6 h-6 text-eco-blue" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={9800} suffix=" ton" />
            </div>
            <div className="text-sm text-white/60">Sampah per hari di Bali</div>
          </motion.div>

          <motion.div
            variants={statCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass-dark p-5 rounded-2xl text-center shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <Recycle className="w-6 h-6 text-eco-green-light" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={34} suffix="%" />
            </div>
            <div className="text-sm text-white/60">Tingkat daur ulang</div>
          </motion.div>

          <motion.div
            variants={statCardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass-dark p-5 rounded-2xl text-center shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <TreePine className="w-6 h-6 text-eco-emerald" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={186} suffix="+" />
            </div>
            <div className="text-sm text-white/60">Bank sampah aktif</div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.1 },
            y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('problem')}
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            aria-label="Scroll ke bawah"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}