import Image from "next/image";
import { Award, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function About() {
  const whatsappUrl =
    "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20conversa.";

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-beige-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with transparent fade */}
          <div className="lg:col-span-5 flex justify-center items-end order-2 lg:order-1 relative">
            <div className="relative w-full max-w-[400px]">
              
              {/* Backlight halo glow */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-beige-200/60 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Transparent image with smooth bottom fade */}
              <div className="relative w-full h-[490px] sm:h-[550px]">
                <Image
                  src="/images/dra-beatriz-1-transparent.png"
                  alt="Dra. Beatriz Rigobello - Biomédica Esteta CRBM 65122 São Paulo"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain object-bottom select-none pointer-events-none"
                />
              </div>

              {/* Minimalist Registration Badge */}
              <div className="absolute bottom-6 left-2 sm:left-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-luxury border border-beige-200 text-left space-y-1">
                <div className="flex items-center space-x-1.5 text-gold-600">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Registro Profissional</span>
                </div>
                <p className="text-sm font-serif font-medium text-brown-950">CRBM 65122</p>
                <p className="text-[11px] text-brown-600">Conselho Regional de Biomedicina</p>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Authority */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beige-100 border border-beige-200 text-brown-800 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Conheça a Especialista</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950 leading-tight">
              Dra. Beatriz Rigobello <br />
              <span className="text-brown-800 font-normal text-2xl sm:text-3xl block mt-1">
                Biomédica Esteta • CRBM 65122
              </span>
            </h2>

            <p className="text-brown-700 text-base leading-relaxed font-normal">
              Apaixonada pela arte de harmonizar faces com respeito à anatomia e à singularidade de cada paciente, a <strong>Dra. Beatriz Rigobello</strong> atua em São Paulo com foco exclusivo em procedimentos faciais seguros, avançados e minimamente invasivos.
            </p>

            <p className="text-brown-700 text-base leading-relaxed font-normal">
              Sua filosofia de trabalho baseia-se na premissa fundamental: <strong>Menos excessos, mais harmonia</strong>. Cada rosto é tratado como uma tela singular, onde a ciência biomédica orienta a biossegurança e a sensibilidade artística orienta o equilíbrio e a elegância.
            </p>

            {/* Commitments list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brown-900">Avaliação Individualizada e Sem Pressa</h4>
                  <p className="text-xs text-brown-600 font-normal">Dedicação integral para ouvir suas queixas e alinhar expectativas realistas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brown-900">Técnicas Atraumáticas e Confortáveis</h4>
                  <p className="text-xs text-brown-600 font-normal">Uso de anestésicos tópicos eficientes e micro-cânulas que minimizam qualquer desconforto e hematomas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-brown-900">Acompanhamento e Cuidado Contínuo</h4>
                  <p className="text-xs text-brown-600 font-normal">Apoio pós-procedimento com suporte direto para você se sentir sempre segura e acolhida.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-50 px-7 py-3.5 rounded-full text-sm font-medium shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span>Agendar com a Dra. Beatriz</span>
              </a>

              <a
                href="https://www.instagram.com/drabeatrizrigobello/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-beige-100 hover:bg-beige-200 text-brown-800 border border-beige-300 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-brown-700" />
                <span>@drabeatrizrigobello</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
