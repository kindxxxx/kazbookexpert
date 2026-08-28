import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LargeRun } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Печать большим тиражом",
  description:
    "Печать книг большими тиражами, в цвете и с различными вариантами отделки. Индивидуальный расчет.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Большой тираж"
        title="Печать книг большими тиражами"
        text="Напишите запрос менеджеру и получите быстрый и точный расчет с учетом ваших пожеланий, сроков и необходимых условий. Мы гибко и адекватно подходим к запросам клиентов."
      />
      <div className="py-12">
        <LargeRun />
      </div>
      <QuoteForm />
    </>
  );
}
