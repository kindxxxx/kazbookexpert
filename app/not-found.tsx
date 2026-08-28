import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-40">
      <p className="kicker">404</p>
      <h1 className="display mt-4 text-5xl">Страница не найдена</h1>
      <Link href="/" className="btn btn-primary mt-8">
        На главную <span className="arrow">→</span>
      </Link>
    </section>
  );
}
