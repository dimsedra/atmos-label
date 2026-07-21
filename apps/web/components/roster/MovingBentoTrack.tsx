'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import type { MemberProfile } from '../../data/roster';

interface MovingBentoTrackProps {
  members: MemberProfile[];
}

export function MovingBentoTrack({ members }: MovingBentoTrackProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-8">
      {/* Scroll Navigation Controls */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
          HORIZONTAL SCROLL // SLIDE LEFT & RIGHT ({members.length} MEMBERS)
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="flex size-10 items-center justify-center rounded-full border border-black/20 bg-white/80 transition hover:bg-black hover:text-white"
            aria-label="Scroll left"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex size-10 items-center justify-center rounded-full border border-black/20 bg-white/80 transition hover:bg-black hover:text-white"
            aria-label="Scroll right"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Moving Picture Bento Box Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-6 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {members.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="group relative w-[300px] sm:w-[340px] md:w-[380px] aspect-[3/4] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-black cursor-pointer shadow-lg"
          >
            <Link href={`/roster/${member.slug}`} className="block h-full w-full">
              {/* Picture Box */}
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-108 group-hover:grayscale-0"
              />

              {/* Gradient Overlay for bottom text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition duration-500 group-hover:opacity-80" />

              {/* Top Right Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.2em] text-white backdrop-blur-md">
                  {member.groupName}
                </span>

                {member.soloSovereignty.length > 0 && (
                  <span className="flex items-center gap-1.5 rounded-full bg-[#e8ff43] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.16em] text-black shadow-md">
                    <Sparkles size={10} /> Solo
                  </span>
                )}
              </div>

              {/* Bottom Left Name & Details inside Picture Box */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
                  {member.archetype}
                </span>
                <h3 className="mt-1 text-3xl md:text-4xl font-semibold tracking-[-.05em] leading-none">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-white/80 line-clamp-1">
                  {member.role}
                </p>
                <p className="mt-1 text-[11px] text-white/60 line-clamp-1">
                  {member.preExistingDiscipline}
                </p>

                {/* Arrow reveal on hover */}
                <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#e8ff43] opacity-0 transition duration-300 group-hover:opacity-100">
                  View Profile <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
