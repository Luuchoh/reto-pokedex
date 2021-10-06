import Swal from "sweetalert2";
import { db } from "../../config/firebase/firebaseConfig";
import { load } from "../../services/Mypokemons";

import { types } from "../types/types";

const addNewPokemon = (pokemon, id) => {
  console.log(pokemon);
  return async (dispatch) => {
    Swal.fire({
      position: "center",
      text: "Añadido a la coleccion",
      icon: "success",
      title: pokemon.name,
      showConfirmButton: false,
      timer: 800,
    });
    await db.collection(`users/${id}/myPokemons`).add(pokemon);

    dispatch(listMyPokemons(id));
  };
};

const EditMyPokemon = (pokemon, name, idUser) => {
    return async (dispatch) => {

        const pokemonEdit = {
            ...pokemon,
            "name": name
        }

        const pokemonFire = { ...pokemonEdit}
        delete pokemonFire.uid

        Swal.fire({
            position: 'center',
            text: 'Se ha editado correctamente',
            icon: 'success',
            title: name,
            showConfirmButton: false,
            timer: 1000
        })

        await db.doc(`users/${idUser}/myPokemons/${pokemon.uid}`).update(pokemonEdit)

        dispatch(listMyPokemons(idUser))

    }
}

const DeleteMypokemon = (idUser, idPokemon) => {
  return async (dispatch) => {

    Swal.fire({
      position: "center",
      title: "Se ha eliminado correctamente",
      icon: "success",
    });
    await db.doc(`users/${idUser}/myPokemons/${idPokemon}`).delete();
    dispatch(listMyPokemons(idUser));
  };
};
const listMyPokemons = (id) => {
  return async (dispatch) => {
    const listPokemons = await load(id);
    dispatch(listadomyPokemons(listPokemons));
  };
};

const listadomyPokemons = (list) => {
  return {
    type: types.myPokemons,
    payload: list,
  };
};

export { addNewPokemon, listMyPokemons, EditMyPokemon, DeleteMypokemon };
