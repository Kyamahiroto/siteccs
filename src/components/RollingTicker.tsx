import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Briefcase, GraduationCap, Building2, Users } from 'lucide-react';
import { ProjacsModalType, ActivePage } from '../types';

interface RollingTickerProps {
  onOpenProjacsModal: (type: ProjacsModalType) => void;
  onNavigate: (page: ActivePage) => void;
}

export const RollingTicker: React.FC<RollingTickerProps> = ({ onOpenProjacsModal, onNavigate }) => {
  const tickerItems = [
    {
      icon: <Building2 className="w-3.5 h-3.5 text-[#FED096]" />,
      text: "ÁREA DO PARCEIRO: Acesse boletos, presença dos aprendizes e relatórios",
      action: () => onOpenProjacsModal('parceiro-login'),
      badge: "Empresas"
    },
    {
      icon: <GraduationCap className="w-3.5 h-3.5 text-[#FED096]" />,
      text: "PROJACS: Seu 1º emprego com carteira assinada, salário e certificação",
      action: () => onOpenProjacsModal('jovem-inscricao'),
      badge: "Inscrições Abertas"
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#FED096]" />,
      text: "CUMPRA A LEI DA APRENDIZAGEM: Zero taxa de adesão e apoio jurídico total",
      action: () => onOpenProjacsModal('empresa-contratar'),
      badge: "Habilitado MTE"
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-[#FED096]" />,
      text: "21 ANOS DE HISTÓRIA: Formando o Homem integral — corpo, alma e espírito",
      action: () => onNavigate('sobre-nos'),
      badge: "2005 - 2026"
    },
    {
      icon: <Users className="w-3.5 h-3.5 text-[#FED096]" />,
      text: "PROJETO LIVRE APRENDER: Cursos gratuitos ensinando profissões desde 2010",
      action: () => onNavigate('projetos'),
      badge: "Ação Social"
    }
  ];

  return (
    <div className="bg-[#121833] border-b border-[#2D3B73] overflow-hidden py-2 select-none">
      <div className="flex items-center">
        {/* Ticker title badge */}
        <div className="shrink-0 px-3 sm:px-4 flex items-center gap-1.5 border-r border-[#2D3B73] z-10 bg-[#121833]">
          <span className="w-2 h-2 rounded-full bg-[#FED096] animate-pulse" />
          <span className="text-[11px] font-bold text-[#FED096] uppercase tracking-wider hidden sm:inline">
            Destaques
          </span>
          <span className="text-[10px] text-stone-400 font-mono hidden md:inline">
            ICS
          </span>
        </div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden whitespace-nowrap mask-marquee">
          <div className="flex items-center gap-8 animate-marquee shrink-0">
            {tickerItems.map((item, idx) => (
              <button
                key={`a-${idx}`}
                onClick={item.action}
                className="inline-flex items-center gap-2 text-xs text-stone-200 hover:text-[#FED096] transition-colors cursor-pointer group px-2 py-0.5"
              >
                <span className="p-1 rounded bg-[#1E2850] border border-[#2D3B73] shrink-0">
                  {item.icon}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#2D3B73] text-[#FED096] border border-[#4A5EAB]/40">
                  {item.badge}
                </span>
                <span className="font-medium tracking-tight group-hover:underline">
                  {item.text}
                </span>
                <ArrowRight className="w-3 h-3 text-[#FED096] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8 animate-marquee shrink-0" aria-hidden="true">
            {tickerItems.map((item, idx) => (
              <button
                key={`b-${idx}`}
                onClick={item.action}
                className="inline-flex items-center gap-2 text-xs text-stone-200 hover:text-[#FED096] transition-colors cursor-pointer group px-2 py-0.5"
              >
                <span className="p-1 rounded bg-[#1E2850] border border-[#2D3B73] shrink-0">
                  {item.icon}
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#2D3B73] text-[#FED096] border border-[#4A5EAB]/40">
                  {item.badge}
                </span>
                <span className="font-medium tracking-tight group-hover:underline">
                  {item.text}
                </span>
                <ArrowRight className="w-3 h-3 text-[#FED096] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
