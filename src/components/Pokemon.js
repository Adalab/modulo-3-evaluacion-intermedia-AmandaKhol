import React from 'react';
import '../stylesheets/components/_pokemon.scss';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonTypes = this.props.pokemon.types.map((type, index) => {
      return (
        <li className="pokemon__item--type" key={index.toString()}>
          {type}
        </li>
      );
    });
    return (
      <div className="pokemon__item">
        <div className="pokemon__item--header">
          <h2 className="pokemon__item--title">{this.props.pokemon.name}</h2>
          <ul className="pokemon__item--types">{pokemonTypes}</ul>
        </div>
        <img
          className="pokemon__item--image"
          src={this.props.pokemon.url}
          alt={this.props.pokemon.name}
          title={this.props.pokemon.name}
        ></img>
      </div>
    );
  }
}

export default Pokemon;
