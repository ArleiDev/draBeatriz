"use client";

import { useState, useEffect } from "react";
import { Star, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function Feedbacks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const whatsappUrl =
    "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Li%20os%20feedbacks%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  const feedbacks = [
    {
      name: "Carolina Mendonça",
      location: "Jardins, São Paulo",
      procedure: "Rinomodelação & Preenchimento Labial",
      stars: 5,
      date: "Há 2 semanas",
      feedback:
        "A Dra. Beatriz tem uma mão de anjo! Fiz rinomodelação e preenchimento labial com ela. O resultado ficou tão delicado que as pessoas só dizem que estou mais descansada e radiante. Era exatamente o que eu sonhava: elegância sem exageros!",
    },
    {
      name: "Renata Vasconcelos",
      location: "Moema, São Paulo",
      procedure: "Método Bello & Botox",
      stars: 5,
      date: "Há 1 mês",
      feedback:
        "Eu tinha pavor de ficar artificial. A Dra. Beatriz me explicou cada mililitro na avaliação e o Método Bello equilibrou meu queixo e perfil com uma naturalidade surreal. Atendimento impecável do início ao pós-procedimento.",
    },
    {
      name: "Gabriela Takahashi",
      location: "Itaim Bibi, São Paulo",
      procedure: "Preenchimento Labial",
      stars: 5,
      date: "Há 3 semanas",
      feedback:
        "Meus lábios eram muito finos e eu tinha medo do famoso 'bico de pato'. A Dra. Beatriz desenhou o contorno com tanta perfeição que ficaram macios, definidos e totalmente naturais. Não troco por ninguém em SP!",
    },
    {
      name: "Juliana Prado",
      location: "Pinheiros, São Paulo",
      procedure: "Botox Preventivo & Bioestimulador",
      stars: 5,
      date: "Há 1 mês",
      feedback:
        "O que mais me conquistou foi a honestidade dela. Fui querendo fazer vários procedimentos desnecessários e ela me orientou com ética sobre o que realmente valorizaria meu rosto. O botox não travou meu sorriso, ficou perfeito.",
    },
    {
      name: "Fernanda Alencar",
      location: "Vila Nova Conceição, SP",
      procedure: "Método Bello",
      stars: 5,
      date: "Há 2 meses",
      feedback:
        "Consultório lindo, higienização hospitalar e pontualidade exemplar. Todos os produtos foram abertos na minha frente com os selos da ANVISA. Segurança total e um resultado que elevou minha autoestima nas alturas!",
    },
    {
      name: "Larissa Medeiros",
      location: "Alphaville, SP",
      procedure: "Rinomodelação Estrutural",
      stars: 5,
      date: "Há 3 semanas",
      feedback:
        "Aquele desnível do meu nariz que tanto me incomodava em fotos sumiu! A pontinha ficou levemente empinada e meu perfil está lindo. Procedimento super tranquilo com o anestésico que ela usa, quase não senti nada.",
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

  const maxIndex = Math.max(0, feedbacks.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="feedbacks" className="py-20 md:py-28 bg-beige-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-champagne-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-2 text-xs font-medium tracking-[0.2em] uppercase text-brown-600">
              <span className="w-5 h-[1.5px] bg-gold-500 shrink-0" />
              <span>Opinião das Pacientes</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950 tracking-tight">
              Feedbacks de quem já viveu a experiência{" "}
              <span className="text-brown-800 block mt-1">com a Dra. Beatriz Rigobello.</span>
            </h2>

            <p className="text-brown-700 text-base sm:text-lg font-normal leading-relaxed pt-1">
              A verdadeira comprovação do nosso compromisso com a naturalidade, o conforto e o acolhimento.
            </p>

            {/* Social Proof Counter Banner */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-beige-200 shadow-2xs mt-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-xs font-semibold text-brown-950">
                5.0 / 5.0 no Google Avaliações
              </span>
              <span className="text-brown-300 hidden sm:inline">•</span>
              <span className="text-xs text-brown-700 font-medium">
                +300 atendimentos em SP
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Feedback anterior"
              className="w-11 h-11 rounded-full bg-white hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo feedback"
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
            {feedbacks.map((fb, idx) => (
              <div
                key={idx}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="bg-white rounded-3xl p-7 border border-beige-200/90 shadow-2xs hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Header row: stars & verified badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(fb.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                        ))}
                      </div>

                      <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>Verificada</span>
                      </span>
                    </div>

                    {/* Feedback Quote */}
                    <p className="text-sm text-brown-800 font-normal leading-relaxed mb-6 line-clamp-5">
                      &ldquo;{fb.feedback}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-beige-100 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base font-semibold text-brown-950">
                        {fb.name}
                      </p>
                      <p className="text-xs text-brown-600">
                        {fb.location}
                      </p>
                      <p className="text-[11px] text-gold-700 font-medium mt-1">
                        {fb.procedure}
                      </p>
                    </div>

                    <span className="text-[11px] text-brown-400 font-normal">
                      {fb.date}
                    </span>
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
                aria-label={`Ir para feedback ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-brown-900" : "w-2 bg-beige-300 hover:bg-brown-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="mt-14 bg-brown-900 text-beige-50 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-normal text-white">
              Quer viver essa mesma experiência de transformação natural?
            </h3>
            <p className="text-sm text-beige-200/90 font-normal">
              Agende uma consulta de avaliação individualizada diretamente com a nossa equipe.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-400 text-brown-950 px-7 py-3.5 rounded-full text-sm font-medium transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-brown-950" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
