import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/95 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/2 max-w-2xl">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-left"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-l from-zinc-900/60 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            FUEL
          </p>
          <p className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            YOUR
          </p>
          <p className="text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            EVOLUTION
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-300">
            KAGED IS BUILT ON A FOUNDATION OF SCIENCE, QUALITY, AND
            TRANSPARENCY. WE PROVIDE SUPERIOR NUTRITION TO EMPOWER YOUR JOURNEY.
            DESIGNED FOR RESULTS, DRIVEN BY PASSION.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#shop"
              className="inline-flex h-12 items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-wide text-black hover:bg-zinc-100"
            >
              SHOP NOW
            </Link>
            <Link
              href="#quiz"
              className="inline-flex h-12 items-center justify-center border border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              SUPPLEMENT QUIZ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
