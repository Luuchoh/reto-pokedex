import { types } from "../types/types";

const pokemonsEvolutionReducer = (state = [], action) => {
  switch (action.type) {
    case types.evolutionPokemons:
      return action.payload;
    default:
      return state;
  }
};

export { pokemonsEvolutionReducer };
