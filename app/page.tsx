import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import Calculator from "./components/Calculator";
import Dashboard from "./components/Dashboard";
import WasteGame from "./components/WasteGame";
import MapSection from "./components/MapSection";
import FacultyPromo from "./components/FacultyPromo";
import Footer from "./components/Footer";
import WasteUtilization from "./components/WasteUtilization";
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <WasteUtilization />
        <Calculator />
        <Dashboard />
        <WasteGame />
        <NewsSection />
        <MapSection />
        <FacultyPromo />
      </main>
      <Footer />
    </>
  );
}
