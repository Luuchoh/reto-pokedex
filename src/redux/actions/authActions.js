import Swal from "sweetalert2";
import { types } from "../types/types";
import {
  firebase,
  google,
  facebook,
} from "../../config/firebase/firebaseConfig";
import { FileUpload } from "../../helpers/FileUpload";



let fileUrl = [];

//ENVIA LA IMAGEN A CLOUDINARY Y LA SUBE
export const startUploadingImage = (file) => {
  return async () => {
    Swal.fire({
      title: "Uploading...",
      text: "Please wait ...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    fileUrl = await FileUpload(file);

    Swal.close();
    return fileUrl;
  };
};
//CREA USUARIO CON CORREO Y CONTRASEÑA
export const startRegisterWithEmailPasswordNameUrlImg = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user));
        Swal.fire({
          position: "center",
          text: "Usuario Creado",
          icon: "success",
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e,
          footer: "",
        });
      });
  };
};

//INICIA SESION CON CORREO Y CONTRASEÑA
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e,
          footer: "",
        });
      });
  };
};

//INICIA SESION CON GOOGLE
export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        dispatch(login(user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e,
          footer: "",
        });
      });
  };
};

//INICIA SESION CON FACEBOOK
export const loginFacebook = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebook)
      .then(({ user }) => {
        dispatch(login(user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: e,
          footer: "",
        });
      });
  };
};

//FUNCION SINCRONICA(GUARDA INFO DE USUARIO EN REDUCER)
export const login = (user) => {
  const { uid, displayName, imageUrl } = user;
  return {
    type: types.login,
    payload: {
      id: uid,
      displayName: displayName,
      imageUrl: user.photoURL || imageUrl,
      isAuthenticated: true,
    },
  };
};

//CIERRA SESION EN FIREBASE
export const logoutFirebase = () => {
  return async (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.auth().signOut();
        dispatch(logoutReducer());
      }
    });
  };
};
//CIERRA SESION EN REDUX FUNCION SINCRONICA
export const logoutReducer = (user) => {
  return {
    type: types.logout,
  };
};
