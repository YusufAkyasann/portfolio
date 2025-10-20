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
<div className="stack" style={{ maxWidth: 'auto', marginLeft: '10%', marginRight: '10%'}}>
    <h1 style={{ lineHeight: 1.1 }}>Yazılım Mühendisi & React Geliştiricisi Yusuf Akyasan</h1>

 
    <div className="content-row">
        
     
        <p className="intro-text">
            Modern web uygulamaları ve performans odaklı arayüzler.
        </p>
        
 
        <a className="btn1" href="/about">
            Potansiyelimi 
            <br />
            Keşfet
        </a> 

    </div>
</div>
    </motion.section>
  );
}
