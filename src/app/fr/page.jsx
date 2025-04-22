'use client';

import Link from 'next/link';

export default function HomeFr() {
  return (
    <main className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Bonjour, je suis Angelino 👋</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Développeur Web et Tech Lead avec expérience en PHP, Laravel, bases de données, APIs et systèmes personnalisés.
        Créateur de solutions comme BlockStay, LegalMatch et d'autres projets réels.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <Link
          href="/fr/portfolio"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📂 Voir le Portfolio
        </Link>
        <Link
          href="/fr/contact"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📞 Me Contacter
        </Link>
      </div>
    </main>
  );
}
