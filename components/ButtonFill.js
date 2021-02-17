import styled from "styled-components";

export default function ButtonFill({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: linear-gradient(to right, var(--brown) 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: var(--brown) 2px solid;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--white);

  border-radius: 8px;
  display: block;

  :hover,
  :focus {
    background-position: left bottom;
    text-decoration: none;
  }
`;
