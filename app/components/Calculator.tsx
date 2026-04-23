'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, RotateCcw, Sparkles, ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import {
  CalculatorAnswers,
  defaultAnswers,
  calculateScore,
  getBadge,
  getRecommendations,
} from '@/app/data/calculator-rules';
import { cn } from '@/app/lib/utils';

export default function Calculator() {
  const [answers, setAnswers] = useState<CalculatorAnswers>(defaultAnswers);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleCalculate = () => {
    const s = calculateScore(answers);
    setScore(s);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers(defaultAnswers);
    setShowResult(false);
    setScore(0);
  };

  const badge = getBadge(score);
  const recommendations = getRecommendations(answers);

  return (
    <SectionWrapper id="calculator" className="bg-gradient-to-b from-eco-white to-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/10 text-eco-green text-sm font-semibold mb-4 animate-on-scroll">
          🧮 Green Impact Calculator
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Seberapa <span className="eco-gradient-text">Hijau</span> Gaya Hidupmu?
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Jawab 6 pertanyaan sederhana tentang kebiasaan harianmu dan temukan skor hijau serta rekomendasi personal.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!showResult ? (
          <div className="glass-card p-6 sm:p-8 animate-on-scroll">
            <div className="space-y-8">
              {/* Q1 - Plastic bottles */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  🥤 Berapa botol plastik yang kamu gunakan per minggu?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={answers.botolPlastik}
                    onChange={(e) => setAnswers({ ...answers, botolPlastik: Number(e.target.value) })}
                    className="flex-1 h-2 bg-eco-gray-muted rounded-full appearance-none cursor-pointer accent-eco-green"
                  />
                  <span className="w-16 text-center font-bold text-eco-green text-lg bg-eco-green/10 rounded-xl py-1">
                    {answers.botolPlastik}
                  </span>
                </div>
              </div>

              {/* Q2 - Tumbler */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  💧 Apakah kamu membawa tumbler sendiri?
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'ya', label: 'Ya, selalu! ✅' },
                    { value: 'tidak', label: 'Belum 😅' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setAnswers({ ...answers, bawaTumbler: opt.value })}
                      className={cn(
                        'flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 border-2',
                        answers.bawaTumbler === opt.value
                          ? 'bg-eco-green/10 border-eco-green text-eco-green'
                          : 'bg-white border-eco-gray-muted text-eco-gray hover:border-eco-green/30'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q3 - Waste sorting */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  ♻️ Apakah kamu memilah sampah di rumah?
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'ya', label: 'Ya ✅' },
                    { value: 'kadang', label: 'Kadang-kadang 🤔' },
                    { value: 'tidak', label: 'Belum ❌' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setAnswers({ ...answers, pilahSampah: opt.value })}
                      className={cn(
                        'flex-1 py-3 px-3 rounded-xl font-medium transition-all duration-200 border-2 text-sm sm:text-base',
                        answers.pilahSampah === opt.value
                          ? 'bg-eco-green/10 border-eco-green text-eco-green'
                          : 'bg-white border-eco-gray-muted text-eco-gray hover:border-eco-green/30'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4 - Plastic bags */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  🛍️ Berapa kantong plastik yang kamu gunakan per minggu?
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={answers.kantongPlastik}
                    onChange={(e) => setAnswers({ ...answers, kantongPlastik: Number(e.target.value) })}
                    className="flex-1 h-2 bg-eco-gray-muted rounded-full appearance-none cursor-pointer accent-eco-green"
                  />
                  <span className="w-16 text-center font-bold text-eco-green text-lg bg-eco-green/10 rounded-xl py-1">
                    {answers.kantongPlastik}
                  </span>
                </div>
              </div>

              {/* Q5 - Transportation */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  🚗 Apa transportasi utamamu sehari-hari?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { value: 'jalan', label: '🚶 Jalan Kaki' },
                    { value: 'sepeda', label: '🚲 Sepeda' },
                    { value: 'bus', label: '🚌 Bus/Angkot' },
                    { value: 'motor', label: '🏍️ Motor' },
                    { value: 'mobil', label: '🚗 Mobil' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setAnswers({ ...answers, transportasi: opt.value })}
                      className={cn(
                        'py-3 px-3 rounded-xl font-medium transition-all duration-200 border-2 text-sm',
                        answers.transportasi === opt.value
                          ? 'bg-eco-green/10 border-eco-green text-eco-green'
                          : 'bg-white border-eco-gray-muted text-eco-gray hover:border-eco-green/30'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q6 - Environmental action */}
              <div>
                <label className="block text-eco-dark font-semibold mb-3">
                  🌊 Seberapa sering kamu ikut aksi lingkungan (beach cleanup, dll)?
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'sering', label: 'Sering 💪' },
                    { value: 'jarang', label: 'Jarang 🤷' },
                    { value: 'tidak', label: 'Belum pernah 😔' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setAnswers({ ...answers, aksiLingkungan: opt.value })}
                      className={cn(
                        'flex-1 py-3 px-3 rounded-xl font-medium transition-all duration-200 border-2 text-sm sm:text-base',
                        answers.aksiLingkungan === opt.value
                          ? 'bg-eco-green/10 border-eco-green text-eco-green'
                          : 'bg-white border-eco-gray-muted text-eco-gray hover:border-eco-green/30'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-10 flex justify-center">
              <button onClick={handleCalculate} className="btn-primary text-lg px-10 py-4">
                <Sparkles className="w-5 h-5" />
                Lihat Skor Hijau Kamu
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6 animate-fade-in-up">
            {/* Score Card */}
            <div className="glass-card p-8 sm:p-10 text-center">
              <div className="text-6xl mb-4">{badge.emoji}</div>
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke={badge.color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / 100) * 327} 327`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-eco-dark">{score}</span>
                  <span className="text-sm text-eco-gray">/100</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ color: badge.color }}>
                {badge.name}
              </h3>
              <p className="text-eco-gray max-w-md mx-auto">{badge.description}</p>
            </div>

            {/* Recommendations */}
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-lg font-bold text-eco-dark mb-4">💡 Rekomendasi untuk Kamu</h4>
              <div className="space-y-3">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="p-4 bg-eco-green/5 rounded-xl text-eco-dark text-sm leading-relaxed border border-eco-green/10"
                  >
                    {rec}
                  </div>
                ))}
              </div>
            </div>

            {/* Reset */}
            <div className="text-center">
              <button onClick={handleReset} className="btn-outline">
                <RotateCcw className="w-4 h-4" />
                Hitung Ulang
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
