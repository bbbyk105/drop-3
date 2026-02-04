import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "What Is Intra-Workout and Do You Really Need One?",
    excerpt:
      "Learn about intra-workout supplements and whether they fit into your training routine.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  },
  {
    title:
      "Breaking Down the Kaged Clean Burn: Lean, Sculpt, and Transform, and Which One Is For You",
    excerpt:
      "A detailed comparison of our Clean Burn line to help you choose the right formula.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    title: "Nutrition For Fearless: Elements of Kaged Nutrition",
    excerpt:
      "Discover the science and philosophy behind our nutrition approach.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black">
          EXPLORE THE KAGED BLOG
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden bg-white">
              <div className="relative aspect-16/10 overflow-hidden bg-zinc-200">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-black underline hover:no-underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
