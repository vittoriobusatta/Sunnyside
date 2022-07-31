import React from "react";
import styled from "styled-components";
import { DarkGrayishBlue, Fraunces, VeryDarkDesaturatedBlue } from "../Common";

const Container = styled.section`
  height: auto;
  width: calc(100% - 8rem);
  background: #fff;
  position: fixed;
  top: 106px;
  height: 329px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  & ul {
    margin: 63px 94px 39px 94px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & li {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: -0.142857px;
      color: ${DarkGrayishBlue};
      margin-bottom: 32px;
      text-align: center;
      & span {
        font-weight: 700;
        font-size: 15px;
        color: #49bcf1;
        font-family: ${Fraunces};
        color: ${VeryDarkDesaturatedBlue};
        background-color: #fbd600;
        height: 56px;
        width: 140px;
        border-radius: 28px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: -0.107143px;
        cursor: pointer;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  opacity: ${(props) => (props.isActive === true ? 1 : 0)};
  z-index: ${(props) => (props.isActive === true ? 1 : -1)};
  transition: all 0.2s ease-in;
  
  @media screen and (min-width: 992px) {
    display: none;
  }
  &::before {
    position: absolute;
    content: "";
    border-bottom: 24px solid #fff;
    border-left: 24px solid transparent;
    top: -24px;
    right: 0;
  }
`;
function Menu({ openMenu }) {
  return (
    <Container isActive={openMenu}>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;
