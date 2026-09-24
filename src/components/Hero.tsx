import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20harmoniza%C3%A7%C3%A3o%20facial.";

  return (
    <section
      id="hero"
      className="relative pt-32 pb-6 md:pt-40 md:pb-12 overflow-hidden bg-beige-50"
    >
      {/* Subtle warm luxury ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-champagne-200/50 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          
          {/* Left Column: Clean, punchy typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left pb-4 lg:pb-14">
            
            {/* Minimalist Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-medium tracking-[0.2em] uppercase text-brown-600">
              <span className="w-5 h-[1.5px] bg-gold-500 shrink-0" />
              <span>Harmonização Facial • São Paulo</span>
            </div>

            {/* Main Headline - Short, impactful, unforgettable */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-brown-950 tracking-tight leading-[1.06]">
              Menos excessos, <br />
              <span className="text-brown-800">mais harmonia.</span>
            </h1>

            {/* Short & Elegant Subtitle */}
            <p className="text-base sm:text-lg text-brown-700 font-normal max-w-lg leading-relaxed">
              Realçando sua beleza natural com tratamentos sob medida. A precisão biomédica aliada à sensibilidade estética para valorizar seus traços únicos.
            </p>

            {/* Compact Procedures Line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-brown-800 pt-1">
              <span className="font-medium">Método Bello</span>
              <span className="text-gold-500">•</span>
              <span className="font-medium">Rinomodelação</span>
              <span className="text-gold-500">•</span>
              <span className="font-medium">Lábios</span>
              <span className="text-gold-500">•</span>
              <span className="font-medium">Botox</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-brown-900 hover:bg-brown-800 text-beige-50 px-8 py-4 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Agendar Avaliação</span>
              </a>

              <a
                href="#metodo-bello"
                className="inline-flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-brown-900 border border-beige-300 px-6 py-4 rounded-full text-sm font-medium transition-all shadow-2xs hover:shadow-sm"
              >
                <span>Conhecer o Método Bello</span>
                <ArrowRight className="w-4 h-4 text-brown-600" />
              </a>
            </div>

            {/* Minimal footer note */}
            <div className="pt-4 flex items-center space-x-4 text-xs text-brown-600/90 border-t border-beige-200/80">
              <span>CRBM 65122</span>
              <span>•</span>
              <span>Biomédica Esteta</span>
              <span>•</span>
              <span>Atendimento Exclusivo</span>
            </div>

          </div>

          {/* Right Column: Clean Dra. Beatriz portrait with bottom fade and no overlapping badge clutter */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[470px]">
              
              {/* Backlight halo glow */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-b from-champagne-300/40 via-beige-200/30 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Transparent Cutout Image with Smooth Bottom Fade */}
              <div className="relative w-full h-[530px] sm:h-[610px]">
                <Image
                  src="/images/dra-beatriz-2-transparent.png"
                  alt="Dra. Beatriz Rigobello - Harmonização Facial em São Paulo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain object-bottom select-none pointer-events-none"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
