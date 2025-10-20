import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      id="home"
      className="hero bleed fluid"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stack" style={{ maxWidth: 800, marginLeft: '10%', marginRight: '50%' }}>
        <h1 style={{ lineHeight: 1.1 }}>Merhaba, ben Yusuf</h1>
        <p>Frontend geliştirici. Modern web uygulamaları ve performans odaklı arayüzler.</p>
        <div className="cluster">
          <a className="btn" href="/projects">Projeler</a>
          <a className="btn" href="/contact">İletişim</a>
        </div>
      </div>
    </motion.section>
  );
}
