/* I have included this file in order to have the solution resolved with class components. 
The App component does not import this file */

import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/layout/_pokemon-list.scss';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonItems = this.props.pokemons.map((pokemonItem) => {
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
  }
}

export default PokeList;
