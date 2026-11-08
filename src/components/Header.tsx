import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, Calendar, ChevronRight, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, ProjacsModalType } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenMemberModal: () => void;
  onOpenWordPressModal: () => void;
  onOpenProjacsModal?: (type: ProjacsModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenProjacsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShortcutClick = (targetId: string, page?: ActivePage) => {
    setMobileMenuOpen(false);
    if (page && page !== activePage) {
      onNavigate(page);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar: Contact Methods & Quick Portal Shortcuts */}
      <div className="bg-[#10162f] text-stone-300 text-[11px] sm:text-[12px] py-1.5 px-4 border-b border-[#232D58]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-stone-300">
            <a
              href="https://wa.me/5565999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#FED096] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FED096]" />
              <span>WhatsApp: <strong className="text-white">(65) 99999-9999</strong></span>
            </a>

            <a
              href="mailto:contato@institutocristoservo.org.br"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#FED096] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FED096]" />
              <span>contato@institutocristoservo.org.br</span>
            </a>

            <div className="hidden lg:inline-flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#FED096]/70" />
              <span>Cuiabá-MT &bull; Porto Velho-RO</span>
            </div>
          </div>

          {/* Right: Clean Shortcuts (Removed Benfeitor and Oração) */}
          <div className="flex items-center gap-4 text-xs font-medium text-stone-300">
            <button
              onClick={() => {
                if (onOpenProjacsModal) onOpenProjacsModal('parceiro-login');
                else handleShortcutClick('projacs', 'inicio');
              }}
              className="inline-flex items-center gap-1 text-[#FED096] hover:underline font-semibold cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#FED096]" />
              <span>Portal do Parceiro</span>
            </button>

            <span className="text-[#2D3B73]">|</span>

            <button
              onClick={() => handleShortcutClick('agenda', 'inicio')}
              className="inline-flex items-center gap-1 text-stone-200 hover:text-[#FED096] transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FED096]" />
              <span>Agenda</span>
            </button>

            <span className="text-[#2D3B73]">|</span>

            <button
              onClick={() => handleShortcutClick('contato', 'inicio')}
              className="text-stone-300 hover:text-[#FED096] transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>

        </div>
      </div>

      {/* Main Sticky Header: Airy, Spacious & Uncluttered (#1E2850) */}
      <header className="sticky top-0 z-40 bg-[#1E2850]/98 backdrop-blur-md border-b border-[#2D3B73] transition-all shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FED096] rounded-sm py-1"
              aria-label="Instituto Cristo Servo - Início"
            >
              <img
                src="/logo_cristo_servo_light.png"
                alt="Instituto Cristo Servo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] drop-shadow-xs"
              />
            </button>
          </div>

          {/* Desktop Navigation: Clean, elegant text links with comfortable spacing */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-200">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'inicio'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Início
            </button>

            <button
              onClick={() => handleNavClick('sobre-nos')}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'sobre-nos'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Sobre Nós
            </button>

            {/* PROJACS Link */}
            <button
              onClick={() => {
                if (activePage === 'inicio') {
                  const el = document.getElementById('projacs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('projacs');
                }
              }}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                activePage === 'projacs'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <span>PROJACS</span>
              <span className="text-[9px] font-bold bg-[#FED096] text-[#1E2850] px-1 py-0.2 rounded-xs uppercase tracking-tight">
                MTE
              </span>
            </button>

            {/* Projetos Sociais Link */}
            <button
              onClick={() => {
                if (activePage === 'inicio') {
                  const el = document.getElementById('projetos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavClick('projetos');
                }
              }}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'projetos'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Projetos Sociais
            </button>

            {/* Comunidade */}
            <button
              onClick={() => handleNavClick('comunidade')}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'comunidade'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Comunidade
            </button>

            {/* Obras Sociais */}
            <button
              onClick={() => handleNavClick('obras-sociais')}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'obras-sociais'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Obras Sociais
            </button>

            {/* Contato */}
            <button
              onClick={() => handleNavClick('contato')}
              className={`transition-colors cursor-pointer py-1 ${
                activePage === 'contato'
                  ? 'text-[#FED096] font-bold border-b-2 border-[#FED096]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Action on the right: Single clean, high-impact CTA button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenProjacsModal) onOpenProjacsModal('parceiro-login');
                else handleShortcutClick('projacs', 'inicio');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1E2850] bg-[#FED096] hover:bg-[#fec27d] shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-[#1E2850]" />
              <span>Área do Parceiro</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-200 hover:text-[#FED096] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#1E2850] border-b border-[#2D3B73] px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col space-y-1.5">
                <button
                  onClick={() => handleNavClick('inicio')}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                    activePage === 'inicio' ? 'bg-[#2D3B73] text-[#FED096]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  <span>Início</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('sobre-nos')}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                    activePage === 'sobre-nos' ? 'bg-[#2D3B73] text-[#FED096]' : 'text-stone-200 hover:bg-white/5'
                  }`}
                >
                  <span>Sobre Nós</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('projacs')}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold text-stone-200 hover:bg-white/5"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#FED096]" />
                    <span>PROJACS (Jovem Aprendiz)</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#FED096]" />
                </button>

                <button
                  onClick={() => handleNavClick('projetos')}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold text-stone-200 hover:bg-white/5"
                >
                  <span>Projetos Sociais & Cursos</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('comunidade')}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold text-stone-200 hover:bg-white/5"
                >
                  <span>Comunidade Cristo Servo</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('obras-sociais')}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold text-stone-200 hover:bg-white/5"
                >
                  <span>Obras Sociais</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <button
                  onClick={() => handleNavClick('contato')}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-semibold text-stone-200 hover:bg-white/5"
                >
                  <span>Contato</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>

                <div className="pt-3 mt-2 border-t border-[#2D3B73]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenProjacsModal) onOpenProjacsModal('parceiro-login');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FED096] text-[#1E2850] font-bold text-sm text-center flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Acessar Área do Parceiro</span>
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
