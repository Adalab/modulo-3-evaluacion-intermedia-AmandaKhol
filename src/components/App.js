import React from 'react';
import data from '../data/data.json';
import PokeListFunc from './PokeListFunc';
import '../stylesheets/layout/_page.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }

  render() {
    return (
      <>
        <header className="page__header">
          <h1 className="title">Mi lista de pokemon</h1>
        </header>

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
