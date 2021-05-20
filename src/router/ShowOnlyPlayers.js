import RenderedPlayers from '../components/RenderedPlayers';

export default function RenderPlayerCards({
  players,
  onPlaceIntoShoppingCart
}) {
  return (
    <RenderedPlayers
      players={players}
      onPlaceIntoShoppingCart={onPlaceIntoShoppingCart}
    />
  );
}
