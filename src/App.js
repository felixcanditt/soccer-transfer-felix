import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';
import { addToLocalStorage, loadFromLocalStorage } from './localStorage';

function App() {
  // wenn etwas gespeichert ist, lade das, sonst leeres Array
  const [players, setPlayers] = useState(
    loadFromLocalStorage('soccerTransferPlayers') ?? []
  );

  // useEffect: localStorage wird jedes Mal aktualisiert wenn sich players aktualisiert
  useEffect(() => {
    addToLocalStorage('soccerTransferPlayers', players);
  }, [players]);

  function addPlayer(player) {
    setPlayers([...players, player]);
  }

  return (
    <main>
      <h1>Add a new player</h1>
      <PlayerForm onAddPlayer={addPlayer} />
      <Grid>
        <Players>
          {players.map((player) => (
            <PlayerCard player={player} />
          ))}
        </Players>
      </Grid>
    </main>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Players = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
