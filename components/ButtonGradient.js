import styled from "styled-components";

export default function GradientButton({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-image: linear-gradient(
    to right,
    var(--pink) 0%,
    var(--white) 51%,
    var(--green) 100%
  );
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--dark);
  border-radius: 8px;
  display: block;

  :hover,
  :focus {
    background-position: right center; /* change the direction of the change here */
    color: var(--dark);
    text-decoration: none;
  }
`;
