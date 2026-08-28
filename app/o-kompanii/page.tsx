import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "ТОО «КазБукЭксперт» — цифровая печать книг в Казахстане с 2009 года. Алматы, ул. Жангельдина, 31.",
};

export default function Page() {
  return (
    <>
      <PageHero kicker="Типография" title={about.title} text={about.lead} />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-7">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <p>{about.p3}</p>
          <p>{about.p4}</p>
          <p>{about.p5}</p>
        </div>
        <img
          src="/images/opt/studio-shop.webp"
          alt="Производство Бук Эксперт"
          className="rounded-[16px] object-cover lg:col-span-5"
        />
      </section>
      <section className="bg-cream py-16">
        <div className="container-page">
          <h2 className="display text-4xl">{about.extrasTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {about.extras.map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
