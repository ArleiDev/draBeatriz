"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

interface CaseItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const cases: CaseItem[] = [
    {
      id: "labios-1",
      category: "labios",
      categoryLabel: "Lábios",
      title: "Preenchimento Labial & Contorno",
      subtitle: "Escultura labial com foco em hidratação e volume proporcional",
      description:
        "Definição milimétrica do arco do cupido, projeção harmônica dos lábios superior e inferior e acabamento com brilho e maciez naturais. Zero efeito exagerado.",
      image: "/images/results/labios-1.png",
      tags: ["Sem cirurgia", "Resultado imediato", "Ácido Hialurônico"],
    },
    {
      id: "rinomodelacao-1",
      category: "rinomodelacao",
      categoryLabel: "Rinomodelação",
      title: "Rinomodelação de Perfil",
      subtitle: "Alinhamento do dorso e sustentação suave da ponta nasal",
      description:
        "Suavização da giba óssea (ossinho do nariz) e refinamento do ângulo nasolabial sem cortes ou repouso cirúrgico, proporcionando equilíbrio de perfil elegante.",
      image: "/images/results/rinomodelacao-1.jpg",
      tags: ["Sem cortes", "Retorno imediato", "Refinamento do dorso"],
    },
    {
      id: "metodo-bello-1",
      category: "metodo-bello",
      categoryLabel: "Método Bello",
      title: "Método Bello: Harmonização de Perfil",
      subtitle: "Equilíbrio tridimensional entre dorso nasal, lábios e mento",
      description:
        "Aplicação combinada de pontos estratégicos de sustentação que conectam o terço médio ao terço inferior da face, resultando em um perfil nobre e descansado.",
      image: "/images/results/metodo-bello-1.png",
      tags: ["Protocolo Assinatura", "Proporção Áurea", "1 Sessão"],
    },
    {
      id: "rinomodelacao-2",
      category: "rinomodelacao",
      categoryLabel: "Rinomodelação",
      title: "Rinomodelação & Projeção Labial",
      subtitle: "Harmonização de perfil com elevação sutil da ponta",
      description:
        "Estruturação delicada da columela e alinhamento do dorso nasal, mantendo os traços autênticos da paciente com melhora expressiva da proporção facial.",
      image: "/images/results/rinomodelacao-2.png",
      tags: ["Ponta sustentada", "Harmonia de perfil", "Sem anestesia geral"],
    },
    {
      id: "metodo-bello-2",
      category: "metodo-bello",
      categoryLabel: "Método Bello",
      title: "Método Bello: Harmonização Global",
      subtitle: "Rejuvenescimento, definição mandibular e leveza",
      description:
        "Trabalho integrado de refinamento de contorno, melhora da linha de mandíbula e sustentação malar que realça o frescor da face com total naturalidade.",
      image: "/images/results/metodo-bello-2.png",
      tags: ["Harmonização completa", "Aspecto descansado", "Naturalidade"],
    },
  ];

  const categories = [
    { id: "todos", label: "Todos os Resultados" },
    { id: "metodo-bello", label: "Método Bello" },
    { id: "rinomodelacao", label: "Rinomodelação" },
    { id: "labios", label: "Lábios" },
  ];

  const filteredCases =
    activeCategory === "todos"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  // Responsive items count
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

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCase(null);
    };

    if (selectedCase) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCase]);

  const maxIndex = Math.max(0, filteredCases.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const getWhatsappUrl = (caseTitle: string) => {
    return `https://wa.me/5511998362106?text=${encodeURIComponent(
      `Olá, Dra. Beatriz! Gostei do resultado de "${caseTitle}" e gostaria de agendar uma avaliação para o meu rosto.`
    )}`;
  };

  return (
    <section id="resultados" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-beige-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="flex items-center justify-center space-x-2 text-xs font-medium tracking-[0.2em] uppercase text-brown-600">
            <span className="w-5 h-[1.5px] bg-gold-500 shrink-0" />
            <span>Casos Clínicos Reais</span>
            <span className="w-5 h-[1.5px] bg-gold-500 shrink-0" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950 tracking-tight">
            Antes e Depois: <br />
            <span className="text-brown-800">Transformações com naturalidade.</span>
          </h2>

          <p className="text-brown-700 text-base sm:text-lg font-normal leading-relaxed pt-1">
            Veja a precisão e a sutileza dos procedimentos realizados pela Dra. Beatriz Rigobello. Resultados reais que preservam a sua identidade.
          </p>
        </div>

        {/* Filter Categories & Carousel Controls Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-brown-900 text-beige-50 shadow-sm"
                    : "bg-beige-100 hover:bg-beige-200/80 text-brown-800 border border-beige-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Caso anterior"
              className="w-11 h-11 rounded-full bg-beige-100 hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo caso"
              className="w-11 h-11 rounded-full bg-beige-100 hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-sm"
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
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-beige-50/70 border border-beige-200/90 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 group h-full">
                  {/* Image Container */}
                  <div
                    onClick={() => setSelectedCase(item)}
                    className="relative aspect-[4/5] w-full bg-stone-900 cursor-pointer overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay hover badge */}
                    <div className="absolute inset-0 bg-brown-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-brown-950 shadow-md flex items-center space-x-1.5">
                        <Eye className="w-3.5 h-3.5 text-gold-600" />
                        <span>Ver Detalhes</span>
                      </div>
                    </div>

                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-brown-900 shadow-xs border border-beige-200">
                      {item.categoryLabel}
                    </div>

                    {/* Before / After Label */}
                    <div className="absolute bottom-3 left-3 right-3 bg-brown-950/75 backdrop-blur-md px-3 py-1.5 rounded-xl text-center text-[10px] sm:text-[11px] font-medium text-beige-100 flex items-center justify-between">
                      <span>Antes</span>
                      <span className="text-gold-400">✦</span>
                      <span>Depois</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="space-y-1.5 mb-4">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-brown-950">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brown-600 font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-brown-700 font-normal leading-relaxed pt-1 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 pb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-white border border-beige-200 text-[10px] text-brown-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Card CTA */}
                    <a
                      href={getWhatsappUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-white hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 hover:border-transparent py-2.5 rounded-full text-xs font-medium transition-all shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-gold-500" />
                      <span>Quero um resultado assim</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-brown-900" : "w-2 bg-beige-300 hover:bg-brown-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Regulatory Ethics Note */}
        <div className="mt-12 bg-beige-50 rounded-2xl p-5 border border-beige-200 max-w-3xl mx-auto text-center">
          <p className="text-xs text-brown-600/90 font-normal leading-relaxed">
            *Em conformidade com as diretrizes do Conselho Federal de Biomedicina (CFBM), as fotografias acima possuem caráter estritamente educativo e retratam casos reais da <strong>Dra. Beatriz Rigobello (CRBM 65122)</strong> com autorização dos pacientes. Cada anatomia humana é singular e os resultados podem variar conforme a resposta biológica de cada organismo.
          </p>
        </div>

      </div>

      {/* Lightbox Modal - Constrained to viewport, 2-column on desktop */}
      {selectedCase && (
        <div
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 z-50 bg-brown-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[88vh] overflow-hidden shadow-2xl border border-beige-200 flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200"
          >
            {/* Close Button - Always visible on top right */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-brown-900 border border-beige-200 flex items-center justify-center shadow-md transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Image (fits smoothly inside) */}
            <div className="md:w-1/2 bg-stone-950 relative h-64 sm:h-72 md:h-auto md:min-h-[460px] flex items-center justify-center shrink-0">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-brown-950/70 backdrop-blur-md px-3 py-1 rounded-lg text-center text-[10px] text-beige-100 flex items-center justify-between">
                <span>Antes</span>
                <span className="text-gold-400">✦</span>
                <span>Depois</span>
              </div>
            </div>

            {/* Right Column: Case Information & CTAs (scrollable if needed) */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">
                    {selectedCase.categoryLabel}
                  </span>
                  <span className="text-brown-300">•</span>
                  <span className="text-xs text-brown-500 font-medium">Caso Clínico Real</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-brown-950 leading-snug">
                  {selectedCase.title}
                </h3>

                <p className="text-xs text-brown-600 font-medium">
                  {selectedCase.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-brown-700 leading-relaxed font-normal pt-1">
                  {selectedCase.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedCase.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-beige-100 border border-beige-200 text-[10px] text-brown-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-beige-100 space-y-2.5">
                <a
                  href={getWhatsappUrl(selectedCase.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-50 py-3 rounded-full text-xs sm:text-sm font-medium shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold-400" />
                  <span>Quero uma avaliação para este procedimento</span>
                </a>

                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-full py-2.5 rounded-full border border-beige-300 text-brown-700 hover:bg-beige-100 text-xs font-medium transition-colors"
                >
                  Voltar para os resultados
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
