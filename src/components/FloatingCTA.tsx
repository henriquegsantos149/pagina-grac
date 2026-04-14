import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Exibe o botão flutuante apenas após passar do Hero (aprox. 600px de scroll)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  if (!visible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a 
        href="https://pay.voompcreators.com.br/9385/offer/lMxSD0/?utm_source=site_anhanguera" 
        target="_blank"
        rel="noopener noreferrer"
        className="shape-leaf group flex items-center justify-center gap-2 px-6 py-4 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-base shadow-[0_0_20px_rgba(149,166,23,0.4)] hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="uppercase font-primary tracking-wide">Matricule-se Agora</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
