import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Sparkles, Camera } from 'lucide-react';
import { motion } from 'motion/react';

export const BenefactorSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number>(60);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorSuccess, setDonorSuccess] = useState(false);

  const pixKey = 'pix@institutocristoservo.org.br';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleDonorRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setDonorSuccess(true);
  };

  const currentAmountValue = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const getImpactDescription = (value: number) => {
    if (value < 40) {
      return 'Garante 8 refeições nutritivas no Sopão Fraterno.';
    } else if (value < 90) {
      return 'Garante 18 refeições completas + apoio aos retiros de oração.';
    } else if (value < 200) {
      return 'Financia 1 cesta básica integral com alimentos saudáveis para uma família.';
    } else {
      return 'Mantém o amparo contínuo de 2 famílias vulneráveis e da Capela Cenáculo.';
    }
  };

  return (
    <section id="benfeitor" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header: Shorter copy */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Seja um Benfeitor
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Sua doação mensal mantém o alimento na mesa de quem tem fome e a oração contínua na capela.
          </p>
        </div>

        {/* 2-Column Donation & Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Amount Selector & Impact Card */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Mock Image of Benefactor Impact */}
              <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-stone-900 border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                  alt="Ação Social Beneficiada por Doações"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1E2850]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-[#FED096] font-mono flex items-center gap-1 border border-[#4A5EAB]/30">
                  <Camera className="w-3 h-3" />
                  <span>Foto Mockada: Obras Apoiadas por Benfeitores</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
                  Escolha quanto doar mensalmente
                </h3>
              </div>

              {/* Fixed Amount Buttons with Motion */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[30, 60, 120, 250].map(amount => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedAmount === amount && !customAmount
                        ? 'border-[#4A5EAB] bg-[#4A5EAB] text-white font-bold shadow-xs'
                        : 'border-stone-300 bg-white text-stone-800 hover:border-[#4A5EAB]'
                    }`}
                  >
                    <span className="block text-xs opacity-80">R$</span>
                    <span className="text-base font-serif font-bold">{amount}</span>
                    <span className="block text-[10px] opacity-80">/mês</span>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <span className="absolute left-3 top-2 text-stone-500 font-medium text-xs">R$</span>
                <input
                  type="number"
                  min="5"
                  value={customAmount}
                  onChange={e => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  placeholder="Ou digite outro valor (ex: 80)"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-300 bg-white text-xs focus:border-[#4A5EAB] outline-none"
                />
              </div>

              {/* Impact Feedback */}
              <div className="p-3.5 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 text-xs text-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#4A5EAB]">
                  <Sparkles className="w-3.5 h-3.5 text-[#4A5EAB]" />
                  <span>Impacto de R$ {currentAmountValue || 0}:</span>
                </div>
                <p className="text-stone-700 font-sans">
                  {getImpactDescription(currentAmountValue)}
                </p>
              </div>

            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-[#4A5EAB] shrink-0" />
              <span>Relatório semestral de prestação de contas enviado por e-mail.</span>
            </div>
          </div>

          {/* Right Column: Instant PIX */}
          <div className="lg:col-span-5 bg-[#1E2850] text-white rounded-2xl border border-[#2D3B73] p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Doação Imediata</h3>
              </div>

              {/* PIX Copy Box */}
              <div className="space-y-1.5">
                <span className="text-xs text-stone-300">Chave PIX (E-mail):</span>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2D3B73]/60 border border-[#4A5EAB]/40">
                  <span className="text-xs font-mono text-[#FED096] truncate flex-1 select-all font-semibold">
                    {pixKey}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyPix}
                    className="shrink-0 p-1.5 px-3 rounded-md bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                  </motion.button>
                </div>
              </div>

              {/* Bank Summary */}
              <div className="text-xs text-stone-300 bg-[#2D3B73]/40 p-3 rounded-xl border border-[#4A5EAB]/30 font-mono space-y-1">
                <p>Banco: <strong className="text-white">Banco do Brasil (001)</strong></p>
                <p>Ag: <strong className="text-white">1234-5</strong> · CC: <strong className="text-white">98765-4</strong></p>
                <p>CNPJ: <strong className="text-white">12.345.678/0001-90</strong></p>
              </div>

              {/* Quick Donor Form */}
              {!donorSuccess ? (
                <form onSubmit={handleDonorRegister} className="space-y-2 pt-1">
                  <span className="block text-xs text-stone-300">
                    Cadastre-se para receber o boletim mensal dos benfeitores:
                  </span>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={e => setDonorName(e.target.value)}
                    placeholder="Seu Nome"
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#2D3B73]/50 border border-[#4A5EAB]/40 text-white placeholder-stone-400 focus:border-[#FED096] outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={e => setDonorEmail(e.target.value)}
                    placeholder="Seu E-mail"
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#2D3B73]/50 border border-[#4A5EAB]/40 text-white placeholder-stone-400 focus:border-[#FED096] outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    Confirmar Cadastro de Benfeitor
                  </button>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs">
                  <p className="font-semibold text-white">Gratidão imensa, {donorName}!</p>
                  <p>Você foi incluído na Missa pelos Benfeitores todo 1º domingo do mês.</p>
                </div>
              )}
            </div>

            <p className="text-[11px] text-stone-300 text-center">
              Dúvidas? <span className="text-[#FED096] font-semibold">benfeitor@institutocristoservo.org.br</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
