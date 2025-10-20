import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    try {
      // Formspree: replace with your form ID
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
    <section className="container">
      <h1>İletişim</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
        <input name="email" type="email" placeholder="Email" required style={{ padding: 10, borderRadius: 8, border: '1px solid #1f2937', background: '#0f172a', color: '#e2e8f0' }} />
        <textarea name="message" placeholder="Mesaj" required rows={5} style={{ padding: 10, borderRadius: 8, border: '1px solid #1f2937', background: '#0f172a', color: '#e2e8f0' }} />
        <button disabled={status==='loading'} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #1f2937', background: '#1e293b', color: '#e2e8f0' }}>
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
        </button>
        {status === 'success' && <p style={{ color: '#22c55e' }}>Mesajın alındı. Teşekkürler!</p>}
        {status === 'error' && <p style={{ color: '#ef4444' }}>Bir hata oluştu. Tekrar dene.</p>}
      </form>
    </section>
  );
}


