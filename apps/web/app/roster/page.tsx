'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { GROUPS, MEMBERS, DISCOGRAPHY } from '../../data/roster';
import { RosterHeader } from '../../components/roster/RosterHeader';
import { GroupProfileCard } from '../../components/roster/GroupProfileCard';
import { MemberProfileCard } from '../../components/roster/MemberProfileCard';
import { DiscographyStream } from '../../components/roster/DiscographyStream';

export default function RosterPage() {
  const [activeTab, setActiveTab] = useState('all');

  const valleyMembers = MEMBERS.filter((m) => m.groupId === 'valley');
  const prixMembers = MEMBERS.filter((m) => m.groupId === 'prix');

  const filteredMembers = MEMBERS.filter((member) => {
    if (activeTab === 'valley') return member.groupId === 'valley';
    if (activeTab === 'prix') return member.groupId === 'prix';
    if (activeTab === 'solo') return member.soloSovereignty.length > 0;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 text-[#111] md:px-10">
      {/* Top Back Navigation Bar */}
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

      <RosterHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        valleyCount={valleyMembers.length}
        prixCount={prixMembers.length}
      />

      {/* Scalable Grid Group Patterns Section */}
      {(activeTab === 'all' || activeTab === 'valley' || activeTab === 'prix') && (
        <section className="py-12">
          <div className="mb-8 flex items-end justify-between border-b border-black/30 pb-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
                GROUP PATTERNS
              </span>
              <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
                THE MEETING POINTS
              </h2>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-black/45">
              {GROUPS.length} ACTIVE GROUPS
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {GROUPS.filter(
              (g) => activeTab === 'all' || activeTab === g.id
            ).map((group, idx) => (
              <GroupProfileCard key={group.id} group={group} index={idx} />
            ))}
          </div>
        </section>
      )}

      {/* Conditionally Render Member Grid */}
      {activeTab !== 'discography' && (
        <section className="py-12">
          <div className="mb-8 flex items-end justify-between border-b border-black/30 pb-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
                INDIVIDUAL ARCHETYPES
              </span>
              <h2 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
                MEMBER PROFILES ({filteredMembers.length})
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMembers.map((member, idx) => (
              <MemberProfileCard key={member.id} member={member} index={idx} />
            ))}
          </div>
        </section>
      )}

      {/* Discography Stream */}
      {(activeTab === 'all' || activeTab === 'discography') && (
        <DiscographyStream releases={DISCOGRAPHY} />
      )}

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
