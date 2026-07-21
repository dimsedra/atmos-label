'use client';

export function RosterHeader() {
  return (
    <header className="border-b border-black/25 pb-12 pt-28 md:pt-36">
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

        <p className="max-w-md text-sm leading-relaxed text-black/75 md:text-base">
          We don&apos;t build artists. We find people who already are one — whole, formed, specific, and self-contained, regardless of what collective they belong to.
        </p>
      </div>
    </header>
  );
}
