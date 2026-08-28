import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo compact light />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/55">
            Печать книг, брошюр и журналов от 1 экземпляра. Мягкий и твердый
            переплет, помощь с макетом, самовывоз в Алматы и доставка по Казахстану.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">Разделы</p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">Контакты</p>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li>{site.legal}</li>
            <li>БИН {site.bin}</li>
            <li>{site.addressShort}</li>
            <li>
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappUrl()} className="btn btn-primary !py-2 !px-4 text-sm">
              WhatsApp
            </a>
            <a href={site.telegram} className="btn btn-ghost !bg-white/10 !text-white !border-0 !py-2 !px-4 text-sm">
              Telegram
            </a>
            <a href={site.instagram} className="btn btn-ghost !bg-white/10 !text-white !border-0 !py-2 !px-4 text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-white/35 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.legal}</p>
          <p>Алматы · печать книг</p>
        </div>
      </div>
    </footer>
  );
}
