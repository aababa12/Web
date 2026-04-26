import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="home-card">
        <p className="eyebrow">Next.js App Router</p>
        <h1>הפרויקט מוכן</h1>
        <p>יצרתי בסיס מינימלי של אפליקציית Next ודף lead נפרד.</p>
        <Link className="primary-link" href="/lead">
          מעבר לדף הליד
        </Link>
      </div>
    </main>
  );
}
