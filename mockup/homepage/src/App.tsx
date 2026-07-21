import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Pause, Play, ShoppingBag, X } from "lucide-react";

const hero = "https://images.pexels.com/photos/9771506/pexels-photo-9771506.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&q=90";

const artists = [
  { name: "MISO", genre: "Alternative R&B", image: "https://images.pexels.com/photos/8005245/pexels-photo-8005245.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85" },
  { name: "NOA", genre: "Electronic / Pop", image: "https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85" },
  { name: "YUN", genre: "Producer / DJ", image: "https://images.pexels.com/photos/33635003/pexels-photo-33635003.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85" },
  { name: "SAE", genre: "Experimental Pop", image: "https://images.pexels.com/photos/9069676/pexels-photo-9069676.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85" },
];

const products = [
  { name: "A-01 Headset", price: "$240", image: "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&q=90" },
  { name: "Orbit Ring Set", price: "$85", image: "https://images.pexels.com/photos/29967978/pexels-photo-29967978.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&q=90" },
  { name: "ATMOS Signet", price: "$120", image: "https://images.pexels.com/photos/8306532/pexels-photo-8306532.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&q=90" },
];

function Mark() {
  return <a href="#top" className="brand-mark" aria-label="ATMOS home">ATMOS<span>®</span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(36);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setProgress((p) => (p >= 99 ? 0 : p + 0.25)), 120);
    return () => window.clearInterval(id);
  }, [playing]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="overflow-hidden bg-[#f4f4f1] text-[#111]">
      <header className="fixed inset-x-0 top-0 z-50 flex h-[74px] items-center justify-between border-b border-white/25 px-5 text-white mix-blend-difference md:px-10">
        <Mark />
        <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[.18em] md:flex" aria-label="Main navigation">
          <a href="#releases">Music</a><a href="#artists">Artists</a><a href="#shop">Objects</a><a href="#journal">Journal</a>
        </nav>
        <div className="flex items-center gap-5">
          <a className="hidden text-[11px] font-semibold uppercase tracking-[.18em] sm:block" href="#shop">Seoul / KR</a>
          <button onClick={() => setMenuOpen(true)} className="p-1 md:hidden" aria-label="Open menu"><Menu size={25} /></button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .55, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[60] flex flex-col bg-[#e9ff45] p-6 text-black">
            <div className="flex items-center justify-between"><Mark /><button onClick={closeMenu} aria-label="Close menu"><X size={30}/></button></div>
            <nav className="mt-auto mb-auto flex flex-col text-[13vw] font-semibold uppercase leading-[.95] tracking-[-.06em]">
              <a onClick={closeMenu} href="#releases">Music</a><a onClick={closeMenu} href="#artists">Artists</a><a onClick={closeMenu} href="#shop">Objects</a><a onClick={closeMenu} href="#journal">Journal</a>
            </nav>
            <p className="text-xs font-medium uppercase tracking-[.2em]">Independent frequency / Seoul</p>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero relative flex min-h-[100svh] items-end bg-black text-white">
        <motion.img initial={{ scale: 1.09, opacity: 0 }} animate={{ scale: 1, opacity: .92 }} transition={{ duration: 1.5, ease: "easeOut" }} src={hero} alt="ATMOS artists in a silver, smoke-filled studio" className="absolute inset-0 h-full w-full object-cover object-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/25" />
        <div className="relative z-10 w-full px-5 pb-7 md:px-10 md:pb-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mb-4 max-w-sm text-sm leading-relaxed text-white/80 md:ml-auto md:mb-0">A Seoul-born music and lifestyle label shaping sound, image, and objects beyond the expected.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .9 }} className="hero-word">ATMOS</motion.h1>
          <div className="mt-2 flex items-end justify-between border-t border-white/40 pt-4 text-[10px] font-semibold uppercase tracking-[.22em]">
            <span>Independent frequency<br/>Seoul, South Korea</span>
            <a href="#releases" className="flex items-center gap-2">Enter the atmosphere <ArrowDown size={14}/></a>
          </div>
        </div>
      </section>

      <section id="releases" className="px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="01" title="New frequency" link="All releases" />
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.28fr_.72fr]">
          <motion.div initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} className="relative min-h-[520px] overflow-hidden bg-[#b9b9b9] md:min-h-[720px]">
            <img src="https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90" alt="MISO in a silver outfit for the Glasshouse release" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[.2em] text-white">ATM-024 / LP</span>
          </motion.div>
          <div className="flex flex-col justify-end lg:pl-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.22em] text-[#ff3b26]">Out now</p>
            <h3 className="text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[.78] tracking-[-.07em]">GLASS<br/>HOUSE</h3>
            <div className="mt-8 flex items-end justify-between border-b border-black/30 pb-5">
              <div><p className="text-xl font-medium">MISO</p><p className="mt-1 text-sm text-black/50">8 tracks · 31 min</p></div>
              <button onClick={() => setPlaying(!playing)} className="grid size-16 place-items-center rounded-full bg-black text-white transition hover:scale-105" aria-label={playing ? "Pause Glasshouse" : "Play Glasshouse"}>{playing ? <Pause fill="currentColor" size={19}/> : <Play fill="currentColor" size={19}/>}</button>
            </div>
            <button onClick={() => setPlaying(!playing)} className="group py-6 text-left" aria-label="Play track Light Leak">
              <div className="flex items-center gap-4"><span className="text-xs tabular-nums">01</span><span className="font-medium">Light Leak</span><span className="ml-auto text-xs tabular-nums">03:48</span></div>
              <div className="mt-5 h-[2px] bg-black/15"><div style={{ width: `${progress}%` }} className="h-full bg-[#ff3b26] transition-[width]" /></div>
            </button>
            <a href="#" className="arrow-link mt-5">Listen everywhere <ArrowRight size={18}/></a>
          </div>
        </div>
      </section>

      <section id="artists" className="bg-[#101010] px-5 py-24 text-white md:px-10 md:py-36">
        <SectionHead index="02" title="Artists in orbit" link="Meet the roster" dark />
        <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 md:grid-cols-4 md:gap-x-5">
          {artists.map((artist, i) => (
            <motion.a href="#" key={artist.name} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true, amount: .25 }} className={`group block ${i % 2 ? "md:mt-24" : ""}`}>
              <div className="aspect-[3/4] overflow-hidden bg-white/10"><img src={artist.image} alt={artist.name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div>
              <div className="mt-4 flex items-start justify-between border-t border-white/25 pt-3"><div><h3 className="text-2xl font-semibold tracking-[-.04em] md:text-3xl">{artist.name}</h3><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/50">{artist.genre}</p></div><ArrowRight className="-rotate-45 transition group-hover:rotate-0" size={18}/></div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-[#e8ff43] px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="03" title="Physical signals" link="Visit the shop" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-black/65">Utility, adornment, and sound. Limited objects designed by ATMOS Studio in Seoul.</p>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-5">
          {products.map((product, i) => (
            <motion.a href="#" key={product.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="group block">
              <div className="relative aspect-square overflow-hidden bg-white"><img src={product.image} alt={product.name} className="h-full w-full object-cover mix-blend-multiply transition duration-700 group-hover:scale-105"/><span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-black text-white opacity-0 transition group-hover:opacity-100"><ShoppingBag size={16}/></span></div>
              <div className="mt-4 flex justify-between border-t border-black/30 pt-3 text-sm font-medium"><span>{product.name}</span><span>{product.price}</span></div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="journal" className="px-5 py-24 md:px-10 md:py-36">
        <SectionHead index="04" title="From the field" link="Read all stories" />
        <a href="#" className="group mt-14 grid gap-7 border-t border-black/25 pt-6 md:grid-cols-[1.2fr_.8fr] md:gap-14">
          <div className="aspect-[16/10] overflow-hidden"><img src="https://images.pexels.com/photos/8221405/pexels-photo-8221405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90" alt="Artists on a rock landscape" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02]" /></div>
          <div className="flex flex-col justify-between">
            <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/50">Field Notes 008 · 06.14.26</p><h3 className="mt-6 text-[clamp(2.5rem,5vw,5.6rem)] font-medium leading-[.93] tracking-[-.06em]">Outside the system, inside the sound.</h3><p className="mt-6 max-w-md text-sm leading-relaxed text-black/60">MISO and creative director Han Sol discuss making Glasshouse between Seoul and Jeju, and why independence is a daily practice.</p></div>
            <span className="arrow-link mt-10">Read the conversation <ArrowRight size={18}/></span>
          </div>
        </a>
      </section>

      <footer className="bg-[#c9c9c5] px-5 pb-8 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-16 md:grid-cols-2"><h2 className="text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.88] tracking-[-.07em]">Stay on our<br/>frequency.</h2><form className="self-end" onSubmit={(e) => e.preventDefault()}><label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[.2em]">ATMOS transmissions</label><div className="mt-5 flex border-b border-black pb-3"><input id="email" type="email" required placeholder="YOUR EMAIL ADDRESS" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-black/45"/><button aria-label="Subscribe"><ArrowRight/></button></div></form></div>
        <div className="mt-24 flex flex-col gap-5 border-t border-black/30 pt-5 text-[10px] font-semibold uppercase tracking-[.17em] md:mt-36 md:flex-row md:items-center"><Mark/><div className="flex gap-6 md:ml-auto"><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">Soundcloud</a></div><span className="md:ml-12">© ATMOS 2026</span></div>
      </footer>
    </main>
  );
}

function SectionHead({ index, title, link, dark = false }: { index: string; title: string; link: string; dark?: boolean }) {
  return <div className={`flex items-end justify-between border-b pb-5 ${dark ? "border-white/30" : "border-black/30"}`}><div className="flex items-baseline gap-4 md:gap-8"><span className={`text-[10px] font-semibold ${dark ? "text-[#e8ff43]" : "text-[#ff3b26]"}`}>{index}</span><h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">{title}</h2></div><a href="#" className="mb-1 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] sm:flex">{link}<ArrowRight size={15}/></a></div>;
}

export default App;
