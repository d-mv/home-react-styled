import styled from "styled-components";

const NavBar = styled.nav`
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  position: absolute;
  top: 45px;
  flex-direction: column;
  z-index: 100;
  font-weight: 300;
  @media (max-width: 499px) {
    display: ${props => props.show};
    left: 0px;
    background-color: rgba(255, 255, 255, 0.9);
    animation: 1s ease-out 0s 1 slideInFromTop;
    top: 45px;
  }
  @media (min-width: 500px) {
    top: 25px;
    display: ${props => props.show};
    justify-content: space-between;
    align-content: center;
    left: -30px;
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
`;

export default NavBar;
