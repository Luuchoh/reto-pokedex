import { types } from "../types/types";

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case types.infoOnePokemon:
      return action.payload;
    default:
      return state;
  }
};

export { pokemonReducer };
