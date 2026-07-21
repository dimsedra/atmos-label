'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Disc, Sparkles } from 'lucide-react';
import type { MemberProfile } from '../../data/roster';

interface MemberProfileCardProps {
  member: MemberProfile;
  index: number;
}

export function MemberProfileCard({ member, index }: MemberProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 4) * 0.08 }}
      className={`group block border-t border-black/25 pt-6 ${
        index % 2 === 1 ? 'md:mt-16' : ''
      }`}
    >
      <Link href={`/roster/${member.slug}`}>
        {/* Film Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-black/10">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />

          {/* Group Tag Overlay */}
          <span className="absolute top-4 left-4 bg-black/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.2em] text-white">
            {member.groupName}
          </span>

          {/* Solo Sovereignty Badge if present */}
          {member.soloSovereignty.length > 0 && (
            <span className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[#e8ff43] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.18em] text-black">
              <Sparkles size={10} /> Solo Sovereignty
            </span>
          )}
        </div>

        {/* Member Details */}
        <div className="mt-4 flex items-start justify-between border-t border-black/20 pt-3">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-.04em] md:text-3xl">
              {member.name}
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[.16em] text-black/50">
              {member.role}
            </p>
            <p className="mt-2 text-xs font-medium text-black/70">
              {member.preExistingDiscipline}
            </p>
          </div>
          <ArrowRight
            className="-rotate-45 transition group-hover:rotate-0"
            size={18}
          />
        </div>
      </Link>

      {/* Featured Track Snippet */}
      {member.featuredTrack && (
        <div className="mt-4 flex items-center justify-between rounded-lg bg-black/5 p-3 text-xs">
          <div className="flex items-center gap-2">
            <Disc size={14} className="text-[#ff3b26]" />
            <span className="font-medium">{member.featuredTrack.title}</span>
          </div>
          <span className="tabular-nums text-black/50">
            {member.featuredTrack.duration}
          </span>
        </div>
      )}
    </motion.div>
  );
}
