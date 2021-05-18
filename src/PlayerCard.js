import styled from 'styled-components/macro';

export default function PlayerCard({ player }) {
  return (
    <article>
      <h3>
        {player.name} - {player.price} €
      </h3>
    </article>
  );
}
