'use client';

export default function PortfolioEn() {
  const projects = [
    {
      name: 'Kadosh BlockStay',
      description: 'A decentralized platform for booking stays using NFTs as proof of reservation.',
      tech: 'Solidity, React, ethers.js, IPFS',
    },
    {
      name: 'Kadosh LegalMatch',
      description: 'A legal matchmaking system based on user profiles and preferences.',
      tech: 'MongoDB, Vite, React, Vercel',
    },
    {
      name: 'Kadosh PhotoManager',
      description: 'Custom solution for managing photography sessions, quotes, and client galleries.',
      tech: 'Laravel, MySQL, jQuery, Bootstrap',
    },
    {
      name: 'Kadosh FleetManager',
      description: 'Fleet management system for tracking vehicles, fuel, maintenance, and reports.',
      tech: 'Laravel, SQL Server, Power BI',
    },
    {
      name: 'Kadosh AquaCom',
      description: 'Community water management with multi-user access, metering, billing, and reports.',
      tech: 'Laravel, MySQL, Multi-tenant',
    },
  ];

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      <div className="grid gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="border rounded-lg p-4 shadow dark:border-gray-700">
            <h2 className="text-xl font-semibold">{proj.name}</h2>
            <p className="mt-2">{proj.description}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              <strong>Technologies:</strong> {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
