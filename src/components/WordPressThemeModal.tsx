import React, { useState } from 'react';
import { X, Copy, Check, FileCode, FolderTree, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { WORDPRESS_TEMPLATES_INFO } from '../data/initialData';
import { WordPressTemplateFile } from '../types';

interface WordPressThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressThemeModal: React.FC<WordPressThemeModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<WordPressTemplateFile>(WORDPRESS_TEMPLATES_INFO[0]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-stone-200 shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#1E2850] text-white p-6 flex items-center justify-between border-b border-[#2D3B73] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D3B73] text-[#FED096] flex items-center justify-center border border-[#FED096]/30">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#FED096] font-bold">
                Arquitetura de Exportação
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                Estrutura do Tema WordPress (Instituto Cristo Servo)
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

        {/* Modal Sub-Header Banner */}
        <div className="bg-[#EDF1FA] p-4 border-b border-[#4A5EAB]/30 text-xs text-[#1E2850] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A5EAB] shrink-0" />
            <span>
              Este projeto foi estruturado seguindo as diretrizes e a hierarquia oficial de templates do <strong>WordPress Codex & Full Site Editing</strong>.
            </span>
          </div>
          <span className="font-mono text-[11px] bg-white text-[#4A5EAB] border border-[#4A5EAB]/30 px-2 py-0.5 rounded font-bold">
            wp-content/themes/instituto-cristo-servo/
          </span>
        </div>

        {/* Main Body with Sidebar + Code Viewer */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* File Tree Sidebar */}
          <div className="md:col-span-4 bg-stone-100 border-r border-stone-200 p-4 overflow-y-auto space-y-2">
            <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold px-2">
              Arquivos de Template PHP & CSS
            </span>

            {WORDPRESS_TEMPLATES_INFO.map(file => (
              <button
                key={file.filename}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-left p-3 rounded-lg text-xs font-mono transition-colors flex items-center gap-2.5 cursor-pointer ${
                  selectedFile.filename === file.filename
                    ? 'bg-[#4A5EAB] text-white font-bold shadow-xs'
                    : 'text-stone-700 hover:bg-stone-200'
                }`}
              >
                <FileCode className={`w-4 h-4 shrink-0 ${selectedFile.filename === file.filename ? 'text-[#FED096]' : 'text-[#4A5EAB]'}`} />
                <span className="truncate">{file.filename}</span>
              </button>
            ))}

            <div className="pt-4 border-t border-stone-200 px-2 space-y-2 text-[11px] text-stone-600">
              <strong className="block text-stone-900 font-sans">Como instalar no WordPress:</strong>
              <p>1. Crie a pasta <code className="font-mono bg-stone-200 px-1 rounded">/instituto-cristo-servo</code> em <code className="font-mono bg-stone-200 px-1 rounded">/wp-content/themes/</code>.</p>
              <p>2. Salve os arquivos de template disponíveis ao lado.</p>
              <p>3. Ative o tema no painel <code className="font-mono bg-stone-200 px-1 rounded">Aparência &gt; Temas</code>.</p>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="md:col-span-8 bg-stone-950 text-stone-100 p-6 flex flex-col justify-between overflow-hidden">
            <div className="space-y-3 overflow-hidden flex flex-col flex-1">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 shrink-0">
                <div>
                  <span className="font-mono text-xs text-[#FED096] font-bold">{selectedFile.filename}</span>
                  <p className="text-[11px] text-stone-400 font-sans mt-0.5">{selectedFile.description}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2D3B73] hover:bg-[#3D4F94] text-[#FED096] text-xs font-medium transition-colors cursor-pointer shrink-0 border border-[#4A5EAB]/40"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Código Copiado!' : 'Copiar Código'}</span>
                </button>
              </div>

              {/* Code Pre container */}
              <div className="flex-1 overflow-auto bg-stone-900 rounded-lg p-4 font-mono text-xs text-stone-300 leading-relaxed border border-stone-800">
                <pre className="whitespace-pre-wrap">{selectedFile.code}</pre>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 shrink-0">
              <span>Compatível com WordPress 6.x+, PHP 8.1+ e Tailwind CSS</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                Fechar Visualizador
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
