import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonItems = this.props.pokemons.map((pokemonItem) => {
      return (
        <li key={pokemonItem.id}>
          <Pokemon pokemon={pokemonItem} />
        </li>
      );
    });

    return (
      <div>
        <ul>{pokemonItems}</ul>
      </div>
    );
  }
}

export default PokeList;
