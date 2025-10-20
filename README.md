# Portfolio (React + Vite + TS)

## Komutlar

- `npm run dev`: Geliştirme sunucusu
- `npm run build`: Production derleme
- `npm run preview`: Build önizleme
- `npm run lint`: ESLint kontrolü
- `npm run format`: Prettier format
- `npm run typecheck`: TypeScript kontrolü

## Yapı

- `src/App.tsx`: Router ve sayfa yükleme
- `src/pages/*`: Sayfalar (Home, Projects, About, Contact) — Projects sayfasında arama/etiket filtreleme
- `src/components/Navbar.tsx`: Üst menü
- `src/styles/global.css`: Global stil
- `public/robots.txt` ve `public/sitemap.xml`: SEO yardımcı dosyalar

## Deploy (Vercel)

1. Repo’yu GitHub’a push et.
2. Vercel’da "New Project" → repo’yu bağla.
3. Framework: Vite, Build Command: `npm run build`, Output: `dist`
4. Deploy. Domain bağlamak istersen Vercel panelinden yönlendir.