import { motion } from 'framer-motion';
import { Clock, BookOpen, MonitorPlay, Award } from 'lucide-react';
import mecBadge from '../assets/mec-badge.webp';
import logoAnhanguera from '../assets/logo-anhanguera.webp';

export default function CourseInfo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Sobre o <span className="text-brand-gradient">Curso</span>
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 max-w-2xl mx-auto font-secondary">Tudo que você precisa saber sobre a estrutura técnica e operacional da Pós-Graduação.</p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {/* Card: Título */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/5 p-6 hover:border-[var(--color-brand-primary)]/40 transition-all group relative overflow-hidden shadow-lg shadow-black/5 flex flex-col gap-3">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-5 rounded-full blur-[40px] group-hover:opacity-15 transition-opacity"></div>
            <div className="w-12 h-12 shape-leaf bg-black/5 flex items-center justify-center border border-black/10">
              <Award className="w-6 h-6 text-[var(--color-brand-primary)]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--color-brand-dark)] mb-1 font-primary uppercase tracking-wider">Título</h3>
              <p className="text-base font-bold text-[var(--color-brand-primary)] leading-tight uppercase font-secondary">Especialista em Gerenciamento e Remediação de Áreas Contaminadas</p>
            </div>
          </motion.div>

          {/* Card 1: Duração */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/5 p-6 hover:border-[var(--color-brand-primary)]/40 transition-all group relative overflow-hidden shadow-lg shadow-black/5 flex flex-col gap-3">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-5 rounded-full blur-[40px] group-hover:opacity-15 transition-opacity"></div>
            <div className="w-12 h-12 shape-leaf bg-black/5 flex items-center justify-center border border-black/10">
              <Clock className="w-6 h-6 text-[var(--color-brand-primary)]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--color-brand-dark)] mb-1 font-primary uppercase tracking-wider">Duração</h3>
              <p className="text-3xl font-impact tracking-wider text-[var(--color-brand-primary)]">12 meses</p>
            </div>
          </motion.div>

          {/* Card 2: Carga Horária */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/5 p-6 hover:border-[var(--color-brand-primary)]/40 transition-all group relative overflow-hidden shadow-lg shadow-black/5 flex flex-col gap-3">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-5 rounded-full blur-[40px] group-hover:opacity-15 transition-opacity"></div>
            <div className="w-12 h-12 shape-leaf bg-black/5 flex items-center justify-center border border-black/10">
              <BookOpen className="w-6 h-6 text-[var(--color-brand-primary)]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--color-brand-dark)] mb-1 font-primary uppercase tracking-wider">Carga Horária</h3>
              <p className="text-3xl font-impact tracking-wider text-[var(--color-brand-primary)]">440h</p>
            </div>
          </motion.div>

          {/* Card 3: Modalidade */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/5 p-6 hover:border-[var(--color-brand-primary)]/40 transition-all group relative overflow-hidden shadow-lg shadow-black/5 flex flex-col gap-3">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-5 rounded-full blur-[40px] group-hover:opacity-15 transition-opacity"></div>
            <div className="w-12 h-12 shape-leaf bg-black/5 flex items-center justify-center border border-black/10">
              <MonitorPlay className="w-6 h-6 text-[var(--color-brand-primary)]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--color-brand-dark)] mb-1 font-primary uppercase tracking-wider">Modalidade</h3>
              <p className="text-3xl font-impact tracking-wider text-[var(--color-brand-primary)] leading-none">100% EAD</p>
              <p className="text-[10px] font-secondary tracking-normal text-[var(--color-brand-dark)]/40 uppercase mt-1">Aulas Gravadas</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer info area: Chancela and Parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Selo Anhanguera */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 shape-leaf bg-white border border-black/5 p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-lg shadow-black/5 hover:border-[var(--color-brand-primary)]/40 transition-all group"
          >
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 bg-brand-gradient opacity-[0.05] blur-[50px] pointer-events-none"></div>

            <div className="flex-shrink-0 w-24 h-24 shape-leaf bg-black/5 border border-black/10 flex items-center justify-center relative z-10 p-4">
              <img 
                src={logoAnhanguera} 
                alt="Logo Anhanguera" 
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-10 text-left">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-brand-dark)] font-primary uppercase tracking-wide">Chancela Anhanguera</h3>
              <p className="text-[var(--color-brand-dark)]/70 text-sm leading-relaxed font-secondary">Mais de 25 anos de tradição em ensino superior, com mais de 360 cursos com conceito positivo no MEC. Um diploma de peso para sua carreira.</p>
            </div>
          </motion.div>

          {/* Nota 5 MEC */}
          <motion.a 
            href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/NTE1/93916316abe23148507bd4c260e4b878/MzEyODY5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 shape-leaf bg-white border border-black/5 p-8 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg shadow-black/5 hover:border-[var(--color-brand-primary)]/40 transition-all group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-5 rounded-full blur-[40px] group-hover:opacity-15 transition-opacity"></div>
            <h3 className="text-sm font-bold text-[var(--color-brand-dark)] uppercase tracking-wider mb-4 font-primary">Nota 5 no MEC</h3>
            <img 
              src={mecBadge} 
              alt="Selo MEC" 
              loading="lazy"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
