import { MessageCircle, MapPin, Clock, Sparkles, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function ContactCta() {
  const whatsappUrl = "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20em%20S%C3%A3o%20Paulo.";

  return (
    <section id="contato" className="py-20 md:py-28 bg-brown-950 text-beige-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brown-900 border border-gold-500/30 text-gold-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Atendimento Exclusivo com Hora Marcada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            Dê o primeiro passo para o seu <br />
            <span className="text-beige-200 font-normal block mt-1">rejuvenescimento harmonioso.</span>
          </h2>

          <p className="text-beige-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Agende uma avaliação facial com a Dra. Beatriz Rigobello em São Paulo e descubra o plano perfeito para valorizar sua beleza com naturalidade e segurança.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gold-500 hover:bg-gold-400 text-brown-950 px-9 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-brown-950 group-hover:scale-110 transition-transform" />
              <span>Agendar no WhatsApp (+55 11 99836-2106)</span>
            </a>

            <a
              href="https://www.instagram.com/drabeatrizrigobello/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brown-900 hover:bg-brown-800 text-beige-100 border border-brown-700 px-7 py-4 rounded-full text-base font-medium transition-colors"
            >
              <InstagramIcon className="w-5 h-5 text-gold-400" />
              <span>@drabeatrizrigobello</span>
            </a>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-900/80 hover:bg-brown-900 border border-brown-800 hover:border-gold-500/40 rounded-3xl p-7 transition-all duration-300 flex items-start space-x-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brown-800 flex items-center justify-center text-gold-400 shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-beige-400 font-semibold mb-1">WhatsApp & Contato</p>
              <p className="font-serif text-lg font-medium text-white">+55 11 99836-2106</p>
              <p className="text-xs text-beige-300/80 font-light mt-1">Clique para iniciar uma conversa</p>
            </div>
          </a>

          {/* Card 2: Localização */}
          <div className="bg-brown-900/80 border border-brown-800 rounded-3xl p-7 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brown-800 flex items-center justify-center text-gold-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-beige-400 font-semibold mb-1">Localização</p>
              <p className="font-serif text-lg font-medium text-white">São Paulo — SP</p>
              <p className="text-xs text-beige-300/80 font-light mt-1">Consultório de alto padrão privativo</p>
            </div>
          </div>

          {/* Card 3: Atendimento */}
          <div className="bg-brown-900/80 border border-brown-800 rounded-3xl p-7 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-brown-800 flex items-center justify-center text-gold-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-beige-400 font-semibold mb-1">Horário</p>
              <p className="font-serif text-lg font-medium text-white">Segunda a Sábado</p>
              <p className="text-xs text-beige-300/80 font-light mt-1">Exclusivamente com agendamento prévio</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
