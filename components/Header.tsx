"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site, whatsappUrl } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 md:px-5">
      <div
        className={`container-page flex items-center justify-between gap-4 rounded-[22px] px-4 py-2.5 transition ${
          scrolled || open
            ? "bg-white/80 shadow-[0_12px_40px_rgba(80,20,0,0.08)] backdrop-blur-xl"
            : "bg-white/45 backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label={site.name} className="relative z-10">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-1 text-[0.88rem] font-medium lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-ink/80 transition hover:bg-black/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phoneTel}`} className="text-[0.82rem] font-medium text-muted">
            {site.phoneDisplay}
          </a>
          <Link href="/#zayavka" className="btn btn-primary !py-2.5 !px-4 text-[0.85rem]">
            Рассчитать <span className="arrow">→</span>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 rounded-full bg-ink px-3.5 py-2 text-sm font-bold text-white lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Закрыть" : "Меню"}
        </button>
      </div>

      {open && (
        <div className="container-page mt-2 rounded-[28px] bg-white p-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display py-1 text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/#zayavka" onClick={() => setOpen(false)} className="btn btn-primary">
              Рассчитать стоимость <span className="arrow">→</span>
            </Link>
            <a href={whatsappUrl()} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
