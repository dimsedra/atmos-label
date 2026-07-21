'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import type { GroupProfile } from '../../data/roster';

interface GroupProfileCardProps {
  group: GroupProfile;
  index: number;
}

export function GroupProfileCard({ group, index }: GroupProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative flex flex-col justify-between border-t border-black/25 pt-6 pb-6"
    >
      <Link href={`/roster/${group.slug}`} className="block">
        {/* Cover Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
          <img
            src={group.heroImage}
            alt={group.name}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <span className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.18em] text-white">
            {group.memberCount} MEMBERS
          </span>
        </div>

        {/* Minimal Group Header */}
        <div className="mt-4 flex items-center justify-between border-t border-black/15 pt-3">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
              PATTERN 0{index + 1}
            </span>
            <h3 className="text-3xl font-semibold tracking-[-.05em] md:text-4xl">
              {group.name}
            </h3>
          </div>
          <ArrowRight
            className="-rotate-45 transition duration-300 group-hover:rotate-0 group-hover:text-[#ff3b26]"
            size={20}
          />
        </div>

        {/* Short Tagline Only */}
        <p className="mt-2 text-xs font-medium text-black/70 line-clamp-2">
          {group.tagline}
        </p>
      </Link>
    </motion.div>
  );
}
