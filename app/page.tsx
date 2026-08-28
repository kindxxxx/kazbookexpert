import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Advantages,
  Bindings,
  Contacts,
  FAQ,
  Formats,
  IllustrationsStrip,
  LargeRun,
  Marketplaces,
  Pricing,
  Process,
  Quality,
  Reviews,
  Sample,
} from "@/components/home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IllustrationsStrip />
      <Bindings />
      <Advantages />
      <Formats />
      <Pricing />
      <LargeRun />
      <Marketplaces />
      <Sample />
      <Process />
      <Reviews />
      <Quality />
      <FAQ />
      <QuoteForm />
      <Contacts />
    </>
  );
}
