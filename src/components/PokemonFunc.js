import React from 'react';
import '../stylesheets/components/_pokemon.scss';

const PokemonFunc = (props) => {
  const handleClick = (ev) => {
    // console.log(props.id);
    // console.log(ev.currentTarget.id);
    props.handlePokemon(ev.currentTarget.id);
  };

  const typesList = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article
      id={props.pokemon.id}
      className="pokemon__item"
      onClick={handleClick}
    >
      <div className="pokemon__item--header">
        <h2 className="pokemon__item--title">{props.pokemon.name}</h2>
        <ul className="pokemon__item--types">{typesList}</ul>
      </div>
      <img
        className="pokemon__item--image"
        src={props.pokemon.url}
        alt={'Imagen de ' + props.pokemon.name}
        title={props.pokemon.name}
      ></img>
    </article>
  );
};

export default PokemonFunc;
