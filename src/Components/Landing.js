import React from "react";
import styled from "styled-components";
import { Fraunces, White } from "../Common";
import BackgroundImage from "../images/desktop/image-header.jpg";
import ArrowDown from "../images/icon-arrow-down.svg";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  min-height: 538px;
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 576px) {
    height: 538px;
  }
`;
const Title = styled.div`
  height: 69px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  top: max(19.5rem, 130px);
  position: absolute;

  & h1 {
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 69px;
    text-align: center;
    letter-spacing: 8.75px;
    text-transform: uppercase;
    color: ${White};
    @media screen and (max-width: 576px) {
      font-size: 40px;
      font-weight: 900;
      line-height: 49px;
      letter-spacing: 6.25px;
      text-align: center;
    }
    @media screen and (max-width: 321px) {
      font-size: 30px;
    }
  }

  img {
    margin-top: 7rem;
    width: 30px;
    height: 107.48px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    @media screen and (max-width: 321px) {
      height: 80px;
    }
  }
`;

function Landing() {
  return (
    <Container>
      <Title>
        <h1>We are creatives</h1>
        <img src={ArrowDown} alt="Arrow Down" />
      </Title>
    </Container>
  );
}

export default Landing;
