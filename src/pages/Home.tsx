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

    </div>
    <div className="iki-sutunlu-bolum">
    {/* Sol Sütun (Metin) */}
    <div className="sutun">
      
    <img  src="/transparentphoto1.png" 
      alt="Profil Fotoğrafı" 
       className="sutun-gorsel" />
        <h2 className="baslik">Gelişmiş Arayüzler</h2>
        <p className="icerik">
            Performans odaklı React ve Next.js uygulamaları geliştirerek, kullanıcı deneyimini en üst seviyeye taşıyorum. Hızlı yüklenme süreleri ve akıcı etkileşimler benim için önceliktir.
        </p>
    </div>



    {/* Sağ Sütun (Metin) */}
    <div className="sutun">
        <h2 className="baslik">Temiz Kod Mimarisi</h2>
        <p className="icerik">
            Sürdürülebilir, okunabilir ve bakımı kolay kod yazmaya odaklanıyorum. TypeScript ve temiz kod prensipleriyle büyük projeleri bile yönetilebilir kılıyorum.
        </p>
    </div>
</div>
{/* (Mevcut .content-row yapınız da aşağıda devam edebilir) */}
<div className="content-row">
    {/* ... önceki metin ve buton kodlarınız ... */}
</div>


    </motion.section>
  );
}
