"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Award, HeartHandshake, Eye, Sparkles, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Differentials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const diffs = [
    {
      icon: Award,
      title: "Produtos Padrão Ouro Mundial",
      description: "Trabalhamos exclusivamente com as marcas líderes mundiais em ácido hialurônico e toxina botulínica, 100% aprovadas pela ANVISA.",
    },
    {
      icon: Eye,
      title: "Transparência & Rastreabilidade",
      description: "Todos os produtos são abertos e apresentados a você no início da sessão, com selo de lote, validade e rastreabilidade assegurada.",
    },
    {
      icon: Sparkles,
      title: "Mãos Leves & Procedimento Suave",
      description: "Uso de anestésicos tópicos hospitalares formulados e cânulas ultrafinas para um procedimento surpreendentemente confortável.",
    },
    {
      icon: UserCheck,
      title: "Privacidade & Exclusividade",
      description: "Atendimento com hora marcada e intervalo estendido entre pacientes, proporcionando total discrição e conforto em São Paulo.",
    },
    {
      icon: HeartHandshake,
      title: "Honestidade Estética",
      description: "Se um procedimento não for necessário ou puder comprometer sua harmonia natural, a Dra. Beatriz deixará isso claro desde o início.",
    },
    {
      icon: ShieldCheck,
      title: "Biossegurança Hospitalar Rigorosa",
      description: "Ambiente asséptico que segue as diretrizes mais rigorosas da vigilância sanitária e do Conselho Federal de Biomedicina.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, diffs.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-beige-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
              Padrão de Excelência
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950">
              Por que confiar seu rosto à{" "}
              <span className="block mt-1 text-brown-800">Dra. Beatriz Rigobello?</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mt-2" />
            <p className="text-brown-700 text-base sm:text-lg font-normal leading-relaxed pt-1">
              Cada detalhe da sua experiência é pensado para unir a máxima segurança da biomedicina estética ao conforto e à exclusividade.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Diferencial anterior"
              className="w-11 h-11 rounded-full bg-white hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo diferencial"
              className="w-11 h-11 rounded-full bg-white hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {diffs.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white rounded-3xl p-8 border border-beige-200 shadow-2xs hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-beige-100 border border-beige-200 flex items-center justify-center text-brown-800 group-hover:bg-brown-900 group-hover:text-gold-400 transition-colors mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-brown-950 mb-3">
                        {diff.title}
                      </h3>
                      <p className="text-sm text-brown-700/80 leading-relaxed font-normal">
                        {diff.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-beige-100 mt-6 flex items-center justify-between text-xs text-brown-500 font-medium">
                      <span>Diferencial 0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para diferencial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-brown-900" : "w-2 bg-beige-300 hover:bg-brown-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
