import axios from "axios";
import config from "../config/config";
const { app } = config();
const baseUrl = app.api;

let pokemons = [];

const getAllPokemonList = async () => {
  pokemons = [];
  for (let i = 1; i <= 25; i++) {
    const url = `${baseUrl}/pokemon/${i}`;
    const { data } = await axios.get(url);
    pokemons = [...pokemons, data];
  }

  return {
    pokemons,
  };
};

const getOnePokemon = async (pokemon) => {
  if (pokemon.length > 1) {
    const url = `${baseUrl}/pokemon/${pokemon}`;
    const { data } = await axios.get(url);
    pokemons = [];
    pokemons = [data];
    return {
      pokemons,
    };
  }
  getAllPokemonList();
};

const getInfoOnePokemon = async (pokemon) => {
  const url = `${baseUrl}/pokemon/${pokemon}`;
  const { data } = await axios.get(url);
  pokemons = [data];
  return {
    pokemons,
  };
};

const getEvolution = async (url) => {
  const { data } = await axios.get(url);
  const { chain } = await getEvolutionChain(data.evolution_chain.url);
  const list = [chain.species.name];

  if (
    chain?.evolves_to[0]?.species?.name !== null ||
    chain?.evolves_to[0]?.species?.name !== undefined
  ) {
    list.push(chain.evolves_to[0]?.species?.name);
  }

  if (
    chain?.evolves_to[0]?.evolves_to[0]?.species?.name !== null ||
    chain?.evolves_to[0]?.evolves_to[0]?.species?.name !== undefined
  ) {
    list.push(chain.evolves_to[0]?.evolves_to[0]?.species?.name);
  }

  const res = await getPokemonEvolution(list);
  return res;
};

const getPokemonEvolution = async (array) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null || array[i] !== undefined) {
      if (array[i] === undefined) {
        break;
      }
      let data = await getOnePokemon(array[i]);
      res = [
        ...res,
        {
          name: data.pokemons[0].name,
          image: data.pokemons[0].sprites.front_default,
        },
      ];
    }
  }
  return res;
};

const getEvolutionChain = async (url) => {
  const { data } = await axios.get(url);
  const chain = data.chain;
  return {
    chain,
  };
};

export { getAllPokemonList, getInfoOnePokemon, getOnePokemon, getEvolution };
