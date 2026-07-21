'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import type { DiscographyRelease } from '../../data/roster';

interface DiscographyStreamProps {
  releases: DiscographyRelease[];
}

export function DiscographyStream({ releases }: DiscographyStreamProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="border-t border-black/30 pt-12 pb-24">
      <div className="flex items-end justify-between border-b border-black/30 pb-5">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff3b26]">
            CATALOG RELEASES
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-none tracking-[-.065em] uppercase">
            DISCOGRAPHY STREAM
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {releases.map((release) => {
          const isPlaying = playingId === release.id;
          return (
            <div
              key={release.id}
              className="group flex flex-col justify-between border-t border-black/20 pt-6 md:flex-row md:items-center"
            >
              <div className="flex gap-4">
                <img
                  src={release.coverImage}
                  alt={release.title}
                  className="size-20 object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#ff3b26]">
                    {release.catalogNumber}
                  </span>
                  <h3 className="text-xl font-semibold">{release.title}</h3>
                  <p className="text-xs text-black/60">{release.artist}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[.15em] text-black/45">
                    {release.trackCount} Tracks · {release.duration} ({release.year})
                  </p>
                </div>
              </div>

              <button
                onClick={() => togglePlay(release.id)}
                className={`mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[.15em] transition md:mt-0 ${
                  isPlaying
                    ? 'bg-[#ff3b26] text-white'
                    : 'bg-black text-white hover:bg-black/80'
                }`}
                aria-label={isPlaying ? `Pause ${release.title}` : `Play ${release.title}`}
              >
                {isPlaying ? (
                  <>
                    <Pause size={14} fill="currentColor" /> Playing
                  </>
                ) : (
                  <>
                    <Play size={14} fill="currentColor" /> Preview
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
