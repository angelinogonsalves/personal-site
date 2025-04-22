'use client';

export default function Portfolio() {
  const projetos = [
    {
      nome: 'BlockStay',
      descricao: 'Sistema de reserva de hospedagem com emissão de NFT como comprovante.',
      tecnologias: 'Solidity, React, ethers.js, IPFS',
    },
    {
      nome: 'LegalMatch',
      descricao: 'Desafio de matchmaking jurídico com afinidade entre perfis.',
      tecnologias: 'MongoDB, Vite, React, Vercel',
    },
    {
      nome: 'Gestão Fotografia',
      descricao: 'Sistema para organização de fotos, orçamentos personalizados e envio ao cliente.',
      tecnologias: 'Laravel, MySQL, jQuery, Bootstrap',
    },
    {
      nome: 'Gestão Frota',
      descricao: 'Sistema de controle de veículos, abastecimento e manutenção para empresas.',
      tecnologias: 'Laravel, SQL Server, Power BI',
    },
    {
      nome: 'Gestão Água',
      descricao: 'Solução para comunidades gerenciarem consumo, tarifas e relatórios de abastecimento.',
      tecnologias: 'Laravel, MySQL, Multi-tenant',
    },
  ];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfólio</h1>

      <div className="grid gap-6">
        {projetos.map((proj, index) => (
          <div key={index} className="border rounded-lg p-4 shadow dark:border-gray-700">
            <h2 className="text-xl font-semibold">{proj.nome}</h2>
            <p className="mt-2">{proj.descricao}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <strong>Tecnologias:</strong> {proj.tecnologias}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
