import React from "react";

import CardMyPokemons from "../components/CardMyPokemons";

import { Container, ContainerTitleH1 } from "../assets/styles/style";

const prop = {
  containerHome: {
    width: "80%",
    margin: "auto",
    justifyContent: "flex-start",
  },
  title: {
    width: "100%",
    margin: "2rem 0",
  },
};

const MyPokemons = () => {
  return (
    <Container
      width={prop.containerHome.width}
      margin={prop.containerHome.margin}
      justifyContent={prop.containerHome.justifyContent}
    >
      <ContainerTitleH1
        width={prop.title.width}
        margin={prop.title.margin}
      >
        My Pokemons
      </ContainerTitleH1>
      <CardMyPokemons />
    </Container>
  );
};

export default MyPokemons;
