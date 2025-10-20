import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Yusuf | Portfolio</title>
        <meta name="description" content="Yusuf'un React + TS ile oluşturduğu portföy sitesi." />
        <meta property="og:title" content="Yusuf | Portfolio" />
        <meta property="og:description" content="Projeler, hakkında ve iletişim sayfaları." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <Navbar />
        <main>
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
}


