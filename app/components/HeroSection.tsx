'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Calculator, BarChart3, Leaf, Waves, TreePine, Recycle } from 'lucide-react';
import { scrollToSection } from '@/app/lib/utils';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
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
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 eco-gradient-bg" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              background: i % 2 === 0 ? '#22C55E' : '#0EA5E9',
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F0FDF4]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
          <Leaf className="w-4 h-4 text-eco-green-light" />
          Platform Digital untuk Lingkungan Bali
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          Teknologi Informasi untuk Bali yang Lebih{' '}
          <span className="bg-gradient-to-r from-eco-green-light via-eco-teal to-eco-blue bg-clip-text text-transparent">
            Bersih, Hijau,
          </span>{' '}
          dan{' '}
          <span className="bg-gradient-to-r from-eco-blue to-eco-green-light bg-clip-text text-transparent">
            Cerdas
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          EcoBali Tech menunjukkan bagaimana solusi digital — dari visualisasi data hingga gamifikasi — 
          dapat membantu mengatasi permasalahan sampah dan lingkungan di Pulau Dewata.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('calculator')}
            className="btn-primary text-lg px-8 py-4"
          >
            <Calculator className="w-5 h-5" />
            Hitung Dampak Hijau Kamu
          </button>
          <button
            onClick={() => scrollToSection('dashboard')}
            className="btn-secondary text-lg px-8 py-4"
          >
            <BarChart3 className="w-5 h-5" />
            Jelajahi Dashboard
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-dark p-5 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-2">
              <Waves className="w-6 h-6 text-eco-blue" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={9800} suffix=" ton" />
            </div>
            <div className="text-sm text-white/60">Sampah per hari di Bali</div>
          </div>

          <div className="glass-dark p-5 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-2">
              <Recycle className="w-6 h-6 text-eco-green-light" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={34} suffix="%" />
            </div>
            <div className="text-sm text-white/60">Tingkat daur ulang</div>
          </div>

          <div className="glass-dark p-5 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-2">
              <TreePine className="w-6 h-6 text-eco-emerald" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              <AnimatedCounter end={186} suffix="+" />
            </div>
            <div className="text-sm text-white/60">Bank sampah aktif</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={() => scrollToSection('problem')}
            className="text-white/40 hover:text-white/70 transition-colors"
            aria-label="Scroll ke bawah"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
