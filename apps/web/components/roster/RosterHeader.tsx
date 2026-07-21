'use client';

interface RosterHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  valleyCount: number;
  prixCount: number;
}

export function RosterHeader({
  activeTab,
  onTabChange,
  valleyCount,
  prixCount,
}: RosterHeaderProps) {
  const tabs = [
    { id: 'all', label: 'All Members (9)' },
    { id: 'valley', label: `VALLEY (${valleyCount})` },
    { id: 'prix', label: `PRIX (${prixCount})` },
    { id: 'solo', label: 'Solo Sovereignty' },
    { id: 'discography', label: 'Discography' },
  ];

  return (
    <header className="border-b border-black/25 pb-10 pt-28 md:pt-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff3b26]">
            ROSTER DIRECTORY // SEOUL
          </span>
          <h1 className="mt-2 text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.85] tracking-[-.07em]">
            THE PERSON
            <br />
            FIRST.
          </h1>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-black/70 md:text-base">
          We don&apos;t build artists. We find people who already are one — whole, formed, specific, interesting to know regardless of what they&apos;d ever be part of.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-black/15 pt-6 text-[11px] font-semibold uppercase tracking-[.18em]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`rounded-full px-5 py-2.5 transition ${
                isActive
                  ? 'bg-black text-white'
                  : 'bg-black/5 text-black hover:bg-black/15'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
