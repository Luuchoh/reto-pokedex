import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "./font.css";
import { FaStar } from "react-icons/fa";

const Colors = {
  accentColor: "#448AFF",
  darkPrimaryColor: "#0097A7",
  defaultPrimaryColor: "#00BCD4",
  dividerColor: "#BDBDBD",
  primaryTextColor: "#212121",
  secondaryTextColor: "#757575",
  textPrimaryColor: "#FFFFFF",
  lightPrimaryColor: "#B2EBF2",
};
const typeColors = {
  electric: "#F8D030",
  normal: "#E0C068 ",
  fire: "#F08030",
  water: "#6890F0",
  ice: "#AFEAFD",
  rock: "#999799",
  flying: "#A890F0",
  grass: "#78C850",
  psychic: "#FFC6D9",
  ghost: "#561D25",
  bug: "#A8B820",
  poison: "#A040A0",
  ground: "#D2B074",
  dragon: "#DA627D",
  steel: "#1D8A99",
  fighting: "rgb(192 48 40)",
  default: "#2A1A1F",
  fairy: "rgb(238 153 172)",
  dark: "rgb(112, 88, 72)",
};

const backgroundColors = {
  electric: "rgb(187, 151, 7)",
  normal: "rgb(112, 112, 72) ",
  fire: "rgb(171 79 13)",
  water: "rgb(20, 75, 204)",
  ice: "#rgb(66, 174, 174)",
  rock: "rgb(121, 106, 37)",
  flying: "rgb(77, 30, 220)",
  grass: "rgb(76 140 44)",
  psychic: "rgb(211, 9, 69)",
  ghost: "rgb(74, 58, 100)",
  bug: "rgb(107, 117, 21)",
  poison: "rgb(106, 42, 106)",
  ground: "rgb(178, 140, 36)",
  dragon: "rgb(62, 7, 192)",
  steel: "rgb(20, 75, 204)",
  fighting: "rgb(123, 30, 25)",
  default: "#2A1A1F",
  fairy: "rgb(218, 37, 76)",
  dark: "rgb(72, 56, 46)",
};

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
html {
  min-height: 100vh;
  position: relative;
}
body {
  margin: unset;
  padding: unset;
  font-family: 'Montserrat', sans-serif !important;
}

#main{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif !important;
}
footer {
  background: ${Colors.defaultPrimaryColor};
  bottom: 0px;
  width: 100%;
  position: static;
}
`;

const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  box-shadow: ${(props) => props.boxShadow};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "unset")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "unset")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};

  &:hover {
    opacity: ${(props) => (props.hoverOpacity ? props.hoverOpacity : "1")};
    cursor: ${(props) => (props.hoverCursor ? props.hoverCursor : "auto")};
  }
`;

const SuperContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const NavMenu = styled.ul`
  margin: unset;
  padding: 0;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 5px;
    color: white;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
  align-self: ${(props) => (props.self ? props.self : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
  position: ${(props) => (props.position ? props.position : "unset")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  cursor: ${(props) => (props.cursor ? props.cursor : "unset")};
  float: ${(props) => (props.float ? props.float : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;

const SearchBar = styled.form`
  display: flex;
  height: 40px;
  align-self: center;
`;

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
  &:hover{
    opacity: 0.5;
  }
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const Label = styled.label`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "auto")};
  color: ${(props) => (props.color ? props.color : Colors.textPrimaryColor)};
  box-sizing: border-box;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 38px;
  background: ${(props) => (props.background ? props.background : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  outline: none;
  appearance: ${(props) => (props.appearance ? props.appearance : "auto")};
  -moz-appearance: textfield;
  font-size: initial;
  padding-left: 10px;
  align-self: center;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const TextArea = styled.textarea`
  min-width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  min-height: ${(props) => (props.minHeight ? props.width : "200px")};
  max-height: ${(props) => (props.maxHeight ? props.width : "400px")};
  border: ${(props) => (props.border ? props.border : "none")};

  font-size: 18px;
`;

const DropDown = styled.div`
  position: relative;
  display: flex;
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  border: 1px solid transparent;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
`;

const DropDownMenu = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  position: absolute;
  background-color: ${Colors.textPrimaryColor};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  margin-top: 70px;
  left: -50px;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 10px;
    color: ${Colors.secondaryTextColor};
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }
`;
const Form = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.defaultPrimaryColor};
  border: ${(props) =>
    props.border ? props.border : "3px solid" + Colors.defaultPrimaryColor};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  position: ${(props) => (props.position ? props.position : "relative")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  box-sizing: border-box;
`;
const Span = styled.span`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  color: ${(props) => (props.color ? props.color : "auto")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0 1rem")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
`;
const Hr = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const ContainerTitle = styled.h3`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  width: ${(props) => (props.width ? props.width : "auto")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerSubTitle = styled.h5`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  width: ${(props) => (props.width ? props.width : "auto")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
`;

const ContainerText = styled.p`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  width: ${(props) => (props.width ? props.width : "auto")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};

  &:hover {
    opacity: ${(props) => (props.hoverOpacity ? props.hoverOpacity : "1")};
    cursor: ${(props) => (props.hoverCursor ? props.hoverCursor : "auto")};
  }
`;

const Divider = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 0;
  border-top: 1px solid ${Colors.dividerColor};
`;

const Paragraph = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "100%")};

  ${({ limit }) =>
    limit &&
    `
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;    
  max-height: 32px;      
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  `}
`;

const ContainerTitleH1 = styled.h1`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const CarouselWrapper = styled.div`
  height: 350px;
  margin: 10px;

  & img {
    height: 350px;
  }
`;

const Column = styled.div`
  display: ${(props) => (props.mdisplay ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  width: ${(props) => (props.width ? props.width : "250px")};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;
  margin-left: 10em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Heading = styled.h3`
  color: ${(props) => (props.color ? props.color : Colors.textPrimaryColor)};
  margin: ${(props) => (props.margin ? props.margin : "0 0 20px 0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
`;

const Select = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 38px;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0 0 0 10px")};
  outline: none;
  font-size: initial;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #757575;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #bdbdbd;
    border-radius: 4px;
  }
`;

const Option = styled.option`
  min-height: 1.2em;

  & :hover {
    background-color: #000;
  }
`;

const LINK = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#dee2e6")};
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;

  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : Colors.textPrimaryColor};
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const START = styled(FaStar)`
  cursor: pointer;
  transition: color 200ms;
`;

export {
  backgroundColors,
  Button,
  CarouselWrapper,
  Colors,
  Column,
  Container,
  ContainerSubTitle,
  ContainerText,
  ContainerTitle,
  ContainerTitleH1,
  Divider,
  DropDown,
  DropDownMenu,
  Form,
  GlobalStyle,
  Heading,
  Hr,
  Img,
  Input,
  TextArea,
  Label,
  LINK,
  NavMenu,
  Option,
  Paragraph,
  Row,
  SearchBar,
  Select,
  Span,
  START,
  SuperContainer,
  typeColors,
  Wrapper,
};
