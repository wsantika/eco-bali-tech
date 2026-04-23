// Calculator scoring rules and recommendations

export interface CalculatorAnswers {
  botolPlastik: number;       // 0–20 bottles per week
  bawaTumbler: string;        // 'ya' | 'tidak'
  pilahSampah: string;        // 'ya' | 'tidak' | 'kadang'
  kantongPlastik: number;     // 0–20 bags per week
  transportasi: string;       // 'jalan' | 'sepeda' | 'bus' | 'motor' | 'mobil'
  aksiLingkungan: string;     // 'sering' | 'jarang' | 'tidak'
}

export const defaultAnswers: CalculatorAnswers = {
  botolPlastik: 5,
  bawaTumbler: 'tidak',
  pilahSampah: 'tidak',
  kantongPlastik: 5,
  transportasi: 'motor',
  aksiLingkungan: 'tidak',
};

export function calculateScore(answers: CalculatorAnswers): number {
  let score = 50; // Start at 50 (neutral)

  // Plastic bottles: fewer = higher score
  if (answers.botolPlastik === 0) score += 15;
  else if (answers.botolPlastik <= 2) score += 10;
  else if (answers.botolPlastik <= 5) score += 3;
  else if (answers.botolPlastik <= 10) score -= 5;
  else score -= 12;

  // Tumbler usage
  if (answers.bawaTumbler === 'ya') score += 12;
  else score -= 5;

  // Waste sorting
  if (answers.pilahSampah === 'ya') score += 15;
  else if (answers.pilahSampah === 'kadang') score += 5;
  else score -= 8;

  // Plastic bags
  if (answers.kantongPlastik === 0) score += 12;
  else if (answers.kantongPlastik <= 2) score += 8;
  else if (answers.kantongPlastik <= 5) score += 2;
  else if (answers.kantongPlastik <= 10) score -= 5;
  else score -= 10;

  // Transportation
  if (answers.transportasi === 'jalan') score += 12;
  else if (answers.transportasi === 'sepeda') score += 10;
  else if (answers.transportasi === 'bus') score += 5;
  else if (answers.transportasi === 'motor') score -= 3;
  else score -= 8; // mobil

  // Environmental action participation
  if (answers.aksiLingkungan === 'sering') score += 15;
  else if (answers.aksiLingkungan === 'jarang') score += 5;
  else score -= 5;

  // Clamp between 0 and 100
  return Math.max(0, Math.min(100, score));
}

export interface BadgeInfo {
  name: string;
  emoji: string;
  color: string;
  description: string;
}

export function getBadge(score: number): BadgeInfo {
  if (score >= 85) {
    return {
      name: 'Bali Eco Hero 🌟',
      emoji: '🦸',
      color: '#16A34A',
      description: 'Luar biasa! Kamu adalah pahlawan lingkungan sejati untuk Bali!',
    };
  } else if (score >= 65) {
    return {
      name: 'Eco Champion 🏆',
      emoji: '🏆',
      color: '#059669',
      description: 'Hebat! Gaya hidupmu sudah sangat ramah lingkungan.',
    };
  } else if (score >= 40) {
    return {
      name: 'Green Mover 🌿',
      emoji: '🌿',
      color: '#0EA5E9',
      description: 'Kamu sudah mulai bergerak menuju gaya hidup hijau. Terus tingkatkan!',
    };
  } else {
    return {
      name: 'Eco Starter 🌱',
      emoji: '🌱',
      color: '#F59E0B',
      description: 'Ini adalah awal yang baik! Mari mulai langkah kecil untuk lingkungan.',
    };
  }
}

export function getRecommendations(answers: CalculatorAnswers): string[] {
  const recs: string[] = [];

  if (answers.botolPlastik > 3) {
    recs.push('🥤 Kurangi penggunaan botol plastik — bawa botol minum sendiri (tumbler) bisa menghemat hingga 150 botol/tahun!');
  }
  if (answers.bawaTumbler === 'tidak') {
    recs.push('💧 Mulai biasakan membawa tumbler. Selain ramah lingkungan, banyak kafe di Bali memberi diskon untuk pengguna tumbler!');
  }
  if (answers.pilahSampah !== 'ya') {
    recs.push('♻️ Coba mulai pilah sampah di rumah: pisahkan organik, plastik, dan kertas. Ini langkah paling berdampak yang bisa kamu lakukan!');
  }
  if (answers.kantongPlastik > 3) {
    recs.push('🛍️ Bawa tas belanja sendiri (tote bag). Bali sudah melarang kantong plastik sejak 2019 — mari dukung kebijakan ini!');
  }
  if (answers.transportasi === 'mobil' || answers.transportasi === 'motor') {
    recs.push('🚲 Pertimbangkan bersepeda atau berjalan kaki untuk jarak dekat. Selain sehat, kamu juga mengurangi emisi karbon!');
  }
  if (answers.aksiLingkungan === 'tidak') {
    recs.push('🌊 Ikuti kegiatan beach cleanup atau aksi lingkungan di komunitasmu. Satu aksi kecil bisa menginspirasi banyak orang!');
  }

  if (recs.length === 0) {
    recs.push('🌟 Kamu sudah menjadi contoh yang baik! Terus pertahankan gaya hidup hijau dan ajak orang-orang di sekitarmu.');
  }

  return recs;
}
