import React from "react";
import styled from "styled-components";
import Cherry from "../images/desktop/image-graphic-design.jpg";
import Orange from "../images/desktop/image-photography.jpg";
import Eggs from "../images/desktop/image-transform.jpg";
import StandOut from "../images//desktop/image-stand-out.jpg";

const Container = styled.section`
  height: auto;
  width: 100%;
`;
const Items = styled.div`
  height: auto;
  width: 100%;
  flex-wrap: wrap;
  display: inline-flex;
  &.row_reverse {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    &.column_reverse {
      flex-direction: column-reverse;
    }
  }
`;
const Content = styled.div`
  height: auto;
  width: 50%;
  max-height: 500px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const Image = styled.div`
  height: auto;
  width: 50%;
  & img {
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

function Info() {
  return (
    <Container>
      <Items className="column_reverse">
        <Content>
          <h2>Transform your brand We are a full-service creative agency</h2>
          <p>
            specializing in helping brands grow fast. Engage your clients
            through compelling visuals that do most of the marketing for you.
          </p>
          <button>Learn more</button>
        </Content>
        <Image>
          <img src={Eggs} alt="Eggs" />
        </Image>
      </Items>

      <Items className="row_reverse column_reverse">
        <Content>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button>Learn more</button>
        </Content>
        <Image>
          <img src={StandOut} alt="StandOut" />
        </Image>
      </Items>

      <Items>
        <Image>
          <img src={Cherry} alt="Design" />
        </Image>
        <Image>
          <img src={Orange} alt="Photography" />
        </Image>
      </Items>
    </Container>
  );
}

export default Info;
