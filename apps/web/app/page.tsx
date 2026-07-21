'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Menu, Pause, Play, ShoppingBag, Sparkles, X } from 'lucide-react';
import { GROUPS } from '../data/roster';

const hero = 'https://images.pexels.com/photos/9771506/pexels-photo-9771506.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&q=90';

const products = [
  { name: 'A-01 Headset', price: '$280', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85' },
  { name: 'Orbit Ring Set', price: '$140', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85' },
  { name: 'ATMOS Signet', price: '$95', image: 'https://images.pexels.com/photos/2697608/pexels-photo-2697608.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85' },
];

const articles = [
  { title: 'The architecture of quiet sound', date: 'FEB 2026', tag: 'ESSAY' },
  { title: 'Seoul night bus route 701: field notes', date: 'JAN 2026', tag: 'JOURNAL' },
  { title: 'Designing objects that outlive the release', date: 'DEC 2025', tag: 'STUDIO' },
];

function Mark() {
  return (
    <span className="brand-mark">
      ATMOS<span>®</span>
    </span>
  );
}

function SectionHead({
  index,
  title,
  link,
  linkHref = '#',
  dark = false,
}: {
  index: string;
  title: string;
  link: string;
  linkHref?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-end justify-between border-b pb-5 ${
        dark ? 'border-white/30' : 'border-black/30'
      }`}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span
          className={`text-[10px] font-semibold ${
            dark ? 'text-[#e8ff43]' : 'text-[#ff3b26]'
          }`}
        >
          {index}
        </span>
        <h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
          {title}
        </h2>
      </div>
      <Link
        href={linkHref}
        className="mb-1 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] sm:flex hover:underline"
      >
        {link}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(36);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setProgress((p) => (p >= 99 ? 0 : p + 0.25)), 120);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#111]">
      <header
        className="fixed top-0 left-0 right-0 z-40 flex h-[74px] items-center justify-between px-5 md:px-10 text-white mix-blend-difference"
        aria-label="Site Header"
      >
        <Mark />
        <nav
          className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.18em] md:flex"
          aria-label="Main navigation"
        >
          <a href="#releases">Music</a>
          <Link href="/roster">Collectives</Link>
          <a href="#shop">Objects</a>
          <a href="#journal">Journal</a>
        </nav>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em]"
          aria-label="Open navigation menu"
        >
          Menu <Menu size={16} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#e8ff43] p-6 text-black md:p-12"
          >
            <div className="flex items-center justify-between">
              <Mark />
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em]"
              >
                Close <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
              <a href="#releases" onClick={() => setMenuOpen(false)}>
                01. Music
              </a>
              <Link href="/roster" onClick={() => setMenuOpen(false)}>
                02. Collectives
              </Link>
              <a href="#shop" onClick={() => setMenuOpen(false)}>
                03. Objects
              </a>
              <a href="#journal" onClick={() => setMenuOpen(false)}>
                04. Journal
              </a>
            </nav>
            <div className="flex flex-col gap-4 border-t border-black/30 pt-6 text-xs font-medium uppercase tracking-[.15em] sm:flex-row sm:justify-between">
              <p>Seoul · Tokyo · Worldwide</p>
              <p>Independent Label & Studio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative flex min-h-screen flex-col justify-between px-5 pt-32 pb-10 text-white md:px-10 md:pt-40 md:pb-14">
        <div className="absolute inset-0 bg-[#101010]">
          <img
            src={hero}
            alt="ATMOS Studio Seoul Grayscale Background"
            className="h-full w-full object-cover opacity-65 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
        <div className="relative z-10">
          <p className="max-w-md text-xs uppercase tracking-[.22em] text-[#e8ff43]">
            Seoul-Born Lifestyle Music Label
          </p>
          <p className="mt-4 max-w-xl text-lg font-medium leading-snug md:text-2xl text-white/90">
            Shaping sound, image, and objects beyond the expected. We don&apos;t build artists. We find people who already are one.
          </p>
        </div>
        <div className="relative z-10">
          <h1 className="hero-word uppercase font-semibold">ATMOS</h1>
          <div className="mt-6 flex flex-col gap-6 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/roster" className="arrow-link text-white hover:text-[#e8ff43]">
              Explore Collectives & Roster <ArrowRight size={18} />
            </Link>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[.2em] text-white/70">
              Scroll to explore <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section id="releases" className="px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="01" title="New frequency" link="All releases" linkHref="/roster" />
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.28fr_.72fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-h-[520px] overflow-hidden bg-[#b9b9b9] md:min-h-[720px]"
          >
            <img
              src="https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90"
              alt="VALLEY Glasshouse release"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[.2em] text-white">
              ATM-024 / LP
            </span>
          </motion.div>
          <div className="flex flex-col justify-end lg:pl-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.22em] text-[#ff3b26]">Out now</p>
            <h3 className="text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[.78] tracking-[-.07em]">
              GLASS
              <br />
              HOUSE
            </h3>
            <div className="mt-8 flex items-end justify-between border-b border-black/30 pb-5">
              <div>
                <p className="text-xl font-medium">VALLEY</p>
                <p className="mt-1 text-sm text-black/50">8 tracks · 31 min</p>
              </div>
              <button
                onClick={() => setPlaying(!playing)}
                className="grid size-16 place-items-center rounded-full bg-black text-white transition hover:scale-105"
                aria-label={playing ? 'Pause Glasshouse' : 'Play Glasshouse'}
              >
                {playing ? <Pause fill="currentColor" size={19} /> : <Play fill="currentColor" size={19} />}
              </button>
            </div>
            <button
              onClick={() => setPlaying(!playing)}
              className="group py-6 text-left"
              aria-label="Play track Light Leak"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs tabular-nums">01</span>
                <span className="font-medium">Light Leak</span>
                <span className="ml-auto text-xs tabular-nums">03:48</span>
              </div>
              <div className="mt-5 h-[2px] bg-black/15">
                <div style={{ width: `${progress}%` }} className="h-full bg-[#ff3b26] transition-[width]" />
              </div>
            </button>
            <Link href="/roster/valley" className="arrow-link mt-5">
              Explore VALLEY Pattern <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: COLLECTIVES IN RESONANCE (RAW EDITORIAL BLUEPRINT SPREAD — NO CARDS) */}
      <section id="collectives" className="bg-[#101010] px-5 py-24 text-white md:px-10 md:py-36">
        <SectionHead
          index="02"
          title="Collectives in resonance"
          link="Explore Roster Directory"
          linkHref="/roster"
          dark
        />

        <div className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-white/70">
            Groups at ATMOS are not audition slots—they are natural meeting points where formed, distinct individuals come together.
          </p>
        </div>

        {/* RAW ARCHITECTURAL EDITORIAL SPREAD */}
        <div className="mt-16 border-t border-white/20">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group border-b border-white/20 py-12 lg:py-16"
            >
              <Link href={`/roster/${group.slug}`} className="block">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                  {/* Left Column: Typographic Manifest & Meta */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#e8ff43]">
                        <span>PATTERN 0{i + 1}</span>
                        <span>//</span>
                        <span>{group.memberCount} MEMBERS</span>
                      </div>

                      <h3 className="mt-4 text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[.82] tracking-[-.07em] uppercase transition duration-500 group-hover:text-[#e8ff43]">
                        {group.name}
                      </h3>

                      <p className="mt-6 text-base font-medium text-white/85 leading-relaxed md:text-lg">
                        {group.tagline}
                      </p>
                    </div>

                    <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#e8ff43]">
                      <span>Explore {group.name} Pattern</span>
                      <ArrowRight
                        size={18}
                        className="-rotate-45 transition duration-300 group-hover:rotate-0 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Right Column: Full-Bleed Tactile Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                    <img
                      src={group.heroImage}
                      alt={group.name}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* FUTURE ARRIVALS ARCHITECTURAL ROW */}
          <div className="py-12 lg:py-16 text-white/40">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e8ff43]/60">
                  PATTERNS 03 & 04 // IN DEVELOPMENT
                </span>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-.05em] uppercase text-white/50">
                  FLAVOR & SOUVEREIN
                </h3>
              </div>
              <Link
                href="/roster"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-[#e8ff43]/70 hover:text-[#e8ff43]"
              >
                Label Lifecycle <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="bg-[#e8ff43] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="03" title="Physical signals" link="Visit the shop" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-black/65">
          Utility, adornment, and sound. Limited objects designed by ATMOS Studio in Seoul.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-5">
          {products.map((product, i) => (
            <motion.a
              href="#"
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-black text-white opacity-0 transition group-hover:opacity-100">
                  <ShoppingBag size={16} />
                </span>
              </div>
              <div className="mt-4 flex justify-between border-t border-black/30 pt-3 text-sm font-medium">
                <span>{product.name}</span>
                <span>{product.price}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="journal" className="px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="04" title="Field notes" link="Read all entries" />
        <div className="mt-14 grid gap-8 border-t border-black/30 pt-6 md:grid-cols-3">
          {articles.map((art, i) => (
            <motion.a
              href="#"
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col justify-between border-b border-black/20 pb-6 md:border-b-0"
            >
              <div>
                <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">
                  <span>{art.tag}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-.04em] transition group-hover:text-[#ff3b26]">
                  {art.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em]">
                Read entry <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="bg-[#101010] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="grid gap-12 border-b border-white/20 pb-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e8ff43]">
              Stay in resonance
            </span>
            <h2 className="mt-3 text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
              Join the signal
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/60">
              Occasional transmissions about releases, physical drops, and field notes from Seoul.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-end gap-3">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="flex border-b border-white/40 pb-2">
              <input
                id="email"
                type="email"
                placeholder="email@address.com"
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button type="submit" className="text-xs uppercase tracking-[.18em] text-[#e8ff43]">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-6 text-xs text-white/50 sm:flex-row">
          <p>© ATMOS 2026 — Seoul, South Korea</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              YouTube
            </a>
            <a href="#" className="hover:text-white">
              Soundcloud
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
