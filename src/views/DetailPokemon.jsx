import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GiWeight } from "react-icons/gi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiOutlineRadarChart } from "react-icons/ai";
import { MdOutlineHeight } from "react-icons/md";
import arrow from "../assets/img/arrow.png";

import { ProgressBar } from "react-bootstrap";

import {
  findEvolution,
  findInfoOnePokemon,
} from "../redux/actions/pokemonActions";

import {
  Button,
  backgroundColors,
  Container,
  ContainerSubTitle,
  Img,
  typeColors,
  Colors,
  ContainerTitle,
  Span,
} from "../assets/styles/style";

const prop = {
  containerInfo: {
    width: "70%",
    margin: "auto",
    background: Colors.textPrimaryColor,
  },
  info: {
    width: "90%",
    margin: "auto",
  },
  title: {
    width: "100%",
    padding: "2rem",
    justifyContent: "center",
    color: Colors.textPrimaryColor,
  },
  subtitle: {
    width: "100%",
    padding: "1rem",
    justifyContent: "center",
    color: Colors.textPrimaryColor,
  },
  containerSection1: {
    width: "100%",
    margin: "1rem 0",
    justifyContent: "space-between",
  },
  section1Img: {
    width: "25%",
  },
  section1Stats: {
    width: "calc(75% - 20px)",
  },
  statsTypes: {
    width: "100%",
    margin: "1rem 0",
  },
  Types: {
    width: "auto",
    margin: "0 0.5rem",
    padding: "3px 0.75rem",
    radius: "8px",
  },
  TypesId: {
    width: "50%",
    justifyContent: "flex-end",
  },

  containerSection2: {
    width: "50%",
    margin: "1rem auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSection3: {
    width: "70%",
    margin: "1rem auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section3block: {
    width: "100%",
    margin: "1rem auto",
    justifyContent: "space-around",
    alignItems: "center",
  },
  blockOne: {
    width: "40%",
  },
  blockTwo: {
    width: "20%",
    margin: "auto",
  },
  blockThree: {
    width: "40%",
  },
};

