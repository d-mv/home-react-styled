import styled from "styled-components";

const NavButton = styled.button`
  outline: none;
  font-family: Rubik;
  font-weight: 300;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 20px;
  transition: 0.7s ease;
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
    transform: rotate(-90deg);
    text-align: center;
    width: 110px;
    &:hover {
      transform: none;
      margin-left: 40px;
      background-color: rgba(255, 255, 255, 0.9);
    }
    &:focus {
      box-shadow: none;
    }
  }
`;
export default NavButton;
