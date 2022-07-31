import React from "react";
import styled from "styled-components";
import CherryImage from "../images/desktop/image-graphic-design.jpg";
import CherryImageMobile from "../images/mobile/image-graphic-design.jpg";
import OrangeImage from "../images/desktop/image-photography.jpg";
import OrangeImageMobile from "../images/mobile/image-photography.jpg";
import EggsImage from "../images/desktop/image-transform.jpg";
import EggsImageMobile from "../images/mobile/image-transform.jpg";
import CupImage from "../images//desktop/image-stand-out.jpg";
import CupImageMobile from "../images/mobile/image-stand-out.jpg";
import {
  Barlow,
  DarkGrayishBlue,
  Fraunces,
  VeryDarkDesaturatedBlue,
} from "../Common";

const Container = styled.section`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 0fr repeat(9, 1fr) 0fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(14, 1fr);
  }
`;

const Content = styled.div`
  height: auto;
  width: auto;
  max-width: 445px;
  margin: 15rem 13rem;
  @media screen and (max-width: 1224px) {
    margin: 12rem 10rem;
  }
  @media screen and (max-width: 992px) {
    margin: 9rem 6rem;
  }
  @media screen and (max-width: 768px) {
    margin: 7rem 4rem;
    text-align: center;
  }
  @media screen and (max-width: 576px) {
    margin: 64px 24px;
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
    @media screen and (max-width: 768px) {
      text-align: center;
    }
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
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  & button {
    z-index: 20;
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
      &::after {
        opacity: 1;
      }
    }
    &::after {
      content: "";
      position: absolute;
      height: 10px;
      width: 100%;
      left: 0px;
      top: 15px;
      border-radius: 28px;
      opacity: 0.25;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }
    &.eggs::after {
      background: #fad400;
      z-index: 1;
    }
    &.stand-out::after {
      background: #fe7766;
    }
  }
`;

const ServicesContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  & h4 {
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.2px;
    padding-bottom: 24px;
    &.cherry {
      color: #24554a;
    }
    &.orange {
      color: #052c3b;
    }
  }
  & p {
    font-family: ${Barlow};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.114286px;
    max-width: 339px;
    margin-bottom: 59px;
    &.cherry {
      color: #24554a;
    }
    &.orange {
      color: #19536c;
    }
  }
`;

const EggsContent = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 2 / 1 / 5 / 5;
  @media screen and (max-width: 768px) {
    grid-area: 3 / 1 / 5 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Eggs = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 2 / 5 / 5 / 9;
  background: url(${EggsImage}) no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: url(${EggsImageMobile}) no-repeat center center;
    background-size: cover;
    grid-area: 1 / 1 / 3 / 2;
  }
`;
const Cup = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 5 / 1 / 8 / 5;
  background: url(${CupImage}) no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: url(${CupImageMobile}) no-repeat center center;
    background-size: cover;
    grid-area: 5 / 1 / 7 / 2;
  }
`;
const CupContent = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 5 / 5 / 8 / 9;
  @media screen and (max-width: 768px) {
    grid-area: 7 / 1 / 9 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Cherry = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 8 / 1 / 11 / 5;
  background: url(${CherryImage}) no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: url(${CherryImageMobile}) no-repeat center center;
    background-size: cover;
    grid-area: 9 / 1 / 12 / 2;
  }
`;
const Orange = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 8 / 5 / 11 / 9;
  background: url(${OrangeImage}) no-repeat center center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background: url(${OrangeImageMobile}) no-repeat center center;
    background-size: cover;
    grid-area: 12 / 1 / 15 / 2;
  }
`;

function Info() {
  return (
    <Container>
      <Eggs></Eggs>

      <EggsContent>
        <Content>
          <h2>Transform your brand </h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="eggs">Learn more</button>
        </Content>
      </EggsContent>

      <Cup></Cup>

      <CupContent>
        <Content>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="stand-out">Learn more</button>
        </Content>
      </CupContent>

      <Cherry>
        <ServicesContent>
          <h4 className="cherry">Graphic Design</h4>
          <p className="cherry">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </ServicesContent>
      </Cherry>

      <Orange>
        <ServicesContent>
          <h4 className="orange">Photography</h4>
          <p className="orange">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </ServicesContent>
      </Orange>
    </Container>
  );
}

export default Info;
