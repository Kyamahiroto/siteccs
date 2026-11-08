import React from 'react';
import { Compass, Shield, Award, ArrowRight, Camera, Sparkles, CheckCircle2, Users, Building2, BookOpen, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { ActivePage } from '../types';
import { INSTITUTIONAL_DATA } from '../data/initialData';

interface AboutViewProps {
  onOpenMemberModal: () => void;
  onNavigate: (page: ActivePage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenMemberModal, onNavigate }) => {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#1E2850] text-stone-100 py-14 sm:py-20 border-b border-[#2D3B73] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4A5EAB]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FED096]/10 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D3B73] text-[#FED096] text-xs font-bold border border-[#FED096]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>21 Anos de História · 2005 a 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Quem Somos & Nossa História
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
            Fundado para promover a formação integral da pessoa humana — corpo, alma e espírito —, unindo rigor técnico, virtudes morais e cidadania.
          </p>
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        
        {/* 1. História da Fundação Oficial */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDF1FA] text-[#4A5EAB] text-xs font-bold font-mono">
              <span>Cuiabá-MT · 12 de Junho de 2005</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              A Fundação do Instituto Cristo Servo
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              <p>
                O <strong>Instituto Cristo Servo</strong> foi fundado na Cidade de <strong>Cuiabá-MT</strong> no dia <strong>12/06/2005</strong>, por <strong>José Rosa Pereira</strong>, <strong>Nila Florentina de Lara Pereira</strong> e <strong>Dalvinha Chaves Amaral</strong> a fim de realizar diversas ações para a formação do Homem como um todo: <em>corpo, alma e espírito</em>.
              </p>
              <p>
                Com <strong>vinte e um anos de história</strong>, o Instituto executa projetos na <strong>Grande Cuiabá</strong>, em <strong>Porto Velho</strong> e em diversos municípios dos Estados de <strong>Mato Grosso e Rondônia</strong>.
              </p>
              <p>
                Ao longo de nossa trajetória, desenvolvemos a nossa capacidade administrativa, financeira e técnica para o pleno cumprimento de nossas atividades, beneficiando nosso público-alvo e as empresas parceiras com <strong>excelência, disciplina e agilidade</strong>.
              </p>
            </div>

            {/* Foundational Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#1E2850]">
              <span className="bg-[#EDF1FA] border border-[#4A5EAB]/30 px-3 py-1 rounded-lg font-semibold">
                Fundado em 12/06/2005
              </span>
              <span className="bg-[#EDF1FA] border border-[#4A5EAB]/30 px-3 py-1 rounded-lg font-semibold">
                Mato Grosso & Rondônia
              </span>
              <span className="bg-[#EDF1FA] border border-[#4A5EAB]/30 px-3 py-1 rounded-lg font-semibold">
                Corpo, Alma e Espírito
              </span>
            </div>
          </div>

          {/* Visual Card with Official Banner */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-[#1E2850] group"
            >
              <img
                src="/banner_jovem_aprendiz_inscricao.jpeg"
                alt="Jovens Aprendizes do Instituto Cristo Servo - 21 Anos de História"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-mono border border-[#4A5EAB]/40">
                PROJACS · 21 Anos de Formação
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Áreas de Trabalho & Articulação Institucional */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Nossas 4 Áreas de Trabalho
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Ações realizadas em nossa Sede de Projetos, Faculdade, instituições parceiras e órgãos públicos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INSTITUTIONAL_DATA.workAreas.map((area, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-[#4A5EAB]">
                  <span className="w-6 h-6 rounded-md bg-[#EDF1FA] text-[#4A5EAB] text-xs font-bold flex items-center justify-center font-mono">
                    0{idx + 1}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm sm:text-base">{area.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pl-8">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Articulação Institucional */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
              Articulação com Políticas Públicas e Sociedade Civil:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-stone-700 font-sans">
              {INSTITUTIONAL_DATA.articulations.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#4A5EAB] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. A Nossa Missão & A Nossa Visão */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EDF1FA] text-[#4A5EAB] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">A Nossa Missão</h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                "{INSTITUTIONAL_DATA.mission}"
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 text-xs text-[#4A5EAB] font-bold">
              Formação Integral · Técnica & Virtude
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#1E2850] text-white border border-[#2D3B73] shadow-md flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2D3B73] text-[#FED096] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">A Nossa Visão</h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {INSTITUTIONAL_DATA.vision}
              </p>
            </div>
            <div className="pt-3 border-t border-[#2D3B73] text-xs text-[#FED096] font-bold">
              Complexo Educacional de Alcance Nacional
            </div>
          </motion.div>

        </section>

        {/* 4. Os Nossos 6 Valores Oficiais */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Os Nossos Valores
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Princípios éticos, pedagógicos e humanos que guiam cada decisão e aula em nosso Instituto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTITUTIONAL_DATA.values.map((val, idx) => (
              <motion.div
                key={val.id}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5 hover:border-[#4A5EAB]/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#4A5EAB] bg-[#EDF1FA] px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-stone-900">{val.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Call to Action */}
        <motion.section
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl bg-gradient-to-r from-[#1E2850] via-[#2D3B73] to-[#1E2850] text-white p-8 sm:p-10 shadow-xl text-center space-y-4 border border-[#4A5EAB]/30"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Faça Parte do Instituto Cristo Servo
          </h3>
          <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto">
            Seja como empresa parceira na contratação de jovens aprendizes, aluno em nossos cursos, voluntário ou benfeitor.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('projacs')}
              className="px-6 py-3 rounded-xl bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-md"
            >
              Conhecer o Programa PROJACS
            </button>
            <button
              onClick={onOpenMemberModal}
              className="px-5 py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs border border-[#FED096]/30"
            >
              Fazer Inscrição de Membro
            </button>
            <button
              onClick={() => onNavigate('inicio')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-white/20"
            >
              Voltar ao Início
            </button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
