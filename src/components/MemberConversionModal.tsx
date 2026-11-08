import React, { useState } from 'react';
import { X, CheckCircle2, Heart, Send, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { MemberApplication } from '../types';

interface MemberConversionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: 'comunidade' | 'obras-sociais' | 'geral';
}

export const MemberConversionModal: React.FC<MemberConversionModalProps> = ({
  isOpen,
  onClose,
  initialArea = 'geral',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<MemberApplication>({
    name: '',
    email: '',
    phone: '',
    city: '',
    interestArea: initialArea === 'geral' ? 'comunidade' : initialArea,
    availability: 'Finais de Semana',
    talents: [],
    prayerIntention: '',
  });

  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const talentOptions = [
    'Oração & Intercessão',
    'Cozinha & Partilha de Alimentos',
    'Música / Canto / Instrumentos',
    'Escuta & Acolhimento Fraterno',
    'Oficinas & Aulas de Formação',
    'Comunicação & Redes Sociais',
    'Apoio Logístico & Organização',
    'Saúde / Primeiros Cuidados',
  ];

  const handleTalentToggle = (talent: string) => {
    setFormData(prev => {
      const exists = prev.talents.includes(talent);
      return {
        ...prev,
        talents: exists ? prev.talents.filter(t => t !== talent) : [...prev.talents, talent],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const generatedProtocol = `ICS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedProtocol(generatedProtocol);
      setIsSubmitting(false);
      setStep(3);
    }, 700);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Paz e Bem! Meu nome é ${formData.name}. Acabei de me inscrever para fazer parte do Instituto Cristo Servo (Protocolo: ${submittedProtocol}). Gostaria de dar o próximo passo!`
    );
    return `https://wa.me/5511987654321?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8 relative">
        
        {/* Modal Top Bar */}
        <div className="bg-[#1E2850] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D3B73] border border-[#FED096]/40 flex items-center justify-center text-[#FED096]">
              <Heart className="w-5 h-5 fill-[#FED096]" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#FED096] font-bold">Fazer Parte da Família</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Inscrição para Novos Membros</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Body */}
        <div className="p-6 sm:p-8">
          
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#4A5EAB] font-bold">Etapa 1 de 2</span>
                <h4 className="text-lg font-serif font-bold text-stone-900">Onde você sente o chamado para atuar?</h4>
                <p className="text-xs sm:text-sm text-stone-600">Selecione a dimensão que melhor se conecta com o seu coração e vocação.</p>
              </div>

              {/* Area Cards */}
              <div className="grid grid-cols-1 gap-3">
                
                <label className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  formData.interestArea === 'comunidade' 
                    ? 'border-[#4A5EAB] bg-[#EDF1FA] shadow-xs' 
                    : 'border-stone-200 hover:border-stone-300'
                }`}>
                  <input
                    type="radio"
                    name="interestArea"
                    value="comunidade"
                    checked={formData.interestArea === 'comunidade'}
                    onChange={() => setFormData({ ...formData, interestArea: 'comunidade' })}
                    className="mt-1 text-[#4A5EAB] focus:ring-[#4A5EAB]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-stone-900">Comunidade Cristo Servo (Religiosa & Espiritual)</strong>
                    <span className="block text-xs text-stone-600 mt-0.5">Vida de oração, liturgia, retiros, vigílias, estudos bíblicos e santificação da rotina.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  formData.interestArea === 'obras-sociais' 
                    ? 'border-[#4A5EAB] bg-[#EDF1FA] shadow-xs' 
                    : 'border-stone-200 hover:border-stone-300'
                }`}>
                  <input
                    type="radio"
                    name="interestArea"
                    value="obras-sociais"
                    checked={formData.interestArea === 'obras-sociais'}
                    onChange={() => setFormData({ ...formData, interestArea: 'obras-sociais' })}
                    className="mt-1 text-[#4A5EAB] focus:ring-[#4A5EAB]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-stone-900">Obras Sociais & Voluntariado Fraterno</strong>
                    <span className="block text-xs text-stone-600 mt-0.5">Preparo e distribuição de alimentos, oficinas para jovens, atendimento a famílias vulneráveis.</span>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  formData.interestArea === 'juventude' 
                    ? 'border-[#4A5EAB] bg-[#EDF1FA] shadow-xs' 
                    : 'border-stone-200 hover:border-stone-300'
                }`}>
                  <input
                    type="radio"
                    name="interestArea"
                    value="juventude"
                    checked={formData.interestArea === 'juventude'}
                    onChange={() => setFormData({ ...formData, interestArea: 'juventude' })}
                    className="mt-1 text-[#4A5EAB] focus:ring-[#4A5EAB]"
                  />
                  <div>
                    <strong className="block text-sm font-semibold text-stone-900">Juventude Missionária Cristo Servo</strong>
                    <span className="block text-xs text-stone-600 mt-0.5">Encontros juvenis, missões de rua, música, amizade cristã e acampamentos.</span>
                  </div>
                </label>

              </div>

              {/* Step 1 Next Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-lg bg-[#4A5EAB] hover:bg-[#3D4F94] text-white text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  Continuar para Meus Dados
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#4A5EAB] font-bold">Etapa 2 de 2</span>
                <h4 className="text-lg font-serif font-bold text-stone-900">Conte-nos sobre você</h4>
                <p className="text-xs text-stone-600">Nossa equipe de acolhida entrará em contato para um bate-papo fraterno.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João da Silva"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Cidade / Estado *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ex: São Paulo, SP"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none"
                  />
                </div>
              </div>

              {/* Talents and Availability */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Dons & Áreas de Afinidade (selecione quantos desejar)
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {talentOptions.map(talent => (
                    <button
                      type="button"
                      key={talent}
                      onClick={() => handleTalentToggle(talent)}
                      className={`text-left p-2 rounded-lg border transition-colors cursor-pointer ${
                        formData.talents.includes(talent)
                          ? 'border-[#4A5EAB] bg-[#EDF1FA] text-[#4A5EAB] font-semibold'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {formData.talents.includes(talent) ? '✓ ' : '+ '}
                      {talent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Disponibilidade Preferida</label>
                <select
                  value={formData.availability}
                  onChange={e => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none"
                >
                  <option value="Finais de Semana">Finais de Semana (Sábados/Domingos)</option>
                  <option value="Noites em Dias de Semana">Noites em Dias de Semana</option>
                  <option value="Horário Comercial Flexível">Horário Comercial Flexível</option>
                  <option value="Participação em Oração e Remota">Participação em Oração e Remota</option>
                </select>
              </div>

              {/* Prayer Intention */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Intenção de Oração Particular (Opcional - será colocada no altar)
                </label>
                <textarea
                  rows={2}
                  value={formData.prayerIntention}
                  onChange={e => setFormData({ ...formData, prayerIntention: e.target.value })}
                  placeholder="Escreva uma intenção que gostaria que os servos rezassem por você..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] focus:ring-1 focus:ring-[#4A5EAB] outline-none resize-none"
                />
              </div>

              {/* Form Navigation Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  ← Voltar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4A5EAB] hover:bg-[#3D4F94] text-white text-sm font-semibold transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processando Inscrição...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#FED096]" />
                      <span>Concluir e Enviar Inscrição</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Inscrição Confirmada com Sucesso
                </span>
                <h4 className="text-2xl font-serif font-bold text-stone-900">
                  Bem-vindo(a) à Família Cristo Servo!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Que alegria receber você, <strong className="text-stone-900">{formData.name}</strong>! Seus dados foram registrados com carinho e sua intenção foi acolhida em nosso livro de orações.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 max-w-sm mx-auto space-y-1">
                <span className="block text-xs text-stone-500 uppercase tracking-widest">Seu Protocolo Fraterno</span>
                <span className="block font-mono text-xl font-bold text-stone-900">{submittedProtocol}</span>
                <span className="block text-[11px] text-stone-500">Guarde para seus próximos encontros</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar Direto no WhatsApp da Acolhida</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-sm font-medium transition-colors"
                >
                  Concluir & Voltar ao Site
                </button>
              </div>

              <p className="text-xs text-stone-400 flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                <span>Nossa equipe entrará em contato em até 48 horas úteis.</span>
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
