import Link from 'next/link';
import { categories } from '@/lib/authors';

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Category navigation">
      <div className="brand">Bungo Notes</div>
      <div className="note">black & white ? typewriter ? no fluff</div>
      <hr className="hr" />
      <nav>
        <ul className="nav">
          {categories.map((c) => (
            <li key={c.id}>
              <Link href={`#${c.id}`}>{c.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
