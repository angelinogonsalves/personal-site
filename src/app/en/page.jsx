'use client';

import Link from 'next/link';

export default function HomeEn() {
  return (
    <main className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Angelino 👋</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Web Developer and Tech Lead with experience in PHP, Laravel, databases, APIs, and tailored systems.
        Creator of solutions like BlockStay, LegalMatch, and other real-world applications.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <Link
          href="/en/portfolio"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📂 View Portfolio
        </Link>
        <Link
          href="/en/contact"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📞 Contact Me
        </Link>
      </div>
    </main>
  );
}
