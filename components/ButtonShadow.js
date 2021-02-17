import styled from "styled-components";

export default function ButtonShadow({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: var(--green);
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--dark);
  border-radius: 8px;
  display: block;

  :hover,
  :focus {
    box-shadow: 0 0 40px var(--green);
    text-decoration: none;
  }
`;
