import React from 'react';

const PokemonMiguel = (props) => {
  // events

  const handleClick = (ev) => {
    // console.log(props.id);
    // console.log(ev.currentTarget.id);
    props.handlePokemon(props.id);
  };

  // render

  const typesList = props.types.map((type, index) => {
    return (
      <li key={index} className={`poke__type poke__type--${type}`}>
        {type}
      </li>
    );
  });

  return (
    <article className="card" id={props.id} onClick={handleClick}>
      <img
        className="card__img"
        src={props.url}
        alt={'Imagen de ' + props.name}
      />
      <h3 className="card__title">{props.name}</h3>
      <ul className="card__description">{typesList}</ul>
    </article>
  );
};

export default PokemonMiguel;
