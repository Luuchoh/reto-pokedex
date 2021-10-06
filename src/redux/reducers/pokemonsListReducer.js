import { types } from "../types/types";

const pokemonsListReducer = (state = [], action) => {
  switch (action.type) {
    case types.allPokemonsList:
      return action.payload;
    case types.onePokemon:
      return action.payload;
    default:
      return state;
  }
};

export { pokemonsListReducer };
