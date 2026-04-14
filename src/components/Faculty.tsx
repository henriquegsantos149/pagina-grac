import { motion } from 'framer-motion';

const facultyMembers = [
  {
    name: "Henrique Gonzalez",
    title: "Engenheiro Ambiental (UFRJ)",
    image: "./faculty/Henrique_Gonzalez.png",
    resume: "Engenheiro Ambiental com estudos na University of Technology em Sydney, na Austrália e vivência em consultoria com análise espacial de dados e monetização a partir da produção de mapas."
  },
  {
    name: "Marlon Fernandes de Souza",
    title: "Doutor em Eng. Agrícola (Unicamp)",
    image: "./faculty/Dhyogo_Miléo.png",
    resume: "Doutor em Engenharia Agrícola pela Faculdade de Engenharia Agrícola (FEAGRI) da Unicamp, na área de Gestão de Sistemas na Agricultura e Desenvolvimento Rural."
  },
  {
    name: "Lucas Baldoni",
    title: "Doutor em Análise Ambiental (Unicamp)",
    image: "./faculty/Marcio_Alberto.png",
    resume: "Mestre e Doutor em Análise Ambiental e Dinâmica Territorial pela UNICAMP. Realizou Pós-Doutorado em análises espaciais na USP."
  },
  {
    name: "Vitor do Sacramento",
    title: "Geólogo e Especialista (UNB)",
    image: "./faculty/Gustavo_Rosa.png",
    resume: "Geólogo (UNB) com MBA em Administração de Bancos de Dados."
  },
  {
    name: "Vitor Amorim",
    title: "Especialista em Sustentabilidade",
    image: "./faculty/Bruno_Damasio.jpg",
    resume: "Especialista em Sustentabilidade e Mudanças Climáticas na Neoenergia S.A., possui pós-graduação em Gestão Sustentável de Energia pela COPPE UFRJ/AHK."
  }
];

export default function Faculty() {
  return (
    <section className="py-24 bg-[var(--color-brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Corpo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Docente</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Aprenda com especialistas de mercado e acadêmicos renomados nas melhores instituições do país.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shape-leaf bg-white/5 border border-white/10 overflow-hidden hover:border-[var(--color-brand-blue)]/50 transition-all group hover:shadow-[0_0_25px_rgba(49,168,168,0.15)] flex flex-col"
            >
              {/* Image container must also follow the shape or part of it */}
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-brand-gradient mix-blend-overlay z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <img 
                  src={member.image} 
                  alt={`${member.name} – Professor do MBA em Inteligência de Dados Ambientais`} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-[var(--color-brand-light)] mb-1 font-primary group-hover:text-[var(--color-brand-green1)] transition-colors">{member.name}</h3>
                    <p className="text-sm text-[var(--color-brand-green2)] mb-4 font-semibold uppercase tracking-wider">{member.title}</p>
                </div>
                <p className="text-sm text-[var(--color-brand-light)]/60 leading-relaxed border-t border-white/10 pt-4">{member.resume}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
