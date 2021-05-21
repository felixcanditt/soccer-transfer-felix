import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavigation from '../pages/HeaderNavigation';
import Home from '../pages/Home';
import ShowOnlyPlayers from '../pages/ShowOnlyPlayers';
import ShoppingCart from '../pages/ShoppingCart';

import { addToLocalStorage, loadFromLocalStorage } from '../lib/localStorage';

function App() {
  const [players, setPlayers] = useState(
    loadFromLocalStorage('soccerTransferPlayers') ?? []
  );
  const [shoppedPlayers, setShoppedPlayers] = useState(
    loadFromLocalStorage('soccerTransferShoppedPlayers') ?? []
  );

  useEffect(() => {
    addToLocalStorage('soccerTransferPlayers', players);
  }, [players]);

  useEffect(() => {
    addToLocalStorage('soccerTransferShoppedPlayers', shoppedPlayers);
  }, [shoppedPlayers]);

  function addPlayer(player) {
    setPlayers([...players, player]);
  }

  function placeIntoShoppingCart(shoppedPlayer) {
    // kein filter weil Objekt schon bekannt
    // in früheren Beispielen kannten wir beim Button nur den Namen, nicht das ganze Objekt
    setShoppedPlayers([...shoppedPlayers, shoppedPlayer]);
  }

  return (
    <>
      <HeaderNavigation />
      <main>
        <h1>Football Player Trafficking</h1>
        <Switch>
          <Route exact path="/">
            <Home
              players={players}
              onAddPlayer={addPlayer}
              onPlaceIntoShoppingCart={placeIntoShoppingCart}
            />
          </Route>
          <Route path="/players">
            <ShowOnlyPlayers
              players={players}
              onPlaceIntoShoppingCart={placeIntoShoppingCart}
            />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart shoppedPlayers={shoppedPlayers} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
