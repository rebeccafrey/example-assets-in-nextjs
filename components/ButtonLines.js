import styled from "styled-components";

export default function ButtonLines({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  transition: 0.5s;
  color: var(--white);
  border-radius: 8px;
  display: block;
  line-height: 44px;

  :hover,
  :focus {
    letter-spacing: 8px;
  }

  :after,
  :before {
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 30%;
    border: 1px solid var(--white);
  }

  :hover:after,
  :hover:before,
  :focus:after,
  :focus:before {
    transition: width 350ms ease-in-out;
    width: 90%;
    border: 1px solid var(--white);
  }
`;
