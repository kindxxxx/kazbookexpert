export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="pt-36 pb-14 md:pt-44 md:pb-20">
      <div className="container-page">
        <p className="kicker">{kicker}</p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.8rem,7vw,5.8rem)]">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>}
      </div>
    </section>
  );
}
