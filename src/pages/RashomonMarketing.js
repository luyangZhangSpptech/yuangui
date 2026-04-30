import React from 'react';

const sectionTitleClass =
  'mb-4 text-center text-2xl font-semibold tracking-[0.2em] text-[#3a2f2a] md:text-3xl';

const imagePlaceholderClass =
  'flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-[#9f8f7d] bg-[#efe5d8] text-sm tracking-[0.08em] text-[#7f6d59]';

const characterList = [
  {
    name: 'Character 01',
    note: 'Image placeholder + short role description',
  },
  {
    name: 'Character 02',
    note: 'Image placeholder + short role description',
  },
  {
    name: 'Character 03',
    note: 'Image placeholder + short role description',
  },
  {
    name: 'Character 04',
    note: 'Image placeholder + short role description',
  },
];

const castList = [
  'Actor / Actress 01',
  'Actor / Actress 02',
  'Actor / Actress 03',
  'Actor / Actress 04',
  'Actor / Actress 05',
];

function RashomonMarketing() {
  return (
    <div className="bg-[#f7f1e8] pb-16 text-[#2f2721]">
      <header className="mx-auto max-w-3xl px-4 pb-10 pt-8 md:px-6 md:pt-12">
        <p className="mb-3 text-center text-xs tracking-[0.25em] text-[#8b7868]">YUAN GUI THEATRE</p>
        <h1 className="mb-4 text-center text-4xl font-semibold tracking-[0.1em] md:text-5xl">RASHOMON</h1>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-[#5e4d40] md:text-base">
          A dedicated mobile-friendly promo page for direct QR access. Replace each placeholder with final visuals,
          cast portraits, and production photos.
        </p>
        <div className={imagePlaceholderClass}>[ HERO BANNER IMAGE PLACEHOLDER ]</div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <h2 className={sectionTitleClass}>SHOW OVERVIEW</h2>
        <div className="rounded-2xl bg-[#fff9f2] p-6 shadow-sm">
          <p className="mb-4 text-base leading-relaxed">
            In this immersive adaptation, one event is retold from conflicting perspectives, revealing how memory,
            truth, and desire intertwine. This section is reserved for your final marketing copy.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-[#5a4c40]">
            <li>• Date & Time: [Placeholder]</li>
            <li>• Venue: [Placeholder]</li>
            <li>• Duration: [Placeholder]</li>
            <li>• Ticketing: [Placeholder]</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6">
        <h2 className={sectionTitleClass}>FOUR CHARACTERS</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {characterList.map((character) => (
            <article key={character.name} className="rounded-2xl bg-[#fff9f2] p-4 shadow-sm">
              <div className={`${imagePlaceholderClass} mb-3`}>[ {character.name} IMAGE ]</div>
              <h3 className="mb-2 text-lg font-medium tracking-wide">{character.name}</h3>
              <p className="text-sm text-[#5d4d3f]">{character.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <h2 className={sectionTitleClass}>CAST (5 ACTORS / ACTRESSES)</h2>
        <div className="rounded-2xl bg-[#fff9f2] p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {castList.map((member) => (
              <div key={member} className="rounded-xl border border-[#e5d7c5] bg-[#fffdf9] p-3 text-center">
                <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-[#9f8f7d] bg-[#efe5d8] text-xs text-[#7f6d59]">
                  PHOTO
                </div>
                <p className="text-sm font-medium">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-8 md:px-6">
        <h2 className={sectionTitleClass}>GALLERY PLACEHOLDERS</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className={imagePlaceholderClass}>[ REHEARSAL PHOTO PLACEHOLDER ]</div>
          <div className={imagePlaceholderClass}>[ STAGE PHOTO PLACEHOLDER ]</div>
          <div className={imagePlaceholderClass}>[ COSTUME DETAIL PLACEHOLDER ]</div>
          <div className={imagePlaceholderClass}>[ AUDIENCE MOMENT PLACEHOLDER ]</div>
        </div>
      </section>
    </div>
  );
}

export default RashomonMarketing;
