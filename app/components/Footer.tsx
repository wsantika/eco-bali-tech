import { Leaf, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-eco-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-eco-green to-eco-emerald flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                EcoBali<span className="text-eco-green-light">Tech</span>
              </span>
            </div>
            <p className="text-eco-gray-light text-sm leading-relaxed">
              Platform digital cerdas untuk mendukung Bali yang lebih bersih,
              hijau, dan berkelanjutan melalui teknologi informasi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-eco-green-light">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm text-eco-gray-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#waste-utilization"
                  className="hover:text-white transition-colors"
                >
                  Edukasi
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-white transition-colors"
                >
                  Kalkulator Hijau
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="hover:text-white transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#game" className="hover:text-white transition-colors">
                  Mini Game
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-white transition-colors">
                  Peta Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-4 text-eco-green-light">
              Dibangun Dengan
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Recharts",
                "Leaflet",
                "React",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-eco-gray-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-eco-gray-light text-sm text-center sm:text-left">
            © 2026 EcoBali Tech — Prodi Teknologi Informasi Undiknas. Dibuat untuk
            demo & promosi Prodi Teknologi Informasi.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eco-gray-light hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eco-gray-light hover:text-white transition-colors"
              aria-label="Vercel"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
