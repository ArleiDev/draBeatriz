import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function MetodoBello() {
  const whatsappUrl = "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20saber%20mais%20sobre%20o%20M%C3%A9todo%20Bello.";

  const steps = [
    {
      step: "01",
      title: "Mapeamento Anatômico & Proporções",
      description: "Análise profunda da estrutura óssea, compartimentos de gordura e dinâmica muscular de cada terço facial.",
    },
    {
      step: "02",
      title: "Planejamento Conservador Sob Medida",
      description: "Definição milimétrica dos pontos exatos de sustentação e volumetria, evitando qualquer exagero ou aspecto artificial.",
    },
    {
      step: "03",
      title: "Execução Segura com Micro-Cânulas",
      description: "Aplicação com técnica atraumática, produtos de biocompatibilidade premium e máximo conforto durante a sessão.",
    },
    {
      step: "04",
      title: "Refinamento & Acompanhamento Pós",
      description: "Revisão cuidadosa com fotos de controle e orientações detalhadas para garantir longevidade e acabamento perfeito.",
    },
  ];

  const highlights = [
    "Zero efeito 'rosto engessado' ou padronizado",
    "Preservação da sua identidade e dos seus traços únicos",
    "Produtos absorvíveis e biocompatíveis de renome internacional",
    "Retorno rápido às suas atividades cotidianas",
    "Atendimento personalizado e humanizado do início ao fim",
  ];

  return (
    <section id="metodo-bello" className="py-20 md:py-28 bg-brown-900 text-beige-50 relative overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brown-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brown-800/80 border border-gold-500/30 text-gold-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Protocolo Autoral de Harmonização</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Método Bello: <br />
              <span className="text-beige-200 block mt-1 font-normal">A elegância da harmonia que não se impõe.</span>
            </h2>

            <p className="text-beige-200/90 text-base leading-relaxed font-light">
              Criado e aprimorado pela **Dra. Beatriz Rigobello**, o Método Bello nasce da convicção de que a verdadeira harmonização facial é um trabalho artesanal. Cada ponto de aplicação é calculado para restaurar sombras, devolver a firmeza e harmonizar proporções com discrição e sofisticação.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gold-300" />
                  </div>
                  <span className="text-sm text-beige-100 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gold-500 hover:bg-gold-400 text-brown-950 font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Quero Avaliar o Método Bello</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Step by Step Workflow Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-beige-100 mb-6 font-light">
              Como funciona o passo a passo do Método Bello:
            </h3>

            <div className="space-y-4">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="bg-brown-800/60 hover:bg-brown-800/90 border border-brown-700/60 hover:border-gold-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <span className="font-serif text-2xl sm:text-3xl text-gold-400/80 font-light group-hover:text-gold-300 transition-colors">
                      {st.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-medium text-white">
                        {st.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-beige-300/80 font-light leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
