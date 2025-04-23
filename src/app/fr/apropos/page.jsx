'use client';

import Image from 'next/image';
import profil from '/public/foto_perfil.jpg';

export default function Apropos() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">À propos de moi</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src={perfil}
            alt="Photo de Angelino"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            Je suis <strong>Angelino Gonsalves</strong>, développeur web et chef d'équipe technique avec plus de 5 ans d'expérience dans la création de systèmes efficaces et évolutifs.
          </p>
          <p className="mt-4">
            J’utilise PHP, Laravel, SQL, Docker, CI/CD et des outils Web3 pour développer des solutions qui répondent à des besoins concrets. 
            J’aime diriger des projets, apprendre de nouvelles technologies et explorer le potentiel de la blockchain.
          </p>
        </div>
      </div>
    </main>
  );
}
