import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Engenheiro Ambiental Sênior",
    text: "A Pós GRAC foi um divisor de águas na minha carreira. A abordagem prática sobre modelagem conceitual e as tecnologias de remediação In Situ me deram a segurança que eu precisava para liderar projetos complexos em grandes indústrias.",
    rating: 5
  },
  {
    name: "Beatriz Helena",
    role: "Geóloga de Projetos",
    text: "Excelente conteúdo sobre hidrogeologia aplicada e avaliação de risco. O corpo docente realmente vive o mercado, o que faz toda a diferença na hora de discutir casos reais e estratégias de compliance ambiental.",
    rating: 5
  },
  {
    name: "André Cavalcante",
    role: "Consultor Ambiental",
    text: "Finalmente uma pós que foca no que realmente importa no GAC. O módulo de legislação e o foco em tecnologias inovadoras me ajudaram a reduzir custos de remediação para meus clientes em quase 30%."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-black/40 relative border-t border-white/5 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-brand-green1)]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            O que dizem os <span className="text-brand-gradient">Alunos</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">A experiência de quem já se tornou autoridade em gerenciamento de áreas contaminadas com a Ambiental Pro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="shape-leaf bg-[var(--color-brand-dark)] p-8 border border-white/5 relative flex flex-col justify-between hover:border-[var(--color-brand-green2)]/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-brand-light)]/5" />
              
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[var(--color-brand-green1)] text-[var(--color-brand-green1)]" />
                  ))}
                </div>
                <p className="font-secondary text-[var(--color-brand-light)]/80 leading-relaxed italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-white/5 shape-leaf flex justify-center items-center font-bold text-lg font-primary uppercase text-[var(--color-brand-light)]/50">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] font-primary uppercase">{testimonial.name}</h4>
                  <p className="text-xs text-[var(--color-brand-light)]/50 font-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
