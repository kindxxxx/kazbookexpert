import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { bindings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Печать книг",
  description:
    "Печать книг, брошюр и журналов от 1 экземпляра в Алматы. Мягкий и твердый переплет, цветная и черно-белая печать.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Услуги"
        title="Печать книг, брошюр и журналов"
        text="Быстрая и недорогая печать книг, брошюр и журналов от 1 экземпляра. Черно-белая и цветная печать, мягкий и твердый переплет, помощь в верстке и дизайне."
      />
      <section className="container-page grid gap-4 py-16 md:grid-cols-2">
        {bindings.items.map((item) => (
          <Link key={item.title} href={item.href} className="paper-card img-zoom overflow-hidden">
            <div className="h-52">
              <img src={item.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">{item.tag}</p>
              <h2 className="mt-2 font-serif text-2xl">{item.title}</h2>
            </div>
          </Link>
        ))}
      </section>
      <QuoteForm />
    </>
  );
}
