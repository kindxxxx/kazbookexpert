import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pricing, LargeRun } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Цены на печать книг",
  description:
    "Цены на печать книг короткими тиражами. Мягкий переплет А5 и А4, твердый переплет А5. Минимальный заказ 5 000 тенге.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Прайс"
        title="Цены на печать книг"
        text="В таблицах представлены примеры цен за 1 экземпляр. Цена рассчитывается индивидуально — оставьте заявку или позвоните."
      />
      <Pricing heading={false} />
      <LargeRun />
      <QuoteForm />
    </>
  );
}
