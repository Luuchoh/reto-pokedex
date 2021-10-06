import { db } from "../config/firebase/firebaseConfig";

const load = async (id) =>{
    const firebaseDB = await db.collection(`users/${id}/myPokemons`).get();
    const myPokemons = [];

    firebaseDB.forEach((data) => {
        myPokemons.push({ uid: data.id, ...data.data() });
    });
    return myPokemons;
}

export {load}