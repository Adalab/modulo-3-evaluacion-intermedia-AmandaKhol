import React from 'react';
import PokemonMiguel from './PokemonMiguel';

const PokemonListMiguel = (props) => {
  const pokeList = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id.toString()}>
        <PokemonMiguel
          id={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          types={pokemon.types}
          handlePokemon={props.handlePokemon}
        />
      </li>
    );
  });

  return <ul className="cards">{pokeList}</ul>;
};

export default PokemonListMiguel;
