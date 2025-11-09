import { AuthorCategory } from '@/lib/authors';

export default function AuthorList({ cat }: { cat: AuthorCategory }) {
  return (
    <section id={cat.id} className="section" aria-labelledby={`${cat.id}-title`}>
      <h2 id={`${cat.id}-title`}>{cat.title}</h2>
      <p>{cat.description}</p>
      <div className="authors" role="list">
        {cat.authors.map((name) => (
          <div key={name} role="listitem" style={{ breakInside: 'avoid' }}>
            ? {name}
          </div>
        ))}
      </div>
      <hr className="hr" />
    </section>
  );
}
