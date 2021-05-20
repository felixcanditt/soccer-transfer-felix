import styled from 'styled-components/macro';

export default function PlayerCard({ player, onPlaceIntoShoppingCart }) {
  return (
    <Card>
      <h3>{player.name}</h3>
      <button
        onClick={(event) => {
          onPlaceIntoShoppingCart(player);
        }}
      >
        kaufen
      </button>
      <p>{player.price}</p>
      <p>{player.club}</p>
      <p>{player.position}</p>
      <a href={`mailto:${player.email}`}>{player.email}</a>
      <p>{player.skills}</p>
    </Card>
  );
}

const Card = styled.article`
  background: hotpink;
  border-radius: 0.4rem;
  color: ivory;
  padding: 1.2rem 1rem;
  height: 12rem;
  min-width: calc((100% - 2rem) / 3);
  position: relative;
  svg {
    width: 2.4rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  h3 {
    margin-top: 0;
  }
  p {
    margin: 0.3rem 0;
  }
  a {
    color: hsl(160, 10%, 20%);
  }
`;
