import Image from "next/image";
import Link from "next/link";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80";

const products = [
  {
    name: "PRE-WORKOUT SPORT",
    desc: "A perfect blend of natural energy, focus, and pump to power through your workout. Features L-Citrulline, Beta-Alanine, and Caffeine.",
  },
  {
    name: "PRE-WORKOUT",
    desc: "Our original, award-winning pre-workout formula designed for peak performance. Experience intense energy, focus, and endurance.",
  },
  {
    name: "PRE-WORKOUT ELITE",
    desc: "The ultimate pre-workout for serious athletes. A comprehensive blend of cutting-edge ingredients for maximum power, intensity, and recovery.",
  },
];

export default function PreWorkouts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
          <Image
            src={IMAGE_URL}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
            PRE-WORKOUTS, PERFECTED
          </h2>
          <ul className="mt-10 space-y-8">
            {products.map((product) => (
              <li key={product.name}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-black">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {product.desc}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="#compare"
            className="mt-10 inline-flex h-12 items-center justify-center bg-black px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-zinc-800"
          >
            COMPARE ALL PRE-WORKOUTS
          </Link>
        </div>
      </div>
    </section>
  );
}
