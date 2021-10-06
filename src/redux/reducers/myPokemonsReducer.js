import { types } from "../types/types";

const myPokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case types.myPokemons:
      return action.payload;
    default:
      return state;
  }
};

export { myPokemonsReducer };