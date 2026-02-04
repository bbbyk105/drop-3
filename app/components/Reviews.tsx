const reviews = [
  {
    title: "THANK YOU KAGED",
    body: "The quality and transparency of KAGED products have made a real difference in my training. I recommend them to everyone.",
    author: "John M.",
  },
  {
    title: "THE BEST",
    body: "Hands down the best supplements I've ever used. Clean ingredients and they actually deliver on their promises.",
    author: "Sarah K.",
  },
  {
    title: "OUTSTANDING COMPANY",
    body: "Outstanding company with outstanding products. The customer service is top-notch and the results speak for themselves.",
    author: "Mike D.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black">
          VERIFIED CUSTOMER REVIEWS
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.title} className="bg-zinc-900 p-8 text-white">
              <h3 className="text-lg font-semibold uppercase tracking-wide">
                {review.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {review.body}
              </p>
              <p className="mt-4 text-sm text-zinc-400">— {review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
