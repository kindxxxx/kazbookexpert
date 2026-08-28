import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  advantages,
  bindings,
  faq,
  formats,
  largeRun,
  marketplaces,
  priceTables,
  pricingIntro,
  process,
  quality,
  reviews,
  sample,
} from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

export function Bindings({ heading = true }: { heading?: boolean }) {
  return (
    <section id="uslugi" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        {heading && (
          <Reveal>
            <p className="kicker">{bindings.kicker}</p>
            <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,4.4rem)]">
              {bindings.title}
            </h2>
          </Reveal>
        )}

        <div className={`grid gap-4 md:grid-cols-12 md:gap-5 ${heading ? "mt-12" : ""}`}>
          {bindings.items.map((item, i) => {
            const wide = i === 0 || i === 5;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group img-zoom relative overflow-hidden rounded-[28px] ${
                  wide ? "md:col-span-7 min-h-[340px]" : "md:col-span-5 min-h-[280px]"
                } ${i === 1 ? "md:mt-10" : ""} ${i === 4 ? "md:-mt-6" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161310]/80 via-[#161310]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream md:p-8">
                  <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em]">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 max-w-[16ch] text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Advantages() {
  const tints = [
    "bg-white",
    "bg-[#ff3d1f] text-white",
    "bg-[#140d0a] text-white",
    "bg-[#ffe1c4]",
    "bg-white",
    "bg-[#ffd2c4]",
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">Почему мы</p>
          <h2 className="display mt-5 max-w-[16ch] text-[clamp(2.2rem,5vw,4.6rem)]">
            {advantages.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {advantages.items.map((item, i) => (
            <article
              key={item.n}
              className={`rounded-[28px] p-7 md:p-8 ${tints[i]} ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <p className={`display text-5xl ${i === 1 || i === 2 ? "text-white/40" : "text-accent"}`}>
                {item.n}
              </p>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{item.title}</h3>
              <p className={`mt-3 leading-relaxed ${i === 1 || i === 2 ? "text-white/75" : "text-muted"}`}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Formats({ heading = true }: { heading?: boolean }) {
  return (
    <section id="formaty" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        {heading && (
          <Reveal>
            <p className="kicker">Размеры</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.4rem)]">{formats.title}</h2>
          </Reveal>
        )}
        <div className={`grid gap-6 lg:grid-cols-2 ${heading ? "mt-12" : ""}`}>
          <Reveal>
            <article className="paper-card overflow-hidden p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Standard</p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{formats.standard.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{formats.standard.text}</p>
              <img
                src="/images/opt/studio-formats.webp"
                alt="Сравнение форматов книг"
                className="mt-8 w-full rounded-[16px] object-cover"
              />
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="overflow-hidden rounded-[28px] bg-ink p-8 text-cream md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Custom</p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{formats.custom.title}</h3>
              <p className="mt-4 text-white/65 leading-relaxed">{formats.custom.text}</p>
              <p className="display mt-8 text-5xl text-accent">A7 → A3</p>
            </article>
          </Reveal>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {formats.sizes.map((s) => (
            <div
              key={s.name}
              className="min-w-[140px] flex-1 rounded-[22px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(80,20,0,0.05)]"
            >
              <p className="display text-2xl">{s.name}</p>
              <p className="mt-2 text-sm text-ink">{s.size} мм</p>
              <p className="mt-1 text-xs text-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Marketplaces() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker">Печать по требованию</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,4rem)]">{marketplaces.title}</h2>
            <p className="mt-5 text-lg text-ink-soft">{marketplaces.lead}</p>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">{marketplaces.text}</p>
            <Link href="/marketplejsy" className="btn btn-primary mt-8">
              {marketplaces.cta} <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <div className="relative">
            <img
              src="/images/opt/studio-market.webp"
              alt=""
              className="w-full rounded-[28px] object-cover"
            />
            <div className="absolute -bottom-6 -left-2 flex gap-2 md:-left-6">
              {["Kaspi.kz", "Flip.kz", "и другие"].map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-line bg-cream px-4 py-2 text-sm shadow-sm"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section id="ceny" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        {heading && (
          <Reveal>
            <p className="kicker">{pricingIntro.kicker}</p>
            <h2 className="display mt-4 max-w-[16ch] text-[clamp(2.2rem,5vw,4.4rem)]">
              {pricingIntro.title}
            </h2>
            <p className="mt-5 max-w-2xl text-muted leading-relaxed">{pricingIntro.text}</p>
          </Reveal>
        )}

        <div className={`grid gap-6 ${heading ? "mt-10" : ""}`}>
          {priceTables.map((table) => (
            <div
              key={table.id}
              className="overflow-x-auto rounded-[28px] bg-white shadow-[0_20px_50px_rgba(80,20,0,0.06)]"
            >
              <div className="min-w-[640px] p-4 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{table.group}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{table.title}</h3>
                <p className="mt-1 text-sm text-muted">{table.spec}</p>
                <table className="mt-6 w-full text-left">
                  <thead>
                    <tr className="border-b border-line text-xs uppercase tracking-[0.14em] text-muted">
                      <th className="py-3 pr-4 font-medium">Тираж</th>
                      {table.columns.map((c) => (
                        <th key={c} className="py-3 pr-4 font-medium">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.run} className="border-b border-line/70 last:border-0">
                        <td className="py-4 pr-4 font-medium">{row.run}</td>
                        {row.prices.map((p, i) => (
                          <td key={`${row.run}-${i}`} className="py-4 pr-4 tabular-nums">
                            {p} ₸
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{pricingIntro.note}</p>
        <Link href="/#zayavka" className="btn btn-primary mt-8">
          Рассчитать мой заказ <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export function LargeRun() {
  return (
    <section className="py-8">
      <div className="container-page overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#ff3d1f_0%,#ff7a3d_52%,#ffb070_100%)] px-6 py-12 text-white md:px-14 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="display text-[clamp(2rem,4vw,3.6rem)]">{largeRun.title}</h2>
            <p className="mt-5 max-w-2xl text-white/85 leading-relaxed">{largeRun.text}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/#zayavka" className="btn btn-light">
              {largeRun.cta} <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sample() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:order-2">
          <img src="/images/opt/studio-finished.webp" alt="" className="w-full rounded-[28px] object-cover" />
        </div>
        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker">Пилотный экземпляр</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,3.8rem)]">{sample.title}</h2>
            <p className="mt-5 max-w-xl text-muted leading-relaxed">{sample.text}</p>
            <a href={whatsappUrl("Здравствуйте! Хочу обсудить заказ и пробный экземпляр.")} className="btn btn-primary mt-8">
              {sample.cta} <span className="arrow">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">Как это работает</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)]">{process.title}</h2>
          <p className="mt-4 max-w-xl text-muted">{process.lead}</p>
        </Reveal>
      </div>
      <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-4 md:px-[max(20px,calc((100%-1240px)/2+20px))]">
        {process.steps.map((step) => (
          <article
            key={step.n}
            className="min-w-[280px] max-w-[420px] flex-1 rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(80,20,0,0.06)] md:min-w-[360px] md:p-10"
          >
            <p className="display text-6xl text-accent">{step.n}</p>
            <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-tight">{step.title}</h3>
            <p className="mt-4 text-muted leading-relaxed">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">Отзывы</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4.2rem)]">Что говорят заказчики</h2>
        </Reveal>
      </div>
      <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-6 md:px-[max(20px,calc((100%-1240px)/2+20px))]">
        {reviews.map((r, i) => (
          <article
            key={r.name}
            className={`min-w-[300px] max-w-[440px] flex-1 rounded-[28px] p-7 md:p-9 ${
              i % 2 === 0 ? "bg-ink text-white" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight">{r.title}</h3>
            <p className={`mt-5 text-[0.95rem] leading-relaxed ${i % 2 === 0 ? "text-white/70" : "text-muted"}`}>
              {r.body}
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-accent">{r.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <p className="kicker">Контроль качества</p>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(2.1rem,4.6vw,4rem)]">
            {quality.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {quality.items.map((item, i) => (
            <article
              key={item.n}
              className={`overflow-hidden rounded-[28px] bg-white ${i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
            >
              <div className="img-zoom min-h-[200px]">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-7 md:p-10">
                <p className="display text-3xl text-accent">{item.n}</p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">FAQ</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.6rem)]">Частые вопросы</h2>
        </div>
        <div className="lg:col-span-8">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line py-5"
            >
              <summary className="cursor-pointer list-none text-lg md:text-xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-muted leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contacts() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
  return (
    <section id="kontakty" className="scroll-mt-24 pb-28 pt-8 md:pb-16">
      <div className="container-page grid gap-8 lg:grid-cols-12">
        <div className="paper-card p-8 lg:col-span-5 md:p-10">
          <p className="kicker">Контактная информация</p>
          <h2 className="display mt-4 text-4xl">{site.legal}</h2>
          <ul className="mt-8 space-y-3 text-ink-soft">
            <li>БИН {site.bin}</li>
            <li>{site.address}</li>
            <li>
              Телефон:{" "}
              <a className="underline decoration-line underline-offset-4" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a className="underline decoration-line underline-offset-4" href={whatsappUrl()}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a className="underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-muted">Звоните и пишите, приходите в гости!</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneTel}`} className="btn btn-primary">Позвонить</a>
            <a href={whatsappUrl()} className="btn btn-ghost">WhatsApp</a>
            <a href={site.telegram} className="btn btn-ghost">Telegram</a>
            <a href={site.instagram} className="btn btn-ghost">Instagram</a>
          </div>
        </div>
        <div className="min-h-[320px] overflow-hidden rounded-[28px] lg:col-span-7">
          <iframe
            title="Карта — КазБукЭксперт"
            src={mapSrc}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function IllustrationsStrip() {
  const items = [
    "Печать от 1 экземпляра",
    "Мягкий и твердый переплёт",
    "Цифровое оборудование",
    "Доставка по Казахстану",
    "Пробный экземпляр",
    "Kaspi QR",
  ];

  return (
    <section className="py-10">
      <div className="overflow-hidden border-y border-black/5 py-3">
        <div className="marquee-track gap-10 pr-10 text-sm font-extrabold uppercase tracking-[0.18em] text-ink/70">
          {[...items, ...items].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-10">
              <span className="text-accent">●</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
