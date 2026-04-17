import { motion } from 'framer-motion';
import { SearchCheck, Layers, Workflow, ShieldCheck, Map, FlaskConical } from 'lucide-react';

const skills = [
  {
    icon: SearchCheck,
    title: "Investigação de Precisão",
    desc: "Domínio de técnicas de amostragem de solo, água subterrânea e vapores, utilizando as melhores práticas nacionais e internacionais."
  },
  {
    icon: Layers,
    title: "Modelagem Conceitual (CSM)",
    desc: "Capacidade de integrar dados geológicos, hidrogeológicos e químicos para construir um Modelo Conceitual do Site (CSM) dinâmico."
  },
  {
    icon: Workflow,
    title: "Tecnologias de Remediação",
    desc: "Seleção e projeto de sistemas In Situ (Oxidação, Biorremediação) e Ex Situ, focando em eficiência técnica e custo-benefício."
  },
  {
    icon: ShieldCheck,
    title: "Avaliação de Risco à Saúde",
    desc: "Cálculo e interpretação de riscos toxicológicos para fundamentar decisões de intervenção e garantir a segurança humana."
  },
  {
    icon: Map,
    title: "Gestão Legal e Compliance",
    desc: "Navegação profunda nas resoluções CONAMA e diretrizes da CETESB, garantindo a conformidade total dos seus projetos."
  },
  {
    icon: FlaskConical,
    title: "Monitoramento Estratégico",
    desc: "Desenvolvimento de planos de monitoramento pós-remediação focados na obtenção do Termo de Reabilitação para Uso Declarado."
  }
];

export default function SkillsResults() {
  return (
    <section className="py-16 md:py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Habilidades e <span className="text-brand-gradient">Resultados Esperados</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Desenvolva as competências mais valorizadas pelo mercado de remediação de áreas contaminadas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 shape-leaf bg-[var(--color-brand-dark)] border border-white/5 hover:border-[var(--color-brand-primary)]/40 transition-all shadow-lg shadow-black/40"
            >
              <div className="w-12 h-12 shape-leaf bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-gradient group-hover:text-[var(--color-brand-dark)] transition-all">
                <skill.icon className="w-6 h-6 text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-primary uppercase tracking-wide group-hover:text-[var(--color-brand-primary)] transition-colors">
                {skill.title}
              </h3>
              <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
