import React from 'react';
import pokedata from '../data/data.json';
import PokeListFunc from './PokeListFunc';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokedata,
    };
  }

  render() {
    return (
      <>
        <h1 className="title">Mi lista de Pokemon</h1>
        <section className="pokemons">
          <PokeListFunc pokemons={this.state.pokemons}></PokeListFunc>
        </section>
      </>
    );
  }
}

export default App;
