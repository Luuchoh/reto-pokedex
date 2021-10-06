import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { MdCatchingPokemon } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { Button, Colors, Container, Form, Input } from "../assets/styles/style";
import { findAllPokemons, findOnePokemon } from "../redux/actions/pokemonActions";

const PROP = {
  containerForm: {
    flexWrap: "wrap",
    padding: "10px",
  },
  form: {
    width: "100%",
    padding: "30px 10px",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    border: "none",
  },
  containerInputService: {
    width: "40%",
  },
  iconService: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.dividerColor,
    borderRadius: "8px 0 0 8px",
    color: Colors.secondaryTextColor,
  },
  inputService: {
    width: "80%",
    borderRadius: " 0",
    background: Colors.dividerColor,
    color: Colors.secondaryTextColor,
  },
  buttonSearch: {
    width: "10%",
    height: "38px",
    padding: "0",
    borderRadius: " 0 8px 8px 0",
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
    fontWeight: "700",
  },
};

const Search = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      pokemon: "",
    },
    onSubmit: () => {
        if(pokemon.length > 2){
            dispatch(findOnePokemon(pokemon));
        }
    },
  });

  const { pokemon } = formik.values;

  useEffect(() => {
    if(pokemon.length === 1){
        dispatch(findAllPokemons());
    }
  }, [dispatch,pokemon]);

  return (
    <Container
      flexWrap={PROP.containerForm.flexWrap}
      padding={PROP.containerForm.padding}
    >
      <Form
        width={PROP.form.width}
        backgroundColor={PROP.form.backgroundColor}
        border={PROP.form.border}
        padding={PROP.form.padding}
        justifyContent={PROP.form.justifyContent}
        onSubmit={formik.handleSubmit}
      >
        <Container width={PROP.containerInputService.width}>
          <Container
            width={PROP.iconService.width}
            height={PROP.iconService.height}
            justifyContent={PROP.iconService.justifyContent}
            alignItems={PROP.iconService.alignItems}
            radius={PROP.iconService.borderRadius}
            background={PROP.iconService.background}
            color={PROP.iconService.color}
          >
            <MdCatchingPokemon />
          </Container>
          <Input
            width={PROP.inputService.width}
            radius={PROP.inputService.borderRadius}
            background={PROP.inputService.background}
            name="pokemon"
            type="text"
            id="pokemon"
            placeholder="Pokemon"
            value={pokemon.toLowerCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            width={PROP.buttonSearch.width}
            height={PROP.buttonSearch.height}
            padding={PROP.buttonSearch.padding}
            background={PROP.buttonSearch.background}
            color={PROP.buttonSearch.color}
            radius={PROP.buttonSearch.borderRadius}
            fontWeight={PROP.buttonSearch.fontWeight}
          >
            <FaSearch />
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Search;
