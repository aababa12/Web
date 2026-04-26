import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="home-card">
        <p className="eyebrow eyebrow-latin">Next.js App Router</p>
        <h1>הפרויקט מוכן</h1>
        <p>הפרויקט מותאם עכשיו לעברית ולפריסה תקינה מימין לשמאל.</p>
        <Link className="primary-link" href="/lead">
          מעבר לדף הליד
        </Link>
      </div>
    </main>
  );
}
