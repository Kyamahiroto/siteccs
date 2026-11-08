import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ActivePage } from '../types';

interface CharismSectionProps {
  onOpenMemberModal: () => void;
  onNavigate: (page: ActivePage) => void;
}

export const CharismSection: React.FC<CharismSectionProps> = ({ onOpenMemberModal }) => {
  const pillars = [
    {
      num: 'I',
      title: 'Humildade Ativa',
      verse: 'Mt 20,28',
      desc: 'Servir nos menores trabalhos com despojamento e alegria silenciosa.',
      // Reliable, high quality image for Humility in Service
      img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80',
      category: 'Serviço & Despojamento'
    },
    {
      num: 'II',
      title: 'Fraternidade Viva',
      verse: 'At 2,42',
      desc: 'Partilhar a mesa e as vidas em um ambiente de escuta e comunhão real.',
      img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      category: 'Vida em Comunhão'
    },
    {
      num: 'III',
      title: 'Liturgia & Oração',
      verse: 'Jo 4,24',
      desc: 'A adoração silenciosa que sustenta e renova todas as nossas forças diárias.',
      img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
      category: 'Adoração & Silêncio'
    },
    {
      num: 'IV',
      title: 'Caridade Concreta',
      verse: '1Jo 3,18',
      desc: 'Alimentar, acolher e amparar quem mais sofre com respeito e prontidão.',
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
      category: 'Amparo aos Vulneráveis'
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            O Carisma do Servo
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Quatro princípios fundamentais que guiam nossas ações comunitárias, educacionais e fraternas.
          </p>
        </div>

        {/* 4 Pillars with Fresh Verified Images (No "Foto Mockada" labels) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Fallback */}
                <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback image if network fails
                      e.currentTarget.src = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-[#1E2850]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-[#FED096] font-medium border border-[#4A5EAB]/30">
                    <span>{p.category}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                    {p.verse}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#EDF1FA] text-[#4A5EAB] text-xs font-bold flex items-center justify-center font-mono border border-[#4A5EAB]/20">
                      {p.num}
                    </span>
                    <h3 className="font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors text-base sm:text-lg">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Dignified Institutional Strip (No "Foto Mockada" text) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#EDF1FA] border border-[#4A5EAB]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1E2850]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#4A5EAB] shrink-0" />
            <span className="font-medium text-stone-800">
              O Carisma de Cristo Servo se expressa na oração diária, no serviço generoso e na formação dos jovens e famílias em Mato Grosso e Rondônia.
            </span>
          </div>

          <button
            onClick={onOpenMemberModal}
            className="shrink-0 px-4 py-2 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Seja Membro do Instituto
          </button>
        </div>

      </div>
    </section>
  );
};
