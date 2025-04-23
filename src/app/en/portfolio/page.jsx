'use client';

export default function Portfolio() {
  const projects = [
    {
      name: 'BlockStay',
      description: 'Hotel booking system with NFT issuance as proof of reservation.',
      technologies: 'Solidity, React, ethers.js, IPFS',
      github: 'https://github.com/angelinogonsalves/hackNearx-BlockStay'
    },
    {
      name: 'LegalMatch',
      description: 'Legal matchmaking challenge with profile affinity.',
      technologies: 'MongoDB, Vite, React, Vercel',
      github: 'https://github.com/angelinogonsalves/Desafio_DEV_LEGALAI_Angelino_Gonsalves',
      demo: 'https://desafio-dev-legalai-angelinogonsalves.vercel.app/'
    },
    {
      name: 'PhotoManager',
      description: 'System for organizing photos, sending personalized quotes and delivery to clients.',
      technologies: 'Laravel, MySQL, jQuery, Bootstrap',
      print: true
    },
    {
      name: 'FleetManager',
      description: 'Vehicle management system with fuel tracking and maintenance control.',
      technologies: 'Laravel, SQL Server, Power BI',
      github: 'https://github.com/angelinogonsalves/gestaofrota',
      demo: 'https://gestaofrota.angelinogonsalves.com/',
      logins: [
        {
          role: 'Fleet',
          email: 'frota@gestaofrota.email',
          password: '123456'
        },
        {
          role: 'Finance',
          email: 'financeiro@gestaofrota.email',
          password: '123456'
        },
        {
          role: 'Account Manager',
          email: 'contas@gestaofrota.email',
          password: '123456'
        }
      ]
    },
    {
      name: 'AquaCom',
      description: 'Solution for communities to manage water consumption, tariffs, and reports.',
      technologies: 'Laravel, MySQL, Multi-tenant',
      print: true
    }
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
              <strong>Technologies:</strong> {proj.technologies}
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
                  View Online
                </a>
              )}
              {proj.print && (
                <span className="text-gray-400 italic">Screenshots coming soon</span>
              )}
            </div>

            {proj.logins && (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold">Demo Logins:</p>
                <ul className="list-disc ml-6 mt-1">
                  {proj.logins.map((user, i) => (
                    <li key={i}>
                      <strong>{user.role}:</strong> {user.email} / {user.password}
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
