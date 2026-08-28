import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="mobile-dock fixed inset-x-0 bottom-0 z-50 px-3 pb-2 md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-[22px] bg-white/90 p-2 shadow-[0_12px_40px_rgba(80,20,0,0.12)] backdrop-blur-xl">
        <a href={whatsappUrl()} className="btn btn-ghost !py-3 text-sm">
          WhatsApp
        </a>
        <Link href="/#zayavka" className="btn btn-primary !py-3 text-sm">
          Расчёт <span className="arrow">→</span>
        </Link>
      </div>
      <a href={`tel:${site.phoneTel}`} className="mt-1 block text-center text-[0.7rem] text-muted">
        {site.phoneDisplay}
      </a>
    </div>
  );
}
