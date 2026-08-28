import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Marketplaces } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Продажа книг на маркетплейсах",
  description:
    "Организация продаж книг на Kaspi.kz, Flip.kz и других маркетплейсах в режиме печати по требованию.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Дистрибуция"
        title="Помощь в продаже вашей книги"
        text="Вместе с нами вы можете запустить продажи своих книг на маркетплейсах Kaspi.kz, Flip.kz и других. Для авторов и издательств — сервис печати по требованию."
      />
      <Marketplaces />
      <QuoteForm />
    </>
  );
}
