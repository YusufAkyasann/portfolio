import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xayzabcd', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <motion.section
      id="contact"
      className="container section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h1>İletişim</h1>
      <form onSubmit={onSubmit} className="stack" style={{ maxWidth: 520 }}>
        <input name="email" type="email" placeholder="Email" required style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--text)' }} />
        <textarea name="message" placeholder="Mesaj" required rows={5} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--text)' }} />
        <button disabled={status==='loading'} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card-bg)', color: 'var(--text)' }}>
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
        </button>
        {status === 'success' && <p style={{ color: '#22c55e' }}>Mesajın alındı. Teşekkürler!</p>}
        {status === 'error' && <p style={{ color: '#ef4444' }}>Bir hata oluştu. Tekrar dene.</p>}
      </form>
    </motion.section>
  );
}
