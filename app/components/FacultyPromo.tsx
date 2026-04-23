import { Code2, Palette, BarChart3, Database, Cpu, Rocket, GraduationCap, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const skills = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Membangun platform interaktif menggunakan Next.js, React, dan TypeScript.',
    color: '#16A34A',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Merancang antarmuka yang modern, intuitif, dan menarik secara visual.',
    color: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Menampilkan data lingkungan dalam bentuk grafik dan dashboard yang informatif.',
    color: '#0EA5E9',
  },
  {
    icon: Database,
    title: 'Information Systems',
    description: 'Mengelola data lokasi, pengguna, dan metrik lingkungan secara terstruktur.',
    color: '#F59E0B',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Potensi masa depan: prediksi volume sampah dan optimasi rute pengangkutan.',
    color: '#EF4444',
  },
  {
    icon: Rocket,
    title: 'IoT Integration',
    description: 'Potensi masa depan: sensor pintar untuk monitoring tempat sampah real-time.',
    color: '#14B8A6',
  },
];

export default function FacultyPromo() {
  return (
    <SectionWrapper id="about" dark className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-eco-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-eco-green/20 text-eco-green-light text-sm font-semibold mb-4 animate-on-scroll">
            🎓 Fakultas Teknologi Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-on-scroll">
            Dibangun dengan{' '}
            <span className="bg-gradient-to-r from-eco-green-light to-eco-blue bg-clip-text text-transparent">
              Teknologi Informasi
            </span>
          </h2>
          <p className="text-eco-gray-light max-w-2xl mx-auto animate-on-scroll">
            Proyek EcoBali Tech menunjukkan bagaimana mahasiswa Teknologi Informasi 
            bisa menciptakan solusi nyata untuk permasalahan lingkungan melalui berbagai skill IT.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-dark p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 animate-on-scroll group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${skill.color}20` }}
              >
                <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-sm text-eco-gray-light leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="glass-dark p-8 sm:p-10 rounded-2xl text-center animate-on-scroll bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border-eco-green/20">
          <div className="w-16 h-16 rounded-2xl bg-eco-green/20 flex items-center justify-center mx-auto mb-5">
            <GraduationCap className="w-8 h-8 text-eco-green-light" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tertarik Belajar Teknologi Informasi?
          </h3>
          <p className="text-eco-gray-light max-w-2xl mx-auto mb-6 leading-relaxed">
            Di Fakultas Teknologi Informasi, kamu akan belajar membangun solusi digital yang berdampak — 
            mulai dari web development, data science, hingga artificial intelligence. 
            Jadilah bagian dari generasi yang menggunakan teknologi untuk kebaikan!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#hero" className="btn-primary text-lg">
              <Rocket className="w-5 h-5" />
              Pelajari Lebih Lanjut
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-eco-gray-light/60 mt-6">
            © 2026 EcoBali Tech — Proyek Demo Fakultas Teknologi Informasi
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
