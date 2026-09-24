"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Antes e Depois", href: "#resultados" },
    { name: "Método Bello", href: "#metodo-bello" },
    { name: "Procedimentos", href: "#procedimentos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Feedbacks", href: "#feedbacks" },
    { name: "Dúvidas", href: "#faq" },
  ];

  const whatsappUrl = "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20harmoniza%C3%A7%C3%A3o%20facial.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-beige-50/90 backdrop-blur-md shadow-soft border-b border-beige-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group py-1">
            <span className="font-serif text-2xl sm:text-[1.7rem] font-medium tracking-tight text-brown-950 group-hover:text-brown-700 transition-colors">
              Dra. Beatriz Rigobello
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brown-800/80 hover:text-brown-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://www.instagram.com/drabeatrizrigobello/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dra. Beatriz Rigobello"
              className="p-2.5 rounded-full border border-beige-300 text-brown-700 hover:text-brown-900 hover:border-brown-400 hover:bg-beige-100 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-50 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-brown-900 text-beige-50 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-brown-900 hover:bg-beige-200/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-beige-50/98 backdrop-blur-xl border-b border-beige-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-brown-900 hover:text-gold-600 transition-colors py-1 border-b border-beige-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 bg-brown-900 text-beige-50 py-3 rounded-full text-sm font-medium shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/drabeatrizrigobello/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 border border-beige-300 text-brown-800 py-2.5 rounded-full text-sm hover:bg-beige-100 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-brown-600" />
                <span>Seguir no Instagram @drabeatrizrigobello</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
