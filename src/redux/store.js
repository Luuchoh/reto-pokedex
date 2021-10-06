import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/authReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { pokemonsEvolutionReducer } from "./reducers/pokemonsEvolutionReducer";
import { pokemonsListReducer } from "./reducers/pokemonsListReducer";
import { myPokemonsReducer } from "./reducers/myPokemonsReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  pokemon: pokemonReducer,
  pokemonsEvolution: pokemonsEvolutionReducer,
  pokemonsList: pokemonsListReducer,
  myPokemons: myPokemonsReducer,

});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
