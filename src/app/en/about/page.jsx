'use client';

import Image from 'next/image';
import perfil from '/public/foto_perfil.jpg';

export default function About() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src={perfil}
            alt="Angelino's photo"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            I'm <strong>Angelino Gonsalves</strong>, a web developer and tech lead with over 5 years of experience building efficient, practical, and scalable systems.
          </p>
          <p className="mt-4">
            I work with PHP, Laravel, SQL, Docker, CI/CD, and Web3 tools. I’m passionate about solving real-world problems and helping businesses grow through technology.
            I also enjoy learning new frameworks and exploring blockchain solutions.
          </p>
        </div>
      </div>
    </main>
  );
}
