"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { scrollToSection, cn } from "@/app/lib/utils";

const navLinks = [
  { label: "Beranda", id: "hero" },
  { label: "Edukasi", id: "waste-utilization" },
  { label: "Kalkulator", id: "calculator" },
  { label: "Dashboard", id: "dashboard" },
  { label: "Mini Game", id: "game" },
  { label: "Peta", id: "map" },
  { label: "Tentang", id: "about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-eco-green/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            onClick={() => handleClick("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-eco-green to-eco-emerald flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span
              className={cn(
                "text-lg font-bold transition-colors",
                scrolled ? "text-eco-dark" : "text-white",
              )}
            >
              EcoBali<span className="text-eco-green-light">Tech</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-eco-green/10",
                  scrolled
                    ? "text-eco-gray hover:text-eco-green"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("calculator")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-eco-green to-eco-emerald text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-eco-green/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              Mulai Sekarang
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-eco-dark hover:bg-eco-gray-muted"
                : "text-white hover:bg-white/10",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-eco-green/10 px-4 py-3 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="block w-full text-left px-4 py-3 rounded-xl text-eco-dark font-medium hover:bg-eco-green/10 hover:text-eco-green transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("calculator")}
            className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-eco-green to-eco-emerald text-white font-semibold rounded-xl text-center"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
