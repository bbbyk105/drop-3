import Image from "next/image";
import Link from "next/link";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80";

export default function Personalized() {
  return (
    <section
      className="relative min-h-[400px] overflow-hidden bg-zinc-900"
      id="quiz"
    >
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-zinc-900/70" />
      <div className="relative mx-auto flex min-h-[400px] max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <h2 className="max-w-xl text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          PERSONALIZED SUPPLEMENTATION
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
          TAKE OUR 2-MINUTE QUIZ TO FIND YOUR PERFECT SUPPLEMENT STACK AND
          RECEIVE A CUSTOM PLAN WITH RECIPES.
        </p>
        <Link
          href="#quiz"
          className="mt-8 inline-flex h-12 w-fit items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-wide text-black hover:bg-zinc-100"
        >
          TAKE THE KAGED QUIZ
        </Link>
      </div>
    </section>
  );
}
