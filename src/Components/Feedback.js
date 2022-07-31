import React from "react";
import styled from "styled-components";
import EmilyProfilePicture from "../images/image-emily.jpg";
import ThomasProfilePicture from "../images/image-thomas.jpg";
import JennieProfilePicture from "../images/image-jennie.jpg";
import {
  Barlow,
  Fraunces,
  GrayishBlue,
  VeryDarkDesaturatedBlue,
  VeryDarkGrayishBlue,
} from "../Common";

const Container = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16rem 0 16rem 0;
  @media screen and (max-width: 768px) {
    padding: 64px 24px;
  }
`;
const Grid = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 30px;
  max-width: 1200px;
  padding: 0 24px 0 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 64px;
    grid-column-gap: 0px;
  }
`;

const Items = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  &#Emily {
    grid-area: 1 / 1 / 7 / 3;
    @media screen and (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  &#Thomas {
    grid-area: 1 / 3 / 7 / 5;
    @media screen and (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  &#Jennie {
    grid-area: 1 / 5 / 7 / 7;
    @media screen and (max-width: 768px) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }
`;
const Title = styled.div`
  height: 100%;
  width: auto;
  grid-area: 1 / 3 / 2 / 7;
  margin-bottom: 81px;
  & h4 {
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 5px;
    color: ${GrayishBlue};
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom: 64px;
  }
`;
const Picture = styled.div`
  height: auto;
  width: 100%;
  margin-bottom: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    border-radius: 50%;
    height: 72px;
    width: 72px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;
const Informations = styled.div`
  height: auto;
  width: 100%;
  margin-top: 69px;
  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }
  & h4 {
    font-family: ${Fraunces};
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.128571px;
    color: ${VeryDarkDesaturatedBlue};
    margin-bottom: 9px;
  }
  & p {
    font-family: ${Barlow};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.1px;
    color: ${GrayishBlue};
  }
`;
const Description = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  & p {
    font-family: ${Barlow};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.128571px;
    max-width: 350px;
    color: ${VeryDarkGrayishBlue};
  }
`;

function Feedback() {
  return (
    <Container>
      <Title>
        <h4>Client Testimonials</h4>
      </Title>
      <Grid>
        <Items id="Emily">
          <Picture>
            <img src={EmilyProfilePicture} alt="Emily" />
          </Picture>
          <Description>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
          </Description>

          <Informations>
            <h4>Emily R.</h4>
            <p>Marketing Director</p>
          </Informations>
        </Items>

        <Items id="Thomas">
          <Picture>
            <img src={ThomasProfilePicture} alt="Thomas" />
          </Picture>
          <Description>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
          </Description>

          <Informations>
            <h4>Thomas S.</h4>
            <p>Chief Operating Officer</p>
          </Informations>
        </Items>

        <Items id="Jennie">
          <Picture>
            <img src={JennieProfilePicture} alt="Jennie" />
          </Picture>
          <Description>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
          </Description>

          <Informations>
            <h4>Jennie F.</h4>
            <p>Business Owner</p>
          </Informations>
        </Items>
      </Grid>
    </Container>
  );
}

export default Feedback;
