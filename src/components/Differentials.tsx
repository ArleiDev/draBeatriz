import { ShieldCheck, Award, HeartHandshake, Eye, Sparkles, UserCheck } from "lucide-react";

export default function Differentials() {
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

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-beige-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
            Padrão de Excelência
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950">
            Por que confiar seu rosto à{" "}
            <span className="block mt-1 text-brown-800">Dra. Beatriz Rigobello?</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-brown-700/90 text-base sm:text-lg font-light leading-relaxed pt-2">
            Cada detalhe da sua experiência é pensado para unir a máxima segurança da biomedicina estética ao conforto e à exclusividade.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-beige-200 shadow-2xs hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-beige-100 border border-beige-200 flex items-center justify-center text-brown-800 group-hover:bg-brown-900 group-hover:text-gold-400 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-brown-950 mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-brown-700/80 leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
