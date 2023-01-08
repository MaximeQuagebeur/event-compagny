import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/events">Évènements</Link>
        <Link href="/about">À propos</Link>
      </nav>
    </header>
  );
}
