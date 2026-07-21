'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { MemberProfile } from '../../data/roster';

interface MovingBentoTrackProps {
  initialMembers: MemberProfile[];
}

function shuffleArray<T>(array: T[]): T[] {
  if (!array || !Array.isArray(array)) return [];
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function MovingBentoTrack({ initialMembers }: MovingBentoTrackProps) {
  const [shuffledMembers, setShuffledMembers] = useState<MemberProfile[]>(initialMembers || []);
  const [isPaused, setIsPaused] = useState(false);

  // Shuffle members on client mount/refresh
  useEffect(() => {
    if (initialMembers && initialMembers.length > 0) {
      setShuffledMembers(shuffleArray(initialMembers));
    }
  }, [initialMembers]);

  // Duplicate array 3x for seamless infinite marquee loop
  const marqueeItems = [...shuffledMembers, ...shuffledMembers, ...shuffledMembers];

  return (
    <div className="relative mt-8 overflow-hidden py-4">
      {/* Top Track Information */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
          DYNAMIC INFINITE MARQUEE // SHUFFLED ON REFRESH ({shuffledMembers.length} MEMBERS)
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#ff3b26]">
          {isPaused ? 'PAUSED AT CURRENT POSITION' : 'AUTOPLAYING'}
        </span>
      </div>

      {/* Marquee Track Wrapper with CSS animation-play-state */}
      <div
        className="relative flex w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 w-max animate-marquee"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((member, idx) => (
            <div
              key={`${member.id}-${idx}`}
              className="group relative w-[290px] sm:w-[330px] md:w-[360px] aspect-[3/4] flex-shrink-0 overflow-hidden rounded-2xl bg-black shadow-xl transition duration-500 hover:shadow-2xl"
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
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.2em] text-white backdrop-blur-md">
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
                  <p className="mt-2 text-xs font-medium text-white/85 line-clamp-1">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
