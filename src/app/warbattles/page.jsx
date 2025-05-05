"use client";

import { useEffect, useState } from "react";

export default function WarBattlesPage() {
  const [battles, setBattles] = useState([]);
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    winnerId: "",
    winnerPower: "",
    loserId: "",
    loserPower: "",
    date: ""
  });

  useEffect(() => {
    // Dados iniciais de exemplo
    const initialTeams = [
      { id: 1, name: "Fora do Tempo" },
      { id: 2, name: "Tropa Alfa" }
    ];
    const initialBattles = [
      {
        id: 1,
        winnerId: 1,
        winnerPower: 3350,
        loserId: 2,
        loserPower: 4123,
        date: "2023-05-15"
      }
    ];
    setTeams(initialTeams);
    setBattles(initialBattles);
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBattle = {
      id: battles.length + 1,
      ...formData,
      winnerId: parseInt(formData.winnerId),
      winnerPower: parseInt(formData.winnerPower),
      loserId: parseInt(formData.loserId),
      loserPower: parseInt(formData.loserPower)
    };
    setBattles([newBattle, ...battles]);
    setShowModal(false);
    setFormData({ winnerId: "", winnerPower: "", loserId: "", loserPower: "", date: "" });
  };

  const getTeamName = (id) => teams.find((t) => t.id === id)?.name || "???";

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registro de Batalhas</h1>

      <button
        onClick={handleOpenModal}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
      >
        Registrar Nova Batalha
      </button>

      <ul className="space-y-3">
        {battles.map((battle) => (
          <li key={battle.id} className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-700 mb-2">{battle.date}</div>
            <div className="font-semibold">
              {getTeamName(battle.winnerId)} ({battle.winnerPower}) venceu {getTeamName(battle.loserId)} ({battle.loserPower})
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Registrar Batalha</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm">Time Vencedor</label>
                <select
                  id="winnerId"
                  value={formData.winnerId}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Selecione</option>
                  {teams.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm">Poder do Vencedor</label>
                <input
                  id="winnerPower"
                  type="number"
                  value={formData.winnerPower}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm">Time Perdedor</label>
                <select
                  id="loserId"
                  value={formData.loserId}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Selecione</option>
                  {teams.map((t) => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm">Poder do Perdedor</label>
                <input
                  id="loserPower"
                  type="number"
                  value={formData.loserPower}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm">Data</label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}