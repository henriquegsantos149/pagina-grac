import Hero from './components/Hero'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import SkillsAcquired from './components/SkillsAcquired'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Faculty from './components/Faculty'
import CourseInfo from './components/CourseInfo'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-green1)] selection:text-[var(--color-brand-dark)]">
      <Hero />
      <ProblemObjective />
      <Curriculum />
      <SkillsAcquired />
      <PracticalApplications />
      <TargetAudience />
      <Faculty />
      <CourseInfo />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <FloatingCTA />
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} Pós-Graduação Ambiental Pro. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
