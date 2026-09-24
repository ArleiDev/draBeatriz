import { MessageCircle, Clock, ShieldCheck } from "lucide-react";

export default function Procedures() {
  const whatsappBaseUrl = "https://wa.me/5511998362106?text=";

  const procedures = [
    {
      id: "metodo-bello",
      badge: "Protocolo Assinatura",
      title: "Método Bello",
      subtitle: "Harmonização Facial Global",
      description:
        "O protocolo autoral da Dra. Beatriz que une estudo tridimensional, pontos estratégicos de sustentação e rejuvenescimento sutil para valorizar seus traços com total naturalidade.",
      idealFor: ["Perda de sustentação", "Contorno mandibular indefinido", "Olhar cansado"],
      duration: "Aprox. 60 a 90 min",
      recovery: "Retorno imediato às atividades",
      highlight: true,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20M%C3%A9todo%20Bello.",
    },
    {
      id: "rinomodelacao",
      badge: "Procedimento em Destaque",
      title: "Rinomodelação",
      subtitle: "Refinamento do Perfil Nasal Sem Cirurgia",
      description:
        "Correção e harmonização do nariz utilizando ácido hialurônico de alta pureza. Permite empinar suavemente a ponta caída e disfarçar o 'ossinho' (giba nasal) sem cortes ou anestesia geral.",
      idealFor: ["Ponta nasal caída", "Desnível do dorso / ossinho", "Assimetrias nasais leves"],
      duration: "Aprox. 40 min",
      recovery: "Resultado imediato, inchaço mínimo",
      highlight: false,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Tenho%20interesse%20em%20fazer%20Rinomodela%C3%A7%C3%A3o%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.",
    },
    {
      id: "labios",
      badge: "Sensibilidade & Contorno",
      title: "Preenchimento Labial",
      subtitle: "Escultura, Volume e Hidratação dos Lábios",
      description:
        "Tratamento delicado para desenhar o contorno, corrigir assimetrias e conferir volume e hidratação sob medida. Zero aspecto exagerado ou artificial: foco na maciez e harmonia com o sorriso.",
      idealFor: ["Lábios finos ou ressecados", "Perda de contorno com o tempo", "Pequenas assimetrias"],
      duration: "Aprox. 45 min",
      recovery: "Edema leve nos primeiros 2 dias",
      highlight: false,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20um%20preenchimento%20labial%20com%20voc%C3%AA.",
    },
    {
      id: "botox",
      badge: "Prevenção & Rejuvenescimento",
      title: "Toxina Botulínica (Botox)",
      subtitle: "Suavização das Linhas de Expressão",
      description:
        "Aplicação precisa para relaxar os músculos hipercinéticos da testa, glabela (entre as sobrancelhas) e pés de galinha. Previne o envelhecimento precoce sem congelar ou alterar suas expressões naturais.",
      idealFor: ["Linhas na testa e glabela", "Rugas ao sorrir (pés de galinha)", "Prevenção do envelhecimento"],
      duration: "Aprox. 30 min",
      recovery: "Sem repouso necessário",
      highlight: false,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Quero%20agendar%20uma%20aplica%C3%A7%C3%A3o%20de%20Botox%20com%20voc%C3%AA.",
    },
    {
      id: "bioestimuladores",
      badge: "Firmeza & Estímulo Natural",
      title: "Bioestimuladores de Colágeno",
      subtitle: "Firmeza Dermal e Efeito Banco de Colágeno",
      description:
        "Substâncias biocompatíveis (hidroxiapatita de cálcio ou ácido poli-L-láctico) que despertam a produção biológica do seu próprio colágeno, restaurando a espessura, o viço e a elasticidade da pele.",
      idealFor: ["Flacidez facial e pescoço", "Perda de firmeza e viço", "Rejuvenescimento preventivo"],
      duration: "Aprox. 50 min",
      recovery: "Retorno imediato à rotina",
      highlight: false,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20avaliar%20Bioestimuladores%20de%20Col%C3%A1geno.",
    },
    {
      id: "full-face",
      badge: "Equilíbrio Completo",
      title: "Planejamento Full Face",
      subtitle: "Tratamento Integrado e Faseado",
      description:
        "Plano de tratamento estratégico que combina preenchimentos estruturais, bioestimulação e toxina botulínica em etapas pensadas para o seu tempo e orçamento, promovendo harmonia duradoura.",
      idealFor: ["Rejuvenescimento completo", "Planejamento a médio e longo prazo", "Melhora global do contorno"],
      duration: "Sessões personalizadas",
      recovery: "Acompanhamento integral",
      highlight: false,
      whatsappMsg: "Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20um%20planejamento%20Full%20Face%20personalizado.",
    },
  ];

  return (
    <section id="procedimentos" className="py-20 md:py-28 bg-beige-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
            Portfólio de Procedimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950">
            Tratamentos faciais dedicados à sua{" "}
            <span className="block mt-1 text-brown-800">harmonia e autoconfiança.</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-brown-700/90 text-base sm:text-lg font-light leading-relaxed pt-2">
            Cada procedimento é executado com rigor técnico, mãos leves e materiais de padrão ouro mundial para resultados elegantes e seguros.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc) => (
            <div
              key={proc.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury ${
                proc.highlight
                  ? "bg-white border-2 border-gold-400/80 shadow-soft relative overflow-hidden"
                  : "bg-white/90 border border-beige-200/90 shadow-2xs hover:border-brown-300"
              }`}
            >
              {proc.highlight && (
                <div className="absolute top-0 right-0 bg-gold-500 text-brown-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-xs">
                  Assinatura
                </div>
              )}

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">
                  {proc.badge}
                </span>

                <h3 className="font-serif text-2xl font-medium text-brown-950 mt-1 mb-1">
                  {proc.title}
                </h3>
                <p className="text-xs text-brown-600 font-medium mb-4">
                  {proc.subtitle}
                </p>

                <p className="text-sm text-brown-700/90 font-light leading-relaxed mb-6">
                  {proc.description}
                </p>

                {/* Ideal for list */}
                <div className="space-y-2 mb-6 pt-4 border-t border-beige-100">
                  <p className="text-xs font-semibold text-brown-800 uppercase tracking-wider">
                    Indicado para:
                  </p>
                  {proc.idealFor.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-brown-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Button */}
              <div>
                <div className="py-3 px-3.5 bg-beige-100/60 rounded-xl mb-5 space-y-1.5 text-xs text-brown-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-brown-500" />
                    <span>{proc.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brown-500" />
                    <span>{proc.recovery}</span>
                  </div>
                </div>

                <a
                  href={`${whatsappBaseUrl}${proc.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    proc.highlight
                      ? "bg-brown-900 hover:bg-brown-800 text-beige-50 shadow-sm"
                      : "bg-beige-100 hover:bg-brown-900 text-brown-900 hover:text-beige-50 border border-beige-300 hover:border-transparent"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-gold-400" />
                  <span>Consultar Disponibilidade</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Assessment Banner */}
        <div className="mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-beige-200 shadow-soft text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-serif text-2xl text-brown-950 font-medium">
              Não sabe qual procedimento é o mais indicado para o seu rosto?
            </h4>
            <p className="text-sm text-brown-700/80 font-light">
              Na consulta de avaliação personalizada, a Dra. Beatriz analisa detalhadamente sua queixa, suas proporções e indica exatamente o que trará o melhor resultado com total segurança.
            </p>
          </div>
          <a
            href="https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20para%20entender%20qual%20procedimento%20%C3%A9%20ideal%20para%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-50 px-7 py-3.5 rounded-full text-sm font-medium shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>Fazer Avaliação Facial</span>
          </a>
        </div>

      </div>
    </section>
  );
}
