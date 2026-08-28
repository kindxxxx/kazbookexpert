import Link from "next/link";
import { Reveal } from "./Reveal";
import { hero } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="container-page pb-6 lg:pb-10">
        <Reveal>
          <p className="kicker">{hero.kicker}</p>
          <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.8rem,7.4vw,6.6rem)]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-muted text-pretty md:text-lg">
            {hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#zayavka" className="btn btn-primary">
              {hero.primaryCta} <span className="arrow">→</span>
            </Link>
            <a href={whatsappUrl("Здравствуйте! Нужен расчёт печати книги.")} className="btn btn-ghost">
              {hero.secondaryCta}
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-ink/50">
            {site.addressShort} · {site.phoneDisplay}
          </p>
        </Reveal>
      </div>

      <div className="container-page mt-6 md:mt-4">
        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] bg-ink text-white md:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.label} className="border-white/10 px-5 py-6 max-md:border-b md:border-r md:last:border-r-0 [&:nth-child(odd)]:max-md:border-r">
              <p className="display text-[1.7rem] text-accent md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
