import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Introdução ao Gerenciamento de Áreas Contaminadas",
    objective: "Revisar os principais conceitos e enfatizar a integração entre investigação, avaliação de risco e remediação.",
    practicalFocus: "Aplicar os critérios em estudos de caso reais."
  },
  {
    title: "Legislação e Licenciamento Ambiental",
    objective: "Compreensão de leis e regulamentações para conformidade legal em projetos ambientais.",
    practicalFocus: "Simulações de processos de licenciamento, análise de impactos e relatórios."
  },
  {
    title: "Geologia e Hidrogeologia Aplicadas à Remediação",
    objective: "Conceitos básicos para identificação e caracterização de áreas contaminadas.",
    practicalFocus: "Ensaios hidrogeológicos para obtenção de dados ao planejamento de projetos."
  },
  {
    title: "Geoprocessamento e Tratamento de Dados",
    objective: "Técnicas para manipulação e análise de dados espaciais em projetos.",
    practicalFocus: "Processamento de imagens de satélite, construção de mapas e análise espacial em vários contextos."
  },
  {
    title: "Comportamento de Contaminantes",
    objective: "Abordar o comportamento de contaminantes no solo e na água subterrânea.",
    practicalFocus: "Aplicar os conceitos sobre transporte de poluentes na análise de soluções de remediação."
  },
  {
    title: "Geoprocessamento e Sensoriamento Remoto",
    objective: "Explorar técnicas aplicadas ao monitoramento de dados provenientes de satélites.",
    practicalFocus: "Levantar dados ambientais em mapas temáticos para identificar áreas e monitorar mudanças."
  },
  {
    title: "Tecnologias de Remediação Convencionais",
    objective: "Estudar tecnologias in situ e ex situ.",
    practicalFocus: "Comparar métodos in situ e ex situ e aplicar critérios de seleção em estudos de caso para implementação dessas tecnologias."
  },
  {
    title: "Tecnologias de Remediação Não Convencionais",
    objective: "Explorar tecnologias não convencionais (oxidação, remediação termal, etc).",
    practicalFocus: "Avaliar e aplicar essas tecnologias em estudos de caso de projetos de complexidade e realistas."
  },
  {
    title: "Uso de Modelos Matemáticos para Projetos",
    objective: "Modelagem matemática com ênfase em GAC.",
    practicalFocus: "Aplicar modelos numéricos em fluxos de água e transporte de contaminantes para prever eficácia de técnicas de remediação."
  },
  {
    title: "Plano de Intervenção e Projetos de Remediação",
    objective: "Detalhar a elaboração de um projeto de intervenção baseado em GAC.",
    practicalFocus: "Aplicar princípios na execução de planos com controle de custos, prazos e comunicação com stakeholders."
  },
  {
    title: "Monitoramento e Encerramento da Remediação",
    objective: "Métodos e técnicas para monitoramento de eficácia e encerramento.",
    practicalFocus: "Uso de ferramentas de análise de dados para monitorar, avaliar a eficácia e adaptar as ações efetuadas."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="curriculo" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">11 módulos desenhados para conectar a teoria à prática, com foco absoluto no que o mercado exige.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(149,166,23,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 shape-leaf flex items-center justify-center font-bold font-impact text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(149,166,23,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold font-primary uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 md:pl-26 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-xs tracking-widest block mb-1">Objetivo</strong>
                        {mod.objective}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-accent)] uppercase text-xs tracking-widest block mb-1">Foco Prático</strong>
                        {mod.practicalFocus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
