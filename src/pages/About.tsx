import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="container section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1>Hakkımda</h1>
      <p>React, TypeScript, Vite. UI/UX, performans, erişilebilirlik odaklı.</p>
    </motion.section>
  );
}
