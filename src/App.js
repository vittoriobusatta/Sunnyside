import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Attribution from "./Components/Attribution";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Landing from "./Components/Landing";
import Menu from "./Components/Menu";
import "./fonts.css";
import "./reset.css";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background: #FFFCF8;
    @media only screen and (min-width : 1824px) {
      font-size: 70%;
    } 
    @media screen and (max-width: 1400px) {
      font-size: 58%;
    }
    @media screen and (max-width: 1224px) {
      font-size: 52%;
    }
    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: 34%;
    }
    @media screen and (max-width: 321px) {
      font-size: 28%;
    }
    
  } 
  body {
    background-color: #fff;
    font-size: 1.6rem;
  }
  ::-moz-selection {
    background: #CDEDF6;
    text-shadow: none;
  }
  ::selection {
    background: #CDEDF6;
    text-shadow: none;
  }
  ::-webkit-scrollbar{
    width: 10px;
    background-color: #FAF7EE;
  }
    
  ::-webkit-scrollbar-thumb{
    background: #D4CEBD;
    border-radius: 15px;
  }
`;

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Menu openMenu={openMenu} />
      <Landing />
      <Info />
      <Feedback />
      <Gallery />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
