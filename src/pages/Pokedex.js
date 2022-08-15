import React from 'react';
import { PokedexService } from '../services/services';


export class Pokedex extends React.Component {

  state = {
    loading: true,
    pokemons: null
  }

  async componentDidMount() {
    const pokemons = await PokedexService.getPokemons();

    this.setState({ pokemons: pokemons })
    this.setState({ loading: false })
  }

  printPokemon(poke) {
    if (!poke)
      return this.printEmpty('pokemon')
    
    return (
      <div>
        <span className='text-capitalize'>
          <p>Name:</p>
          <p>{poke.name}</p>
        </span>
        <span className='text-capitalize'>
          <p>Height:</p>
          <p>{poke.height}</p>
        </span>
        <span className='text-capitalize'>
          <p>Weight:</p>
          <p>{poke.weight}</p>
        </span>

        <hr></hr>
      </div>
    )
  }

  printEmpty(expecting = 'element', id = '') {
    return <div hidden id={id} data-missing={expecting} className='empty'></div>
  }

  printLoading(expecting = 'element', id = '') {
    return <div id={id} data-loading={expecting} className="loading">Loading...</div>
  }
   
  printList() {
    const list = this.state.pokemons
    return (
      list.map((poke, index) => (
        <div data-id={index} key={index}>
          {this.printPokemon(poke)}
        </div>
      ))
    )
  }

  render() {
    return <div className='dictionnary'>
      {
        this.state.loading
          ? this.printLoading('dictionary')
          : this.printList()
      }
    </div>
  };

}
export default Pokedex;