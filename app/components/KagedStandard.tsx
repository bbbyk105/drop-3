import Image from "next/image";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80";

const points = [
  {
    title: "SCIENCE-BACKED INGREDIENTS & DOSES",
    text: "We use potent ingredients from trusted sources. Our formulas are scientifically validated for maximum purity and effectiveness.",
  },
  {
    title: "INCREDIBLE FLAVORS",
    text: "Our delicious flavors are meticulously crafted to make your daily ritual a treat. You'll love the taste, guaranteed, or your money back.",
  },
  {
    title: "THIRD-PARTY CERTIFIED",
    text: "Every product is third-party tested for purity and potency. We openly share our test results, so you know exactly what you're getting.",
  },
  {
    title: "GREAT VALUE",
    text: "The highest-quality ingredients for your investment, providing undeniable results at an unbeatable price.",
  },
];

export default function KagedStandard() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
            THE KAGED STANDARD
          </h2>
          <ul className="mt-10 space-y-8">
            {points.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
          <Image
            src={IMAGE_URL}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
