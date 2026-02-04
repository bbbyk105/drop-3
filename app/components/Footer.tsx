"use client";

import Link from "next/link";
import { useState } from "react";

const helpLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Track Your Order", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Account Login", href: "#" },
  { label: "Returns Policy", href: "#" },
  { label: "Returns Portal", href: "#" },
  { label: "Shipping Info", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Promotional Disclaimer", href: "#" },
  { label: "Accessibility Statement", href: "#" },
];

const supplementLinks = [
  { label: "Pre-Workout", href: "#" },
  { label: "Hydration", href: "#" },
  { label: "Protein", href: "#" },
  { label: "Creatine", href: "#" },
  { label: "Health & Wellness", href: "#" },
  { label: "Weight Management", href: "#" },
  { label: "Supplement Quiz", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Become a Distributor", href: "#" },
  { label: "Distributor Login", href: "#" },
  { label: "Find a Store", href: "#" },
];

const rewardsLinks = [
  { label: "Account Login", href: "#" },
  { label: "Manage My Subscription", href: "#" },
  { label: "Download The Kaged App", href: "#" },
  { label: "Military Discount", href: "#" },
  { label: "Kaged Discount Codes", href: "#" },
  { label: "Refer a Friend & Get $30", href: "#" },
];

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-500 text-white hover:border-white hover:bg-white/10"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [accessibility, setAccessibility] = useState(false);

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 上部: 4カラム + ニュースレター */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Help & Information
            </h3>
            <ul className="mt-4 space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Supplements
            </h3>
            <ul className="mt-4 space-y-2">
              {supplementLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Discounts & Rewards
            </h3>
            <ul className="mt-4 space-y-2">
              {rewardsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Join Our Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              The Kaged newsletter keeps you up to date with our most exclusive
              deals, product launches, and partnership opportunities.
              Unsubscribe anytime.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 border border-zinc-600 bg-transparent px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black hover:bg-zinc-100"
              >
                SUBMIT
              </button>
            </form>
            {/* 国選択・アクセシビリティ */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 border border-zinc-600 px-4 py-2">
                <span className="text-lg" aria-hidden>
                  🇺🇸
                </span>
                <span className="text-sm text-white">UNITED STATES</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-zinc-400">Accessibility</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={accessibility}
                  onClick={() => setAccessibility(!accessibility)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    accessibility ? "bg-white" : "bg-zinc-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-zinc-900 transition-transform ${
                      accessibility ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ロゴ + Follow Us + SNS */}
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-zinc-700 pt-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold uppercase tracking-tight text-white"
            >
              KAGED
            </Link>
            <p className="mt-3 text-sm text-zinc-400">Follow Us</p>
            <div className="mt-3 flex gap-3">
              <SocialIcon href="https://x.com" label="X (Twitter)">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://tiktok.com" label="TikTok">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* 最下部 */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-zinc-700 pt-8 text-center text-sm text-zinc-400 md:flex-row md:justify-between md:text-left">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Link href="#" className="hover:text-white">
              California Privacy Notice
            </Link>
            <span aria-hidden>///</span>
            <Link href="#" className="hover:text-white">
              Notice of Financial Incentive
            </Link>
            <span aria-hidden>///</span>
          </div>
          <Link href="#" className="hover:text-white">
            Your Privacy Choices ///
          </Link>
          <p>© 2026 KAGED</p>
        </div>
      </div>
    </footer>
  );
}
