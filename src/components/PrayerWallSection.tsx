import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, Quote, Camera, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PrayerItem } from '../types';
import { INITIAL_PRAYERS, INITIAL_TESTIMONIALS } from '../data/initialData';

export const PrayerWallSection: React.FC = () => {
  const [prayers, setPrayers] = useState<PrayerItem[]>(INITIAL_PRAYERS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newCategory, setNewCategory] = useState<'Saúde' | 'Família' | 'Vocação' | 'Agradecimento' | 'Paz e Conversão'>('Família');
  const [newIntention, setNewIntention] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [prayedIds, setPrayedIds] = useState<string[]>([]);

  const handlePray = (id: string) => {
    if (prayedIds.includes(id)) return;

    setPrayers(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, prayerCount: p.prayerCount + 1 };
      }
      return p;
    }));
    setPrayedIds(prev => [...prev, id]);
  };

  const handleAddPrayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIntention.trim()) return;

    const newEntry: PrayerItem = {
      id: `pry-${Date.now()}`,
      author: newAuthor.trim() || 'Irmão em Cristo (Anônimo)',
      city: newCity.trim() || 'Brasil',
      category: newCategory,
      intention: newIntention.trim(),
      prayerCount: 1,
      createdAt: 'Agora mesmo'
    };

    setPrayers([newEntry, ...prayers]);
    setSubmitted(true);
    setNewAuthor('');
    setNewCity('');
    setNewIntention('');

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="oracao" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header: Shorter text */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Mural de Pedidos de Oração
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-sans">
            Coloque sua intenção diante do altar. Nossos servos rezam diariamente por cada prece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Feed of Prayer Intentions */}
          <div className="lg:col-span-7 space-y-3.5">
            {prayers.map(prayer => {
              const alreadyPrayed = prayedIds.includes(prayer.id);

              return (
                <motion.div
                  key={prayer.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900">{prayer.author}</span>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-500">{prayer.city}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium text-[11px]">
                      {prayer.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
                    "{prayer.intention}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                    <span className="text-stone-400 font-mono text-[11px]">{prayer.createdAt}</span>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePray(prayer.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        alreadyPrayed
                          ? 'bg-[#EDF1FA] text-[#4A5EAB] border border-[#4A5EAB]/40'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${alreadyPrayed ? 'fill-[#4A5EAB] text-[#4A5EAB]' : 'text-stone-400'}`} />
                      <span>{alreadyPrayed ? 'Oração registrada' : 'Rezar por esta intenção'}</span>
                      <span className="ml-1 text-[11px] font-mono font-bold text-[#4A5EAB] tabular-nums">
                        ({prayer.prayerCount})
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Submission Form with Mock Image */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            
            {/* Mock Image of Capela Prayer */}
            <div className="relative aspect-[16/7] rounded-xl overflow-hidden bg-stone-900 border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1548625361-195fd01a2663?auto=format&fit=crop&w=600&q=80"
                alt="Adoração e Intercessão"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#1E2850]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-[#FED096] font-mono flex items-center gap-1 border border-[#4A5EAB]/30">
                <Camera className="w-3 h-3" />
                <span>Foto Mockada: Capela Cenáculo</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Deixe seu pedido no altar
              </h3>
            </div>

            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sua intenção foi incluída nas orações dos servos!</span>
              </div>
            )}

            <form onSubmit={handleAddPrayer} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Seu Nome (ou anônimo)</label>
                <input
                  type="text"
                  value={newAuthor}
                  onChange={e => setNewAuthor(e.target.value)}
                  placeholder="Ex: Maria José"
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Cidade</label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={e => setNewCity(e.target.value)}
                    placeholder="Ex: São Paulo, SP"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Motivo</label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:border-[#4A5EAB] outline-none"
                  >
                    <option value="Saúde">Saúde</option>
                    <option value="Família">Família</option>
                    <option value="Vocação">Vocação</option>
                    <option value="Agradecimento">Agradecimento</option>
                    <option value="Paz e Conversão">Paz e Conversão</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Sua Intenção *</label>
                <textarea
                  required
                  rows={3}
                  value={newIntention}
                  onChange={e => setNewIntention(e.target.value)}
                  placeholder="Descreva sua prece..."
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:border-[#4A5EAB] outline-none resize-none"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#4A5EAB] hover:bg-[#3D4F94] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-[#FED096]" />
                <span>Publicar Intenção no Mural</span>
              </motion.button>
            </form>
          </div>

        </div>

        {/* Member Testimonials (Shorter, compact) */}
        <div className="pt-6 border-t border-stone-200 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Testemunhos Fraternos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INITIAL_TESTIMONIALS.map(t => (
              <motion.div
                key={t.id}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-3"
              >
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-2.5 pt-2 border-t border-stone-100">
                  <div className="w-7 h-7 rounded-full bg-[#EDF1FA] text-[#4A5EAB] font-bold text-xs flex items-center justify-center font-serif border border-[#4A5EAB]/20">
                    {t.avatarFallback}
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold text-stone-900">{t.name}</strong>
                    <span className="block text-[10px] text-stone-500">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
