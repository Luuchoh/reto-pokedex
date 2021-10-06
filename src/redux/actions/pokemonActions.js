import Swal from "sweetalert2";

import { getAllPokemonList, getEvolution, getInfoOnePokemon,  getOnePokemon, } from "../../services/pokemon";
import { types } from "../types/types";

const findAllPokemons = () => {
  return async(dispatch) => {
    await getAllPokemonList()
      .then((pokemons) => {
        dispatch({
          type: types.allPokemonsList,
          payload: pokemons,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const findOnePokemon = (pokemon) => {
  return (dispatch) => {
    getOnePokemon(pokemon)
      .then((pokemon) => {
        dispatch({
          type: types.onePokemon,
          payload: pokemon,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: pokemon + ' no se encuentra en la base de datos ',
          footer: "",
        });
      });
  };
};

const findInfoOnePokemon = (pokemon) => {
  return (dispatch) => {
    getInfoOnePokemon(pokemon)
      .then((pokemon) => {
        dispatch({
          type: types.infoOnePokemon,
          payload: pokemon.pokemons[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const findEvolution = (url) => {
  return (dispatch) => {
    getEvolution(url)
      .then((pokemon) => {
        dispatch({
          type: types.evolutionPokemons,
          payload: pokemon,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const onePokemon = (pokemon) =>{
  return{
    type:types.infoOnePokemon,
    payload:pokemon
}
}


export {
  findAllPokemons,
  findInfoOnePokemon,
  findOnePokemon,
  onePokemon,
  findEvolution,
}