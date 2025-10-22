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
        <div 
          className="stack" 
          style={{ 
            maxWidth: 'auto', 
            marginLeft: '10%', 
            marginRight: '10%' 
          }}
        >
        </div>
        <div className="iki-sutunlu-bolum">
            <div className="sutun">
                <img 
                    src="/transparentphoto1.png" 
                    alt="Profil Fotoğrafı" 
                    className="sutun-gorsel" 
                />
                
                <h2 className="baslik">Yusuf Akyasan</h2>
                <h4>Junior Software Engineer</h4>
                <div className="ayirici-cizgi"></div>
                <p className="icerik">
                    Performans odaklı React ve Next.js uygulamaları geliştirerek, <br />
                    kullanıcı deneyimini en üst seviyeye taşıyorum. <br />
                    Hızlı yüklenme süreleri ve akıcı etkileşimler benim için önceliktir.
                </p>
                <div className="space-y-2 mt-6"> 
                    <div className="iletisim-satiri">
                        <svg className="ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <p className="ikon-metni">yusufakyasan0@gmail.com</p>
                    </div>
                    <div className="iletisim-satiri">
                        <svg className="ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <p className="ikon-metni">İstanbul, Şile</p>
                    </div>
                    <div className="sosyal-medya-kapsayici">
                        <a href="https://github.com/YusufAkyasann" target="_blank" rel="noopener noreferrer" className="sosyal-medya-link">
                            <img src="github.png" alt="GitHub" className="sosyal-medya-ikon" />
                        </a>
                        <a href="https://www.linkedin.com/in/yusuf-akyasan-b8a7a1221" target="_blank" rel="noopener noreferrer" className="sosyal-medya-link">
                            <img src="linkedln.png" alt="LinkedIn" className="sosyal-medya-ikon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="sutun">
                <div className="space-y-4 mb-10">
                    <div>
                        <h3 className="section-baslik">Temel Beceriler</h3>
                    </div>
                    <div className="mb-6">
                        <h4 className="timeline-title">Programlama Dilleri</h4>
                        <div className="etiket-kapsayici">
                            <span className="beceri-etiketi">HTML</span>
                            <span className="beceri-etiketi">CSS</span>
                            <span className="beceri-etiketi">JavaScript</span>
                            <span className="beceri-etiketi">TypeScript</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="timeline-title">Frontend & Web Teknolojileri</h4>
                        <div className="etiket-kapsayici">
                            <span className="beceri-etiketi">React</span>
                            <span className="beceri-etiketi">Next.js</span>
                            <span className="beceri-etiketi">Tailwind CSS</span>
                            <span className="beceri-etiketi">Node.js</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="timeline-title">Araçlar & Diğer Beceriler</h4>
                        <div className="etiket-kapsayici">
                            <span className="beceri-etiketi">Cursor</span>
                            <span className="beceri-etiketi">VSCode</span>
                            <span className="beceri-etiketi">Unity 2D</span>
                            <span className="beceri-etiketi">Unity 3D</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="timeline-title">Database & Cloud</h4>
                        <div className="etiket-kapsayici">
                            <span className="beceri-etiketi">MySQL</span>
                            <span className="beceri-etiketi">PostgreSQL</span>
                            <span className="beceri-etiketi">Oracle</span>
                            <span className="beceri-etiketi">MS SQL Server</span>
                            <span className="beceri-etiketi">AWS</span>
                            <span className="beceri-etiketi">Google Cloud Platform</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h4 className="timeline-title">İşbirliği Araçları</h4>
                        <div className="etiket-kapsayici">
                            <span className="beceri-etiketi">Git</span>
                            <span className="beceri-etiketi">GitHub</span>
                            <span className="beceri-etiketi">GitLab</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <h3 className="section-baslik">Deneyim</h3>
                    </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="space-y-1">
                                <div className="timeline-header">
                                    <h4 className="timeline-title">  Stajyer Mar 2025 – May 2025</h4>                                  
                                </div>
                                <p className="timeline-subtitle">LNL ELEKTRİK ELEKTRONİK BİLİŞİM VE DAN. LTD. ŞTİ. (Ankara)</p>
                                <p className="timeline-aciklama">Bilişim ve danışmanlık projelerinde destek görevi.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="space-y-1">
                                <div className="timeline-header">
                                    <h4 className="timeline-title">  Stajyer Jul 2023 – Aug 2023</h4>
                                </div>
                                <p className="timeline-subtitle">KAYA GRUBU (Kocaeli)</p>
                                <p className="timeline-aciklama">Grup içi projelerde yazılım ve teknik destek sağlama.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </motion.section>
  );
}