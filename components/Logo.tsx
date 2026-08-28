export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={`grid grid-cols-2 gap-[3px] ${compact ? "h-8 w-8" : "h-9 w-9"}`}
      >
        <span className={`rounded-[5px] ${light ? "bg-white" : "bg-ink"}`} />
        <span className="rounded-[5px] bg-accent" />
        <span className="rounded-[5px] bg-[#ffb088]" />
        <span className={`rounded-[5px] ${light ? "bg-white/70" : "bg-ink/80"}`} />
      </span>
      <span className={`block font-extrabold tracking-[-0.05em] ${light ? "text-white" : "text-ink"} ${compact ? "text-[1.15rem]" : "text-[1.28rem]"}`}>
        KazBookExpert
      </span>
    </span>
  );
}
