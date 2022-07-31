import React from "react";
import styled from "styled-components";
import Cherry from "../images/desktop/image-graphic-design.jpg";
import CherryMobile from "../images/mobile/image-graphic-design.jpg";
import Orange from "../images/desktop/image-photography.jpg";
import OrangeMobile from "../images/mobile/image-photography.jpg";
import Eggs from "../images/desktop/image-transform.jpg";
import EggsMobile from "../images/mobile/image-transform.jpg";
import StandOut from "../images//desktop/image-stand-out.jpg";
import StandOutMobile from "../images/mobile/image-stand-out.jpg";
import {
  DarkGrayishBlue,
  Fraunces,
  VeryDarkDesaturatedBlue,
} from "../Common";

const Container = styled.section`
  height: auto;
  width: 100%;
`;
const Items = styled.div`
  height: auto;
  width: 100%;
  display: inline-flex;
  &.row_reverse {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    &.column_reverse {
      flex-direction: column-reverse;
    }
  }
`;
const Wrap = styled.div`
  height: auto;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  width: auto;
  margin: 15rem 13rem;
  @media screen and (max-width: 1224px) {
    margin: 12rem 10rem;
  }
  @media screen and (max-width: 992px) {
    margin: 9rem 6rem;
  }
  @media screen and (max-width: 768px) {
    margin: 64px 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    & h2,
    p {
      text-align: center;
    }
  }
  & h2 {
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: max(4rem, 32px);
    line-height: 49px;
    letter-spacing: -0.285714px;
    color: ${VeryDarkDesaturatedBlue};
    margin-bottom: 32px;
  }

  & p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: max(1.8rem, 16px);
    line-height: 30px;
    letter-spacing: -0.128571px;
    color: ${DarkGrayishBlue};
    margin-bottom: 40px;
  }

  & button {
    width: fit-content;
    background: none;
    border: none;
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${VeryDarkDesaturatedBlue};
    position: relative;
    &:hover {
      &::before {
        opacity: 1;
      }
    }
    &::before {
      content: "";
      position: absolute;
      height: 10px;
      width: 100%;
      left: 0px;
      top: 15px;
      border-radius: 28px;
      opacity: 0.25;
      z-index: -1;
      transition: all 0.3s ease-in-out;
    }
    &.eggs::before {
      background: #fad400;
    }
    &.stand-out::before {
      background: #fe7766;
    }
  }
`;
const Image = styled.div`
  height: auto;
  width: 50%;
  min-height: 60rem;
  background: #f1f455;
  &.eggs {
    background: url(${Eggs}) no-repeat center center;
    background-size: cover;
    @media screen and (max-width: 768px) {
      background: url(${EggsMobile}) no-repeat center center;
      background-size: cover;
    }
  }
  &.stand-out {
    background: url(${StandOut}) no-repeat center center;
    background-size: cover;
    @media screen and (max-width: 768px) {
      background: url(${StandOutMobile}) no-repeat center center;
      background-size: cover;
    }
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ArticleContainer = styled.div`
  height: auto;
  width: 100%;
  display: inline-flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Article = styled.div`
  height: auto;
  width: 50%;
  min-height: 600px;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 800px;
  }
  &.cherry {
    background: url(${Cherry}) no-repeat center center;
    background-size: cover;
    @media screen and (max-width: 768px) {
      background: url(${CherryMobile}) no-repeat center center;
      background-size: cover;
    }
  }
  &.orange {
    background: url(${Orange}) no-repeat center center;
    background-size: cover;
    @media screen and (max-width: 768px) {
      background: url(${OrangeMobile}) no-repeat center center;
      background-size: cover;
    }
  }
`;

function Info() {
  return (
    <Container>
      <Items className="column_reverse">
        <Wrap>
          <Content>
            <h2>Transform your brand </h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="eggs">Learn more</button>
          </Content>
        </Wrap>
        <Image className="eggs"></Image>
      </Items>

      <Items className="row_reverse column_reverse">
        <Wrap>
          <Content>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <button className="stand-out">Learn more</button>
          </Content>
        </Wrap>
        <Image className="stand-out"></Image>
      </Items>

      <ArticleContainer>
        <Article className="cherry"></Article>
        <Article className="orange"></Article>
      </ArticleContainer>

      {/* <Image className="orange">Photography</Image> */}
    </Container>
  );
}

export default Info;
