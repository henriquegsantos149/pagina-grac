import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Ambiental Trends: Análises de Futuring & Modelos de Negócios",
    description: "Objetivo: Discutir tendências emergentes no setor ambiental, utilizando ferramentas de análise de futuro (futuring) e de modelagem de negócios. Foco Prático: Aplicação de métodos de prospecção para identificar oportunidades de inovação e estruturar modelos de negócio adaptados às mudanças do mercado ambiental."
  },
  {
    title: "Fundamentos de Programação para Ciência de Dados Ambientais",
    description: "Objetivo: Introduzir a lógica de programação e sua aplicação no tratamento e análise de dados ambientais. Foco Prático: Criação de scripts básicos que automatizem processos de manipulação e organização de dados, facilitando análises em diferentes contextos ambientais."
  },
  {
    title: "Inteligência Artificial e Aprendizado de Máquinas",
    description: "Objetivo: Apresentar conceitos de inteligência artificial e machine learning voltados para análise e tomada de decisão em projetos ambientais. Foco Prático: Construção e aplicação de modelos de aprendizado de máquina para classificação, previsão e identificação de padrões ambientais."
  },
  {
    title: "Gerenciamento de Bancos de Dados e Big Data aplicado ao Setor Ambiental",
    description: "Objetivo: Ensinar os fundamentos da organização e gestão de grandes bases de dados ambientais. Foco Prático: Estruturação de bancos de dados, realização de consultas e uso de ferramentas de big data para análise em larga escala no setor ambiental."
  },
  {
    title: "Geotecnologias aplicadas à área ambiental",
    description: "Objetivo: Explorar conceitos e aplicações de geoprocessamento e SIG no setor ambiental. Foco Prático: Produção de mapas digitais e execução de análises espaciais que auxiliam na gestão de recursos naturais e territoriais."
  },
  {
    title: "Sensoriamento Remoto e Processamento Digital de Imagens",
    description: "Objetivo: Abordar os fundamentos do sensoriamento remoto e do processamento digital de imagens para o monitoramento ambiental. Foco Prático: Utilização de imagens orbitais e aéreas em análises ambientais, possibilitando identificação de mudanças e elaboração de produtos cartográficos."
  },
  {
    title: "Gestão de Risco e Sustentabilidade Corporativa",
    description: "Objetivo: Desenvolver conhecimentos sobre metodologias de gestão de riscos e sua aplicação em contextos empresariais. Foco Prático: Elaboração de estratégias de mitigação e implementação de práticas de sustentabilidade em organizações e projetos ambientais."
  },
  {
    title: "Modelagem e Análise de Decisão em Contextos Ambientais",
    description: "Objetivo: Ensinar técnicas de modelagem e de análise de decisão aplicadas a problemas complexos da área ambiental. Foco Prático: Uso de modelos preditivos e simulações para subsidiar decisões estratégicas em projetos e políticas ambientais."
  },
  {
    title: "WebMaps e Dashboards: Visualização Interativa de Dados",
    description: "Objetivo: Capacitar na criação de produtos digitais interativos para comunicar informações ambientais de forma acessível e clara. Foco Prático: Desenvolvimento de mapas online e dashboards dinâmicos para apresentação de dados e resultados ambientais a gestores, clientes e órgãos públicos."
  },
  {
    title: "Escritório de Projetos Ágil (Tailoring, Modelos, Métodos e Artefatos)",
    description: "Objetivo: Estudar fundamentos de gestão ágil aplicados ao planejamento e execução de projetos no setor ambiental. Foco Prático: Organização de processos e adaptação de métodos ágeis para otimizar prazos, recursos e entregas em projetos de dados ambientais."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">10 módulos desenhados para conectar a teoria à prática, com foco absoluto no que o mercado exige.</p>
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
