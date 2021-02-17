import styled from "styled-components";

export default function ButtonFold({ children }) {
  return (
    <Container>
      <ButtonStyled className="btn">{children}</ButtonStyled>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;

  :hover .btn,
  :focus .btn {
    animation: one 0.25s linear;
    background-color: var(--pink);
    color: var(--dark);
    opacity: 1;
    transform-origin: 50% 100%;
  }

  @keyframes one {
    0% {
      transform: perspective(1000px) rotateX(90deg);
    }
    100% {
      transform: perspective(1000px) rotateX(0);
    }
  }
`;

const ButtonStyled = styled.button`

  border: none;
  border-bottom: 1px solid var(--pink);
  position: relative;
  color: var(--pink);
  background: transparent;
}
::before {
  bottom: 0;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
`;
