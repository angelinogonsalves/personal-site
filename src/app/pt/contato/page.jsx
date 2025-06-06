'use client';

export default function Contato() {
  return (
    <main className="p-10 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="text-lg mb-6">
        Estou disponível para projetos, parcerias e oportunidades profissionais. Vamos conversar?
      </p>

      <div className="flex flex-col gap-4 items-center">
        <a
          href="https://wa.me/5542999667068"
          target="_blank"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          💬 Falar pelo WhatsApp
        </a>

        <a href="mailto:angelino.gonsalves@gmail.com" className="text-blue-500 hover:underline">
          angelino.gonsalves@gmail.com
        </a>

        <a href="https://linkedin.com/in/angelino-gonsalves" target="_blank" className="text-blue-500 hover:underline">
          linkedin.com/in/angelino-gonsalves
        </a>
      </div>
    </main>
  );
}
