import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Building2, UserCheck, ArrowRight, Lock, Phone, Mail, Award, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjacsModalType } from '../types';

interface ProjacsModalProps {
  modalType: ProjacsModalType;
  onClose: () => void;
}

export const ProjacsModal: React.FC<ProjacsModalProps> = ({ modalType, onClose }) => {
  // Form states
  const [companyName, setCompanyName] = useState('');
  const [companyCnpj, setCompanyCnpj] = useState('');
  const [companyContact, setCompanyContact] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyVagas, setCompanyVagas] = useState('1 a 5 aprendizes');
  const [companyCity, setCompanyCity] = useState('Cuiabá / Várzea Grande - MT');

  const [youthName, setYouthName] = useState('');
  const [youthAge, setYouthAge] = useState('');
  const [youthPhone, setYouthPhone] = useState('');
  const [youthEmail, setYouthEmail] = useState('');
  const [youthCity, setYouthCity] = useState('');
  const [youthSchool, setYouthSchool] = useState('Ensino Médio Cursando');

  const [partnerLoginCnpj, setPartnerLoginCnpj] = useState('');
  const [partnerLoginPass, setPartnerLoginPass] = useState('');

  const [studentCpf, setStudentCpf] = useState('');
  const [studentPass, setStudentPass] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!modalType) return null;

  const handleSubmitCompany = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Proposta solicitada com sucesso para ${companyName}! Nosso setor corporativo de Aprendizagem entrará em contato em breve.`);
    setSubmitted(true);
  };

  const handleSubmitYouth = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Parabéns, ${youthName}! Seu cadastro foi incluído com sucesso no Banco de Talentos do PROJACS. Fique atento ao seu WhatsApp para convocação de entrevistas.`);
    setSubmitted(true);
  };

  const handlePartnerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Autenticação verificada. Redirecionando para o Portal do Parceiro do Instituto Cristo Servo...`);
    setSubmitted(true);
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`Acesso liberado. Carregando ambiente virtual do Jovem Aprendiz...`);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8 relative"
      >
        {/* Header Modal */}
        <div className="bg-[#1E2850] text-white p-6 sm:p-7 flex items-center justify-between border-b border-[#2D3B73]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D3B73] border border-[#FED096]/30 flex items-center justify-center text-[#FED096]">
              {modalType === 'parceiro-login' && <Building2 className="w-5 h-5" />}
              {modalType === 'empresa-contratar' && <ShieldCheck className="w-5 h-5" />}
              {modalType === 'jovem-inscricao' && <Award className="w-5 h-5" />}
              {modalType === 'aprendiz-login' && <UserCheck className="w-5 h-5" />}
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#FED096] font-bold">
                {modalType === 'parceiro-login' && 'Área do Parceiro'}
                {modalType === 'empresa-contratar' && 'Para Empresas · Nova Parceria'}
                {modalType === 'jovem-inscricao' && 'Para Jovens · Banco de Vagas'}
                {modalType === 'aprendiz-login' && 'Portal do Aluno · Jovem Aprendiz'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {modalType === 'parceiro-login' && 'Acesso ao Sistema do Parceiro'}
                {modalType === 'empresa-contratar' && 'Contrate Jovens Aprendizes'}
                {modalType === 'jovem-inscricao' && 'Inscrição para Jovem Aprendiz'}
                {modalType === 'aprendiz-login' && 'Portal do Aprendiz Cadastrado'}
              </h3>
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

        {/* Body Container */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">Solicitação Concluída!</h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {successMessage}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20setor%20do%20PROJACS%20sobre%20o%20Programa%20Jovem%20Aprendiz."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Falar no WhatsApp da Coordenação</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs sm:text-sm cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Modal 1: Login Empresa Parceira */}
              {modalType === 'parceiro-login' && (
                <form onSubmit={handlePartnerLogin} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 text-xs text-[#1E2850] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#4A5EAB] shrink-0" />
                    <span>Ambiente restrito e seguro para empresas parceiras com aprendizes ativos.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">CNPJ da Empresa *</label>
                    <input
                      type="text"
                      required
                      value={partnerLoginCnpj}
                      onChange={e => setPartnerLoginCnpj(e.target.value)}
                      placeholder="00.000.000/0001-00"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Senha de Acesso *</label>
                    <input
                      type="password"
                      required
                      value={partnerLoginPass}
                      onChange={e => setPartnerLoginPass(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-stone-400" />
                      Criptografia de ponta a ponta
                    </span>
                    <a
                      href="https://wa.me/5511987654321?text=Ol%C3%A1,%20sou%20empresa%20parceira%20e%20preciso%20recuperar%20meu%20acesso%20ao%20portal."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A5EAB] hover:underline font-semibold"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Entrar no Sistema do Parceiro</span>
                    <ArrowRight className="w-4 h-4 text-[#FED096]" />
                  </button>

                  <div className="pt-2 text-center text-xs text-stone-500">
                    Sua empresa ainda não é parceira?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setTimeout(() => window.location.hash = '#projacs', 50);
                      }}
                      className="text-[#4A5EAB] font-bold hover:underline cursor-pointer"
                    >
                      Solicite cadastro aqui
                    </button>
                  </div>
                </form>
              )}

              {/* Modal 2: Quero Contratar (Nova Empresa) */}
              {modalType === 'empresa-contratar' && (
                <form onSubmit={handleSubmitCompany} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 text-xs text-[#1E2850]">
                    <strong>Vantagens exclusivas do PROJACS:</strong> Zero taxa de adesão, entidade formadora habilitada pelo MTE, formação inclusa e suporte jurídico completo.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Razão Social / Empresa *</label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        placeholder="Nome da Empresa"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">CNPJ *</label>
                      <input
                        type="text"
                        required
                        value={companyCnpj}
                        onChange={e => setCompanyCnpj(e.target.value)}
                        placeholder="00.000.000/0001-00"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Nome do Contato / RH *</label>
                      <input
                        type="text"
                        required
                        value={companyContact}
                        onChange={e => setCompanyContact(e.target.value)}
                        placeholder="Ex: Ana Souza"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">WhatsApp de Contato *</label>
                      <input
                        type="tel"
                        required
                        value={companyPhone}
                        onChange={e => setCompanyPhone(e.target.value)}
                        placeholder="(65) 99999-9999"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">E-mail Corporativo *</label>
                      <input
                        type="email"
                        required
                        value={companyEmail}
                        onChange={e => setCompanyEmail(e.target.value)}
                        placeholder="rh@empresa.com.br"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Necessidade de Vagas</label>
                      <select
                        value={companyVagas}
                        onChange={e => setCompanyVagas(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:border-[#4A5EAB] outline-none"
                      >
                        <option value="1 a 3 aprendizes">1 a 3 aprendizes</option>
                        <option value="4 a 10 aprendizes">4 a 10 aprendizes</option>
                        <option value="Mais de 10 aprendizes">Mais de 10 aprendizes</option>
                        <option value="Apenas consultoria de cota">Consultoria sobre cota legal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Cidade da Unidade de Trabalho</label>
                    <input
                      type="text"
                      value={companyCity}
                      onChange={e => setCompanyCity(e.target.value)}
                      placeholder="Ex: Cuiabá - MT, Porto Velho - RO, etc."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Banco de Aprendizes & Proposta</span>
                    <ArrowRight className="w-4 h-4 text-[#FED096]" />
                  </button>
                </form>
              )}

              {/* Modal 3: Quero me Inscrever (Jovem Aprendiz) */}
              {modalType === 'jovem-inscricao' && (
                <form onSubmit={handleSubmitYouth} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 text-xs text-[#1E2850]">
                    <strong>Oportunidade para Jovens de 14 a 24 anos:</strong> Carteira de trabalho assinada, salário proporcional, 13º salário, férias e capacitação teórica no Instituto Cristo Servo!
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Nome Completo do Jovem *</label>
                      <input
                        type="text"
                        required
                        value={youthName}
                        onChange={e => setYouthName(e.target.value)}
                        placeholder="Ex: Lucas Henrique Pereira"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Sua Idade *</label>
                      <input
                        type="number"
                        min="14"
                        max="24"
                        required
                        value={youthAge}
                        onChange={e => setYouthAge(e.target.value)}
                        placeholder="Ex: 16"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">WhatsApp (com DDD) *</label>
                      <input
                        type="tel"
                        required
                        value={youthPhone}
                        onChange={e => setYouthPhone(e.target.value)}
                        placeholder="(65) 99999-9999"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={youthEmail}
                        onChange={e => setYouthEmail(e.target.value)}
                        placeholder="seunome@gmail.com"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Escolaridade *</label>
                      <select
                        value={youthSchool}
                        onChange={e => setYouthSchool(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:border-[#4A5EAB] outline-none"
                      >
                        <option value="Ensino Médio Cursando">Ensino Médio Cursando</option>
                        <option value="Ensino Médio Concluído">Ensino Médio Concluído</option>
                        <option value="Ensino Fundamental Concluído">Ensino Fundamental Concluído</option>
                        <option value="Ensino Superior Cursando">Ensino Superior Cursando</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Cidade / Bairro onde Mora *</label>
                      <input
                        type="text"
                        required
                        value={youthCity}
                        onChange={e => setYouthCity(e.target.value)}
                        placeholder="Ex: Cuiabá - MT (Bairro Morada)"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#FED096] hover:bg-[#fedba8] text-[#1E2850] font-bold text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Concluir Inscrição no Banco de Vagas</span>
                    <ArrowRight className="w-4 h-4 text-[#1E2850]" />
                  </button>
                </form>
              )}

              {/* Modal 4: Login Jovem Cadastrado */}
              {modalType === 'aprendiz-login' && (
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#EDF1FA] border border-[#4A5EAB]/30 text-xs text-[#1E2850] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#4A5EAB] shrink-0" />
                    <span>Acesso exclusivo para jovens aprendizes já matriculados no PROJACS.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">CPF ou Matrícula do Aluno *</label>
                    <input
                      type="text"
                      required
                      value={studentCpf}
                      onChange={e => setStudentCpf(e.target.value)}
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Senha de Acesso *</label>
                    <input
                      type="password"
                      required
                      value={studentPass}
                      onChange={e => setStudentPass(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-stone-400" />
                      Portal do Aluno
                    </span>
                    <a
                      href="https://wa.me/5511987654321?text=Ol%C3%A1,%20sou%20jovem%20aprendiz%20do%20PROJACS%20e%20preciso%20recuperar%20minha%20senha."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A5EAB] hover:underline font-semibold"
                    >
                      Esqueci minha senha
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-bold text-sm transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Entrar no Portal do Aprendiz</span>
                    <ArrowRight className="w-4 h-4 text-[#FED096]" />
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
