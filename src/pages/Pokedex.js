import React from 'react';
import { PokedexService } from '../services/services';


export class Pokedex extends React.Component {

  state = {
    loading: true,
    data: null
  }

  async componentDidMount() {
    this.setState({data: await PokedexService.getList()})
    this.setState({loading: false})
  }

  printLoading() {
    return <div>Loading...</div>
  }

  printList() {
    const results = this.state.data.results
    
    return (
      <div>
      {results.map((sample, index) => (
        <div key={index}>
          <a href={sample.url} target="_blank">{sample.name}</a>
        </div>
    ))}
    </div>
    )
  }

  render() {
    return <div className='dictionnary'>
      {
        this.state.loading || !this.state.data.results
        ? this.printLoading()
        : this.printList()
      }
      </div>
  };

}
export default Pokedex;