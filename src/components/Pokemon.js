import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemonTypes = this.props.pokemon.types.map((type, index) => {
      return <li key={index.toString()}>{type}</li>;
    });
    return (
      <div>
        <h2>{this.props.pokemon.name}</h2>
        <ul>{pokemonTypes}</ul>
        <img
          src={this.props.pokemon.url}
          alt={this.props.pokemon.name}
          title={this.props.pokemon.name}
        ></img>
      </div>
    );
  }
}

export default Pokemon;
