import React from "react";

import CardPokemon from "../components/CardPokemon";
import Search from "../components/Search";


import { Container } from "../assets/styles/style";

const prop = {
  containerHome: {
    width: "80%",
    margin: "auto",
    justifyContent: 'space-around'
  },
};

const Home = () => {

  return (
    <Container
      width={prop.containerHome.width}
      margin={prop.containerHome.margin}
      justifyContent={prop.containerHome.justifyContent}
    >
      <Search />
      <CardPokemon />
    </Container>
  );
};

export default Home;
