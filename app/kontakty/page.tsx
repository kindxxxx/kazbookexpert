import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Contacts } from "@/components/home/Sections";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `ТОО «КазБукЭксперт», ${site.addressShort}. Телефон ${site.phoneDisplay}, ${site.email}.`,
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Связь"
        title="Контакты"
        text={`${site.legal}. ${site.address}. Звоните и пишите, приходите в гости!`}
      />
      <QuoteForm />
      <Contacts />
    </>
  );
}
