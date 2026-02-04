const partners = [
  "Bloomberg",
  "Forbes",
  "Men's Journal",
  "BarBend",
  "Muscle & Fitness",
];

export default function Partners() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 text-zinc-400 lg:px-8">
        {partners.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold uppercase tracking-wider"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
