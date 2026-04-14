import { motion } from 'framer-motion';
import { Workflow, ShieldCheck, Map, SearchCheck, Layers, FlaskConical } from 'lucide-react';

const skills = [
  {
    title: "Investigação de Precisão",
    description: "Domínio de técnicas de amostragem de solo, água subterrânea e vapores, utilizando as melhores práticas nacionais e internacionais (EPA/ASTM).",
    icon: SearchCheck
  },
  {
    title: "Modelagem Conceitual (CSM)",
    description: "Capacidade de integrar dados geológicos, hidrogeológicos e químicos para construir um Modelo Conceitual do Site (CSM) dinâmico e preciso.",
    icon: Layers
  },
  {
    title: "Tecnologias de Remediação",
    description: "Seleção e projeto de sistemas In Situ (Oxidação, Biorremediação) e Ex Situ, focando em eficiência técnica e custo-benefício.",
    icon: Workflow
  },
  {
    title: "Avaliação de Risco à Saúde",
    description: "Cálculo e interpretação de riscos toxicológicos para fundamentar decisões de intervenção e garantir a segurança humana e ecológica.",
    icon: ShieldCheck
  },
  {
    title: "Gestão Legal e Compliance",
    description: "Navegação profunda nas resoluções CONAMA e diretrizes da CETESB, garantindo a conformidade total dos seus projetos perante os órgãos ambientais.",
    icon: Map
  },
  {
    title: "Monitoramento Estratégico",
    description: "Desenvolvimento de planos de monitoramento pós-remediação focados na obtenção do Termo de Reabilitação para Uso Declarado.",
    icon: FlaskConical
  }
];

export default function SkillsAcquired() {
  return (
    <section id="habilidades" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Habilidades <span className="text-brand-gradient">Adquiridas</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Tudo que você será capaz de aplicar profissionalmente após concluir a Pós GRAC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="shape-leaf bg-white/5 p-8 border border-white/10 hover:border-[var(--color-brand-green2)]/30 transition-all flex flex-col items-start gap-5 group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gradient opacity-10 rounded-full blur-[30px] group-hover:opacity-30 transition-opacity"></div>
                
                <div className="w-16 h-16 shape-leaf bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-green1)] group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-[var(--color-brand-dark)] transition-all duration-500 shadow-lg">
                  <Icon className="w-8 h-8 group-hover:text-[var(--color-brand-dark)] transition-colors duration-500" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-light)] mb-3 font-primary uppercase tracking-wide">{skill.title}</h3>
                  <p className="text-[var(--color-brand-light)]/60 leading-relaxed font-secondary">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
