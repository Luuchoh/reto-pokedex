import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  backgroundColors,
  Colors,
  Container,
  ContainerSubTitle,
  ContainerText,
  Img,
  Paragraph,
  typeColors,
} from "../assets/styles/style";
import { addNewPokemon } from "../redux/actions/MyPokemonsAction";
import { findInfoOnePokemon } from "../redux/actions/pokemonActions";

const prop = {
  containerCard: {
    width: "calc(20% - 5px)",
    margin: "0 0 1rem 0",
    hoverOpacity: "0.7",
    hoverCursor: "pointer",
  },
  cardHeader: {
    width: "100%",
    padding: "0.25rem 0",
    fontSize: "0.9rem !important",
    alignItems: "center",
  },
  cardHeaderSubtitle: {
    width: "75%",
    color: Colors.textPrimaryColor,
  },
  cardHeaderText: {
    width: "25%",
    color: Colors.textPrimaryColor,
  },
  cardBody: {
    justifyContent: "center",
  },
  cardFooter: {
    width: "100",
  },
};

const CardPokemon = () => {
  const { pokemons } = useSelector((state) => state.pokemonsList);
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const infoPokemon = (name) => {
    dispatch(findInfoOnePokemon(name));
    history.push(`/pokemon/${name}`);
  };

  const AddMyPokemons = (pokemon, id) => {
    dispatch(addNewPokemon(pokemon, id));
    // history.push(`/pokemon/${}`);
  };

  return (
    <>
      {pokemons &&
        pokemons.map((pokemon, index) => (
          <Container
            width={prop.containerCard.width}
            margin={prop.containerCard.margin}
            key={index}
          >
            <Container
              width={prop.cardHeader.width}
              padding={prop.cardHeader.padding}
              background={backgroundColors[pokemon.types[0].type.name]}
              fontSize={prop.cardHeader.fontSize}
              alignItems={prop.cardHeader.alignItems}
              hoverOpacity={prop.containerCard.hoverOpacity}
              hoverCursor={prop.containerCard.hoverCursor}
              onClick={() => infoPokemon(pokemon.name)}
            >
              <ContainerSubTitle
                width={prop.cardHeaderSubtitle.width}
                color={prop.cardHeaderSubtitle.color}
                fontSize={prop.cardHeader.fontSize}
              >
                {pokemon.name}
              </ContainerSubTitle>
              <ContainerText
                width={prop.cardHeaderText.width}
                color={prop.cardHeaderText.color}
              >
                #{pokemon.id}
              </ContainerText>
            </Container>
            <Container
              background={`
                linear-gradient(to right,
                  ${typeColors[pokemon.types[0].type.name]} 50%,
                  ${
                    pokemon.types[1]
                      ? typeColors[pokemon.types[1].type.name]
                      : typeColors[pokemon.types[0].type.name]
                  } 50%)`}
              justifyContent={prop.cardBody.justifyContent}
              hoverOpacity={prop.containerCard.hoverOpacity}
              hoverCursor={prop.containerCard.hoverCursor}
              onClick={() => infoPokemon(pokemon.name)}
            >
              <Img variant="top" src={pokemon.sprites.front_default} />

              <Container
                width="100%"
                height={"auto"}
                alignItems="center"
                justifyContent="space-around"
              >
                {pokemon.types[0] ? (
                  <Container
                    className="text-uppercase"
                    width={"auto"}
                    background={typeColors[pokemon.types[0].type.name]}
                    padding={"2px"}
                    flex={"1"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Paragraph color={"white"} weight={"bold"} size={"11px"}>
                      {pokemon.types[0].type.name}
                    </Paragraph>
                  </Container>
                ) : null}
                {pokemon.types[1] ? (
                  <Container
                    className="text-uppercase"
                    width={"auto"}
                    background={typeColors[pokemon.types[1].type.name]}
                    padding={"2px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flex={"1"}
                  >
                    <Paragraph color={"white"} weight={"bold"} size={"11px"}>
                      {pokemon.types[1].type.name}
                    </Paragraph>
                  </Container>
                ) : null}
              </Container>
            </Container>
            {auth.isAuthenticated ? (
              <ContainerText
                width={prop.cardFooter.width}
                color={prop.cardHeaderText.color}
                background={backgroundColors[pokemon.types[0].type.name]}
                hoverOpacity={prop.containerCard.hoverOpacity}
                hoverCursor={prop.containerCard.hoverCursor}
                onClick={() => AddMyPokemons(pokemon, auth.id)}
              >
                Agregar a mi coleccióon
              </ContainerText>
            ) : null}
          </Container>
        ))}
    </>
  );
};

export default CardPokemon;
