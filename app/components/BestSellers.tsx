import Image from "next/image";
import Link from "next/link";

const tabs = [
  "SPORTS NUTRITION",
  "PROTEIN",
  "HEALTH & WELLNESS",
  "PERFORMANCE MANAGEMENT",
];

const products = [
  {
    name: "CreaClear™",
    desc: "Creatine Monohydrate",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
  },
  {
    name: "Hydration Hydra-Charge®",
    desc: "2-In-1 Electrolyte",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
  },
  {
    name: "Pre-Workout Sport",
    desc: "Intense Energy + Focus",
    price: "$32.99",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
  },
  {
    name: "Pre-Workout (Pre-Kaged)",
    desc: "Clinically Dosed Pre-Workout",
    price: "$44.99",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
  },
];

export default function BestSellers() {
  return (
    <section className="bg-white py-16" id="shop">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
            BEST SELLERS
          </h2>
          <Link
            href="#shop-all"
            className="text-sm font-medium text-zinc-500 hover:text-black"
          >
            SHOP ALL &gt;
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-b border-zinc-200">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
                i === 0
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-zinc-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="relative aspect-3/4 overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{product.desc}</p>
              <p className="mt-2 text-lg font-semibold text-black">
                {product.price}
              </p>
              <Link
                href="#"
                className="mt-4 inline-block bg-black px-6 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-zinc-800"
              >
                VIEW OPTIONS
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
