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
  z-index: 100;
  font-weight: 300;
  @media (max-width: 499px) {
    display: ${props => props.show};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    left: 0px;
    background-color: rgba(255, 255, 255, 0.9);
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
  @media (min-width: 500px) {
    display: ${props => props.show};
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    position: absolute;
    top: 45px;
    left: -18px;
    animation: 1s ease-out 0s 1 slideInFromTop;
  }
`;

export default NavBar;
