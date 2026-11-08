import React, { useState, useEffect } from 'react';
import { ShieldCheck, Briefcase, GraduationCap, ArrowRight, Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage, ProjacsModalType } from '../types';

interface HeroProps {
  onOpenMemberModal: () => void;
  onNavigate: (page: ActivePage) => void;
  onOpenProjacsModal?: (type: ProjacsModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenProjacsModal }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const banners = [
    {
      id: 'parceiro',
      title: 'Área do Parceiro',
      subtitle: 'Acesse boletos, presença dos aprendizes e documentos',
      url: '/banner_area_parceiro.jpeg',
      modalType: 'parceiro-login' as ProjacsModalType,
      tag: 'Portal do Parceiro',
      buttonLabel: 'Acessar o Sistema',
    },
    {
      id: 'contratar',
      title: 'Para Empresas Parceiras',
      subtitle: 'Cumpra a Lei da Aprendizagem com segurança e zero taxa de adesão',
      url: '/banner_empresa_contratar.jpeg',
      modalType: 'empresa-contratar' as ProjacsModalType,
      tag: 'Contratar Aprendizes',
      buttonLabel: 'Quero Contratar',
    },
    {
      id: 'jovem',
      title: 'Para Jovens Candidatos',
      subtitle: 'Seu primeiro emprego com carteira assinada, bolsa e capacitação',
      url: '/banner_jovem_aprendiz_inscricao.jpeg',
      modalType: 'jovem-inscricao' as ProjacsModalType,
      tag: 'Inscrições Abertas',
      buttonLabel: 'Quero me Inscrever',
    },
  ];

  // Auto rotate banners every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveBannerIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const handleBannerClick = () => {
    if (onOpenProjacsModal) {
      onOpenProjacsModal(banners[activeBannerIndex].modalType);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#161D3A] text-stone-100 py-14 sm:py-20 lg:py-24 border-b border-[#2D3B73]">
      
      {/* Thematic Background Image with Dark Blue & Golden Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=80"
          alt="Instituto Cristo Servo - Ambiente Institucional"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        {/* Multilayered Brand Gradients for high contrast and majestic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10162f] via-[#1E2850]/95 to-[#1A2346]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D3A] via-transparent to-[#10162f]/80" />
      </div>

      {/* Background Brand Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4A5EAB]/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FED096]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Sacred Cross Light Ray Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="sacred-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-pattern-hero)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Column Text Only vs Right Column Vertical Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Pure Typography, Story & Direct Actions (NO images on left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* 21 Years Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D3B73]/90 backdrop-blur-sm border border-[#FED096]/50 text-xs font-semibold text-[#FED096] shadow-sm">
              <Award className="w-4 h-4 text-[#FED096]" />
              <span>21 Anos de História &bull; Fundado em Cuiabá-MT em 2005</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
              Formação integral do ser humano: corpo, alma e espírito.
            </h1>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              O <strong className="text-white font-semibold">Instituto Cristo Servo</strong> atua no Mato Grosso e Rondônia promovendo capacitação técnica de excelência, valores morais e inclusão no mercado de trabalho através do <span className="text-[#FED096] font-semibold">PROJACS</span> e de projetos sociais contínuos.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('projacs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('inicio');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#1E2850] bg-[#FED096] hover:bg-[#fec27d] transition-colors shadow-lg cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#1E2850]" />
                <span>Programa Jovem Aprendiz</span>
                <ArrowRight className="w-4 h-4 text-[#1E2850]" />
              </motion.button>

              <button
                onClick={() => {
                  if (onOpenProjacsModal) {
                    onOpenProjacsModal('parceiro-login');
                  } else {
                    const el = document.getElementById('projacs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white hover:bg-[#4A5EAB] bg-[#2D3B73]/80 border border-[#4A5EAB]/50 transition-colors cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-[#FED096]" />
                <span>Área do Parceiro</span>
              </button>

              <button
                onClick={() => onNavigate('sobre-nos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Nossa História</span>
              </button>
            </div>

            {/* Reassurance strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FED096]" />
                Entidade Formadora Habilitada pelo MTE
              </span>
              <span className="text-[#2D3B73] hidden sm:inline">&bull;</span>
              <span>Grande Cuiabá, Porto Velho e Região</span>
            </div>
          </motion.div>

          {/* Right Column: Authentic Vertical Banners (Proper 2:3 Flyer Proportions) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Banner Flyer Card with Real Proportions */}
            <div
              onClick={handleBannerClick}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FED096]/30 bg-stone-900 group cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              title="Clique para abrir o portal correspondente"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={banners[activeBannerIndex].id}
                  src={banners[activeBannerIndex].url}
                  alt={banners[activeBannerIndex].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows on Banner */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1E2850]/85 hover:bg-[#1E2850] text-[#FED096] border border-[#FED096]/40 flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                aria-label="Banner anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#1E2850]/85 hover:bg-[#1E2850] text-[#FED096] border border-[#FED096]/40 flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                aria-label="Próximo banner"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 z-10 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FED096]/40 text-[11px] text-[#FED096] font-semibold flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FED096] animate-pulse" />
                <span>{banners[activeBannerIndex].tag}</span>
              </div>

              {/* Bottom Interactive Callout overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-5 z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#FED096] font-bold uppercase tracking-wider mb-1">
                  <span>{banners[activeBannerIndex].buttonLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[11px] text-stone-300 line-clamp-1">
                  {banners[activeBannerIndex].subtitle}
                </p>
              </div>
            </div>

            {/* Clean Minimalist Dots (Texts "Banner 1, banner 2, banner 3" removed) */}
            <div className="mt-4 flex items-center gap-2">
              {banners.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBannerIndex(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeBannerIndex === idx
                      ? 'w-7 h-2 rounded-full bg-[#FED096] shadow-sm'
                      : 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Ir para banner ${idx + 1}`}
                />
              ))}
            </div>

          </motion.div>

        </div>

        {/* Quick Numbers Bar: Authentic Organizational Metrics */}
        <div className="mt-12 pt-8 border-t border-[#2D3B73]/70 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-[#1E2850]/60 backdrop-blur-xs rounded-xl border border-[#4A5EAB]/30">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#FED096] tabular-nums">21 Anos</span>
            <p className="text-[11px] text-stone-300 uppercase tracking-wider mt-0.5">Fundado em 12/06/2005</p>
          </div>
          <div className="p-3 bg-[#1E2850]/60 backdrop-blur-xs rounded-xl border border-[#4A5EAB]/30">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#FED096] tabular-nums">MT &amp; RO</span>
            <p className="text-[11px] text-stone-300 uppercase tracking-wider mt-0.5">Cuiabá, Porto Velho e Região</p>
          </div>
          <div className="p-3 bg-[#1E2850]/60 backdrop-blur-xs rounded-xl border border-[#4A5EAB]/30">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#FED096] tabular-nums">PROJACS</span>
            <p className="text-[11px] text-stone-300 uppercase tracking-wider mt-0.5">Habilitado pelo MTE</p>
          </div>
          <div className="p-3 bg-[#1E2850]/60 backdrop-blur-xs rounded-xl border border-[#4A5EAB]/30">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#FED096] tabular-nums">100%</span>
            <p className="text-[11px] text-stone-300 uppercase tracking-wider mt-0.5">Formação com Propósito</p>
          </div>
        </div>

      </div>
    </section>
  );
};
