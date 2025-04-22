'use client';

import Link from 'next/link';

export default function HomePt() {
  return (
    <main className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Olá, eu sou o Angelino 👋</h1>
      <p className="text-lg mb-6 leading-relaxed">
        Desenvolvedor Web e Tech Lead com experiência em PHP, Laravel, banco de dados, APIs e sistemas personalizados. 
        Criador de soluções como BlockStay, LegalMatch e outros projetos práticos para empresas reais.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <Link
          href="/pt/portfolio"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📂 Ver Portfólio
        </Link>
        <Link
          href="/pt/contato"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📞 Fale Comigo
        </Link>
      </div>
    </main>
  );
}
