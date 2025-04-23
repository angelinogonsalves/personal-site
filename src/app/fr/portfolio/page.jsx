'use client';

export default function Portfolio() {
  const projets = [
    {
      nom: 'FleetManager',
      description: 'Système de gestion de flotte : carburant, maintenance et véhicules.',
      technologies: 'Laravel, SQL Server, Power BI',
      github: 'https://github.com/angelinogonsalves/gestaofrota',
      demo: 'https://gestaofrota.angelinogonsalves.com/',
      logins: [
        {
          role: 'Flotte',
          email: 'frota@gestaofrota.email',
          password: '123456'
        },
        {
          role: 'Finances',
          email: 'financeiro@gestaofrota.email',
          password: '123456'
        },
        {
          role: 'Gestionnaire de comptes',
          email: 'contas@gestaofrota.email',
          password: '123456'
        }
      ]
    },
    {
      nom: 'PhotoManager',
      description: 'Système pour organiser des photos, devis personnalisés et envoi aux clients.',
      technologies: 'Laravel, MySQL, jQuery, Bootstrap',
      print: true
    },
    {
      nom: 'AquaCom',
      description: 'Solution pour les communautés afin de gérer la consommation d\'eau, les tarifs et les rapports.',
      technologies: 'Laravel, MySQL, Multi-tenant',
      print: true
    },
    {
      nom: 'BlockStay',
      description: 'Défi Hackathon : Système de réservation d\'hébergement avec émission de NFT comme preuve.',
      technologies: 'Solidity, React, ethers.js, IPFS',
      github: 'https://github.com/angelinogonsalves/hackNearx-BlockStay'
    },
    {
      nome: 'Kuverse MVP',
      descricao: 'Défi : Développement d\'un smart contract ERC-721 avec connexion via portefeuille Web3.',
      tecnologias: 'Solidity, Hardhat, ethers.js, MetaMask, React',
      github: 'https://github.com/angelinogonsalves/kuverse-mvp',
      video: 'https://www.loom.com/share/075c88ed34a1423685b42e2f4bf57bb4?sid=0e33612f-8a0f-44a1-bdb4-c514e2bc5924'
    },
    {
      nom: 'LegalMatch',
      description: 'Défi : Appariement basé sur l\'affinité entre profils.',
      technologies: 'MongoDB, Vite, React, Vercel',
      github: 'https://github.com/angelinogonsalves/Desafio_DEV_LEGALAI_Angelino_Gonsalves',
      demo: 'https://desafio-dev-legalai-angelinogonsalves.vercel.app/'
    }  
  ];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portefeuille</h1>

      <div className="grid gap-6">
        {projets.map((proj, index) => (
          <div key={index} className="border rounded-lg p-4 shadow dark:border-gray-700">
            <h2 className="text-xl font-semibold">{proj.nom}</h2>
            <p className="mt-2">{proj.description}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <strong>Technologies :</strong> {proj.technologies}
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
                  Voir en ligne
                </a>
              )}
              {proj.video && (
                <a
                  href={proj.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline hover:text-purple-800 dark:text-purple-400"
                >
                  Voir la présentation
                </a>
              )}
              {proj.print && (
                <span className="text-gray-400 italic">Captures d'écran bientôt disponibles</span>
              )}
            </div>

            {proj.logins && (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold">Comptes de démonstration :</p>
                <ul className="list-disc ml-6 mt-1">
                  {proj.logins.map((user, i) => (
                    <li key={i}>
                      <strong>{user.role} :</strong> {user.email} / {user.password}
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
