'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PtLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('pt');

  // Lê localStorage no carregamento
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('lang');
    if (savedTheme === 'light') setDarkMode(false);
    if (savedLang) setLang(savedLang);
  }, []);

  // Salva tema e idioma quando mudar
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('lang', lang);
  }, [darkMode, lang]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLangChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    window.location.href = `/${selected}`;
  };

  return (
    <html className={darkMode ? 'dark' : ''}>
      <body className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <header className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <Link href={`/${lang}`} className="text-xl font-bold">Angelino Gonsalves</Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="px-2 py-1 border rounded">
              ☰
            </button>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href={`/${lang}/sobre`}>Sobre</Link>
            <Link href={`/${lang}/portfolio`}>Portfólio</Link>
            <Link href={`/${lang}/curriculo`}>Currículo</Link>
            <Link href={`/${lang}/contato`}>Contato</Link>
            <select
              className="px-2 py-1 rounded border bg-white text-black dark:bg-gray-800 dark:text-white"
              value={lang}
              onChange={handleLangChange}
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="fr">🇨🇦 FR</option>
            </select>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded border dark:border-gray-500 dark:hover:bg-gray-800 hover:bg-gray-200 transition"
            >
              {darkMode ? '☀️ Claro' : '🌙 Escuro'}
            </button>
          </nav>
        </header>

        {menuOpen && (
          <nav className="flex flex-col md:hidden gap-2 p-4 border-b dark:border-gray-700">
            <Link href={`/${lang}/sobre`}>Sobre</Link>
            <Link href={`/${lang}/portfolio`}>Portfólio</Link>
            <Link href={`/${lang}/curriculo`}>Currículo</Link>
            <Link href={`/${lang}/contato`}>Contato</Link>
            <select
              className="px-2 py-1 rounded border bg-white text-black dark:bg-gray-800 dark:text-white"
              value={lang}
              onChange={handleLangChange}
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="fr">🇨🇦 FR</option>
            </select>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded border dark:border-gray-500 dark:hover:bg-gray-800 hover:bg-gray-200 transition"
            >
              {darkMode ? '☀️ Claro' : '🌙 Escuro'}
            </button>
          </nav>
        )}

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
