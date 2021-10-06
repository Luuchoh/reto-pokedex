import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "../config/firebase/firebaseConfig";

import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

import Home from "../views/Home";
import Page404 from "../views/Page404";
import DetailPokemon from "../views/DetailPokemon";
import Login from "../views/Login";
import Register from "../views/Register";
import MyPokemons from "../views/MyPokemons";
import EditPokemon from "../views/EditPokemon";

import { listMyPokemons } from "../redux/actions/MyPokemonsAction";
import { findAllPokemons } from "../redux/actions/pokemonActions";
import { login } from "../redux/actions/authActions";

import NavbarComp from "../components/NavbarComp";

const Routers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user));
        dispatch(listMyPokemons(user.uid));
      } 
    });
    dispatch(findAllPokemons());
  }, [dispatch]);

  return (
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={Page404} />
        <Route exact path="/pokemon/:name" component={DetailPokemon} />
        <PublicRouter exact path="/login" component={Login} />
        <PublicRouter exact path="/signup" component={Register} />
        <PrivateRouter exact path="/mypokemons" component={MyPokemons} />
        <PrivateRouter exact path="/editPokemon" component={EditPokemon} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
};

export default Routers;
