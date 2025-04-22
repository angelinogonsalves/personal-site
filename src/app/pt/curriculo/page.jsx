'use client';

export default function Curriculo() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Currículo</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experiência Profissional</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold">Techsocial – Desenvolvedor PHP / Tech Lead</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2024</p>
          <p>
            Liderança técnica, desenvolvimento de APIs, otimização de SQL, refatoração de código legado e implantação de integrações com sistemas externos.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Kadosh Systems – Fundador / Full Stack Developer</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2020 – Atual</p>
          <p>
            Criação de sistemas sob demanda, como gestão de frota, controle de água, fotografia, integração com bancos e relatórios.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Baston Aerossóis – Desenvolvedor / Suporte TI</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2019 – 2020</p>
          <p>
            Desenvolvimento de sistemas logísticos e automação de processos com Power BI, SQL Server e Laravel.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Formação Acadêmica</h2>
        <ul className="list-disc ml-6">
          <li>MBA em Business Intelligence – Universidade Positivo (2020)</li>
          <li>Graduação em Gestão Financeira – Universidade Uninter (2013)</li>
        </ul>
      </section>

      <div className="mt-6 text-center">
        <a
          href="/CV_Angelino_Gonsalves_Dev.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 Baixar Currículo em PDF
        </a>
      </div>
    </main>
  );
}
