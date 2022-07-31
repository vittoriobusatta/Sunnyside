import React from "react";
import styled from "styled-components";
import { VeryDarkDesaturatedBlue, White } from "../Common";
import Logo from "../images/logo.svg";
import Hambuger from "../images/icon-hamburger.svg";

const Container = styled.header`
  height: 56px;
  width: calc(100%-8rem);
  left: 4rem;
  right: 4rem;
  top: 34px;
  position: absolute;
  display: inline-flex;
  @media screen and (max-width: 576px) {
    height: 24px;
    top: 32px;
  }
`;
const LogoContainer = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
  display: flex;
  align-items: center;

  & img {
    height: 33px;
    width: 170px;
  }
`;
const Menu = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  li {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${White};
    margin-right: 4.7rem;
    & span {
      font-weight: 700;
      font-size: 15px;
      color: #49bcf1;
      font-family: "Fraunces", serif;
      color: ${VeryDarkDesaturatedBlue};
      background-color: #fff;
      border-radius: 28px;
      text-transform: uppercase;
      width: 140px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: -0.107143px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #FFFFFF40;
        color: ${White};
      }
    }
    
    &:last-child {
      margin-right: 0;
    }
    
  }
  & img {
    cursor: pointer;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

function Header() {
  return (
    <>
      <Container>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <Menu>
          <img src={Hambuger} alt="hamburger" />
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li><span>Contact</span></li>
          </ul>
        </Menu>
      </Container>
    </>
  );
}

export default Header;
