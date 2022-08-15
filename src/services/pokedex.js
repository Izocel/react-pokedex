import Pokedex from 'pokedex-promise-v2';
const Poke = new Pokedex();

async function getList(offset = 0, limit = 20) {

    const interval = {offset: offset,limit: limit}
    const response = await Poke.getPokemonsList(interval)
    const data = response

    console.log(data)
    return data;
}

const pokedex = {
    getList
}

export default pokedex;