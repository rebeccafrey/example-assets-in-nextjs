import Head from "next/head";
import ButtonFlip from "../components/ButtonFlip";
import ButtonGradient from "../components/ButtonGradient";
import ButtonShadow from "../components/ButtonShadow";
import ButtonFill from "../components/ButtonFill";
import ButtonLines from "../components/ButtonLines";
import ButtonFold from "../components/ButtonFold";
import styled from "styled-components";
import ButtonNeomorphism from "../components/ButtonNeomorphism";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Example assets for Websites</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <TitleStyled>Example assets for websites</TitleStyled>

        <Grid>
          <ButtonFlip>Flip </ButtonFlip>
          <ButtonGradient>Gradient </ButtonGradient>
          <ButtonShadow>Shadow</ButtonShadow>
          <ButtonFill>Fill</ButtonFill>
          <ButtonLines>Lines</ButtonLines>
          <ButtonFold>Fold</ButtonFold>
          <ButtonNeomorphism>Neomorphism</ButtonNeomorphism>
        </Grid>
      </main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
  gap: 48px;
`;

const TitleStyled = styled.h1`
  font-size: 25px;
  font-weight: lighter;
  text-align: center;
`;
