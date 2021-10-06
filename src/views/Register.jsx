import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

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
  LINK,
} from "../assets/styles/style";
import { startRegisterWithEmailPasswordNameUrlImg } from "../redux/actions/authActions.js";

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
  containerInputPassword: {
    flexWrap: "wrap",
    margin: "0 auto 1rem auto",
  },
  inputPassword: {
    width: "90%",
    borderRadius: "5px 0 0 5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },
  iconPassword: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.textPrimaryColor,
    borderRadius: "0 5px 5px 0",
    color: Colors.dividerColor,
  },
  inputImg: {
    radius: "0.25rem 0 0 0.25rem",
  },
  select: {
    width: "100%",
    borderRadius: " 5px",
    margin: "0 auto 10px auto",
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

const RegisterComp = () => {

  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      documentType: "",
      documentNumber: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tu nombre"),
      email: Yup.string()
        .email("Email invalido")
        .required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
          "La contraseña debe tener minimo un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(startRegisterWithEmailPasswordNameUrlImg(email, password, name));
    },
  });

  const {
    name,
    email,
    password,
    password2,
  } = formik.values;

  const mostrarContraseña = () => {
    if(mostrar === false){
      setMostrar(true)
    }else{
      setMostrar(false)
    }
    
  }
  const mostrarContraseña2 = () => {
    if(mostrar2 === false){
      setMostrar2(true)
    }else{
      setMostrar2(false)
    }
    
  }

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
                  Nombres 
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

              <Container
                flexWrap={prop.containerInput.flexWrap}
                display={prop.formGroup.display}
                direction={prop.formGroup.direction}
              >
                <Label margin={prop.label.margin} htmlFor="email">
                  Correo
                </Label>
                <Input
                  margin={prop.input.margin}
                  // padding={prop.input.padding}
                  radius={prop.input.borderRadius}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Container>

              {formik.touched.email && formik.errors.email ? (
                <Container margin={prop.error.margin} color={prop.error.color}>
                  {formik.errors.email}
                </Container>
              ) : null}

              <Container
                margin={prop.containerInputPassword.margin}
                flexWrap={prop.containerInputPassword.flexWrap}
              >
                <Label margin={prop.label.margin} htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  width={prop.inputPassword.width}
                  margin={prop.inputPassword.margin}
                  // padding={prop.inputPassword.padding}
                  radius={prop.inputPassword.borderRadius}
                  type={mostrar ? 'text':'password'}
                  name="password"
                  id="password"
                  value={password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Container
                  width={prop.iconPassword.width}
                  height={prop.iconPassword.height}
                  justifyContent={prop.iconPassword.justifyContent}
                  alignItems={prop.iconPassword.alignItems}
                  background={prop.iconPassword.background}
                  radius={prop.iconPassword.borderRadius}
                  color={prop.iconPassword.color}
                  onClick={mostrarContraseña}
                >
                {mostrar ? <BsFillEyeFill color="black" />:<BsFillEyeSlashFill />}
                  
                </Container>

                
              </Container>

              {formik.touched.password && formik.errors.password ? (
                <Container margin={prop.error.margin} color={prop.error.color}>
                  {formik.errors.password}
                </Container>
              ) : null}

              <Container
                margin={prop.containerInputPassword.margin}
                flexWrap={prop.containerInputPassword.flexWrap}
              >
                <Label margin={prop.label.margin} htmlFor="password2">
                  Confirma tu contraseña
                </Label>
                <Input
                  width={prop.inputPassword.width}
                  margin={prop.inputPassword.margin}
                  // padding={prop.inputPassword.padding}
                  radius={prop.inputPassword.borderRadius}
                  type={mostrar2 ? 'text':'password'}
                  name="password2"
                  id="password2"
                  value={password2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Container
                  width={prop.iconPassword.width}
                  height={prop.iconPassword.height}
                  justifyContent={prop.iconPassword.justifyContent}
                  alignItems={prop.iconPassword.alignItems}
                  background={prop.iconPassword.background}
                  radius={prop.iconPassword.borderRadius}
                  color={prop.iconPassword.color}
                  onClick={mostrarContraseña2}
                >
                  {mostrar2 ? <BsFillEyeFill  color="black" />:<BsFillEyeSlashFill />}
                </Container>

                {formik.touched.password && formik.errors.password ? (
                  <Container
                    margin={prop.error.margin}
                    color={prop.error.color}
                  >
                    {formik.errors.password}
                  </Container>
                ) : null}
              </Container>

              {formik.touched.password2 && formik.errors.password2 ? (
                <Container margin={prop.error.margin} color={prop.error.color}>
                  {formik.errors.password2}
                </Container>
              ) : null}

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

              <Hr margin={prop.hr.margin} />

              <Container justifyContent={prop.containerLink.justifyContent}>
                <LINK to="/login">Ya estás registrado</LINK>
              </Container>
            </Form>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default RegisterComp;
