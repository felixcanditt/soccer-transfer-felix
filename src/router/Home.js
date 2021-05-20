import PlayerForm from '../components/PlayerForm';
import RenderedPlayers from '../components/RenderedPlayers';

export default function Home({
  onAddPlayer,
  players,
  onPlaceIntoShoppingCart
}) {
  return (
    <>
      <h2>Add a new player</h2>
      <PlayerForm onAddPlayer={onAddPlayer} />
      <RenderedPlayers
        players={players}
        onPlaceIntoShoppingCart={onPlaceIntoShoppingCart}
      />
    </>
  );
}
