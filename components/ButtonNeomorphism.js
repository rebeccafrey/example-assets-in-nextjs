import styled from "styled-components";

export default function ButtonNeomorphism({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  outline: none;
  background-color: var(--dark);

  box-shadow: inset 6px 6px 10px 0 rgba(220, 220, 220, 0.2),
    inset -6px -6px 10px 0 rgba(50, 50, 50, 0.5);
  background: linear-gradient(
    -45deg,
    rgba(220, 220, 220, 0.2),
    rgba(50, 50, 50, 0.3)
  );
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--white);
  border-radius: 8px;
  display: block;

  :active {
    box-shadow: 6px 6px 6px 0 rgba(220, 220, 220, 0.2),
      -8px -8px 8px 0 rgba(50, 50, 50, 0.5);
  }

  /* :hover,
  :focus {
    box-shadow: 5px 5px 15px 0 rgba(255, 255, 250, 0.8),
      -5px -5px 15px 0 rgba(68, 69, 69, 0.8);
    text-decoration: none;
  } */
`;
