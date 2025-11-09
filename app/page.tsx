import Sidebar from '@/components/Sidebar';
import AuthorList from '@/components/AuthorList';
import { categories, disclaimer } from '@/lib/authors';

export default function Page() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <h1>Bungo Stray Dogs ? the Authors, Sorted</h1>
        <p className="header-blurb">
          If you feel a tug-of-war inside?between softness and steel?this index is for you.
          I will keep it plain, honest, and useful. You bring curiosity; I?ll bring clarity.
        </p>
        <p className="header-blurb">
          Read this like a friend sliding a black-and-white note across the table: brief observations,
          no fluff, only what sharpens judgment. When something hurts, that?s usually a clue?not a verdict.
        </p>
        <div className="note" aria-label="disclaimer">{disclaimer}</div>
        <hr className="hr" />

        {categories.map((c) => (
          <AuthorList key={c.id} cat={c} />
        ))}

        <section id="how-to-read" className="section" aria-labelledby="how-to-read-title">
          <h2 id="how-to-read-title">How to read this (quiet advice)</h2>
          <p>
            Mirror check: if you?re restless, start with Americans?the engine of ambition and its costs.
            If you?re overthinking, start with Russians?clarity in the cold. If you feel too gentle for
            the world, go Japanese?identity, duty, mercy under pressure.
          </p>
          <p>
            Hidden detail most people skip: the series isn?t worshipping suffering; it?s testing honesty.
            Characters who confess their contradictions?Dazai?s joke hiding audit-level self-awareness,
            Kunikida?s ideals standing up to real-life entropy?earn power that lasts.
          </p>
          <p>
            Becoming a grown, straight-edged man with wisdom isn?t about posturing. It?s three things:
            name what you feel without decorating it, set boundaries you enforce quietly, and keep a small
            promise to yourself every single day. Everything else is noise.
          </p>
        </section>

        <section id="signals" className="section" aria-labelledby="signals-title">
          <h2 id="signals-title">What these authors signal (fast, honest)</h2>
          <ul>
            <li><strong>Japanese</strong>: integrity vs. survival; loyalty without losing yourself.</li>
            <li><strong>American</strong>: power, ambition, money?how to win without hollowing out.</li>
            <li><strong>Russian</strong>: the logic of despair, and why choosing meaning beats cleverness.</li>
            <li><strong>Other / Western</strong>: myth, fear, and memory?what grips you from the dark.</li>
          </ul>
        </section>

        <section id="next-steps" className="section" aria-labelledby="next-steps-title">
          <h2 id="next-steps-title">One-week upgrade (do, don?t just think)</h2>
          <ul>
            <li>Day 1?2: read one short story by Poe or Akutagawa. Summarize in five sentences.</li>
            <li>Day 3?4: write one page about a bad habit you defend. No excuses, just facts.</li>
            <li>Day 5?6: choose one boundary. Enforce it once, calmly. Document the result.</li>
            <li>Day 7: silence for 30 minutes. Decide one promise for next week. Keep it.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
