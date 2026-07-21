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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col justify-between border-t border-black/30 pt-8 pb-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em] text-black/50">
            <span>PATTERN 0{index + 1}</span>
            <span className="flex items-center gap-1.5 text-black/70">
              <Users size={12} /> {group.memberCount} MEMBERS
            </span>
          </div>

          <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[.85] tracking-[-.065em]">
            {group.name}
          </h2>

          <p className="mt-4 text-base font-medium text-[#ff3b26] md:text-lg">
            {group.tagline}
          </p>

          <div className="mt-8 grid gap-6 border-t border-black/15 pt-6 text-sm text-black/75">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/45">
                The Music & Sound
              </span>
              <p className="mt-1 leading-relaxed">{group.soundProfile}</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/45">
                Stage Dynamic
              </span>
              <p className="mt-1 leading-relaxed">{group.stageVibe}</p>
            </div>
          </div>
        </div>

        <Link
          href={`/roster/${group.slug}`}
          className="arrow-link mt-10"
        >
          Explore {group.name} Pattern <ArrowRight size={18} />
        </Link>
      </div>

      <div className="mt-8 aspect-[16/11] overflow-hidden bg-black/10 lg:mt-0">
        <img
          src={group.heroImage}
          alt={`${group.name} group portrait`}
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
}
