import React from 'react';
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Mikey S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        rightBtnTxt="Custom Order"
        leftBtnTxt="Existing Invetory "
      />
      <Section
        title="Mikey Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        rightBtnTxt="Custom Order"
        leftBtnTxt="Existing Invetory " />
      <Section
        title="Mikey 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        rightBtnTxt="Custom Order"
        leftBtnTxt="Existing Invetory " />
      <Section
        title="Mikey X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        rightBtnTxt="Custom Order"
        leftBtnTxt="Existing Invetory " />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        rightBtnTxt="Order now"
        leftBtnTxt="Learn more" />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        rightBtnTxt="Order now"
        leftBtnTxt="Learn more" />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop now" />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`