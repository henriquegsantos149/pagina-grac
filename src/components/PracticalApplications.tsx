import { motion } from 'framer-motion';

const applications = [
  {
    title: "Consultoria e Auditoria Ambiental",
    description: "Liderança técnica em projetos de GAC para consultorias de classe mundial. Você será o responsável por assinar laudos de investigação e planos de intervenção que decidem o futuro de grandes empreendimentos.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Indústrias e Gestão de Ativos",
    description: "Atuação direta em departamentos de EHS (Environment, Health and Safety) de grandes indústrias, gerenciando passivos ambientais internos, prevenindo contaminações e garantindo a continuidade operacional.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Setor Imobiliário e Brownfields",
    description: "Recuperação de áreas industriais desativadas para novos usos urbanos. O profissional especializado é essencial para viabilizar a compra e venda de terrenos com histórico de contaminação, agregando valor imobiliário.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Órgãos Públicos e Fiscalização",
    description: "Atuar na análise e validação de processos em órgãos ambientais (CETESB, INEA, FEPAM), garantindo que as diretrizes normativas sejam cumpridas com rigor técnico e isenção.",
    image: `${import.meta.env.BASE_URL}applications/app_publicos.png?v=1`
  }
];

export default function PracticalApplications() {
  return (
    <section id="aplicacoes-praticas" className="py-16 md:py-24 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Aplicações <span className="text-brand-gradient">Práticas</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">O mercado de Gerenciamento de Áreas Contaminadas é um dos que mais cresce e exige profissionais com alta especialização técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-brand-primary)] hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black/20">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
