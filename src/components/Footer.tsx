import React from 'react';
import { Heart, Shield, ArrowUp, Phone, Mail, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { ActivePage, ProjacsModalType } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenMemberModal: () => void;
  onOpenWordPressModal: () => void;
  onOpenProjacsModal?: (type: ProjacsModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenMemberModal,
  onOpenWordPressModal,
  onOpenProjacsModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2850] text-stone-300 border-t border-[#2D3B73]">
      
      {/* Upper Quick Contact & Action Ribbon */}
      <div className="border-b border-[#2D3B73] py-6 px-4 sm:px-6 lg:px-8 bg-[#151D3B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-stone-300">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Phone className="w-4 h-4 text-[#FED096]" />
              WhatsApp: <strong className="text-white">(65) 99999-9999</strong>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Mail className="w-4 h-4 text-[#FED096]" />
              contato@institutocristoservo.org.br
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-4 h-4 text-[#FED096]" />
              Cuiabá - MT &bull; Porto Velho - RO
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenProjacsModal) onOpenProjacsModal('parceiro-login');
                else {
                  onNavigate('inicio');
                  setTimeout(() => {
                    const el = document.getElementById('projacs');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="px-3.5 py-2 rounded-lg bg-[#2D3B73] hover:bg-[#3D4F94] text-[#FED096] font-semibold text-xs transition-colors cursor-pointer border border-[#FED096]/30 flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Área do Parceiro</span>
            </button>
            <button
              onClick={onOpenMemberModal}
              className="px-4 py-2 rounded-lg bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-xs transition-colors cursor-pointer shadow-xs"
            >
              Quero Me Inscrever
            </button>
            <button
              onClick={onOpenWordPressModal}
              className="px-3 py-2 rounded-lg bg-[#2D3B73]/60 hover:bg-[#2D3B73] text-stone-300 text-xs transition-colors cursor-pointer border border-[#4A5EAB]/40"
            >
              Estrutura WordPress
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Institutional Identity with Official Light Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo_cristo_servo_light.png"
                alt="Instituto Cristo Servo"
                className="h-12 w-auto max-w-[220px] object-contain drop-shadow-sm"
              />
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Fundado em Cuiabá-MT em 12/06/2005 por José Rosa Pereira, Nila Florentina de Lara Pereira e Dalvinha Chaves Amaral a fim de realizar a formação do Homem como um todo: corpo, alma e espírito.
            </p>

            <div className="text-[11px] text-stone-400 space-y-1 font-mono">
              <p>Entidade Formadora Habilitada pelo MTE (Lei da Aprendizagem)</p>
              <p>Articulação com CRAS, CREAS, SGD e Políticas Públicas</p>
              <p>Atuação: Grande Cuiabá, Porto Velho e municípios de MT e RO</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FED096] font-semibold">
              Navegação Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#FED096] transition-colors cursor-pointer text-stone-300"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre-nos')}
                  className="hover:text-[#FED096] transition-colors cursor-pointer text-stone-300"
                >
                  Sobre Nós (História, Missão & Valores)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('inicio');
                    setTimeout(() => {
                      const el = document.getElementById('projacs');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#FED096] transition-colors cursor-pointer font-semibold text-[#FED096] flex items-center gap-1"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>PROJACS (Jovem Aprendiz)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('inicio');
                    setTimeout(() => {
                      const el = document.getElementById('projetos-sociais');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#FED096] transition-colors cursor-pointer text-stone-300"
                >
                  Projetos Sociais (Livre Aprender & Cursos)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comunidade')}
                  className="hover:text-[#FED096] transition-colors cursor-pointer font-medium text-[#FED096]"
                >
                  Comunidade Cristo Servo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('obras-sociais')}
                  className="hover:text-[#FED096] transition-colors cursor-pointer font-medium text-stone-200"
                >
                  Obras Sociais & Formação
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('inicio');
                    setTimeout(() => {
                      const el = document.getElementById('agenda');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#FED096] transition-colors cursor-pointer text-stone-300"
                >
                  Agenda de Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('inicio');
                    setTimeout(() => {
                      const el = document.getElementById('contato');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#FED096] transition-colors cursor-pointer text-stone-300"
                >
                  Contato & Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: PROJACS & Portais de Acesso */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#FED096] font-semibold">
              Portais PROJACS
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <button
                onClick={() => onOpenProjacsModal && onOpenProjacsModal('parceiro-login')}
                className="block text-left hover:text-[#FED096] transition-colors cursor-pointer"
              >
                &bull; <strong className="text-white">Área do Parceiro:</strong> Acesso a boletos e presença
              </button>
              <button
                onClick={() => onOpenProjacsModal && onOpenProjacsModal('empresa-contratar')}
                className="block text-left hover:text-[#FED096] transition-colors cursor-pointer"
              >
                &bull; <strong className="text-white">Novas Empresas:</strong> Cumpra a Lei da Aprendizagem
              </button>
              <button
                onClick={() => onOpenProjacsModal && onOpenProjacsModal('aprendiz-login')}
                className="block text-left hover:text-[#FED096] transition-colors cursor-pointer"
              >
                &bull; <strong className="text-white">Portal do Aluno:</strong> Frequência e notas do aprendiz
              </button>
              <button
                onClick={() => onOpenProjacsModal && onOpenProjacsModal('jovem-inscricao')}
                className="block text-left hover:text-[#FED096] transition-colors cursor-pointer"
              >
                &bull; <strong className="text-white">Cadastro de Jovens:</strong> Inscrição no Banco de Vagas
              </button>
            </div>
          </div>

          {/* Col 4: Acolhida & Contato */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FED096] font-semibold">
              Participe
            </h4>
            
            <button
              onClick={onOpenMemberModal}
              className="w-full py-2.5 px-4 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer border border-[#FED096]/30"
            >
              <Heart className="w-3.5 h-3.5 fill-[#FED096] text-[#FED096]" />
              <span>Seja Membro</span>
            </button>

            <a
              href="https://wa.me/5565999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-white/20"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-[#2D3B73] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Instituto Cristo Servo &bull; 21 Anos Formando Homens e Mulheres para o Brasil.</p>
          
          <div className="flex items-center gap-4">
            <span>Cuiabá-MT &bull; Porto Velho-RO</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#2D3B73]/60 hover:bg-[#2D3B73] text-stone-300 transition-colors cursor-pointer border border-[#4A5EAB]/30"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 text-[#FED096]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

