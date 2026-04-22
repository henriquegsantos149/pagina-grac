import { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import SkillsResults from './components/SkillsResults'
import CourseInfo from './components/CourseInfo'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Faculty from './components/Faculty'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'
import LeadCaptureModal from './components/LeadCaptureModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handleOpenModal = (url: string) => {
    setCheckoutUrl(url);
    setIsModalOpen(true);
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)] relative">
      <Header />
      <Hero onOpenModal={handleOpenModal} />
      <ProblemObjective id="objetivo" />
      <Curriculum id="conteudo" />
      <SkillsResults id="beneficios" />
      <PracticalApplications id="pratica" />
      <TargetAudience id="publico" />
      <Faculty id="corpo-docente" />
      <CourseInfo id="sobre" />
      <Testimonials id="depoimentos" />
      <FAQ id="duvidas" />
      <CallToAction onOpenModal={handleOpenModal} />
      
      <StickyCTA onOpenModal={handleOpenModal} />

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        checkoutUrl={checkoutUrl}
      />
      
      <footer className="bg-black/80 border-t border-white/5 py-12 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase mb-2">© {new Date().getFullYear()} Pós-Graduação Ambiental Pro. Todos os direitos reservados.</p>
        <p className="text-[10px] opacity-30 uppercase tracking-[0.2em]">Excelência em Gerenciamento e Remediação de Áreas Contaminadas</p>
      </footer>
    </main>
  )
}

export default App
