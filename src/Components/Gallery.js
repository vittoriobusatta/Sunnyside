import React from "react";
import styled from "styled-components";
import MilkImage from "../images/desktop/image-gallery-milkbottles.jpg";
import MilkImageMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import ConeImage from "../images/desktop/image-gallery-cone.jpg";
import ConeImageMobile from "../images/mobile/image-gallery-cone.jpg";
import OrangeImage from "../images/desktop/image-gallery-orange.jpg";
import OrangeImageMobile from "../images/mobile/image-gallery-orange.jpg";
import SuggarImage from "../images/desktop/image-gallery-sugarcubes.jpg";
import SuggarImageMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";

const Container = styled.section`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Items = styled.div`
  height: auto;
  width: auto;
  min-height: 447px;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
  min-height: 250px;
  }
  &#Milk {
    grid-area: 1 / 1 / 2 / 2;
    background: url(${MilkImage});
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
    @media screen and (max-width: 992px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  &#Orange {
    grid-area: 1 / 2 / 2 / 3;
    background: url(${OrangeImage});
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
    @media screen and (max-width: 992px) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
  &#Cone {
    grid-area: 1 / 3 / 2 / 4;
    background: url(${ConeImage});
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
    @media screen and (max-width: 992px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  &#Sugar {
    grid-area: 1 / 4 / 2 / 5;
    background: url(${SuggarImage});
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
    @media screen and (max-width: 992px) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
`;

function Gallery() {
  return (
    <Container>
      <Items id="Milk"></Items>
      <Items id="Cone"></Items>
      <Items id="Orange"></Items>
      <Items id="Sugar"></Items>
    </Container>
  );
}

export default Gallery;
