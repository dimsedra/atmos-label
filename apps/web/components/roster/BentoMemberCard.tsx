'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Disc } from 'lucide-react';
import type { MemberProfile } from '../../data/roster';

interface BentoMemberCardProps {
  member: MemberProfile;
  index: number;
}

export function BentoMemberCard({ member, index }: BentoMemberCardProps) {
  // Define asymmetrical Bento spans for visual rhythm
  const getBentoSpan = (idx: number) => {
    switch (idx % 7) {
      case 0:
        return 'md:col-span-2 md:row-span-2'; // Hero Featured Bento Card
      case 1:
        return 'md:col-span-1 md:row-span-2'; // Tall Portrait Bento
      case 2:
        return 'md:col-span-1 md:row-span-1'; // Compact Square Bento
      case 3:
        return 'md:col-span-2 md:row-span-1'; // Wide Landscape Bento
      case 4:
        return 'md:col-span-1 md:row-span-1'; // Compact Square Bento
      case 5:
        return 'md:col-span-1 md:row-span-2'; // Tall Portrait Bento
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const isHero = index % 7 === 0;
  const isWide = index % 7 === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 5) * 0.07, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-black/20 bg-white/70 backdrop-blur-sm p-5 transition duration-500 hover:border-black/50 hover:shadow-2xl ${getBentoSpan(
        index
      )} flex flex-col justify-between`}
    >
      <Link href={`/roster/${member.slug}`} className="flex flex-col justify-between h-full">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em] text-black/50">
          <span className="rounded-full bg-black/5 px-3 py-1 text-black">
            {member.groupName} MEMBER
          </span>
          <ArrowRight className="transition duration-300 group-hover:translate-x-1 group-hover:text-[#ff3b26]" size={16} />
        </div>

        {/* Film Image with Parallax Scale */}
        <div
          className={`relative mt-4 w-full overflow-hidden rounded-xl bg-black/10 ${
            isHero ? 'aspect-[16/10]' : isWide ? 'aspect-[21/9]' : 'aspect-[3/4]'
          }`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-108 group-hover:grayscale-0"
          />

          {/* Solo Sovereignty Badge */}
          {member.soloSovereignty.length > 0 && (
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-[#e8ff43] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.16em] text-black shadow-md">
              <Sparkles size={10} /> Solo Sovereignty
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="mt-4 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#ff3b26]">
              {member.archetype}
            </span>
            <h3
              className={`font-semibold tracking-[-.05em] ${
                isHero ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
              }`}
            >
              {member.name}
            </h3>
            <p className="mt-1 text-xs text-black/60">{member.role}</p>
          </div>

          <p className="mt-2 text-xs font-medium text-black/80 line-clamp-2">
            {member.preExistingDiscipline}
          </p>

          {/* Featured Audio Track if Hero */}
          {isHero && member.featuredTrack && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-black/5 p-2.5 text-xs">
              <Disc size={14} className="text-[#ff3b26]" />
              <span className="font-semibold">{member.featuredTrack.title}</span>
              <span className="ml-auto text-[10px] text-black/50">
                {member.featuredTrack.duration}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
