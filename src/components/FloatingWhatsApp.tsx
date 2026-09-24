"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl =
    "https://wa.me/5511998362106?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20harmoniza%C3%A7%C3%A3o%20facial.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pointer-events-none">
      
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-white text-brown-900 px-4 py-3 rounded-2xl shadow-elevated border border-beige-300 max-w-xs text-xs sm:text-sm animate-in fade-in slide-in-from-bottom-2 duration-300 relative mr-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-brown-400 hover:text-brown-700 rounded-full"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="pr-3">
            <p className="font-semibold text-brown-950 font-serif text-sm">
              Olá! Podemos te ajudar?
            </p>
            <p className="text-brown-700/90 font-light mt-0.5 text-xs">
              Tire suas dúvidas ou agende sua avaliação com a equipe da Dra. Beatriz.
            </p>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Dra. Beatriz Rigobello"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-all duration-300"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-sm" />
      </a>

    </div>
  );
}
