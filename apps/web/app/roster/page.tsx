'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { GROUPS, MEMBERS } from '../../data/roster';
import { RosterHeader } from '../../components/roster/RosterHeader';
import { GroupProfileCard } from '../../components/roster/GroupProfileCard';
import { MemberProfileCard } from '../../components/roster/MemberProfileCard';

export default function RosterPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 text-[#111] md:px-10">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-[74px] items-center justify-between border-b border-black/15 bg-[#f4f4f1]/90 px-5 backdrop-blur-md md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:text-[#ff3b26]"
        >
          <ArrowLeft size={16} /> Back to Atmosphere
        </Link>
        <span className="brand-mark">
          ATMOS<span>®</span> // ROSTER
        </span>
      </div>

      <RosterHeader />

      {/* SECTION 01: COLLECTIVES */}
      <section className="py-16">
        <div className="mb-10 flex items-end justify-between border-b border-black/30 pb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
              01 // GROUP PATTERNS
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
              COLLECTIVES ({GROUPS.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, idx) => (
            <GroupProfileCard key={group.id} group={group} index={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 02: INDIVIDUALS */}
      <section className="py-16">
        <div className="mb-10 flex items-end justify-between border-b border-black/30 pb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
              02 // HUMAN ARCHETYPES
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
              INDIVIDUALS ({MEMBERS.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {MEMBERS.map((member, idx) => (
            <MemberProfileCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/25 py-12 text-[10px] font-semibold uppercase tracking-[.18em] text-black/50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© ATMOS 2026 — Seoul, South Korea</p>
          <p>We find people who already are one.</p>
        </div>
      </footer>
    </main>
  );
}
