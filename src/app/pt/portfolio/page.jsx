'use client';

export default function Portfolio() {
  const projetos = [
    {
      nome: 'BlockStay',
      descricao: 'Sistema de reserva de hospedagem com emissão de NFT como comprovante.',
      tecnologias: 'Solidity, React, ethers.js, IPFS',
      github: 'https://github.com/angelinogonsalves/hackNearx-BlockStay'
    },
    {
      nome: 'LegalMatch',
      descricao: 'Desafio de matchmaking jurídico com afinidade entre perfis.',
      tecnologias: 'MongoDB, Vite, React, Vercel',
      github: 'https://github.com/angelinogonsalves/Desafio_DEV_LEGALAI_Angelino_Gonsalves',
      demo: 'https://desafio-dev-legalai-angelino-gonsalves.vercel.app/'
    },
    {
      nome: 'Gestão Fotografia',
      descricao: 'Sistema para organização de fotos, orçamentos personalizados e envio ao cliente.',
      tecnologias: 'Laravel, MySQL, jQuery, Bootstrap',
      print: true
    },
    {
      nome: 'Gestão Frota',
      descricao: 'Sistema de controle de veículos, abastecimento e manutenção para empresas.',
      tecnologias: 'Laravel, SQL Server, Power BI',
      github: 'https://github.com/angelinogonsalves/gestaofrota',
      demo: 'https://gestaofrota.angelinogonsalves.com/',
      logins: [
        {
          papel: 'Frota',
          email: 'frota@gestaofrota.email',
          senha: '123456'
        },
        {
          papel: 'Financeiro',
          email: 'financeiro@gestaofrota.email',
          senha: '123456'
        },
        {
          papel: 'Gerente de Contas',
          email: 'contas@gestaofrota.email',
          senha: '123456'
        }
      ]
    },
    {
      nome: 'Gestão Água',
      descricao: 'Solução para comunidades gerenciarem consumo, tarifas e relatórios de abastecimento.',
      tecnologias: 'Laravel, MySQL, Multi-tenant',
      print: true
    }
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

            <div className="mt-4 flex gap-4 flex-wrap">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
                >
                  GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-800 dark:text-green-400"
                >
                  Visualizar Online
                </a>
              )}
              {proj.print && (
                <span className="text-gray-400 italic">Prints em breve</span>
              )}
            </div>

            {proj.logins && (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold">Usuários de demonstração:</p>
                <ul className="list-disc ml-6 mt-1">
                  {proj.logins.map((user, i) => (
                    <li key={i}>
                      <strong>{user.papel}:</strong> {user.email} / {user.senha}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
