"use client";

import { useState } from "react";
import { form } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export function QuoteForm({ id = "zayavka" }: { id?: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const text = [
      "Здравствуйте! Нужен расчёт стоимости печати.",
      name && `Имя: ${name}`,
      phone && `Телефон: ${phone}`,
      email && `E-mail: ${email}`,
      message && `Задача: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    setSent(true);
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container-page overflow-hidden rounded-[36px] bg-ink p-6 text-white md:p-4">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#ff3d1f_0%,#ff7a45_55%,#ffc28a_100%)] p-8 lg:col-span-5 md:p-12">
            <p className="kicker !bg-black/20">Заявка</p>
            <h2 className="display mt-6 text-[clamp(2.2rem,4.5vw,4rem)]">{form.title}</h2>
            <p className="mt-5 max-w-md text-white/90 leading-relaxed">
              Оставьте заявку — менеджер проконсультирует, посчитает стоимость и проверит макет.
              Или напишите нам в WhatsApp.
            </p>
          </div>
          <form onSubmit={onSubmit} className="p-6 lg:col-span-7 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{form.fields.name}</span>
                <input required name="name" className="field !text-white !border-white/20" placeholder="Иван" />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{form.fields.phone}</span>
                <input required name="phone" type="tel" className="field !text-white !border-white/20" placeholder="+7" />
              </label>
              <label className="md:col-span-2 block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{form.fields.email}</span>
                <input name="email" type="email" className="field !text-white !border-white/20" placeholder="you@email.com" />
              </label>
              <label className="md:col-span-2 block">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">{form.fields.message}</span>
                <textarea required name="message" rows={4} className="field !text-white !border-white/20 resize-none" placeholder="Формат, тираж, переплёт, цветность…" />
              </label>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" className="btn btn-primary">
                {form.submit} <span className="arrow">→</span>
              </button>
              {sent && <p className="text-sm text-white/55">Открываем WhatsApp с вашим запросом.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
