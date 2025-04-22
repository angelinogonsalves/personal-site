'use client';

export default function Cv() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CV</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Expérience Professionnelle</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Techsocial – Développeur PHP / Chef technique</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2024</p>
          <p>
            Responsable technique, développement d’APIs, optimisation SQL, refonte de code ancien et intégration de systèmes tiers.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Kadosh Systems – Fondateur / Développeur Full Stack</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2020 – Présent</p>
          <p>
            Développement de solutions personnalisées : gestion de flotte, eau communautaire, plateformes de photographie, etc.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Baston Aerossóis – Développeur / Support informatique</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2019 – 2020</p>
          <p>
            Création de systèmes logistiques, automatisation avec Laravel et SQL Server, tableaux de bord Power BI.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Formation</h2>
        <ul className="list-disc ml-6">
          <li>MBA en Business Intelligence – Universidade Positivo (2020)</li>
          <li>Licence en Gestion Financière – Universidade Uninter (2013)</li>
        </ul>
      </section>

      <div className="mt-6 text-center">
        <a
          href="/CV_Angelino_Gonsalves_FR.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 Télécharger le PDF
        </a>
      </div>
    </main>
  );
}
