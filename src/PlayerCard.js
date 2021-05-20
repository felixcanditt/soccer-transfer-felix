import styled from 'styled-components/macro';
//import shoppingCart from './images/shopping-cart.svg';
import { useState } from 'react';

export default function PlayerCard({ player, onPlaceIntoShoppingCart }) {
  //const [playersToBuy, setPlayersToBuy] = useState();
  //console.log(playersToBuy);

  return (
    <Card>
      <h3>{player.name}</h3>
      <button
        onClick={(event) => {
          onPlaceIntoShoppingCart(event, player);
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
//onSubmit = onPlaceInto

// const [bookmarkedChars, setBookmarkedChars] = useState([]);

//   function placeIntoBookmarked(currywurst) {
//     const characterToAdd = characters.find(
//       (character) => character.name === currywurst.name
//     );
//     setBookmarkedChars([...bookmarkedChars, characterToAdd]);
//   }

// function placeIntoBookmarked(currywurst) {
//   const characterToAdd = characters.find(
//     (character) => character.name === currywurst.name
//   );
//   setBookmarkedChars([...bookmarkedChars, characterToAdd]);
// }

// function Home() {
//   return (
// <>
//    <Headline>Get schwifty!</Headline>
//    <Filterbuttons>
//    <button onClick={showAllCharacters}>Show all characters</button>
//    <button onClick={showOnlyAliens}>Show only aliens</button>
//  </Filterbuttons>
//  <MainSection>
//    {charactersOnScreen(viewOnlyAliens ? onlyAliens : characters)}

//  </MainSection>
// </> )}

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
