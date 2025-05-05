"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function RegistroPage() {
  const [teams, setTeams] = useState([]);
  const [battles, setBattles] = useState([]);
  const [currentTab, setCurrentTab] = useState("battles");
  const [showBattleModal, setShowBattleModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);

  // Inicializa times e batalhas simuladas
  useEffect(() => {
    setTeams([
      { id: 1, name: "Fora do Tempo", color: "blue" },
      { id: 2, name: "Tropa Alfa", color: "red" },
    ]);
    setBattles([
      { id: 1, winnerId: 1, winnerPower: 3350, loserId: 2, loserPower: 4123, date: "2023-05-15" },
    ]);
  }, []);

  const getTeamName = (id) => teams.find((t) => t.id === id)?.name || "-";

  return (
    <>
      <Head>
        <title>Registro de Batalhas</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <div className="min-h-screen bg-gray-100 p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Registro de Batalhas</h1>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${currentTab === "battles" ? "bg-blue-600 text-white" : "bg-white"}`}
            onClick={() => setCurrentTab("battles")}
          >
            Batalhas
          </button>
          <button
            className={`px-4 py-2 rounded ${currentTab === "teams" ? "bg-blue-600 text-white" : "bg-white"}`}
            onClick={() => setCurrentTab("teams")}
          >
            Times
          </button>
        </div>

        {currentTab === "battles" && (
          <div>
            <button
              className="w-full mb-4 bg-blue-600 text-white py-2 rounded"
              onClick={() => setShowBattleModal(true)}
            >
              Registrar Nova Batalha
            </button>
            {battles.map((battle) => (
              <div key={battle.id} className="bg-white p-4 mb-2 rounded shadow">
                <p>
                  <strong>Vencedor:</strong> {getTeamName(battle.winnerId)} ({battle.winnerPower})
                </p>
                <p>
                  <strong>Perdedor:</strong> {getTeamName(battle.loserId)} ({battle.loserPower})
                </p>
                <p className="text-sm text-gray-500">{battle.date}</p>
              </div>
            ))}
          </div>
        )}

        {currentTab === "teams" && (
          <div>
            <button
              className="w-full mb-4 bg-green-600 text-white py-2 rounded"
              onClick={() => setShowTeamModal(true)}
            >
              Adicionar Novo Time
            </button>
            {teams.map((team) => (
              <div key={team.id} className="bg-white p-4 mb-2 rounded shadow">
                <p className="font-bold text-lg text-{team.color}-600">{team.name}</p>
              </div>
            ))}
          </div>
        )}

        {showBattleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-96">
              <h2 className="text-xl font-bold mb-4">Nova Batalha</h2>
              <p className="text-sm">(Formulário a implementar)</p>
              <button className="mt-4 text-blue-600" onClick={() => setShowBattleModal(false)}>Fechar</button>
            </div>
          </div>
        )}

        {showTeamModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded w-96">
              <h2 className="text-xl font-bold mb-4">Novo Time</h2>
              <p className="text-sm">(Formulário a implementar)</p>
              <button className="mt-4 text-blue-600" onClick={() => setShowTeamModal(false)}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
