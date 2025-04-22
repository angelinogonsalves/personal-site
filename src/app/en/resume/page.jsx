'use client';

export default function Resume() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>

        <div className="mb-4">
          <h3 className="font-semibold">Techsocial – PHP Developer / Tech Lead</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2024</p>
          <p>
            Led technical team, built APIs, improved SQL performance, refactored legacy code, and integrated third-party systems.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Kadosh Systems – Founder / Full Stack Developer</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2020 – Present</p>
          <p>
            Developed custom systems like fleet control, water billing, photography portals, and client dashboards.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Baston Aerossóis – Developer / IT Support</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">2019 – 2020</p>
          <p>
            Created logistic systems, automated processes using Laravel and SQL Server, and built dashboards in Power BI.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc ml-6">
          <li>MBA in Business Intelligence – Universidade Positivo (2020)</li>
          <li>Bachelor’s in Financial Management – Universidade Uninter (2013)</li>
        </ul>
      </section>

      <div className="mt-6 text-center">
        <a
          href="/CV_Angelino_Gonsalves_EN.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 Download PDF
        </a>
      </div>
    </main>
  );
}
