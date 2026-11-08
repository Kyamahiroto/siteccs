import React from 'react';
import { Calendar, ExternalLink, Clock, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface EventsSectionProps {
  /**
   * Insira aqui o link externo da agenda de eventos quando disponível.
   */
  externalEventsUrl?: string;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  // LINK DA AGENDA: Substitua o link abaixo quando tiver a URL definitiva
  externalEventsUrl = "https://agenda.institutocristoservo.org.br",
}) => {
  const handleOpenAgenda = () => {
    // Se o link for válido, abre em nova aba
    if (externalEventsUrl && externalEventsUrl !== "#") {
      window.open(externalEventsUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("O link da agenda externa será configurado em breve.");
    }
  };

  return (
    <section id="agenda" className="py-12 sm:py-16 bg-stone-100 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Beautiful Event Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E2850] via-[#232F5C] to-[#141C38] text-white p-6 sm:p-10 shadow-xl border border-[#4A5EAB]/40"
        >
          {/* Background Decorative Accent */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#FED096]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#4A5EAB]/25 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            
            {/* Left: Icon and Information */}
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FED096]/20 border border-[#FED096]/40 text-[#FED096] text-xs font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Programação Oficial</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Agenda de Eventos
              </h2>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
                Acompanhe todas as nossas celebrações, missas, retiros espirituais, encontros comunitários e ações do Instituto Cristo Servo.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-stone-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FED096]" />
                  Atualizada semanalmente
                </span>
                <span className="text-[#4A5EAB]">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FED096]" />
                  Cuiabá, Porto Velho e Região
                </span>
              </div>
            </div>

            {/* Right: Prominent External Redirection Button */}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenAgenda}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FED096] hover:bg-[#fec27d] text-[#1E2850] font-bold text-sm sm:text-base shadow-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1E2850]" />
                <span>Acessar Agenda Completa</span>
                <ExternalLink className="w-4 h-4 text-[#1E2850]" />
              </motion.button>

              <span className="text-[11px] text-stone-300">
                Abre em uma nova aba
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
