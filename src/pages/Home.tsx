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
            {/* İçeriği yatayda ortalamak için dış kapsayıcı (Mevcut yapınızdan korunmuştur) */}
            <div 
                className="stack" 
                style={{ 
                    maxWidth: 'auto', 
                    marginLeft: '10%', 
                    marginRight: '10%' 
                }}
            >
                {/* Bu div boş kalabilir veya başlık/içerik taşıyabilir */}
            </div>

            {/* İki Sütunlu Bölüm - Çizgi Buranın %40'ından Geçer */}
            <div className="iki-sutunlu-bolum">
                
                {/* 1. Sütun (Sol) - %40 Genişlik, İçerik Ortalanmış */}
                <div className="sutun">
                    {/* Profil Görseli */}
                    <img 
                        src="/transparentphoto1.png" 
                        alt="Profil Fotoğrafı" 
                        className="sutun-gorsel" 
                    />
                    
                    <h2 className="baslik">Yusuf Akyasan</h2>
                    <h4>Junior Software Engineer</h4>
                    
                    {/* Kısa Ayırıcı Çizgi */}
                    <div className="ayirici-cizgi"></div>
                    
                    {/* Açıklama Paragrafı */}
                    <p className="icerik">
                        Performans odaklı React ve Next.js uygulamaları geliştirerek, <br />
                        kullanıcı deneyimini en üst seviyeye taşıyorum. <br />
                        Hızlı yüklenme süreleri ve akıcı etkileşimler benim için önceliktir.
                    </p>
                

                    {/* İletişim Bilgileri */}
                    <div className="space-y-2 mt-6"> 
                        {/* E-posta Satırı */}
                        <div className="iletisim-satiri">
                            <svg className="ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <p className="ikon-metni">yusufakyasan0@gmail.com</p>
                        </div>

                        {/* Konum Satırı */}
                        <div className="iletisim-satiri">
                            <svg className="ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <p className="ikon-metni">İstanbul, Şile</p>
                        </div>
                    </div>
                </div>

                {/* 2. Sütun (Sağ) - %60 Genişlik, İçerik Sola Yaslı */}
                <div className="sutun">
                    
                    {/* Beceriler Bölümü */}
                    <div className="space-y-4 mb-10">
                        <div>
                            <h3 className="section-baslik">Core Skills</h3>
                        </div>
                        
                        {/* Beceriler Grubu 1: Diller */}
                        <div className="mb-6">
                            <h4 className="timeline-title">Languages</h4>
                            <div className="etiket-kapsayici">
                                <span className="beceri-etiketi">TypeScript</span>
                                <span className="beceri-etiketi">JavaScript (ES6+)</span>
                                <span className="beceri-etiketi">HTML/CSS</span>
                            </div>
                        </div>

                        {/* Beceriler Grubu 2: Frontend */}
                        <div className="mb-6">
                            <h4 className="timeline-title">Frontend</h4>
                            <div className="etiket-kapsayici">
                                <span className="beceri-etiketi">React</span>
                                <span className="beceri-etiketi">Next.js</span>
                                <span className="beceri-etiketi">Tailwind CSS</span>
                                <span className="beceri-etiketi">Framer Motion</span>
                            </div>
                        </div>
                    </div>
                    
                    

                    {/* Deneyim Bölümü */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="section-baslik">Experience</h3>
                        </div>
                        
                        <div className="space-y-5">
                            {/* Deneyim Maddesi 1 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="space-y-1">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">Junior Software Engineer</h4>
                                        <span className="timeline-date">2023 - Present</span>
                                    </div>
                                    <p className="timeline-subtitle">Tech Firm Inc.</p>
                                    <p className="timeline-aciklama">Geliştirme ekibinde React ve Next.js tabanlı yeni özelliklerin entegrasyonu ve bakımı.</p>
                                </div>
                            </div>

                            {/* Deneyim Maddesi 2 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="space-y-1">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">Frontend Stajyer</h4>
                                    </div>
                                    <p className="timeline-subtitle">Web Solutions Co.</p>
                                    <p className="timeline-aciklama">Temel HTML/CSS/JS projelerinde destek verdim ve sürüm kontrol sistemlerini öğrendim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 </motion.section>
  );
}