'use client';

import Image from 'next/image';
import perfil from '/public/foto_perfil.jpg';

export default function Sobre() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="shadow-md rounded-md overflow-hidden">
          <Image
            src={perfil}
            alt="Foto de Angelino"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            Olá! Sou <strong>Angelino Gonsalves</strong>, desenvolvedor web e tech lead com mais de 5 anos de experiência.
            Tenho paixão por construir soluções que otimizam processos, conectam sistemas e geram impacto real para empresas.
          </p>
          <p className="mt-4">
            Atuei com PHP, Laravel, SQL, Docker, CI/CD, Blockchain e integração de APIs. Gosto de liderar times com empatia e foco em qualidade.
            Tenho também interesse por inovação, Web3 e novas tecnologias que aproximam negócios e pessoas.
          </p>
        </div>
      </div>
    </main>
  );
}
