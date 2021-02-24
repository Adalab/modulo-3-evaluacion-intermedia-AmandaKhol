import React from 'react';
import Pokemon from './Pokemon';

const PokeListFunc = (props) => {
  const pokemons = props.pokemons;
  const pokemonItems = pokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id.toString()}>
        <Pokemon pokemon={pokemonItem} />
      </li>
    );
  });

  return (
    <div>
      <ul>{pokemonItems}</ul>
    </div>
  );
};

export default PokeListFunc;
