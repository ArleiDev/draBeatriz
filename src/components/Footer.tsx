import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-950 text-beige-200 border-t border-brown-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brown-900/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-light text-white tracking-wide block">
              Dra. Beatriz Rigobello
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
              Biomédica Esteta • CRBM 65122
            </p>
            <p className="text-sm text-beige-300 font-light leading-relaxed max-w-sm">
              &ldquo;Realçando sua beleza natural: menos excessos, mais harmonia.&rdquo; Atendimento exclusivo em Harmonização Facial em São Paulo.
            </p>
            
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/drabeatrizrigobello/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-brown-900 hover:bg-brown-800 border border-brown-800 flex items-center justify-center text-beige-200 hover:text-gold-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511998362106"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-brown-900 hover:bg-brown-800 border border-brown-800 flex items-center justify-center text-beige-200 hover:text-gold-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-white">Navegação Rápida</p>
            <ul className="space-y-2 text-sm font-light text-beige-300">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#metodo-bello" className="hover:text-gold-400 transition-colors">O Método Bello</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Procedimentos Faciais</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-gold-400 transition-colors">Sobre a Dra. Beatriz</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-gold-400 transition-colors">Padrão de Excelência</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Procedures Links */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-white">Procedimentos</p>
            <ul className="space-y-2 text-sm font-light text-beige-300">
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Método Bello (Harmonização Global)</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Rinomodelação sem Cirurgia</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Preenchimento e Escultura Labial</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Toxina Botulínica Preventiva e Corretiva</a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-gold-400 transition-colors">Bioestimuladores de Colágeno</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-beige-400/80 font-light">
          <p>
            © {currentYear} Dra. Beatriz Rigobello. CRBM 65122. Todos os direitos reservados.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-beige-400/70">
            A reprodução de textos e imagens deste site é proibida. O conteúdo tem caráter estritamente educativo e informativo, de acordo com as normas éticas do Conselho Federal de Biomedicina.
          </p>
        </div>

      </div>
    </footer>
  );
}
