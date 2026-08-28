import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Bindings } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Виды переплетов",
  description:
    "Твердый переплет, мягкий переплет, шитье КШС и интегральный переплет. Печать книг в Алматы.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Переплёт"
        title="Виды переплетов книг"
        text="Печатаем книги в твердом и мягком переплете, с шитьем КШС и в интегральном переплете."
      />
      <Bindings heading={false} />
      <QuoteForm />
    </>
  );
}
