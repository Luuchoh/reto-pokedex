import { types } from "../types/types";

const initialState = {
  id: 0,
  name: "",
  imageUrl: "https://thumbs.dreamstime.com/b/vector-de-icono-plano-perfil-avatar-predeterminado-ilustraci%C3%B3n-s%C3%ADmbolo-contacto-184752213.jpg",
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
        imageUrl: action.payload.imageUrl,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case types.logout:
      return {
        id: initialState.id,
        name: initialState.name,
        imageUrl: initialState.imageUrl,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export { authReducer, initialState };
