'use client';

export default function PortfolioFr() {
  const projets = [
    {
      name: 'Kadosh BlockStay',
      description: 'Plateforme décentralisée de réservation avec NFT comme preuve de séjour.',
      tech: 'Solidity, React, ethers.js, IPFS',
    },
    {
      name: 'Kadosh LegalMatch',
      description: 'Système de mise en relation juridique basé sur des profils et préférences.',
      tech: 'MongoDB, Vite, React, Vercel',
    },
    {
      name: 'Kadosh PhotoManager',
      description: 'Solution personnalisée pour gérer les séances photo, devis et galeries clients.',
      tech: 'Laravel, MySQL, jQuery, Bootstrap',
    },
    {
      name: 'Kadosh FleetManager',
      description: 'Gestion de flotte pour suivi des véhicules, carburant, maintenance et rapports.',
      tech: 'Laravel, SQL Server, Power BI',
    },
    {
      name: 'Kadosh AquaCom',
      description: 'Gestion communautaire de l’eau avec relevés, facturation et rapports multi-usagers.',
      tech: 'Laravel, MySQL, Multi-tenant',
    },
  ];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      <div className="grid gap-6">
        {projets.map((proj, index) => (
          <div key={index} className="border rounded-lg p-4 shadow dark:border-gray-700">
            <h2 className="text-xl font-semibold">{proj.name}</h2>
            <p className="mt-2">{proj.description}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <strong>Technologies :</strong> {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
