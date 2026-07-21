'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Disc, Pause, Play, Sparkles } from 'lucide-react';
import type { GroupProfile, MemberProfile, WorkItem } from '../../../data/roster';

interface RosterSlugClientProps {
  member?: MemberProfile;
  group?: GroupProfile;
  memberGroup?: GroupProfile;
  groupMembers?: MemberProfile[];
}

export function RosterSlugClient({
  member,
  group,
  memberGroup,
  groupMembers,
}: RosterSlugClientProps) {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const toggleTrack = (title: string) => {
    setPlayingTrack(playingTrack === title ? null : title);
  };

  if (!member && !group) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#f4f4f1] p-6 text-center text-[#111]">
        <h1 className="text-4xl font-semibold uppercase">Profile Not Found</h1>
        <p className="mt-3 text-sm text-black/60">
          The requested member or group pattern does not exist in the active ATMOS roster.
        </p>
        <Link href="/roster" className="arrow-link mt-8">
          <ArrowLeft size={16} /> Return to Roster Directory
        </Link>
      </main>
    );
  }

  // MEMBER DETAIL VIEW
  if (member) {
    return (
      <main className="min-h-screen bg-[#f4f4f1] text-[#111]">
        {/* Top Sticky Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex h-[74px] items-center justify-between border-b border-black/15 bg-[#f4f4f1]/90 px-5 backdrop-blur-md md:px-10">
          <Link
            href="/roster"
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] transition hover:text-[#ff3b26]"
          >
            <ArrowLeft size={16} /> Back to Roster
          </Link>
          <span className="brand-mark">
            ATMOS<span>®</span> // MEMBER PROFILE
          </span>
        </div>

        <article className="px-5 pt-28 pb-24 md:px-10 md:pt-36">
          {/* Header Banner */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-black text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[.2em]">
                  {member.groupName} MEMBER
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
                  {member.archetype}
                </span>
              </div>

              <h1 className="mt-4 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.8] tracking-[-.07em]">
                {member.name}
              </h1>

              <p className="mt-4 text-lg font-medium text-black/80 md:text-xl">
                {member.role}
              </p>

              <div className="mt-8 border-t border-black/20 pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
                  Pre-Existing Discipline
                </span>
                <p className="mt-1 text-base font-semibold text-black">
                  {member.preExistingDiscipline}
                </p>
              </div>

              <div className="mt-8 border-t border-black/20 pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
                  Authentic Interior & Bio
                </span>
                <p className="mt-3 text-base leading-relaxed text-black/75 md:text-lg">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8 border-t border-black/20 pt-6">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
                  Scouting Narrative
                </span>
                <p className="mt-2 text-sm leading-relaxed text-black/70 italic">
                  &ldquo;{member.scoutingStory}&rdquo;
                </p>
              </div>
            </div>

            {/* Film Image */}
            <div className="aspect-[3/4] overflow-hidden bg-black/10">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </div>

          {/* UNIFIED SELECTED WORKS & BODY OF WORK SECTION */}
          <section className="mt-24 border-t border-black/30 pt-16">
            <div className="flex items-center justify-between border-b border-black/30 pb-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
                  BODY OF WORK
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
                  SELECTED WORKS ({member.works.length})
                </h2>
              </div>
            </div>

            {/* Unified Works Stream */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {member.works.map((work) => {
                const isPlaying = playingTrack === work.title;

                return (
                  <div
                    key={work.id}
                    className="flex flex-col justify-between border-t border-black/20 bg-white/60 p-6 backdrop-blur-sm transition duration-300 hover:bg-white"
                  >
                    <div>
                      {/* Top Discipline Tag & Year */}
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em]">
                        <span className="bg-[#e8ff43] px-2.5 py-1 text-black">
                          {work.discipline}
                        </span>
                        <span className="text-black/50">{work.year}</span>
                      </div>

                      {/* Catalog Number if music release */}
                      {work.catalogNumber && (
                        <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-[.18em] text-[#ff3b26]">
                          {work.catalogNumber}
                        </span>
                      )}

                      <h3 className="mt-2 text-2xl font-semibold">{work.title}</h3>

                      {work.context && (
                        <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-black/50">
                          {work.context}
                        </span>
                      )}

                      <p className="mt-3 text-sm leading-relaxed text-black/75">
                        {work.description}
                      </p>
                    </div>

                    {/* Interactive Audio Player if work includes audio track */}
                    {work.audioTrack && (
                      <div className="mt-6 flex items-center justify-between border-t border-black/15 pt-4">
                        <div className="flex items-center gap-2 text-xs">
                          <Disc size={14} className="text-[#ff3b26]" />
                          <span className="font-semibold">{work.audioTrack.title}</span>
                          <span className="text-black/50">({work.audioTrack.duration})</span>
                        </div>

                        <button
                          onClick={() => toggleTrack(work.title)}
                          className={`flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[.15em] transition ${
                            isPlaying
                              ? 'bg-[#ff3b26] text-white'
                              : 'bg-black text-white hover:bg-black/80'
                          }`}
                        >
                          {isPlaying ? (
                            <>
                              <Pause size={12} fill="currentColor" /> Pause
                            </>
                          ) : (
                            <>
                              <Play size={12} fill="currentColor" /> Preview Audio
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Group Resonance Link */}
          {memberGroup && (
            <div className="mt-24 border-t border-black/20 pt-8">
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-black/45">
                GROUP RESONANCE MEETING POINT
              </span>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{memberGroup.name}</h3>
                  <p className="text-sm text-black/60">{memberGroup.tagline}</p>
                </div>
                <Link href={`/roster/${memberGroup.slug}`} className="arrow-link">
                  View {memberGroup.name} Pattern
                </Link>
              </div>
            </div>
          )}
        </article>
      </main>
    );
  }

  // GROUP DETAIL VIEW
  if (group) {
    return (
      <main className="min-h-screen bg-[#101010] text-white">
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex h-[74px] items-center justify-between border-b border-white/15 bg-[#101010]/90 px-5 backdrop-blur-md md:px-10">
          <Link
            href="/roster"
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-white transition hover:text-[#e8ff43]"
          >
            <ArrowLeft size={16} /> Back to Roster
          </Link>
          <span className="brand-mark text-white">
            ATMOS<span>®</span> // GROUP PATTERN
          </span>
        </div>

        <article className="px-5 pt-28 pb-24 md:px-10 md:pt-36">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.2em] text-[#e8ff43]">
            <span>GROUP PATTERN // {group.name}</span>
            <span>{group.memberCount} MEMBERS</span>
          </div>

          <h1 className="mt-4 text-[clamp(4rem,10vw,11rem)] font-semibold leading-[.8] tracking-[-.07em]">
            {group.name}
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-white/80">
            {group.tagline}
          </p>

          <div className="mt-12 aspect-[21/9] overflow-hidden bg-white/10">
            <img
              src={group.heroImage}
              alt={group.name}
              className="h-full w-full object-cover grayscale"
            />
          </div>

          {/* Members Breakdown */}
          {groupMembers && groupMembers.length > 0 && (
            <section className="mt-24 border-t border-white/20 pt-16">
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#e8ff43]">
                THE INDIVIDUALS IN RESONANCE
              </span>
              <h2 className="mt-2 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
                {group.name} MEMBERS ({groupMembers.length})
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {groupMembers.map((m) => (
                  <Link
                    key={m.id}
                    href={`/roster/${m.slug}`}
                    className="group block border-t border-white/20 pt-6"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-white/10">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">{m.name}</h3>
                    <p className="mt-1 text-xs text-white/50">{m.role}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Unified Group Works Section */}
          {group.works && group.works.length > 0 && (
            <section className="mt-24 border-t border-white/20 pt-16">
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#e8ff43]">
                BODY OF WORK
              </span>
              <h2 className="mt-2 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
                COLLECTIVE RELEASES & WORKS ({group.works.length})
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {group.works.map((work) => (
                  <div
                    key={work.id}
                    className="border-t border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em]">
                      <span className="bg-[#e8ff43] px-2.5 py-1 text-black">
                        {work.discipline}
                      </span>
                      <span className="text-white/50">{work.year}</span>
                    </div>
                    {work.catalogNumber && (
                      <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-[.18em] text-[#e8ff43]">
                        {work.catalogNumber}
                      </span>
                    )}
                    <h3 className="mt-2 text-2xl font-semibold text-white">{work.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{work.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    );
  }

  return null;
}
