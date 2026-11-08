/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { RollingTicker } from './components/RollingTicker';
import { Hero } from './components/Hero';
import { ProjacsSection } from './components/ProjacsSection';
import { SocialProjectsSection } from './components/SocialProjectsSection';
import { DualGateways } from './components/DualGateways';
import { AboutView } from './components/AboutView';
import { CharismSection } from './components/CharismSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MemberConversionModal } from './components/MemberConversionModal';
import { WordPressThemeModal } from './components/WordPressThemeModal';
import { ProjacsModal } from './components/ProjacsModal';
import { ActivePage, ProjacsModalType } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('inicio');
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [memberModalArea, setMemberModalArea] = useState<'comunidade' | 'obras-sociais' | 'geral'>('geral');
  const [wordPressModalOpen, setWordPressModalOpen] = useState(false);
  const [projacsModal, setProjacsModal] = useState<ProjacsModalType | null>(null);

  // Sync hash changes if user uses browser history or anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'sobre-nos') {
        setActivePage('sobre-nos');
      } else if (hash === 'projacs') {
        setActivePage('inicio');
        const el = document.getElementById('projacs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === 'projetos' || hash === 'projetos-sociais') {
        setActivePage('inicio');
        const el = document.getElementById('projetos');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === 'dois-mundos' || hash === 'comunidade' || hash === 'obras-sociais') {
        setActivePage('inicio');
        const el = document.getElementById('dois-mundos');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === 'agenda') {
        setActivePage('inicio');
        const el = document.getElementById('agenda');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === 'contato') {
        setActivePage('inicio');
        const el = document.getElementById('contato');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenMemberModal = () => {
    setMemberModalArea('geral');
    setMemberModalOpen(true);
  };

  const handleOpenMemberModalWithArea = (area: 'comunidade' | 'obras-sociais') => {
    setMemberModalArea(area);
    setMemberModalOpen(true);
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjacsModal = (type: ProjacsModalType) => {
    setProjacsModal(type);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-[#FED096] selection:text-[#1E2850]">
      
      {/* Institutional Header: Clean, Uncluttered & Spacious */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenMemberModal={handleOpenMemberModal}
        onOpenWordPressModal={() => setWordPressModalOpen(true)}
        onOpenProjacsModal={handleOpenProjacsModal}
      />

      {/* Animated Rolling Marquee Ribbon ("Links Rolando") */}
      <RollingTicker
        onOpenProjacsModal={handleOpenProjacsModal}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'sobre-nos' ? (
          <AboutView
            onOpenMemberModal={handleOpenMemberModal}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'projacs' ? (
          <div className="bg-stone-50 py-10">
            <ProjacsSection onOpenProjacsModal={handleOpenProjacsModal} />
          </div>
        ) : activePage === 'projetos' ? (
          <div className="bg-stone-50 py-10">
            <SocialProjectsSection
              onOpenProjacsModal={handleOpenProjacsModal}
              onNavigate={handleNavigate}
            />
          </div>
        ) : activePage === 'comunidade' ? (
          <div className="bg-stone-50 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="mb-10 text-center space-y-3">
                <h1 className="text-3xl sm:text-5xl font-bold text-stone-900">
                  Comunidade Cristo Servo
                </h1>
                <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg">
                  Vida de oração, liturgia diária, retiros e vocação consagrada sob a luz do lava-pés.
                </p>
              </div>

              {/* Showcase for Comunidade */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-stone-200 shadow-md bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80"
                  alt="Comunidade Cristo Servo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-xs text-[#FED096] font-medium border border-[#4A5EAB]/30">
                  Capela &amp; Retiros Comunitários
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-xs mb-12 space-y-6">
                <h2 className="text-2xl font-bold text-stone-900">
                  Aprofundamento Espiritual &amp; Vida Comunitária
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  A Comunidade Cristo Servo reúne leigos, famílias, jovens e consagrados que assumem o compromisso de oração, participação na liturgia da Igreja e sustento espiritual mútuo.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleOpenMemberModalWithArea('comunidade')}
                    className="px-6 py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
                  >
                    Fazer Pré-Cadastro na Comunidade
                  </button>
                  <button
                    onClick={() => handleNavigate('inicio')}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Voltar ao Portal Institucional
                  </button>
                </div>
              </div>

              <EventsSection />
            </div>
          </div>
        ) : activePage === 'obras-sociais' ? (
          <div className="bg-stone-50 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="mb-10 text-center space-y-3">
                <h1 className="text-3xl sm:text-5xl font-bold text-stone-900">
                  Obras Sociais &amp; Formação Cristo Servo
                </h1>
                <p className="max-w-2xl mx-auto text-stone-600 text-base sm:text-lg">
                  Amor em ação: PROJACS Jovem Aprendiz, cursos Livre Aprender, capacitação técnica e acolhida a famílias.
                </p>
              </div>

              {/* Showcase for Obras Sociais */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-stone-200 shadow-md bg-stone-900">
                <img
                  src="/banner_empresa_contratar.jpeg"
                  alt="Obras Sociais & Formação Profissional"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-xs text-[#FED096] font-medium border border-[#4A5EAB]/30">
                  Obras Sociais: Formação &amp; Aprendizagem
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-xs mb-12 space-y-6">
                <h2 className="text-2xl font-bold text-stone-900">
                  Obras de Misericórdia Corporais &amp; Desenvolvimento Humano
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  Por meio da capacitação profissional, oficinas de artesanato, programas de aprendizagem e auxílio alimentar, devolvemos dignidade, esperança e instrumentos concretos de autonomia para jovens e famílias.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleOpenMemberModalWithArea('obras-sociais')}
                    className="px-6 py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
                  >
                    Inscrever-se como Voluntário Social
                  </button>
                  <button
                    onClick={() => handleNavigate('inicio')}
                    className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm transition-colors cursor-pointer"
                  >
                    Voltar ao Portal Institucional
                  </button>
                </div>
              </div>

              <SocialProjectsSection
                onOpenProjacsModal={handleOpenProjacsModal}
                onNavigate={handleNavigate}
              />
            </div>
          </div>
        ) : (
          /* Default Front Page (Site Institucional Completo) */
          <>
            {/* Hero com lado esquerdo com texto limpo e lado direito com banners com proporção 2:3 */}
            <Hero
              onOpenMemberModal={handleOpenMemberModal}
              onNavigate={handleNavigate}
              onOpenProjacsModal={handleOpenProjacsModal}
            />

            {/* SEÇÃO 1: PROJACS - Programa de Jovens Aprendizes Cristo Servo (com 4 Banners reais) */}
            <ProjacsSection onOpenProjacsModal={handleOpenProjacsModal} />

            {/* SEÇÃO 2: O Mundo do Instituto Cristo Servo - Projetos & Cursos Sociais */}
            <SocialProjectsSection
              onOpenProjacsModal={handleOpenProjacsModal}
              onNavigate={handleNavigate}
            />

            {/* As duas opções para entrar nos dois caminhos (Comunidade e Obras Sociais) */}
            <DualGateways
              onOpenMemberModalWithArea={handleOpenMemberModalWithArea}
              onNavigate={handleNavigate}
            />

            {/* Carisma & Pilares */}
            <CharismSection
              onOpenMemberModal={handleOpenMemberModal}
              onNavigate={handleNavigate}
            />

            {/* SEÇÃO 3: Agenda de Eventos (Banner Compacto com Botão de Redirecionamento) */}
            <EventsSection />

            {/* Contato & Localização */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMemberModal={handleOpenMemberModal}
        onOpenWordPressModal={() => setWordPressModalOpen(true)}
        onOpenProjacsModal={handleOpenProjacsModal}
      />

      {/* Interactive Member Onboarding Modal */}
      <MemberConversionModal
        isOpen={memberModalOpen}
        onClose={() => setMemberModalOpen(false)}
        initialArea={memberModalArea}
      />

      {/* WordPress Theme Structure Inspector Modal */}
      <WordPressThemeModal
        isOpen={wordPressModalOpen}
        onClose={() => setWordPressModalOpen(false)}
      />

      {/* PROJACS Dedicated Portals Modal (Área do Parceiro, Contratar, Aluno, Inscrição) */}
      <ProjacsModal
        modalType={projacsModal}
        onClose={() => setProjacsModal(null)}
      />

    </div>
  );
}
