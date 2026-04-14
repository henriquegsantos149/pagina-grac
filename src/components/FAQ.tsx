import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Como funciona a modalidade 100% EAD?",
    answer: "O curso é totalmente ministrado de forma online e gravada, oferecendo flexibilidade para você estudar nos horários que preferir. Você terá acesso à nossa plataforma virtual de aprendizagem, com vídeos, materiais de apoio complementares e suporte técnico contínuo."
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer: "Sim. A Pós-graduação é ofertada em parceria com a Ambiental Pro e certificada por instituição parceira credenciada pelo MEC. Ao concluir, você receberá um diploma reconhecido nacionalmente com o título de Especialista (Lato Sensu)."
  },
  {
    question: "Preciso ter formação em engenharia para cursar?",
    answer: "Não exclusivamente. Embora focado em profissionais das engenharias, geologia e biologia, o curso é aberto a qualquer profissional com diploma de nível superior reconhecido pelo MEC que deseje atuar ou já atue no setor de meio ambiente e licenciamento."
  },
  {
    question: "O curso aborda a nova legislação da CETESB/CONAMA?",
    answer: "Sim. Nossos módulos legislativos são constantemente atualizados para refletir as decisões normativas vigentes dos principais órgãos ambientais do Brasil, com foco especial nas regras da CETESB e nas resoluções CONAMA referentes a valores orientadores."
  },
  {
    question: "Qual a carga horária e tempo para conclusão?",
    answer: "A carga horária total é de 440 horas, conferindo grande densidade técnica. O tempo estimado de conclusão gira em torno de 12 meses, mas pode variar de acordo com o ritmo de cada aluno na plataforma EAD."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Perguntas <span className="text-brand-gradient">Frequentes</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Tire suas dúvidas finais sobre a certificação e as aulas da Pós GRAC.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`shape-leaf bg-black/30 border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-green2)]/40 shadow-[0_0_15px_rgba(149,166,23,0.1)]' : 'border-white/5 hover:border-[var(--color-brand-green2)]/30'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group gap-4"
                >
                  <h3 className={`text-lg font-bold font-primary tracking-wide transition-colors duration-300 uppercase ${isOpen ? 'text-[var(--color-brand-green2)]' : 'text-[var(--color-brand-light)] group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[var(--color-brand-green2)]/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[var(--color-brand-green2)]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[var(--color-brand-light)]/70" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px w-full bg-white/10 mb-4"></div>
                        <p className="text-[var(--color-brand-light)]/70 font-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
