import { Suspense, lazy, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Home = lazy(() => import('./pages/Home'));



function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'var(--text)',
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <div style={{ 
        textAlign: 'center',
        animation: 'slideUp 0.8s ease-out'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid var(--border)',
          borderTop: '3px solid var(--accent)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }}></div>
        <h2 style={{ 
          margin: '0 0 10px',
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}>Yusuf Akyasan Portfolio</h2>
        <p style={{ 
          margin: 0,
          animation: 'fadeInUp 1s ease-out 0.6s both'
        }}></p>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Yusuf | Portfolio</title>
        </Helmet>
        <LoadingScreen />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Yusuf | Portfolio</title>
      </Helmet>
      <div>
        <Navbar />
        <main>
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <Home />
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
}
