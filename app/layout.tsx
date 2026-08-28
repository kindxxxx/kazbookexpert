import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileDock } from "@/components/MobileDock";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "KazBookExpert — печать книг в Алматы от 1 экземпляра",
    template: "%s · KazBookExpert",
  },
  description:
    "Типография КазБукЭксперт: печать книг, брошюр и журналов от 1 экземпляра. Мягкий и твердый переплет, доставка по Казахстану. Алматы, ул. Жангельдина, 31.",
  openGraph: {
    title: "KazBookExpert — печать книг в Алматы",
    description:
      "Печать книг от 1 экземпляра до крупных тиражей. Мягкий и твердый переплет, пробный экземпляр при заказе тиража.",
    locale: "ru_KZ",
    type: "website",
    images: ["/images/opt/studio-hero.webp"],
  },
  icons: {
    icon: "/images/original/cropped-favicon-32x32.png",
    apple: "/images/original/cropped-favicon-180x180.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legal,
  image: `${site.domain}/images/opt/studio-hero.webp`,
  telephone: site.phoneDisplay,
  email: site.email,
  url: site.domain,
  address: {
    "@type": "PostalAddress",
    streetAddress: "улица Жангельдина, дом 31",
    addressLocality: "Алматы",
    postalCode: "050000",
    addressCountry: "KZ",
  },
  areaServed: "KZ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-paper font-sans text-ink pb-24 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileDock />
      </body>
    </html>
  );
}
