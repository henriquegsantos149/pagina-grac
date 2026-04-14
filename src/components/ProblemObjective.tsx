import { motion } from 'framer-motion';
import { Target, AlertTriangle } from 'lucide-react';

export default function ProblemObjective() {
  return (
    <section className="py-24 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            O Desafio da <span className="text-brand-gradient">Remediação de Precisão</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Dominar o gerenciamento de áreas contaminadas exige técnica, segurança jurídica e visão estratégica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card: O Problema */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shape-leaf bg-[var(--color-brand-dark)] border border-white/10 p-10 hover:border-red-500/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] group-hover:bg-red-500/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-red-500/10 flex items-center justify-center shape-leaf text-red-400">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase">O Cenário Atual</h3>
            </div>
            <p className="text-[var(--color-brand-light)]/70 leading-relaxed font-secondary relative z-10">
              A presença de <strong>passivos ambientais</strong> é um dos maiores entraves para o desenvolvimento imobiliário e industrial. O setor enfrenta <strong>legislações cada vez mais rígidas</strong> (CONAMA, CETESB) e processos de investigação complexos. Sem o conhecimento técnico de ponta, consultores e gestores perdem tempo e recursos com <strong>remediações ineficazes</strong>, atrasos em licenciamentos e riscos de multas astronômicas.
            </p>
          </motion.div>

          {/* Card: O Objetivo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shape-leaf bg-[var(--color-brand-dark)] border border-[var(--color-brand-green2)]/30 p-10 hover:shadow-[0_0_30px_rgba(149,166,23,0.15)] transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-brand-green2)]/10 rounded-full blur-[40px] group-hover:bg-[var(--color-brand-green2)]/20 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-brand-gradient flex items-center justify-center shape-leaf text-[var(--color-brand-dark)]">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase">Nosso Objetivo</h3>
            </div>
            <p className="text-[var(--color-brand-light)]/70 leading-relaxed font-secondary relative z-10">
              Formar profissionais de elite capazes de conduzir o <strong>Gerenciamento de Áreas Contaminadas (GAC)</strong> de ponta a ponta. Nossa missão é ensinar as <strong>tecnologias de remediação mais avançadas</strong> do mercado, aliadas à modelagem conceitual precisa e interpretação de dados geológicos. Ao final desta Pós, você será autoridade em transformar passivos ambientais em <strong>áreas recuperadas e prontas para o uso</strong>, com total segurança técnica.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
