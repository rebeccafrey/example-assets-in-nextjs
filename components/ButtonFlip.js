import styled from "styled-components";

export default function ButtonFlip({ children }) {
  return <ButtonStyled data-back={children} data-front={children} />;
}

const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  display: inline-block;
  font-weight: lighter;
  line-height: 48px;
  text-transform: uppercase;
  opacity: 1;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:hover,
  :focus {
    &::after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &::before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &::after {
    top: 0;
    left: 0;
    display: block;
    height: 48px;
    width: 200px;
    background: var(--white);
    border: transparent 2px solid;
    content: attr(data-back);
    color: var(--dark);
    mix-blend-mode: screen;
    transform: translateY(-50%) rotateX(90deg);
    transition: 0.25s;
    position: absolute;
    border-radius: 8px;
  }

  &::before {
    top: 0;
    left: 0;
    display: block;
    height: 48px;
    width: 200px;
    background: transparent;
    border: var(--white) 2px solid;
    content: attr(data-front);
    opacity: 1;
    color: var(--white);
    transform: translateY(0) rotateX(0);
    transition: 0.25s;
    position: relative;
    border-radius: 8px;
  }
`;
