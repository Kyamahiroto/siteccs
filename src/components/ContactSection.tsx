import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, ChevronDown } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 2000);
  };

  const faqs = [
    {
      q: 'Quem pode se tornar membro do Instituto Cristo Servo?',
      a: 'Qualquer pessoa de boa vontade que sinta o desejo sincero de servir a Deus e aos irmãos. Não é exigida nenhuma formação prévia ou condição financeira. Temos espaço tanto para oração e vida litúrgica na Comunidade quanto para trabalho prático nas Obras Sociais.'
    },
    {
      q: 'Qual a diferença entre a Comunidade e as Obras Sociais?',
      a: 'A Comunidade Cristo Servo cuida da dimensão espiritual, vida de oração, liturgia, retiros e formação dos discípulos. As Obras Sociais são o braço prático e humanitário, dedicadas ao preparo de refeições, oficinas profissionalizantes, auxílio aos necessitados e voluntariado ativo.'
    },
    {
      q: 'Como são mantidos os projetos e capacitações do Instituto?',
      a: 'Com parcerias empresariais éticas através do PROJACS (Lei da Aprendizagem), articulação com órgãos públicos e assistência social, e o voluntariado dedicado de quem acredita na formação integral do ser humano.'
    },
    {
      q: 'Moro em outra cidade ou município de MT ou RO. Posso participar?',
      a: 'Sim! Com 21 anos de atuação, nossas ações e convênios abrangem a Grande Cuiabá, Porto Velho e diversos municípios de Mato Grosso e Rondônia.'
    }
  ];

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Fale Conosco & Onde nos Encontrar
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Deseja agendar uma visita fraterna, tirar dúvidas vocacionais ou saber como ajudar? Entre em contato por nossos canais oficiais.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Headquarters Info & Service Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 space-y-6">
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Sede Institucional & Capela
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A5EAB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Endereço Principal:</strong>
                    <span>Rua da Fraternidade, 120 - Bairro das Graças</span>
                    <span className="block text-stone-500">São Paulo, SP - CEP 01234-567</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#4A5EAB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Horários de Funcionamento:</strong>
                    <span>Segunda a Sexta: 08:30 às 18:00</span>
                    <span className="block">Sábados (Ação Social & Sopão): 14:00 às 21:00</span>
                    <span className="block">Domingos (Missa Comunitária): 09:30 e 18:30</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A5EAB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Secretaria & WhatsApp:</strong>
                    <span>(11) 98765-4321</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4A5EAB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">E-mail Geral:</strong>
                    <span>contato@institutocristoservo.org.br</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href="https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Instituto%20Cristo%20Servo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#FED096]" />
                  <span>Conversar no WhatsApp da Secretaria</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                Envie sua dúvida ou solicitação
              </h3>
            </div>

            {sent && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Mensagem enviada com sucesso! Responderemos o mais breve possível.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Seu E-mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Assunto</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Ex: Quero saber mais sobre o discipulado"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Sua Mensagem *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4 text-[#FED096]" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="pt-8 border-t border-stone-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-stone-200 bg-stone-50/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base cursor-pointer hover:bg-stone-100/60 transition-colors"
                >
                  <span className={openFaq === idx ? 'text-[#4A5EAB]' : ''}>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#4A5EAB]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 pt-1 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
