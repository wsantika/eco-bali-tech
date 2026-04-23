import { AlertTriangle, Droplets, Trash2, Lightbulb } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const problemCards = [
  {
    icon: Trash2,
    title: '9.800 Ton / Hari',
    description: 'Bali menghasilkan hampir 10 ribu ton sampah setiap hari, dan sebagian besar berakhir di tempat pembuangan terbuka.',
    color: 'text-eco-red',
    bg: 'bg-red-50',
  },
  {
    icon: Droplets,
    title: '33% Sampah Plastik',
    description: 'Sepertiga dari total sampah Bali adalah plastik yang mencemari sungai, pantai, dan laut.',
    color: 'text-eco-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: AlertTriangle,
    title: 'Wisata vs Lingkungan',
    description: 'Lebih dari 6 juta wisatawan/tahun meningkatkan volume sampah, terutama di kawasan wisata populer.',
    color: 'text-eco-amber',
    bg: 'bg-amber-50',
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="bg-eco-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-eco-red text-sm font-semibold mb-4 animate-on-scroll">
          ⚠️ Permasalahan Lingkungan
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Bali Menghadapi Tantangan <span className="text-eco-red">Besar</span>
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Pulau Dewata yang indah menghadapi krisis sampah yang serius. Namun, teknologi informasi bisa menjadi bagian dari solusi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {problemCards.map((card) => (
          <div
            key={card.title}
            className="glass-card p-7 animate-on-scroll"
          >
            <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-5`}>
              <card.icon className={`w-7 h-7 ${card.color}`} />
            </div>
            <h3 className="text-xl font-bold text-eco-dark mb-2">{card.title}</h3>
            <p className="text-eco-gray leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Solution teaser */}
      <div className="glass-card p-8 sm:p-10 bg-gradient-to-r from-eco-green/5 to-eco-blue/5 border-eco-green/20 animate-on-scroll">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-14 h-14 bg-eco-green/10 rounded-2xl flex items-center justify-center shrink-0">
            <Lightbulb className="w-7 h-7 text-eco-green" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-eco-dark mb-2">
              Solusi Digital untuk Lingkungan
            </h3>
            <p className="text-eco-gray leading-relaxed">
              Dengan kekuatan <strong className="text-eco-green">Teknologi Informasi</strong>, kita bisa membangun 
              sistem pengelolaan sampah yang lebih cerdas — dari edukasi masyarakat, visualisasi data, 
              hingga gamifikasi partisipasi lingkungan. EcoBali Tech adalah contoh nyata bagaimana 
              mahasiswa IT bisa menciptakan dampak positif untuk Bali.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
