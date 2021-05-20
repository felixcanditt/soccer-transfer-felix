import styled from 'styled-components/macro';
import PlayerCard from './PlayerCard';

export default function Rendered({ players, onPlaceIntoShoppingCart }) {
  return (
    <>
      <Grid>
        <Players>
          {players.map((player, index) => (
            <PlayerCard
              player={player}
              onPlaceIntoShoppingCart={onPlaceIntoShoppingCart}
              key={index}
            />
          ))}
        </Players>
      </Grid>
    </>
  );
}

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
