import React, { useState } from 'react';
import { Building2, UserCheck, ShieldCheck, Award, ArrowRight, ExternalLink, CheckCircle2, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjacsModalType } from '../types';

interface ProjacsSectionProps {
  onOpenProjacsModal: (type: ProjacsModalType) => void;
}

export const ProjacsSection: React.FC<ProjacsSectionProps> = ({ onOpenProjacsModal }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'empresas' | 'jovens'>('todos');

  return (
    <section id="projacs" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF1FA] border border-[#4A5EAB]/30 text-[#4A5EAB] text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#4A5EAB]" />
            <span>Entidade Formadora Habilitada pelo Ministério do Trabalho e Emprego (MTE)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            PROJACS · Programa de Jovens Aprendizes Cristo Servo
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Oferecemos às empresas que necessitam cumprir a <strong>Lei da Aprendizagem</strong> um banco de dados qualificado de jovens e formação profissional de excelência, unindo <strong>rigor técnico e virtudes morais</strong>.
          </p>

          {/* Filter Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="p-1 bg-stone-200/80 rounded-xl inline-flex gap-1">
              <button
                onClick={() => setActiveTab('todos')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'todos' ? 'bg-[#1E2850] text-[#FED096] shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Todos os Portais (4)
              </button>
              <button
                onClick={() => setActiveTab('empresas')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'empresas' ? 'bg-[#1E2850] text-[#FED096] shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Para Empresas
              </button>
              <button
                onClick={() => setActiveTab('jovens')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'jovens' ? 'bg-[#1E2850] text-[#FED096] shadow-sm' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Para Jovens & Aprendizes
              </button>
            </div>
          </div>
        </div>

        {/* 4 Official Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Área do Parceiro (Empresas já clientes) */}
          {(activeTab === 'todos' || activeTab === 'empresas') && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-[#1E2850] rounded-2xl overflow-hidden border border-[#2D3B73] shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src="/banner_area_parceiro.jpeg"
                  alt="Área do Parceiro - Empresas que já são nossos clientes"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-mono border border-[#4A5EAB]/40 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Portal das Empresas Parceiras</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FED096] transition-colors">
                    Área do Parceiro
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Acesse 2ª via de boletos, folha de presença dos aprendizes, espelho de ponto e documentos de conformidade MTE em um só lugar.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenProjacsModal('parceiro-login')}
                    className="w-full py-3 px-5 rounded-xl bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Acessar o Sistema do Parceiro</span>
                    <ArrowRight className="w-4 h-4 text-[#1E2850]" />
                  </button>
                  <span className="block text-[11px] text-stone-400 text-center mt-2 font-mono">
                    Já sou parceiro — entrar com login e senha
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 2: Para Novas Empresas (Quero Contratar) */}
          {(activeTab === 'todos' || activeTab === 'empresas') && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src="/banner_empresa_contratar.jpeg"
                  alt="Para empresas que gostariam de se tornar parceiras e contratar jovens aprendizes"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-mono border border-[#4A5EAB]/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Habilitada pelo MTE</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors">
                    Cumpra a Lei da Aprendizagem com Segurança
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <strong>Zero taxa de adesão</strong> para empresas parceiras. Fornecemos banco de talentos pré-selecionado, formação teórica e assessoria jurídica completa.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenProjacsModal('empresa-contratar')}
                    className="w-full py-3 px-5 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Quero Contratar Aprendizes</span>
                    <ArrowRight className="w-4 h-4 text-[#FED096]" />
                  </button>
                  <span className="block text-[11px] text-stone-500 text-center mt-2 font-mono">
                    Solicite uma proposta personalizada para sua cota
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 3: Para Jovens que querem se cadastrar */}
          {(activeTab === 'todos' || activeTab === 'jovens') && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src="/banner_jovem_aprendiz_inscricao.jpeg"
                  alt="Para jovens que gostariam de se tornar Jovens Aprendizes"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-mono border border-[#4A5EAB]/40 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>21 Anos de História</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#4A5EAB] transition-colors">
                    Seu 1º Emprego com Carteira Assinada
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Salário proporcional, direitos trabalhistas garantidos, certificação profissional reconhecida e formação humana com propósito.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenProjacsModal('jovem-inscricao')}
                    className="w-full py-3 px-5 rounded-xl bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Quero me Inscrever no Banco de Vagas</span>
                    <ArrowRight className="w-4 h-4 text-[#1E2850]" />
                  </button>
                  <span className="block text-[11px] text-stone-500 text-center mt-2 font-mono">
                    Inscrição gratuita para jovens de 14 a 24 anos
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card 4: Para Jovens Aprendizes já Cadastrados */}
          {(activeTab === 'todos' || activeTab === 'jovens') && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group bg-[#1E2850] rounded-2xl overflow-hidden border border-[#2D3B73] shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1E2850] via-[#2D3B73] to-[#141B38] flex items-center justify-center p-8 text-center border-b border-[#2D3B73]">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#FED096]/20 border border-[#FED096]/40 text-[#FED096] mx-auto flex items-center justify-center shadow-lg">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FED096] font-mono font-bold">
                      Portal do Aluno · PROJACS
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      Já Sou Jovem Aprendiz
                    </h4>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#1E2850]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#FED096] font-mono border border-[#4A5EAB]/40">
                  Acesso Restrito
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FED096] transition-colors">
                    Área do Aprendiz Cadastrado
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Consulte sua frequência de aulas, notas, calendário pedagógico, avisos de entrevistas corporativas e materiais de capacitação.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenProjacsModal('aprendiz-login')}
                    className="w-full py-3 px-5 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-[#FED096]/30"
                  >
                    <span>Entrar no Portal do Aprendiz</span>
                    <ArrowRight className="w-4 h-4 text-[#FED096]" />
                  </button>
                  <span className="block text-[11px] text-stone-400 text-center mt-2 font-mono">
                    Acesso com CPF ou Matrícula e senha
                  </span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Why PROJACS Feature Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EDF1FA] text-[#4A5EAB] flex items-center justify-center shrink-0 border border-[#4A5EAB]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-stone-900">Segurança Jurídica Total</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Cumprimento estrito da Lei 10.097/2000 perante a fiscalização do trabalho, sem passivos ou preocupações para o RH.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EDF1FA] text-[#4A5EAB] flex items-center justify-center shrink-0 border border-[#4A5EAB]/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-stone-900">Técnica e Moral Integradas</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Formamos o jovem não só nas ferramentas operacionais, mas na postura, pontualidade, disciplina e virtudes éticas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EDF1FA] text-[#4A5EAB] flex items-center justify-center shrink-0 border border-[#4A5EAB]/20">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-stone-900">Agilidade no Encaminhamento</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Banco de dados ativo e pronto para suprir as cotas da sua empresa em Cuiabá, Porto Velho e municípios parceiros.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
