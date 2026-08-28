export const site = {
  name: "KazBookExpert",
  nameRu: "КазБукЭксперт",
  legal: "ТОО «КазБукЭксперт»",
  bin: "220440051658",
  phoneDisplay: "+7 (771) 709-28-27",
  phoneTel: "+77717092827",
  whatsapp: "77717092827",
  email: "info@book-expert.kz",
  address:
    "Казахстан, город Алматы, Медеуский район, улица Жангельдина, дом 31, 050000",
  addressShort: "Алматы, ул. Жангельдина, 31",
  mapsQuery: "Алматы, улица Жангельдина, 31",
  instagram: "https://www.instagram.com/bookexpertkz/",
  telegram: "https://t.me/kazbookexpert",
  telegramChannel: "https://t.me/+jLXAcLxyN9MzZjMy",
  domain: "https://book-expert.kz",
} as const;

export const whatsappUrl = (text?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const nav = [
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#formaty", label: "Форматы" },
  { href: "/#ceny", label: "Цены" },
  { href: "/#process", label: "Заказ" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
] as const;

export const footerNav = [
  { href: "/pechat-knig", label: "Печать книг" },
  { href: "/ceny", label: "Цены" },
  { href: "/pereplety", label: "Переплёты" },
  { href: "/formaty", label: "Форматы" },
  { href: "/bolshoj-tirazh", label: "Большие тиражи" },
  { href: "/marketplejsy", label: "Маркетплейсы" },
  { href: "/kontakty", label: "Контакты" },
] as const;
