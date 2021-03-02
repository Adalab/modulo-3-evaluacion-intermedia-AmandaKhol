import React from 'react';
import pokedata from '../data/data.json';
import PokeListFunc from './PokeListFunc';
import '../stylesheets/layout/_page.scss';

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
        <section className="page__header">
          <h1 className="title">Mi lista de pokemon</h1>
        </section>

        <main className="main">
          <section className="pokemons">
            <PokeListFunc pokemons={this.state.pokemons}></PokeListFunc>
          </section>
        </main>
      </>
    );
  }
}

export default App;
