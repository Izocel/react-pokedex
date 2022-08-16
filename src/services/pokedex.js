import Pokedex from 'pokedex-promise-v2';
const Poke = new Pokedex();

async function getList(offset = 0, limit = 20) {

    const interval = {offset: offset,limit: limit}
    const response = await Poke.getPokemonsList(interval)
    return response;
}

async function getPokemon(name) {

    if(!name || name === "")
        return {};
    
    const response = await Poke.getPokemonByName(name)
    return response;
}

async function getPokemons(offset = 0, limit = 20) {
    let pokemons = [];
    let list = await this.getList(offset, limit);
    list = await list.results;

    for (let i = 0; i < list.length; i++) {
        const sample = list[i];
        pokemons.push(await this.getPokemon(sample.name));
    }

    return pokemons;
}

const pokedex = {
    getList,
    getPokemon,
    getPokemons
}

export default pokedex;