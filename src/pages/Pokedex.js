import { BaseComponent } from '../components/BaseComponent';
import Gridcards from '../components/cards/gridcards';
import { BaseContainer } from '../containers/BaseContainer';
import { PokedexService } from '../services/services';


class Pokedex extends BaseContainer {

  state = this.extendInitialState({
    pokemon: null
  });

  async componentDidMount() {
    const pokemons = await PokedexService.getPokemons();

    this.setState({ pokemons: pokemons })
    this.isReady()
  }

  async componentDidUpdate() {
    console.log(this.state)
  }

  renderPokemon(poke) {
    if (!poke)
      return this.renderEmpty('pokemon')

    return (
      <div>
        <Gridcards />
        <br />
      </div>
    )
  }

  renderList() {
    const list = this.state.pokemons
    return (
      list.map((poke, index) => (
        <div data-id={index} key={index}>
          {this.renderPokemon(poke)}
        </div>
      ))
    )
  }

  doRender() {
    return <div className='dictionnary'>
      {this.renderList()}
    </div>
  };

}

class Pokedex_Ns extends BaseComponent {

  baseProps = {
    color: 'red'
  }

  allowedAttributes = [
    'color'
  ]

  constructor(props) {
    super(props)
    this.extendProps(this.baseProps);
  }

  doCLick(e, t) {
    const newColor = t.getXProps().color === 'blue' ? 'red' : 'blue';
    t.setXProps('color', newColor);
  }


  doRender() {
    const xprops = this.getXProps();
    return <div className='dictionnary' onClick={(e, t= this) => this.doCLick(e,t)}>
      {this.renderAttributes()}
      <h1 style={{color: xprops.color}}>
        Pokedex as component color: {xprops.color}</h1>
    </div>
  }
}

function PokedexFunc() {
  return (<h1>Hello {this.constructor.name}</h1>);
}


export { Pokedex, Pokedex_Ns, PokedexFunc };