const DetailPokemon = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const pokemon = useSelector((state) => state.pokemon);
  const evolution = useSelector((state) => state.pokemonsEvolution);

  useEffect(() => {
    if (pokemon instanceof Array) {
      console.log("no existe pokemon");
      dispatch(findInfoOnePokemon(name));
    } else {
      dispatch(findEvolution(pokemon.species.url));
    }
  }, [dispatch, name, pokemon]);

  return (
    <>
      {pokemon instanceof Array ? null : (
        <Container
          background={`
          linear-gradient(to right,
            ${typeColors[pokemon.types[0].type.name]} 50%,
            ${
              pokemon.types[1]
                ? typeColors[pokemon.types[1].type.name]
                : typeColors[pokemon.types[0].type.name]
            } 50%)`}
        >
          <Container>
            <Button
              background={backgroundColors[pokemon.types[0].type.name]}
              onClick={() => history.goBack()}
            >
              <RiArrowGoBackLine />
            </Button>
          </Container>
          <Container
            width={prop.containerInfo.width}
            margin={prop.containerInfo.margin}
            background={prop.containerInfo.background}
          >
            <ContainerTitle
              width={prop.title.width}
              padding={prop.title.padding}
              justifyContent={prop.title.justifyContent}
              color={prop.title.color}
              background={backgroundColors[pokemon.types[0].type.name]}
            >
              {pokemon.name}
            </ContainerTitle>
            <Container width={prop.info.width} margin={prop.info.margin}>
              <Container
                width={prop.containerSection1.width}
                margin={prop.containerSection1.margin}
                justifyContent={prop.containerSection1.justifyContent}
              >
                <Container width={prop.section1Img.width}>
                  <Img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </Container>
                <Container width={prop.section1Stats.width}>
                  <Container
                    width={prop.statsTypes.width}
                    margin={prop.statsTypes.margin}
                  >
                    {pokemon.types.map((type, index) => (
                      <Container
                        key={index}
                        width={prop.Types.width}
                        margin={prop.Types.margin}
                        padding={prop.Types.padding}
                        radius={prop.Types.radius}
                        background={backgroundColors[type.type.name]}
                      >
                        {type.type.name}
                      </Container>
                    ))}
                    <Container
                      width={prop.TypesId.width}
                      margin={prop.Types.margin}
                      padding={prop.Types.padding}
                      justifyContent={prop.TypesId.justifyContent}
                    >
                      #{pokemon.id}
                    </Container>
                  </Container>
                  {pokemon.stats.map((stat, index) => (
                    <Container key={index}>
                      <Container width={"50%"}>{stat.stat.name}</Container>
                      <ProgressBar
                        animated
                        now={stat.base_stat}
                        label={stat.base_stat}
                        max="150"
                        style={{ width: "50%" }}
                      />
                    </Container>
                  ))}
                </Container>
              </Container>
            </Container>
            <Container width={prop.info.width} margin={prop.info.margin}>
              <ContainerSubTitle
                width={prop.subtitle.width}
                padding={prop.subtitle.padding}
                justifyContent={prop.subtitle.justifyContent}
                color={prop.subtitle.color}
                background={backgroundColors[pokemon.types[0].type.name]}
              >
                Profile
              </ContainerSubTitle>
              <Container
                width={prop.containerSection2.width}
                margin={prop.containerSection2.margin}
                justifyContent={prop.containerSection2.justifyContent}
              >
                <Container alignItems={prop.containerSection2.alignItems}>
                  <MdOutlineHeight />
                  <Span>Height: </Span>
                  {pokemon.height}
                </Container>
                <Container alignItems={prop.containerSection2.alignItems}>
                  <GiWeight />
                  <Span>Weight: </Span>
                  {pokemon.weight}
                </Container>
                {pokemon.abilities.map((ability, index) => (
                  <Container
                    key={index}
                    alignItems={prop.containerSection2.alignItems}
                  >
                    <AiOutlineRadarChart />
                    <Span>Ability: </Span>
                    {ability.ability.name}
                  </Container>
                ))}
              </Container>
            </Container>
            <Container width={prop.info.width} margin={prop.info.margin}>
              <ContainerSubTitle
                width={prop.subtitle.width}
                padding={prop.subtitle.padding}
                justifyContent={prop.subtitle.justifyContent}
                color={prop.subtitle.color}
                background={backgroundColors[pokemon.types[0].type.name]}
              >
                Evolutions
              </ContainerSubTitle>
              {evolution.length > 0 && (
                <Container
                  width={prop.containerSection3.width}
                  margin={prop.containerSection3.margin}
                  justifyContent={prop.containerSection3.justifyContent}
                  alignItems={prop.containerSection3.alignItems}
                >
                  <Container
                    width={prop.section3block.width}
                    margin={prop.section3block.margin}
                    justifyContent={prop.section3block.justifyContent}
                    alignItems={prop.section3block.alignItems}
                  >
                    <Container width={prop.blockOne.width}>
                      <Img
                        width="100%"
                        src={evolution[0].image}
                        alt={evolution[0].name}
                      />
                      <p className="text-center w-100">{evolution[0].name}</p>
                    </Container>
                    {evolution.length > 1 && (
                      <>
                        <Container
                          width={prop.blockTwo.width}
                          margin={prop.blockTwo.margin}
                        >
                          <Img width="80%" src={arrow} />
                        </Container>
                        <Container width={prop.blockThree.width}>
                          <Img
                            width="100%"
                            src={evolution[1].image}
                            alt={evolution[1].name}
                          />
                          <p className="text-center w-100">
                            {evolution[1].name}
                          </p>
                        </Container>
                      </>
                    )}
                  </Container>
                  {evolution.length > 2 && (
                    <Container
                      width={prop.section3block.width}
                      margin={prop.section3block.margin}
                      justifyContent={prop.section3block.justifyContent}
                      alignItems={prop.section3block.alignItems}
                    >
                      <Container width={prop.blockOne.width}>
                        <Img
                          width="100%"
                          src={evolution[1].image}
                          alt={evolution[1].name}
                        />
                        <p className="text-center w-100">{evolution[1].name}</p>
                      </Container>
                      <Container
                        width={prop.blockTwo.width}
                        margin={prop.blockTwo.margin}
                      >
                        <Img width="80%" src={arrow} />
                      </Container>
                      <Container width={prop.blockThree.width}>
                        <Img width="100%" src={evolution[2].image} alt={evolution[2].name} />
                        <p className="text-center w-100">{evolution[2].name}</p>
                      </Container>
                    </Container>
                  )}
                </Container>
              )}
            </Container>
          </Container>
        </Container>
      )}
    </>
  );
};

export default DetailPokemon;
