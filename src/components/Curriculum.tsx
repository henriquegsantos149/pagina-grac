import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Introdução ao Gerenciamento de Áreas Contaminadas",
    description: "Objetivo: Revisar os principais conceitos e enfatizar a integração entre investigação, avaliação de risco e remediação. Foco Prático: Aplicar os critérios em estudos de caso reais."
  },
  {
    title: "Legislação e Licenciamento Ambiental",
    description: "Objetivo: Compreensão de leis e regulamentações para conformidade legal em projetos ambientais. Foco Prático: Simulações de processos de licenciamento, análise de impactos e relatórios."
  },
  {
    title: "Geologia e Hidrogeologia Aplicadas à Remediação",
    description: "Objetivo: Conceitos básicos para identificação e caracterização de áreas contaminadas. Foco Prático: Ensaios hidrogeológicos para obtenção de dados ao planejamento de projetos."
  },
  {
    title: "Geoprocessamento e Tratamento de Dados",
    description: "Objetivo: Técnicas para manipulação e análise de dados espaciais em projetos. Foco Prático: Processamento de imagens de satélite, construção de mapas e análise espacial em vários contextos."
  },
  {
    title: "Comportamento de Contaminantes",
    description: "Objetivo: Abordar o comportamento de contaminantes no solo e na água subterrânea. Foco Prático: Aplicar os conceitos sobre transporte de poluentes na análise de soluções de remediação."
  },
  {
    title: "Geoprocessamento e Sensoriamento Remoto",
    description: "Objetivo: Explorar técnicas aplicadas ao monitoramento de dados provenientes de satélites. Foco Prático: Levantar dados ambientais em mapas temáticos para identificar áreas e monitorar mudanças."
  },
  {
    title: "Tecnologias de Remediação Convencionais",
    description: "Objetivo: Estudar tecnologias in situ e ex situ. Foco Prático: Comparar métodos in situ e ex situ e aplicar critérios de seleção em estudos de caso para implementação dessas tecnologias."
  },
  {
    title: "Tecnologias de Remediação Não Convencionais",
    description: "Objetivo: Explorar tecnologias não convencionais (oxidação, remediação termal, etc). Foco Prático: Avaliar e aplicar essas tecnologias em estudos de caso de projetos de complexidade e realistas."
  },
  {
    title: "Uso de Modelos Matemáticos para Projetos",
    description: "Objetivo: Modelagem matemática com ênfase em GAC. Foco Prático: Aplicar modelos numéricos em fluxos de água e transporte de contaminantes para prever eficácia de técnicas de remediação."
  },
  {
    title: "Plano de Intervenção e Projetos de Remediação",
    description: "Objetivo: Detalhar a elaboração de um projeto de intervenção baseado em GAC. Foco Prático: Aplicar princípios na execução de planos com controle de custos, prazos e comunicação com stakeholders."
  },
  {
    title: "Monitoramento e Encerramento da Remediação",
    description: "Objetivo: Métodos e técnicas para monitoramento de eficácia e encerramento. Foco Prático: Uso de ferramentas de análise de dados para monitorar, avaliar a eficácia e adaptar as ações efetuadas."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculo" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">11 módulos desenhados para conectar a teoria à prática, com foco absoluto no que o mercado exige.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index}
                className={`shape-leaf bg-black/40 border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-green2)]/40 shadow-[0_0_20px_rgba(88,174,105,0.1)]' : 'border-white/5 hover:border-[var(--color-brand-blue)]/30'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 shape-leaf flex items-center justify-center font-bold font-impact text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(88,174,105,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold font-primary uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-green2)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-green2)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 pl-26 flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--color-brand-blue)] shrink-0 mt-1" />
                    <p className="text-[var(--color-brand-light)]/70 text-lg font-secondary">{mod.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
