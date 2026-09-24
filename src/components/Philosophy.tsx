import { Compass, Feather, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: Feather,
      title: "Sutileza & Naturalidade",
      description:
        "O objetivo nunca é transformar quem você é, mas sim despertar a sua versão mais descansada, jovial e equilibrada. O melhor elogio é quando ninguém percebe que você fez um procedimento, apenas notam sua luz.",
    },
    {
      icon: Compass,
      title: "Proporção Áurea Individual",
      description:
        "Cada rosto possui métricas e curvas únicas. Realizamos um mapeamento anatômico milimétrico para harmonizar terços faciais sem reproduzir fórmulas prontas ou rostos padronizados.",
    },
    {
      icon: ShieldCheck,
      title: "Rigor Científico & Segurança",
      description:
        "Como Biomédica Esteta (CRBM 65122), a segurança biológica é prioridade absoluta. Utilizamos apenas produtos biocompatíveis homologados pela ANVISA e técnicas seguras com micro-cânulas.",
    },
    {
      icon: HeartHandshake,
      title: "Menos Excessos, Mais Harmonia",
      description:
        "Nossa conduta é guiada pela ética e pela moderação. Dizer 'não' a procedimentos desnecessários ou exagerados faz parte do nosso compromisso inegociável com a sua harmonia estética duradoura.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
            Conceito & Filosofia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950">
            A estética facial que valoriza a sua essência,{" "}
            <span className="block mt-1 text-brown-800">sem transformar seus traços.</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-brown-700 text-base sm:text-lg font-normal leading-relaxed pt-2">
            Em um mundo repleto de procedimentos artificiais e excessos, a Dra. Beatriz Rigobello defende a harmonização consciente: tratamentos delicados que respeitam a dinâmica das suas expressões.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-beige-50/70 hover:bg-beige-100/70 border border-beige-200/80 rounded-3xl p-7 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-beige-200 flex items-center justify-center text-brown-800 shadow-2xs group-hover:bg-brown-900 group-hover:text-gold-400 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-brown-950 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brown-700/80 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-beige-200/60 mt-6 flex items-center justify-between text-xs text-brown-600 font-medium">
                  <span>Pilar 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-gold-500/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Box */}
        <div className="mt-16 bg-gradient-to-r from-beige-100 via-champagne-100/50 to-beige-100 border border-beige-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-brown-900 font-normal leading-relaxed">
            &ldquo;Harmonizar não é sobre mudar quem você é. É sobre retirar o cansaço do olhar, desenhar a harmonia do perfil e fazer sua beleza natural transparecer com leveza.&rdquo;
          </p>
          <div className="mt-6 flex flex-col items-center">
            <span className="font-sans font-semibold text-sm tracking-wide text-brown-900">
              Dra. Beatriz Rigobello
            </span>
            <span className="text-xs text-brown-600">
              Biomédica Esteta • CRBM 65122
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
