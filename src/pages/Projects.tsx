import { useMemo, useState } from 'react';

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
    <section className="container">
      <h1>Projeler</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ara..."
          style={{ padding: '8px 10px', background: '#0f172a', color: '#e2e8f0', border: '1px solid #1f2937', borderRadius: 8 }}
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '6px 10px',
                borderRadius: 999,
                border: '1px solid #1f2937',
                background: selectedTags.includes(tag) ? '#1e293b' : 'transparent',
                color: selectedTags.includes(tag) ? '#93c5fd' : '#cbd5e1',
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {filtered.map((p) => (
          <article key={p.id} style={{ padding: 16, border: '1px solid #1f2937', borderRadius: 12, background: '#0f172a' }}>
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ marginTop: 8 }}>{p.description}</p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {p.tags.map((t) => (
                <span key={t} style={{ fontSize: 12, color: '#93c5fd' }}>#{t}</span>
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
    </section>
  );
}


