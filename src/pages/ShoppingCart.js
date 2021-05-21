export default function ShoppingCart({ shoppedPlayers }) {
  return (
    <>
      {shoppedPlayers.map((player, index) => (
        <p key={index}>{player.name}</p>
      ))}
    </>
  );
}
