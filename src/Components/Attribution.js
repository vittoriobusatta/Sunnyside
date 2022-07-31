import React from "react";
import styled from "styled-components";
import {
  Barlow,
  Fraunces,
  VeryDarkDesaturatedBlue,
  VeryDarkGrayishBlue,
} from "../Common";

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  & span {
    font-family: ${Barlow};
    color: ${VeryDarkGrayishBlue};
    font-size: 14px;
    text-align: center;
    line-height: 20px;
  }

  & a {
    color: ${VeryDarkDesaturatedBlue};
    font-family: ${Fraunces};
  }
`;
function Attribution() {
  return (
    <Container class="attribution">
      <span>
        Challenge by&nbsp;
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor.
        </a>
        &nbsp;Coded by{" "}
        <a href="https://vittoriobusatta.fr/">&nbsp;Vittorio Busatta</a>.
      </span>
    </Container>
  );
}

export default Attribution;
