import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carolina Mendonça",
      location: "Jardins, São Paulo",
      procedure: "Rinomodelação & Lábios",
      rating: 5,
      content:
        "Eu tinha muito medo de mexer no meu nariz e perder a minha identidade. A Dra. Beatriz fez a rinomodelação e preenchimento labial com tanta delicadeza que meu perfil ficou maravilhoso! Ninguém diz que fiz procedimento, apenas que fiquei mais bonita e elegante.",
    },
    {
      name: "Renata Vasconcelos",
      location: "Moema, São Paulo",
      procedure: "Método Bello & Botox",
      rating: 5,
      content:
        "O Método Bello foi uma virada de chave para a minha autoestima. A Dra. Beatriz tem uma visão artística e anatômica impecável. O botox e os pontos de sustentação tiraram aquele ar de cansaço sem travar meu sorriso. Atendimento de altíssimo nível!",
    },
    {
      name: "Gabriela Takahashi",
      location: "Itaim Bibi, São Paulo",
      procedure: "Preenchimento Labial",
      rating: 5,
      content:
        "Meus lábios sempre foram muito finos e eu fugia da harmonização com medo de ficar artificial. A Dra. Beatriz foi atenciosa, explicou tudo e o resultado superou todas as expectativas: lábios macios, desenhados e com volume perfeito.",
    },
    {
      name: "Juliana Prado",
      location: "Pinheiros, São Paulo",
      procedure: "Botox Preventivo & Bioestimulador",
      rating: 5,
      content:
        "O que mais me impressionou foi a ética da Dra. Beatriz. Ela me orientou exatamente sobre o que faria sentido para a minha idade e não tentou me empurrar nada em excesso. Mão leve, sem dor e acompanhamento impecável!",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
            Depoimentos & Experiências
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brown-950">
            A satisfação de quem escolheu a{" "}
            <span className="block mt-1 text-brown-800">naturalidade e a harmonia.</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-brown-700 text-base sm:text-lg font-normal leading-relaxed pt-2">
            Veja o que nossas pacientes dizem sobre o cuidado, a precisão e a leveza dos atendimentos com a Dra. Beatriz Rigobello.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-beige-50/70 border border-beige-200/90 rounded-3xl p-7 flex flex-col justify-between hover:shadow-soft hover:bg-beige-100/60 transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-sm text-brown-800 font-normal leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-beige-200/70">
                <p className="font-serif text-base font-semibold text-brown-950">
                  {item.name}
                </p>
                <p className="text-xs text-brown-600 font-medium">
                  {item.location}
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-beige-200/80 text-brown-800">
                  {item.procedure}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory note */}
        <p className="text-center text-xs text-brown-500 font-light mt-12 max-w-xl mx-auto">
          *Os depoimentos representam experiências individuais de pacientes da Dra. Beatriz Rigobello. Os resultados podem variar de acordo com as características biológicas e anatômicas de cada pessoa.
        </p>

      </div>
    </section>
  );
}
