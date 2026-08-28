import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Печать книг малым тиражом",
  description: "Печать книг малым тиражом от 1 экземпляра. Цифровая печать в Алматы.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Малый тираж"
        title="Печать книг малым тиражом"
        text="Цифровая печать как нельзя лучше подходит для малых и средних тиражей, а также в условиях ограниченного времени. Печатаем от 1 экземпляра. Минимальный заказ — 5 000 тенге."
      />
      <section className="container-page grid gap-8 py-16 lg:grid-cols-2">
        <img src="/images/opt/studio-small-run.webp" alt="Печать малым тиражом" className="rounded-[16px] object-cover" />
        <div className="self-center">
          <p className="text-muted leading-relaxed">
            Основными преимуществами цифровой печати являются: скорость, возможность быстрой корректуры исходных файлов, возможность печати тиража с переменными данными (например, персонализация).
          </p>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
