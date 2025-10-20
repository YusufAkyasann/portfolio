import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
};

const PROJECTS: Project[] = [
  { id: '1', title: 'Portfolio', description: 'Vite + React + TS', tags: ['react', 'vite'], url: '#', repo: '#' },
  { id: '2', title: 'Dashboard', description: 'Charts + API', tags: ['react', 'charts'], url: '#', repo: '#' },
  { id: '3', title: 'Landing', description: 'SEO ve hızlı açılış', tags: ['seo', 'performance'], url: '#', repo: '#' },
];

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

export default function Projects() {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesText = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const matchesTags = selectedTags.length === 0 || selectedTags.every((t) => p.tags.includes(t));
      return matchesText && matchesTags;
    });
  }, [query, selectedTags]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  return (
    <motion.section
      id="projects"
      className="container section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1>Projeler</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ara..."
          style={{ padding: '8px 10px', background: 'var(--card-bg)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 8 }}
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '6px 10px',
                borderRadius: 999,
                border: '1px solid var(--border)',
                background: selectedTags.includes(tag) ? 'var(--card-bg)' : 'transparent',
                color: selectedTags.includes(tag) ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid-cards">
        {filtered.map((p) => (
          <article key={p.id} className="card">
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ marginTop: 8 }}>{p.description}</p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {p.tags.map((t) => (
                <span key={t} style={{ fontSize: 12, color: 'var(--accent)' }}>#{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer">Canlı</a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer">Kod</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
