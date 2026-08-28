import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Formats } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Форматы книг",
  description:
    "Стандартные и нестандартные форматы печати книг: от 70×97 мм (А7) до 303×404 мм (А3).",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Размеры"
        title="Форматы для печати книг"
        text="Минимальный размер для стандартного производства 100×125. Нестандартные форматы — вертикальные и горизонтальные от 70×97 (А7) до 303×404 (А3)."
      />
      <Formats heading={false} />
      <QuoteForm />
    </>
  );
}
