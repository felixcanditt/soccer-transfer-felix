import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';
import { addToLocalStorage, loadFromLocalStorage } from './localStorage';
import HeaderNavigation from './HeaderNavigation';
import { Switch, Route } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import RenderPlayerCards from './RenderPlayerCards';

function App() {
  // wenn etwas gespeichert ist, lade das, sonst leeres Array
  const [players, setPlayers] = useState(
    loadFromLocalStorage('soccerTransferPlayers') ?? []
  );
  const [shoppedPlayers, setShoppedPlayers] = useState(
    loadFromLocalStorage('soccerTransferShoppedPlayers') ?? []
  );

  // useEffect: localStorage wird jedes Mal aktualisiert wenn sich players aktualisiert
  useEffect(() => {
    addToLocalStorage('soccerTransferPlayers', players);
  }, [players]);

  // wenn sich shoppedPlayers aktualisiert, aktualisiert sich auch localStorage
  useEffect(() => {
    addToLocalStorage('soccerTransferShoppedPlayers', shoppedPlayers);
  }, [shoppedPlayers]);

  function addPlayer(player) {
    setPlayers([...players, player]);
  }

  // wenn man auf den kaufen-Button klickt, passiert folgendes:
  function placeIntoShoppingCart(event, shoppedPlayer) {
    // console.log('hat geklappt');
    // warum kein find?
    // const shoppedPlayer = players.find(
    //   (player) => player.name === clickedPlayer.name
    // );
    console.log(shoppedPlayer);
    setShoppedPlayers([...shoppedPlayers, shoppedPlayer]);
  }

  // const Football... = () => {} ist gleichbedeutend
  function FootballPlayerTrafficking() {
    return (
      <>
        <h1>Add a new player</h1>
        <PlayerForm onAddPlayer={addPlayer} />
        <Grid>
          <Players>
            {players.map((player, index) => (
              <PlayerCard
                player={player}
                onPlaceIntoShoppingCart={placeIntoShoppingCart}
                key={player.name + index}
              />
            ))}
          </Players>
        </Grid>
        )
      </>
    );
  }

  // function bratwurst() {
  //   <Grid>
  //   <Players>
  //     {players.map((player) => (
  //       <PlayerCard player={player} />
  //     ))}
  //   </Players>
  // </Grid>
  // }

  // )

  return (
    <>
      <HeaderNavigation />
      <main>
        <Switch>
          <Route exact path="/">
            <FootballPlayerTrafficking />
          </Route>
          <Route path="/players">
            <RenderPlayerCards players={players} />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
        </Switch>
      </main>
    </>
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
