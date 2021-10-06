import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Form,
  Colors,
  Label,
  Input,
  Button,
  Hr,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";
import { EditMyPokemon } from "../redux/actions/MyPokemonsAction";
import { useHistory } from "react-router";

const prop = {
  containerComp: {
    alignItems: "center",
  },

  containerLogin: {
    width: "calc(50% - 5px)",
    display: "flex",
    padding: "80px 0 30px 0",
  },
  form: {
    width: "70%",
    margin: "auto",
    padding: "80px 50px 30px 50px",
    borderRadius: "5px",
  },
  formGroup: {
    display: "flex",
    direction: "column",
  },
  containerInput: {
    flexWrap: "wrap",
    margin: "0 auto 1rem auto",
  },
  label: {
    margin: "0 auto 10px auto",
  },
  input: {
    borderRadius: "5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },

  error: {
    margin: "0 auto 1rem auto",
    color: "#f60000",
  },
  button: {
    margin: "0 0 1rem 0",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "5px",
  },
  buttonLogin: {
    width: "100%",
    backgrounColor: Colors.accentColor,
    color: Colors.textPrimaryColor,
  },
  buttonCargarImg: {
    width: "35%",
    backgrounColor: Colors.accentColor,
    color: Colors.textPrimaryColor,
    radius: "0 0.25rem 0.25rem 0",
  },
  containerLink: {
    justifyContent: "center",
  },
  hr: {
    margin: "0 0 1rem 0",
  },
};

const EditPokemon = () => {
  const auth = useSelector((state) => state.auth);
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tu nombre"),
    }),
    onSubmit: () => {
      dispatch(EditMyPokemon(pokemon, name, auth.id));
      history.push('/mypokemons')
    },
  });

  const { name } = formik.values;

  return (
    <SuperContainer>
      <Wrapper>
        <Container alignItems={prop.containerComp.alignItems}>
          <Container
            padding={prop.containerLogin.padding}
            display={prop.containerLogin.display}
            width={prop.containerLogin.width}
          >
            <Form
              width={prop.form.width}
              margin={prop.form.margin}
              padding={prop.form.padding}
              borderRadius={prop.form.borderRadius}
              onSubmit={formik.handleSubmit}
            >
              <Container
                flexWrap={prop.containerInput.flexWrap}
                display={prop.formGroup.display}
                direction={prop.formGroup.direction}
              >
                <Label margin={prop.label.margin} htmlFor="name">
                  Cambiar nombre
                </Label>
                <Input
                  margin={prop.input.margin}
                  // padding={prop.input.padding}
                  radius={prop.input.borderRadius}
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Container>

              {formik.touched.name && formik.errors.name ? (
                <Container margin={prop.error.margin} color={prop.error.color}>
                  {formik.errors.name}
                </Container>
              ) : null}
              <Hr margin={prop.hr.margin} />

              <Button
                margin={prop.button.margin}
                fontSize={prop.button.fontSize}
                padding={prop.button.padding}
                border={prop.button.border}
                borderRadius={prop.button.borderRadius}
                width={prop.buttonLogin.width}
                background={prop.buttonLogin.backgrounColor}
                color={prop.buttonLogin.color}
                type="submit"
              >
                Registrar
              </Button>
            </Form>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default EditPokemon;
