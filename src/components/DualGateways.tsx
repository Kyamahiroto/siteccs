import React, { useState } from 'react';
import { Flame, HeartHandshake, ArrowRight, BookOpen, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from '../types';

interface DualGatewaysProps {
  onOpenMemberModalWithArea: (area: 'comunidade' | 'obras-sociais') => void;
  onNavigate: (page: ActivePage) => void;
}

export const DualGateways: React.FC<DualGatewaysProps> = ({
  onOpenMemberModalWithArea,
  onNavigate,
}) => {
  const [selectedModal, setSelectedModal] = useState<'comunidade' | 'obras' | null>(null);

  // Reliable, high quality image URLs
  const comunidadeImg = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80";
  const obrasSociaisImg = "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80";

  return (
    <section id="dois-mundos" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Escolha seu caminho no Instituto
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Aprofunde sua fé na oração comunitária ou coloque o amor em prática no serviço aos mais necessitados.
          </p>
        </div>

        {/* 2 Big Visual Gateway Cards with High-Res Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Comunidade Cristo Servo */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image Header with Verified URL */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                <img
                  src={comunidadeImg}
                  alt="Comunidade Cristo Servo - Oração e Liturgia"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                
                {/* Photo Badge (No "Foto Mockada") */}
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-medium flex items-center gap-1.5 border border-[#4A5EAB]/40">
                  <Flame className="w-3.5 h-3.5 text-[#FED096]" />
                  <span>Capela & Retiros Espirituais</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-[#1E2850]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#FED096]/20">
                  <span className="font-semibold text-[#FED096] flex items-center gap-1.5">
                    Espiritualidade & Liturgia
                  </span>
                  <span className="text-[11px] text-stone-300">Encontros Semanais</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors">
                  Comunidade Cristo Servo
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  Vida de oração fraterna, retiros de aprofundamento, celebração dos sacramentos, vigílias e formação espiritual contínua.
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4A5EAB]" />
                    <span>Adoração ao Santíssimo e terço comunitário diário</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4A5EAB]" />
                    <span>Retiros de silêncio e encontros de formação bíblica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4A5EAB]" />
                    <span>Ministérios de louvor, acolhida e juventude servidora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 sm:px-8 py-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedModal('comunidade')}
                className="w-full sm:w-auto text-xs font-semibold text-stone-700 hover:text-[#4A5EAB] flex items-center justify-center gap-1 cursor-pointer py-1"
              >
                <span>Ver Detalhes</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenMemberModalWithArea('comunidade')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4A5EAB] hover:bg-[#3d4f94] transition-colors shadow-xs cursor-pointer"
              >
                <span>Entrar na Comunidade</span>
                <ArrowRight className="w-4 h-4 text-[#FED096]" />
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2: Obras Sociais */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Image Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                <img
                  src={obrasSociaisImg}
                  alt="Obras Sociais Cristo Servo - Cozinha Fraterna e Alimentos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/banner_empresa_contratar.jpeg";
                  }}
                />
                
                {/* Photo Badge (No "Foto Mockada") */}
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-medium flex items-center gap-1.5 border border-[#4A5EAB]/40">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#FED096]" />
                  <span>Cozinha Fraterna & Apoio Familiar</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-[#1E2850]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#FED096]/20">
                  <span className="font-semibold text-[#FED096] flex items-center gap-1.5">
                    Amor em Ação Prática
                  </span>
                  <span className="text-[11px] text-stone-300">Ações Semanais</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors">
                  Obras Sociais & Formação
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  Braço solidário com foco na alimentação de famílias necessitadas, oficinas de capacitação, bazar comunitário e voluntariado fraterno.
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FED096] border border-[#4A5EAB]" />
                    <span>Sopão fraterno semanal e entrega de cestas básicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FED096] border border-[#4A5EAB]" />
                    <span>Oficinas profissionalizantes e apoio escolar para jovens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FED096] border border-[#4A5EAB]" />
                    <span>Equipes ativas de triagem, cozinha, saúde e acolhida</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 sm:px-8 py-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedModal('obras')}
                className="w-full sm:w-auto text-xs font-semibold text-stone-700 hover:text-[#4A5EAB] flex items-center justify-center gap-1 cursor-pointer py-1"
              >
                <span>Ver Projetos</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenMemberModalWithArea('obras-sociais')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#1E2850] bg-[#FED096] hover:bg-[#fedba8] transition-colors shadow-xs cursor-pointer border border-[#FED096]"
              >
                <span>Ser Voluntário Social</span>
                <ArrowRight className="w-4 h-4 text-[#1E2850]" />
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8"
            >
              <div className="p-6 text-white bg-[#1E2850]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#FED096] font-bold">
                    {selectedModal === 'comunidade' ? 'Comunidade Cristo Servo' : 'Obras Sociais Cristo Servo'}
                  </span>
                  <button
                    onClick={() => setSelectedModal(null)}
                    className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold mt-2">
                  {selectedModal === 'comunidade' ? 'Espiritualidade & Vida Fraterna' : 'Caridade & Ação Humanitária'}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={selectedModal === 'comunidade' ? comunidadeImg : obrasSociaisImg}
                    alt="Instituto Cristo Servo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  {selectedModal === 'comunidade'
                    ? 'Participe dos nossos momentos de oração, vigílias e grupos de aprofundamento espiritual. Acolhemos novos membros com carinho fraterno.'
                    : 'Junte-se à nossa equipe de voluntários na cozinha comunitária, na triagem de doações e nas oficinas com crianças e jovens.'}
                </p>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedModal(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={() => {
                      const area = selectedModal === 'comunidade' ? 'comunidade' : 'obras-sociais';
                      setSelectedModal(null);
                      onOpenMemberModalWithArea(area);
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#4A5EAB] hover:bg-[#3d4f94] transition-colors shadow-xs cursor-pointer"
                  >
                    Inscrever-se Agora
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
