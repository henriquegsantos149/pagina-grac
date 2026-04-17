import { motion } from 'framer-motion';
import { BriefcaseBusiness, Factory, Landmark, Construction } from 'lucide-react';

const applications = [
  {
    title: "Consultoria e Auditoria Ambiental",
    description: "Liderança técnica em projetos de GAC para consultorias de classe mundial. Você será o responsável por assinar laudos de investigação e planos de intervenção que decidem o futuro de grandes empreendimentos.",
    icon: BriefcaseBusiness
  },
  {
    title: "Indústrias e Gestão de Ativos",
    description: "Atuação direta em departamentos de EHS (Environment, Health and Safety) de grandes indústrias, gerenciando passivos ambientais internos, prevenindo contaminações e garantindo a continuidade operacional.",
    icon: Factory
  },
  {
    title: "Setor Imobiliário e Brownfields",
    description: "Recuperação de áreas industriais desativadas para novos usos urbanos. O profissional especializado é essencial para viabilizar a compra e venda de terrenos com histórico de contaminação, agregando valor imobiliário.",
    icon: Construction
  },
  {
    title: "Órgãos Públicos e Fiscalização",
    description: "Atuar na análise e validação de processos em órgãos ambientais (CETESB, INEA, FEPAM), garantindo que as diretrizes normativas sejam cumpridas com rigor técnico e isenção.",
    icon: Landmark
  }
];

export default function PracticalApplications() {
  return (
    <section id="aplicacoes-praticas" className="py-16 md:py-24 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Onde Aplicar <span className="text-brand-gradient">na Prática?</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">O mercado de Gerenciamento de Áreas Contaminadas é um dos que mais cresce e exige profissionais com alta especialização técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[var(--color-brand-primary)]/30 transition-all group shadow-lg shadow-black/40"
              >
                <div className="shrink-0 w-16 h-16 bg-white/5 flex items-center justify-center shape-leaf border border-white/10 group-hover:bg-brand-gradient group-hover:text-[var(--color-brand-dark)] group-hover:border-[var(--color-brand-primary)]/50 transition-all shadow-md">
                  <Icon className="w-8 h-8 text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-dark)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors">{app.title}</h3>
                  <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">{app.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
