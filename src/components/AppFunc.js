import React, { useState } from 'react';
import data from '../data/data.json';
import PokeListFunc from './PokeListFunc';
import PokemonFunc from './PokemonFunc';

const AppFunc = () => {
  const [pokemons] = useState(data);
  const [favs, setFavs] = useState([]);

  const handlePokemon = (clickedId) => {
    const favPokemonIndex = favs.findIndex((fav) => {
      return fav.id === parseInt(clickedId);
    });

    if (favPokemonIndex === -1) {
      const pokemonClicked = pokemons.find((pokemon) => {
        return pokemon.id === parseInt(clickedId);
      });
      favs.push(pokemonClicked);
      setFavs([...favs]);
    } else {
      favs.splice(favPokemonIndex, 1);
      setFavs([...favs]);
    }
    debugger;
  };

  return (
    <>
      {console.log(favs.types)};
      <header className="page__header">
        <h1 className="title">Mi lista de pokemon</h1>
      </header>
      <main className="main">
        <section>
          <PokeListFunc pokemons={pokemons} handlePokemon={handlePokemon} />
        </section>

        <section>
          <h2>Pokemon de la semana</h2>
          <PokeListFunc pokemons={favs} handlePokemon={handlePokemon} />
        </section>
      </main>
    </>
  );
};

export default AppFunc;
