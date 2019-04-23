import styled from "styled-components";

interface IProps {
  margin: string;
  rotate: number;
}

const NavButton = styled.button<IProps>`
  outline: none;
  font-family: Rubik;
  font-weight: 300;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 20px;
  transition: 0.7s  ease-in-out;
  display: flex;
  border-radius: 4px;
  @media (max-width: 499px) {
    padding: 10px;
    margin-bottom: 0;
  }
  @media (min-width: 500px) {
    justify-content: center;
    align-content: center;
    padding: 20px 20px;
    margin-top: 30px;
    margin-bottom: ${props => props.margin};
    transform: ${props => (props.rotate === 1 ? "none" : "rotate(-90deg)")};
    margin-left: ${props => (props.rotate === 1 ? "40px" : 0)};
    background-color: ${props =>
      props.rotate === 1 ? "rgba(255, 255, 255, 0.9)" : "none"};
    text-align: center;
    width: 110px;
    &:focus {
      box-shadow: none;
    }
  }
`;
export default NavButton;
