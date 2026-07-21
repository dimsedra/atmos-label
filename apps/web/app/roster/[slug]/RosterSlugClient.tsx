'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Pause, Play, Sparkles } from 'lucide-react';
import type { DiscographyRelease, GroupProfile, MemberProfile } from '../../../data/roster';
import { DiscographyStream } from '../../../components/roster/DiscographyStream';

interface RosterSlugClientProps {
  member?: MemberProfile;
  group?: GroupProfile;
  memberGroup?: GroupProfile;
  groupMembers?: MemberProfile[];
  releases?: DiscographyRelease[];
}

export function RosterSlugClient({
  member,
  group,
  memberGroup,
  groupMembers,
  releases = [],
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

          {/* Solo Sovereignty Showcase */}
          <section className="mt-24 border-t border-black/30 pt-16">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#ff3b26]" size={20} />
              <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
                SOLO SOVEREIGNTY PROJECTS
              </span>
            </div>
            <h2 className="mt-2 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.06em] uppercase">
              WORK OUTSIDE THE GROUP
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {member.soloSovereignty.map((project, idx) => (
                <div
                  key={idx}
                  className="border-t border-black/20 bg-white/50 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.18em]">
                    <span className="bg-[#e8ff43] px-2.5 py-1 text-black">
                      {project.type}
                    </span>
                    <span className="text-black/50">{project.year}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-black/70">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Audio Track Player */}
          {member.featuredTrack && (
            <section className="mt-16 rounded-2xl bg-black p-8 text-white">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#e8ff43]">
                    FEATURED AUDIO STREAM
                  </span>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-.04em]">
                    {member.featuredTrack.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">
                    Solo Work · {member.name}
                  </p>
                </div>

                <button
                  onClick={() => toggleTrack(member.featuredTrack!.title)}
                  className="flex items-center gap-3 rounded-full bg-[#ff3b26] px-6 py-3.5 text-xs font-semibold uppercase tracking-[.18em] text-white transition hover:scale-105"
                >
                  {playingTrack === member.featuredTrack.title ? (
                    <>
                      <Pause fill="currentColor" size={16} /> Pause Track
                    </>
                  ) : (
                    <>
                      <Play fill="currentColor" size={16} /> Preview Track ({member.featuredTrack.duration})
                    </>
                  )}
                </button>
              </div>
            </section>
          )}

          {/* Discography Stream for Member */}
          {releases.length > 0 && (
            <section className="mt-24">
              <DiscographyStream releases={releases} />
            </section>
          )}

          {/* Group Resonance Link */}
          {memberGroup && (
            <div className="mt-20 border-t border-black/20 pt-8">
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

          {/* Discography Stream for Collective */}
          {releases.length > 0 && (
            <section className="mt-24 border-t border-white/20 pt-12">
              <DiscographyStream releases={releases} />
            </section>
          )}
        </article>
      </main>
    );
  }

  return null;
}
