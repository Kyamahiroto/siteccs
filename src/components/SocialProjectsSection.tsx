import React, { useState } from 'react';
import { Camera, Sparkles, BookOpen, HeartHandshake, Award, ArrowRight, CheckCircle2, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SOCIAL_PROJECTS } from '../data/initialData';
import { SocialProject, ProjacsModalType, ActivePage } from '../types';

interface SocialProjectsSectionProps {
  onOpenProjacsModal: (type: ProjacsModalType) => void;
  onNavigate: (page: ActivePage) => void;
}

export const SocialProjectsSection: React.FC<SocialProjectsSectionProps> = ({
  onOpenProjacsModal,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Aprendizagem', 'Social & Oficinas', 'Infantil', 'Virtudes & Caráter', 'Geração de Renda'];

  const filteredProjects = selectedCategory === 'Todos'
    ? SOCIAL_PROJECTS
    : SOCIAL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-16 sm:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF1FA] text-[#4A5EAB] text-xs font-bold border border-[#4A5EAB]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O Mundo do Instituto Cristo Servo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Nossos Projetos Sociais & Cursos
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Escolas, cursos livres, capacitação técnica, projeto de faculdade e formação humana integral que beneficiam centenas de pessoas todos os meses.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#4A5EAB] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Mock Photo Areas (User specified photos will be uploaded in the next prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredProjects.map(project => {
            const isProjacs = project.id === 'projacs';

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Showcase Container */}
                  <div className="relative aspect-[16/10] bg-[#1E2850] overflow-hidden flex items-center justify-center p-4">
                    {isProjacs ? (
                      <img
                        src="/banner_jovem_aprendiz_inscricao.jpeg"
                        alt={project.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-center p-4 space-y-2">
                        <div className="w-10 h-10 rounded-xl bg-[#2D3B73] text-[#FED096] mx-auto flex items-center justify-center">
                          <Camera className="w-5 h-5" />
                        </div>
                        <span className="block text-xs font-mono text-[#FED096] font-semibold">
                          {project.imagePlaceholderText}
                        </span>
                        <span className="block text-[11px] text-stone-400">
                          [Espaço reservado para as fotos oficiais]
                        </span>
                      </div>
                    )}

                    {/* Tag badge */}
                    <div className="absolute top-2.5 left-2.5 bg-[#1E2850]/90 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] text-[#FED096] font-mono border border-[#4A5EAB]/40">
                      {project.category}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 bg-[#4A5EAB] text-white font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                      {project.status}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      {project.since && (
                        <span className="text-[11px] text-[#4A5EAB] font-bold uppercase tracking-wider block">
                          Desde {project.since}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#2D3B73] font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs text-stone-700">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4A5EAB] mt-1.5 shrink-0" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 bg-stone-100/70 border-t border-stone-200">
                  {isProjacs ? (
                    <button
                      onClick={() => onOpenProjacsModal('jovem-inscricao')}
                      className="w-full py-2.5 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Acessar Portal PROJACS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FED096]" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('contato')}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Mais Informações / Inscrições</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#4A5EAB]" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Notice about upcoming project photos */}
        <div className="p-4 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1E2850]">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#4A5EAB] shrink-0" />
            <span>
              <strong>Fotos dos Projetos:</strong> Espaços estruturados e prontos para receber as fotos oficiais de cada projeto (Evangeliza Brincando, Samuel, Bordados em Pedraria e Livre Aprender).
            </span>
          </div>
          <button
            onClick={() => onNavigate('sobre-nos')}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-xs cursor-pointer shadow-xs"
          >
            Conhecer Nossa História
          </button>
        </div>

      </div>
    </section>
  );
};
