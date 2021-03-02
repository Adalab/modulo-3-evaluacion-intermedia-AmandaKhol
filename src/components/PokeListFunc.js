import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import '../stylesheets/layout/_pokemon-list.scss';

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
      <ul className="pokemon__list">{pokemonItems}</ul>
    </div>
  );
};

export default PokeListFunc;

PokeListFunc.propTypes = {
  pokemons: PropTypes.array,
};
