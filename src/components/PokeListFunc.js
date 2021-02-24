import React from 'react';
import PokemonFunc from './PokemonFunc';
import '../stylesheets/layout/_pokemon-list.scss';

const PokeListFunc = (props) => {
  const pokemonItems = props.pokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id.toString()}>
        <PokemonFunc
          pokemon={pokemonItem}
          handlePokemon={props.handlePokemon}
        />
      </li>
    );
  });

  return (
    <div>
      <ul className="pokemon__list">{pokemonItems}</ul>
    </div>
  );
};

export default PokeListFunc;
