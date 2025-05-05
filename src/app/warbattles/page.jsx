import { useEffect, useState } from "react";

export default function RegistroPage() {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Fora do Tempo' },
    { id: 2, name: 'Tropa Alfa' },
    { id: 3, name: 'Os Invencíveis' },
    { id: 4, name: 'Tempestade' }
  ]);

  const [battles, setBattles] = useState([
    { id: 1, attackTeamId: 1, attackPower: 3350, defenseTeamId: 2, defensePower: 4123, result: 'Perdeu', date: '2023-05-15' },
    { id: 2, attackTeamId: 3, attackPower: 4500, defenseTeamId: 4, defensePower: 3800, result: 'Venceu', date: '2023-05-20' },
    { id: 3, attackTeamId: 2, attackPower: 5000, defenseTeamId: 1, defensePower: 4800, result: 'Venceu', date: '2023-06-01' }
  ]);

  const getTeamName = (id) => {
    const team = teams.find(t => t.id === id);
    return team ? team.name : 'Desconhecido';
  };

  const deleteBattle = (id) => {
    if (confirm('Deseja remover esta batalha?')) {
      setBattles(prev => prev.filter(b => b.id !== id));
    }
  };

  const editBattle = (id) => {
    alert('Editar batalha: ' + id);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Registro de Batalhas</h1>
        </header>

        <main>
          <h2 className="text-xl font-semibold mb-4">Times</h2>
          <ul className="mb-8 space-y-2">
            {teams.map(team => (
              <li key={team.id} className="bg-white shadow rounded px-4 py-2">
                {team.name}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Histórico de Batalhas</h2>
          <ul className="space-y-4">
            {battles.map(battle => (
              <li key={battle.id} className="bg-white shadow rounded p-4">
                <div className="text-sm mb-2">{getTeamName(battle.attackTeamId)} vs {getTeamName(battle.defenseTeamId)}</div>
                <div className="text-xs text-gray-500 mb-2">Resultado: {battle.result} | Data: {battle.date}</div>
                <div className="flex space-x-2">
                  <button onClick={() => editBattle(battle.id)} className="text-blue-600 text-xs">Editar</button>
                  <button onClick={() => deleteBattle(battle.id)} className="text-red-600 text-xs">Remover</button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
