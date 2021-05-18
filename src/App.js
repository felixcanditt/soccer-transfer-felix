import { useState } from 'react';
import styled from 'styled-components/macro';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';

function App() {
  const [players, setPlayers] = useState([]);

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

const Formular = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 0 auto;
  max-width: 25rem;
  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }
  fieldset {
    border: none;
    display: flex;
    gap: 0.4rem;
    padding: 0;
    margin: 0;
  }
  fieldset > label {
    font-weight: normal;
  }
  input[type='radio'],
  input[type='checkbox'] {
    transform: scale(1.5);
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) => (props.isPrimary ? 'hotpink' : 'grey')};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
`;

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
