export type NewsArticle = {
  title: string;
  summary: string;
  source: string;
  date: string;
  url: string;
  category: string;
  image: string;
};

export const newsArticles: NewsArticle[] = [
  {
    title: "Pemprov Bali Mulai Larang Sampah Organik Masuk TPA Suwung",
    summary:
      "Pemerintah Provinsi Bali mulai melarang sampah organik masuk ke TPA Suwung. Kebijakan ini menegaskan pentingnya pemilahan sampah dari rumah, terutama organik, agar tidak langsung dibuang ke tempat pembuangan akhir.",
    source: "ANTARA",
    date: "2026-03-26",
    url: "https://www.antaranews.com/berita/5504477/pemprov-bali-mulai-larang-sampah-organik-masuk-tpa-suwung",
    category: "Organik",
    image: "images/news/news-1.png",
  },
  {
    title: "Aturan Lengkap Pengelolaan Sampah di Bali",
    summary:
      "Bali mendorong pengelolaan sampah berbasis sumber di berbagai sektor, termasuk pembatasan plastik sekali pakai, reuse-refill, dan pemilahan organik, daur ulang, serta residu.",
    source: "detikcom",
    date: "2025-03-27",
    url: "https://www.detik.com/bali/berita/d-7857309/aturan-lengkap-pengelolaan-sampah-di-bali-perkantoran-hingga-tempat-ibadah",
    category: "Kebijakan",
    image: "images/news/news-2.png",
  },
  {
    title: "Polemik TPA Suwung, Dari Aksi Truk Sampah hingga Respons Gubernur Bali",
    summary:
      "Persoalan TPA Suwung menunjukkan bahwa pengelolaan sampah di Bali membutuhkan solusi yang tidak hanya cepat, tetapi juga sistemik dan berkelanjutan agar tidak membebani masyarakat.",
    source: "detikcom",
    date: "2025-12-23",
    url: "https://www.detik.com/bali/berita/d-8275058/polemik-tpa-suwung-dari-aksi-truk-sampah-hingga-respons-gubernur-bali",
    category: "Krisis Sampah",
    image: "images/news/news-3.png",
  },
];