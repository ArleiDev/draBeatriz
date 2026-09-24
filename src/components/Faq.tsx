"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Os procedimentos de harmonização facial doem?",
      answer:
        "O conforto do paciente é uma das nossas maiores prioridades. Utilizamos anestésicos tópicos hospitalares de alta eficácia formulados sob medida, além de produtos que já possuem anestésico (lidocaína) integrado em sua fórmula. A grande maioria das aplicações é realizada com micro-cânulas de ponta arredondada, tornando o procedimento surpreendentemente tranquilo e praticamente indolor.",
    },
    {
      question: "Quanto tempo dura o efeito do Botox e do Preenchimento?",
      answer:
        "A Toxina Botulínica (Botox) tem durabilidade média de 4 a 6 meses, variando conforme o metabolismo e a atividade física do paciente. Já os preenchimentos com ácido hialurônico (como no Método Bello, Rinomodelação e Lábios) possuem durabilidade média de 10 a 18 meses, sendo substâncias biocompatíveis que são gradualmente e naturalmente absorvidas pelo organismo.",
    },
    {
      question: "O que é o Método Bello e por que ele é diferente?",
      answer:
        "O Método Bello é o protocolo autoral desenvolvido pela Dra. Beatriz Rigobello. Ele se diferencia por recusar o modelo de 'harmonização padrão em série'. Em vez de aplicar grandes volumes de preenchedores, o Método Bello estuda a estrutura óssea e as linhas de sombra da paciente para aplicar quantidades milimétricas e estratégicas apenas onde há real necessidade anatômica. O resultado é leve, elegante e imperceptível aos olhos de terceiros.",
    },
    {
      question: "Posso voltar a trabalhar no mesmo dia do procedimento?",
      answer:
        "Sim! Nossos procedimentos são minimamente invasivos e não cirúrgicos. Você pode retomar suas atividades habituais e profissionais no mesmo dia. Recomendamos apenas evitar exercícios físicos intensos, exposição solar direta e sauna nas primeiras 24 a 48 horas.",
    },
    {
      question: "Tenho medo de ficar com o rosto artificial. É possível ter um resultado 100% natural?",
      answer:
        "Com certeza! O próprio lema da Dra. Beatriz é 'Menos excessos, mais harmonia'. Nossa maior premissa ética é a preservação da sua anatomia e da sua essência. O objetivo é que as pessoas ao seu redor notem que você está mais descansada, jovial e bonita, sem jamais apontarem que houve intervenção estética.",
    },
    {
      question: "Como funciona a consulta de avaliação em São Paulo?",
      answer:
        "A consulta é um momento de escuta atenta e diagnóstico técnico. A Dra. Beatriz realiza um mapeamento facial completo, compreende suas expectativas, analisa suas fotos em diversos ângulos e desenvolve um plano de tratamento personalizado. Você sai da consulta com clareza total sobre o que é indicado para você, valores e etapas recomendadas.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-beige-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-brown-600 font-semibold">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brown-950">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
          <p className="text-brown-700/90 text-base font-light leading-relaxed pt-2">
            Reunimos as respostas para as principais dúvidas sobre os nossos procedimentos e a nossa conduta.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-beige-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-brown-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brown-900 text-beige-50" : "text-brown-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-brown-700/90 text-sm sm:text-base font-light leading-relaxed border-t border-beige-100/80 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact helper */}
        <div className="mt-12 text-center bg-white/80 rounded-2xl p-6 border border-beige-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-serif text-lg text-brown-950 font-medium">Ainda ficou com alguma dúvida específica?</p>
            <p className="text-xs text-brown-600 font-light">Nossa equipe está pronta para te atender com carinho no WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/5511998362106?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20procedimentos%20da%20Dra.%20Beatriz."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-50 px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>Falar com a Equipe</span>
          </a>
        </div>

      </div>
    </section>
  );
}
